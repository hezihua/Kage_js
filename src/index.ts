// 语言检查
export {
  isNil,
  isArray,
  isObject,
  isFunction,
  isString,
  isNumber,
  isBoolean,
  isEmpty,
} from './lang';

// 数组操作
export {
  slice,
  head,
  last,
  tail,
  uniq,
  uniqBy,
  flatten,
  flattenDeep,
  chunk,
  compact,
  difference,
  intersection,
  sum,
  sumBy,
  shuffle,
  sample,
  sampleSize,
} from './array';

// 对象操作
export {
  cloneDeep,
  get,
  set,
  merge,
  pick,
  omit,
  keys,
  values,
  entries,
  invert,
  mapValues,
} from './object';

// 字符串操作
export {
  upperCase,
  lowerCase,
  capitalize,
  camelCase,
  snakeCase,
  kebabCase,
  trim,
  trimStart,
  trimEnd,
  repeat,
  padStart,
  padEnd,
  truncate,
  words,
  replace,
  startsWith,
  endsWith,
} from './string';

// 函数操作
export {
  debounce,
  throttle,
  once,
  delay,
  memoize,
  curry,
  compose,
  pipe,
} from './function';

// 数学运算
export {
  range,
  random,
  clamp,
  ceil,
  floor,
  round,
  mean,
  max,
  min,
  maxBy,
  minBy,
} from './math';
