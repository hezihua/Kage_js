import {
  cloneDeep,
  get,
  set,
  merge,
  pick,
  omit,
  keys,
  values,
  mapValues,
} from '../object';

describe('Object', () => {
  describe('cloneDeep', () => {
    it('should deep clone objects', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = cloneDeep(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });

    it('should clone arrays', () => {
      const arr = [1, [2, 3]];
      const cloned = cloneDeep(arr);
      expect(cloned).toEqual(arr);
      expect(cloned).not.toBe(arr);
    });
  });

  describe('get', () => {
    const obj = { a: { b: { c: 3 } } };

    it('should get nested values', () => {
      expect(get(obj, 'a.b.c')).toBe(3);
      expect(get(obj, ['a', 'b', 'c'])).toBe(3);
    });

    it('should return default value for missing paths', () => {
      expect(get(obj, 'a.b.x', 'default')).toBe('default');
    });
  });

  describe('set', () => {
    it('should set nested values', () => {
      const obj = {};
      set(obj, 'a.b.c', 3);
      expect(obj).toEqual({ a: { b: { c: 3 } } });
    });
  });

  describe('merge', () => {
    it('should merge objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      const result = merge(obj1, obj2);
      expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
    });
  });

  describe('pick', () => {
    it('should pick specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });
  });

  describe('omit', () => {
    it('should omit specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
    });
  });

  describe('keys', () => {
    it('should return object keys', () => {
      expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    });
  });

  describe('values', () => {
    it('should return object values', () => {
      expect(values({ a: 1, b: 2 })).toEqual([1, 2]);
    });
  });

  describe('mapValues', () => {
    it('should map object values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = mapValues(obj, (v) => v * 2);
      expect(result).toEqual({ a: 2, b: 4, c: 6 });
    });
  });
});
