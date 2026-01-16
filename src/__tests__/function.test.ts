import { debounce, throttle, once, memoize, curry } from '../function';

describe('Function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('debounce', () => {
    it('should debounce function calls', () => {
      const func = jest.fn();
      const debounced = debounce(func, 100);

      debounced();
      debounced();
      debounced();

      expect(func).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    it('should throttle function calls', () => {
      const func = jest.fn();
      const throttled = throttle(func, 100);

      throttled();
      throttled();
      throttled();

      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(2);
    });
  });

  describe('once', () => {
    it('should only call function once', () => {
      const func = jest.fn(() => 'result');
      const onced = once(func);

      expect(onced()).toBe('result');
      expect(onced()).toBe('result');
      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('memoize', () => {
    it('should cache function results', () => {
      const func = jest.fn((x: number) => x * 2);
      const memoized = memoize(func);

      expect(memoized(2)).toBe(4);
      expect(memoized(2)).toBe(4);
      expect(func).toHaveBeenCalledTimes(1);

      expect(memoized(3)).toBe(6);
      expect(func).toHaveBeenCalledTimes(2);
    });
  });

  describe('curry', () => {
    it('should curry function', () => {
      const add = (a: number, b: number, c: number) => a + b + c;
      const curried = curry(add);

      expect(curried(1)(2)(3)).toBe(6);
      expect(curried(1, 2)(3)).toBe(6);
      expect(curried(1)(2, 3)).toBe(6);
    });
  });
});
