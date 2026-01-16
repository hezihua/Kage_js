/**
 * 语言检查模块 - 提供类型判断和检查功能
 * @module Lang
 */

/**
 * 检查值是否为 null 或 undefined
 * @category Lang
 * @param value - 要检查的值
 * @returns 如果值为 null 或 undefined 返回 true，否则返回 false
 * @example
 * ```typescript
 * isNil(null)      // => true
 * isNil(undefined) // => true
 * isNil(0)         // => false
 * isNil('')        // => false
 * ```
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * 检查值是否为数组
 * @category Lang
 * @param value - 要检查的值
 * @returns 如果值为数组返回 true，否则返回 false
 * @example
 * ```typescript
 * isArray([1, 2, 3]) // => true
 * isArray({})        // => false
 * ```
 */
export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

/**
 * 检查值是否为对象（不包括数组和 null）
 * @category Lang
 * @param value - 要检查的值
 * @returns 如果值为对象返回 true，否则返回 false
 * @example
 * ```typescript
 * isObject({})     // => true
 * isObject([])     // => false
 * isObject(null)   // => false
 * ```
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * 检查值是否为函数
 * @category Lang
 * @param value - 要检查的值
 * @returns 如果值为函数返回 true，否则返回 false
 * @example
 * ```typescript
 * isFunction(() => {}) // => true
 * isFunction({})       // => false
 * ```
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * 检查值是否为字符串
 * @category Lang
 * @param value - 要检查的值
 * @returns 如果值为字符串返回 true，否则返回 false
 * @example
 * ```typescript
 * isString('hello') // => true
 * isString(123)     // => false
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * 检查值是否为数字（不包括 NaN）
 * @category Lang
 * @param value - 要检查的值
 * @returns 如果值为有效数字返回 true，否则返回 false
 * @example
 * ```typescript
 * isNumber(123)  // => true
 * isNumber(NaN)  // => false
 * isNumber('123')// => false
 * ```
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * 检查值是否为布尔值
 * @category Lang
 * @param value - 要检查的值
 * @returns 如果值为布尔值返回 true，否则返回 false
 * @example
 * ```typescript
 * isBoolean(true)  // => true
 * isBoolean(false) // => true
 * isBoolean(1)     // => false
 * ```
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * 检查对象是否为空
 * 
 * 对于不同类型的值：
 * - null/undefined: 返回 true
 * - 数组/字符串: 长度为 0 时返回 true
 * - 对象: 没有可枚举属性时返回 true
 * 
 * @category Lang
 * @param value - 要检查的值
 * @returns 如果值为空返回 true，否则返回 false
 * @example
 * ```typescript
 * isEmpty(null)      // => true
 * isEmpty([])        // => true
 * isEmpty('')        // => true
 * isEmpty({})        // => true
 * isEmpty([1, 2, 3]) // => false
 * isEmpty('hello')   // => false
 * ```
 */
export function isEmpty(value: unknown): boolean {
  if (isNil(value)) return true;
  if (isArray(value) || isString(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
}
