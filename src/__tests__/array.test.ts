import {
  head,
  last,
  tail,
  uniq,
  chunk,
  compact,
  difference,
  intersection,
  sum,
  flatten,
  flattenDeep,
} from '../array';

describe('Array', () => {
  describe('head', () => {
    it('should return the first element', () => {
      expect(head([1, 2, 3])).toBe(1);
      expect(head([])).toBeUndefined();
    });
  });

  describe('last', () => {
    it('should return the last element', () => {
      expect(last([1, 2, 3])).toBe(3);
      expect(last([])).toBeUndefined();
    });
  });

  describe('tail', () => {
    it('should return all elements except the first', () => {
      expect(tail([1, 2, 3])).toEqual([2, 3]);
      expect(tail([1])).toEqual([]);
    });
  });

  describe('uniq', () => {
    it('should remove duplicates', () => {
      expect(uniq([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(uniq(['a', 'b', 'a'])).toEqual(['a', 'b']);
    });
  });

  describe('chunk', () => {
    it('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });
  });

  describe('compact', () => {
    it('should remove falsy values', () => {
      expect(compact([0, 1, false, 2, '', 3, null, undefined])).toEqual([
        1, 2, 3,
      ]);
    });
  });

  describe('difference', () => {
    it('should return array difference', () => {
      expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
      expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
    });
  });

  describe('intersection', () => {
    it('should return array intersection', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });
  });

  describe('sum', () => {
    it('should calculate sum of numbers', () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
      expect(sum([])).toBe(0);
    });
  });

  describe('flatten', () => {
    it('should flatten array one level deep', () => {
      expect(flatten([1, [2, 3], [4]])).toEqual([1, 2, 3, 4]);
    });
  });

  describe('flattenDeep', () => {
    it('should recursively flatten array', () => {
      expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
    });
  });
});
