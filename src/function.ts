/**
 * 创建防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): T & { cancel: () => void } {
  const { leading = false, trailing = true } = options;
  let timeoutId: NodeJS.Timeout | null = null;
  let lastArgs: any[] | null = null;
  let lastThis: any = null;

  const debounced = function (this: any, ...args: any[]) {
    lastArgs = args;
    lastThis = this;

    const invokeFunc = () => {
      if (trailing && lastArgs) {
        func.apply(lastThis, lastArgs);
      }
      timeoutId = null;
      lastArgs = null;
      lastThis = null;
    };

    const shouldCallNow = leading && !timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(invokeFunc, wait);

    if (shouldCallNow) {
      func.apply(this, args);
    }
  } as T & { cancel: () => void };

  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      lastArgs = null;
      lastThis = null;
    }
  };

  return debounced;
}

/**
 * 创建节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): T & { cancel: () => void } {
  const { leading = true, trailing = true } = options;
  let timeoutId: NodeJS.Timeout | null = null;
  let lastArgs: any[] | null = null;
  let lastThis: any = null;
  let lastCallTime = 0;

  const throttled = function (this: any, ...args: any[]) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;

    lastArgs = args;
    lastThis = this;

    const invokeFunc = () => {
      lastCallTime = Date.now();
      timeoutId = null;
      if (lastArgs) {
        func.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
      }
    };

    const shouldCallNow = leading && timeSinceLastCall >= wait;

    if (shouldCallNow) {
      invokeFunc();
      return;
    }

    if (!timeoutId && trailing) {
      const remainingTime = wait - timeSinceLastCall;
      timeoutId = setTimeout(invokeFunc, remainingTime);
    }
  } as T & { cancel: () => void };

  throttled.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      lastArgs = null;
      lastThis = null;
    }
  };

  return throttled;
}

/**
 * 创建只执行一次的函数
 */
export function once<T extends (...args: any[]) => any>(func: T): T {
  let called = false;
  let result: any;

  return function (this: any, ...args: any[]) {
    if (!called) {
      called = true;
      result = func.apply(this, args);
    }
    return result;
  } as T;
}

/**
 * 延迟执行函数
 */
export function delay(func: (...args: any[]) => any, wait: number, ...args: any[]): NodeJS.Timeout {
  return setTimeout(() => func(...args), wait);
}

/**
 * 创建记忆化函数
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => any
): T & { cache: Map<any, any> } {
  const cache = new Map();

  const memoized = function (this: any, ...args: any[]) {
    const key = resolver ? resolver(...(args as Parameters<T>)) : args[0];
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  } as T & { cache: Map<any, any> };

  memoized.cache = cache;
  return memoized;
}

/**
 * 柯里化函数
 */
export function curry<T extends (...args: any[]) => any>(
  func: T,
  arity: number = func.length
): any {
  return function curried(this: any, ...args: any[]): any {
    if (args.length >= arity) {
      return func.apply(this, args);
    }
    return function (this: any, ...nextArgs: any[]) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

/**
 * 函数组合
 */
export function compose<T>(...funcs: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => funcs.reduceRight((acc, func) => func(acc), arg);
}

/**
 * 管道函数
 */
export function pipe<T>(...funcs: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => funcs.reduce((acc, func) => func(acc), arg);
}
