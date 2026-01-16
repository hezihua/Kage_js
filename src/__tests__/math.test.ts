import { range, random, clamp, ceil, floor, round, mean, max, min } from '../math';

describe('Math', () => {
  describe('range', () => {
    it('should generate number ranges', () => {
      expect(range(5)).toEqual([0, 1, 2, 3, 4]);
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
    });
  });

  describe('random', () => {
    it('should generate random numbers', () => {
      const num = random(1, 10);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  describe('clamp', () => {
    it('should clamp numbers to range', () => {
      expect(clamp(5, 1, 10)).toBe(5);
      expect(clamp(0, 1, 10)).toBe(1);
      expect(clamp(15, 1, 10)).toBe(10);
    });
  });

  describe('ceil', () => {
    it('should round up with precision', () => {
      expect(ceil(4.006)).toBe(5);
      expect(ceil(4.006, 2)).toBe(4.01);
    });
  });

  describe('floor', () => {
    it('should round down with precision', () => {
      expect(floor(4.996)).toBe(4);
      expect(floor(4.996, 2)).toBe(4.99);
    });
  });

  describe('round', () => {
    it('should round with precision', () => {
      expect(round(4.006)).toBe(4);
      expect(round(4.006, 2)).toBe(4.01);
    });
  });

  describe('mean', () => {
    it('should calculate average', () => {
      expect(mean([1, 2, 3, 4, 5])).toBe(3);
      expect(mean([])).toBe(0);
    });
  });

  describe('max', () => {
    it('should find maximum value', () => {
      expect(max([1, 5, 3, 2])).toBe(5);
      expect(max([])).toBeUndefined();
    });
  });

  describe('min', () => {
    it('should find minimum value', () => {
      expect(min([3, 1, 5, 2])).toBe(1);
      expect(min([])).toBeUndefined();
    });
  });
});
