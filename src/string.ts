/**
 * 转换为大写
 */
export function upperCase(str: string): string {
  return str.toUpperCase();
}

/**
 * 转换为小写
 */
export function lowerCase(str: string): string {
  return str.toLowerCase();
}

/**
 * 首字母大写
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * 驼峰命名
 */
export function camelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, (chr) => chr.toLowerCase());
}

/**
 * 蛇形命名
 */
export function snakeCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .toLowerCase();
}

/**
 * 短横线命名
 */
export function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

/**
 * 去除字符串两端空格
 */
export function trim(str: string, chars?: string): string {
  if (chars === undefined) {
    return str.trim();
  }
  const pattern = new RegExp(`^[${chars}]+|[${chars}]+$`, 'g');
  return str.replace(pattern, '');
}

/**
 * 去除字符串开头空格
 */
export function trimStart(str: string, chars?: string): string {
  if (chars === undefined) {
    return str.trimStart();
  }
  const pattern = new RegExp(`^[${chars}]+`, 'g');
  return str.replace(pattern, '');
}

/**
 * 去除字符串结尾空格
 */
export function trimEnd(str: string, chars?: string): string {
  if (chars === undefined) {
    return str.trimEnd();
  }
  const pattern = new RegExp(`[${chars}]+$`, 'g');
  return str.replace(pattern, '');
}

/**
 * 字符串重复
 */
export function repeat(str: string, n: number): string {
  return str.repeat(n);
}

/**
 * 字符串填充（左侧）
 */
export function padStart(str: string, length: number, chars = ' '): string {
  return str.padStart(length, chars);
}

/**
 * 字符串填充（右侧）
 */
export function padEnd(str: string, length: number, chars = ' '): string {
  return str.padEnd(length, chars);
}

/**
 * 截断字符串
 */
export function truncate(
  str: string,
  options: { length?: number; omission?: string } = {}
): string {
  const { length = 30, omission = '...' } = options;
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - omission.length) + omission;
}

/**
 * 字符串分割为数组
 */
export function words(str: string): string[] {
  return str.match(/[A-Z]?[a-z]+|[A-Z]+(?![a-z])|[0-9]+/g) || [];
}

/**
 * 字符串替换
 */
export function replace(
  str: string,
  pattern: string | RegExp,
  replacement: string
): string {
  return str.replace(pattern, replacement);
}

/**
 * 检查字符串是否以指定字符串开头
 */
export function startsWith(
  str: string,
  target: string,
  position = 0
): boolean {
  return str.startsWith(target, position);
}

/**
 * 检查字符串是否以指定字符串结尾
 */
export function endsWith(
  str: string,
  target: string,
  position?: number
): boolean {
  return str.endsWith(target, position);
}
