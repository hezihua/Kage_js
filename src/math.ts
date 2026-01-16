/**
 * 生成指定范围内的数字数组
 */
export function range(start: number, end?: number, step = 1): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result: number[] = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
}

/**
 * 生成随机数
 */
export function random(min: number, max: number, floating = false): number {
  if (floating) {
    return Math.random() * (max - min) + min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 限制数字在指定范围内
 */
export function clamp(number: number, min: number, max: number): number {
  return Math.min(Math.max(number, min), max);
}

/**
 * 向上取整
 */
export function ceil(number: number, precision = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.ceil(number * multiplier) / multiplier;
}

/**
 * 向下取整
 */
export function floor(number: number, precision = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.floor(number * multiplier) / multiplier;
}

/**
 * 四舍五入
 */
export function round(number: number, precision = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.round(number * multiplier) / multiplier;
}

/**
 * 求平均值
 */
export function mean(array: number[]): number {
  if (array.length === 0) return 0;
  return array.reduce((acc, val) => acc + val, 0) / array.length;
}

/**
 * 求最大值
 */
export function max(array: number[]): number | undefined {
  if (array.length === 0) return undefined;
  return Math.max(...array);
}

/**
 * 求最小值
 */
export function min(array: number[]): number | undefined {
  if (array.length === 0) return undefined;
  return Math.min(...array);
}

/**
 * 根据迭代函数求最大值
 */
export function maxBy<T>(
  array: T[],
  iteratee: (value: T) => number
): T | undefined {
  if (array.length === 0) return undefined;
  let maxValue = iteratee(array[0]);
  let maxItem = array[0];
  for (let i = 1; i < array.length; i++) {
    const value = iteratee(array[i]);
    if (value > maxValue) {
      maxValue = value;
      maxItem = array[i];
    }
  }
  return maxItem;
}

/**
 * 根据迭代函数求最小值
 */
export function minBy<T>(
  array: T[],
  iteratee: (value: T) => number
): T | undefined {
  if (array.length === 0) return undefined;
  let minValue = iteratee(array[0]);
  let minItem = array[0];
  for (let i = 1; i < array.length; i++) {
    const value = iteratee(array[i]);
    if (value < minValue) {
      minValue = value;
      minItem = array[i];
    }
  }
  return minItem;
}
