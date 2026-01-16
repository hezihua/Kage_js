/**
 * 数组操作模块 - 提供强大的数组处理工具
 * @module Array
 */

/**
 * 创建数组切片，从 start 到 end（不包含 end）
 * @category Array
 * @param array - 源数组
 * @param start - 起始索引，默认为 0
 * @param end - 结束索引（不包含），默认为数组长度
 * @returns 切片后的新数组
 * @example
 * ```typescript
 * slice([1, 2, 3, 4], 1, 3) // => [2, 3]
 * slice([1, 2, 3, 4], 2)    // => [3, 4]
 * ```
 */
export function slice<T>(array: T[], start = 0, end?: number): T[] {
  return array.slice(start, end);
}

/**
 * 返回数组的第一个元素
 * @category Array
 * @param array - 源数组
 * @returns 数组的第一个元素，如果数组为空则返回 undefined
 * @example
 * ```typescript
 * head([1, 2, 3]) // => 1
 * head([])        // => undefined
 * ```
 */
export function head<T>(array: T[]): T | undefined {
  return array[0];
}

/**
 * 返回数组的最后一个元素
 * @category Array
 * @param array - 源数组
 * @returns 数组的最后一个元素，如果数组为空则返回 undefined
 * @example
 * ```typescript
 * last([1, 2, 3]) // => 3
 * last([])        // => undefined
 * ```
 */
export function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

/**
 * 返回数组去除第一个元素后的部分
 * @category Array
 * @param array - 源数组
 * @returns 去除第一个元素后的新数组
 * @example
 * ```typescript
 * tail([1, 2, 3]) // => [2, 3]
 * tail([1])       // => []
 * ```
 */
export function tail<T>(array: T[]): T[] {
  return array.slice(1);
}

/**
 * 数组去重，使用 Set 实现
 * @category Array
 * @param array - 源数组
 * @returns 去重后的新数组
 * @example
 * ```typescript
 * uniq([1, 2, 2, 3, 3]) // => [1, 2, 3]
 * uniq(['a', 'b', 'a']) // => ['a', 'b']
 * ```
 */
export function uniq<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * 根据迭代函数的返回值去重
 * @category Array
 * @param array - 源数组
 * @param iteratee - 迭代函数，用于生成唯一标识
 * @returns 去重后的新数组
 * @example
 * ```typescript
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 * 
 * uniqBy([{ id: 1 }, { id: 2 }, { id: 1 }], o => o.id)
 * // => [{ id: 1 }, { id: 2 }]
 * ```
 */
export function uniqBy<T>(array: T[], iteratee: (value: T) => unknown): T[] {
  const seen = new Set();
  return array.filter((item) => {
    const key = iteratee(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

/**
 * 数组扁平化（浅层），将嵌套一层的数组展开
 * @category Array
 * @param array - 源数组
 * @returns 扁平化后的新数组
 * @example
 * ```typescript
 * flatten([1, [2, 3], [4]]) // => [1, 2, 3, 4]
 * ```
 */
export function flatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((acc, val) => {
    return acc.concat(val);
  }, []);
}

/**
 * 深度扁平化，递归展开所有嵌套数组
 * @category Array
 * @param array - 源数组
 * @returns 完全扁平化后的新数组
 * @example
 * ```typescript
 * flattenDeep([1, [2, [3, [4]]]]) // => [1, 2, 3, 4]
 * ```
 */
export function flattenDeep<T>(array: unknown[]): T[] {
  return array.reduce<T[]>((acc, val) => {
    return Array.isArray(val)
      ? acc.concat(flattenDeep(val))
      : acc.concat(val as T);
  }, []);
}

/**
 * 将数组分割成指定大小的块
 * @category Array
 * @param array - 源数组
 * @param size - 每块的大小，默认为 1
 * @returns 分块后的二维数组
 * @example
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 2) // => [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3], 1)       // => [[1], [2], [3]]
 * ```
 */
export function chunk<T>(array: T[], size = 1): T[][] {
  if (size < 1) return [];
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * 过滤掉所有假值（false, null, 0, "", undefined, NaN）
 * @category Array
 * @param array - 源数组
 * @returns 过滤后的新数组
 * @example
 * ```typescript
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 * ```
 */
export function compact<T>(array: (T | null | undefined | false | 0 | '')[]): T[] {
  return array.filter(Boolean) as T[];
}

/**
 * 返回两个数组的差集（在第一个数组中但不在第二个数组中的元素）
 * @category Array
 * @param array - 源数组
 * @param values - 要排除的值数组
 * @returns 差集数组
 * @example
 * ```typescript
 * difference([1, 2, 3, 4], [2, 4])
 * // => [1, 3]
 * ```
 */
export function difference<T>(array: T[], values: T[]): T[] {
  const valuesSet = new Set(values);
  return array.filter((item) => !valuesSet.has(item));
}

/**
 * 返回多个数组的交集（所有数组中都存在的元素）
 * @category Array
 * @param array - 第一个数组
 * @param arrays - 其他数组
 * @returns 交集数组
 * @example
 * ```typescript
 * intersection([1, 2, 3], [2, 3, 4])
 * // => [2, 3]
 * 
 * intersection([1, 2, 3], [2, 3], [3])
 * // => [3]
 * ```
 */
export function intersection<T>(array: T[], ...arrays: T[][]): T[] {
  if (arrays.length === 0) return array;
  const sets = arrays.map((arr) => new Set(arr));
  return array.filter((item) => sets.every((set) => set.has(item)));
}

/**
 * 计算数组中所有数字的总和
 * @category Array
 * @param array - 数字数组
 * @returns 总和
 * @example
 * ```typescript
 * sum([1, 2, 3, 4]) // => 10
 * sum([])           // => 0
 * ```
 */
export function sum(array: number[]): number {
  return array.reduce((acc, val) => acc + val, 0);
}

/**
 * 根据迭代函数的返回值计算总和
 * @category Array
 * @param array - 源数组
 * @param iteratee - 迭代函数，将数组元素转换为数字
 * @returns 总和
 * @example
 * ```typescript
 * sumBy([{ n: 1 }, { n: 2 }], o => o.n)
 * // => 3
 * ```
 */
export function sumBy<T>(array: T[], iteratee: (value: T) => number): number {
  return array.reduce((acc, val) => acc + iteratee(val), 0);
}

/**
 * 随机打乱数组（Fisher-Yates 洗牌算法）
 * @category Array
 * @param array - 源数组
 * @returns 打乱后的新数组
 * @example
 * ```typescript
 * shuffle([1, 2, 3, 4, 5])
 * // => [3, 1, 5, 2, 4] (随机顺序)
 * ```
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * 从数组中随机取一个元素
 * @category Array
 * @param array - 源数组
 * @returns 随机元素，如果数组为空则返回 undefined
 * @example
 * ```typescript
 * sample([1, 2, 3, 4, 5])
 * // => 3 (随机)
 * ```
 */
export function sample<T>(array: T[]): T | undefined {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * 从数组中随机取多个元素
 * @category Array
 * @param array - 源数组
 * @param n - 要取的元素数量
 * @returns 包含随机元素的新数组
 * @example
 * ```typescript
 * sampleSize([1, 2, 3, 4, 5], 3)
 * // => [2, 5, 1] (随机)
 * ```
 */
export function sampleSize<T>(array: T[], n: number): T[] {
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(n, array.length));
}
