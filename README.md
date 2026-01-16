# Kage.js

一个现代化的 JavaScript/TypeScript 工具库，类似于 lodash，提供了丰富的数组、对象、字符串、函数和数学运算工具方法。

## ✨ 特性

- 🚀 **完整的 TypeScript 支持** - 提供完整的类型定义
- 📦 **模块化设计** - 支持按需导入，减小打包体积
- 🧪 **完善的测试** - 100% 测试覆盖率
- 🔧 **零依赖** - 不依赖任何第三方库
- 📝 **详细的文档** - 每个函数都有清晰的注释

## 📦 安装

```bash
npm install kage-js
```

或使用 yarn:

```bash
yarn add kage-js
```

## 🚀 快速开始

```typescript
import { chunk, camelCase, debounce, range } from 'kage-js';

// 数组操作
chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]

// 字符串操作
camelCase('hello-world');
// => 'helloWorld'

// 函数工具
const debouncedFn = debounce(() => console.log('执行'), 1000);

// 数学运算
range(5);
// => [0, 1, 2, 3, 4]
```

## 📚 API 文档

### 语言检查 (Lang)

判断数据类型的工具函数。

```typescript
import { isNil, isArray, isObject, isEmpty } from 'kage-js';

isNil(null);           // => true
isArray([1, 2, 3]);    // => true
isObject({});          // => true
isEmpty([]);           // => true
```

**可用方法:**
- `isNil(value)` - 检查是否为 null 或 undefined
- `isArray(value)` - 检查是否为数组
- `isObject(value)` - 检查是否为对象
- `isFunction(value)` - 检查是否为函数
- `isString(value)` - 检查是否为字符串
- `isNumber(value)` - 检查是否为数字
- `isBoolean(value)` - 检查是否为布尔值
- `isEmpty(value)` - 检查是否为空

### 数组操作 (Array)

强大的数组处理工具。

```typescript
import { chunk, uniq, flatten, shuffle } from 'kage-js';

// 分块
chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]

// 去重
uniq([1, 2, 2, 3, 3]);
// => [1, 2, 3]

// 扁平化
flatten([1, [2, 3], [4]]);
// => [1, 2, 3, 4]

// 随机打乱
shuffle([1, 2, 3, 4, 5]);
// => [3, 1, 5, 2, 4] (随机顺序)
```

**可用方法:**
- `head(array)` - 获取第一个元素
- `last(array)` - 获取最后一个元素
- `tail(array)` - 获取除第一个元素外的所有元素
- `uniq(array)` - 数组去重
- `uniqBy(array, iteratee)` - 根据迭代函数去重
- `flatten(array)` - 浅层扁平化
- `flattenDeep(array)` - 深度扁平化
- `chunk(array, size)` - 分块数组
- `compact(array)` - 过滤假值
- `difference(array, values)` - 数组差集
- `intersection(array, ...arrays)` - 数组交集
- `sum(array)` - 数组求和
- `sumBy(array, iteratee)` - 根据迭代函数求和
- `shuffle(array)` - 随机打乱
- `sample(array)` - 随机取一个元素
- `sampleSize(array, n)` - 随机取 n 个元素

### 对象操作 (Object)

灵活的对象处理方法。

```typescript
import { get, set, merge, pick, omit } from 'kage-js';

const obj = { a: { b: { c: 3 } } };

// 获取嵌套属性
get(obj, 'a.b.c');
// => 3

// 设置嵌套属性
set(obj, 'a.b.d', 4);
// => { a: { b: { c: 3, d: 4 } } }

// 合并对象
merge({ a: 1 }, { b: 2 });
// => { a: 1, b: 2 }

// 选取属性
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);
// => { a: 1, c: 3 }

// 排除属性
omit({ a: 1, b: 2, c: 3 }, ['b']);
// => { a: 1, c: 3 }
```

**可用方法:**
- `cloneDeep(value)` - 深度克隆
- `get(obj, path, defaultValue)` - 获取嵌套属性
- `set(obj, path, value)` - 设置嵌套属性
- `merge(target, ...sources)` - 合并对象
- `pick(obj, keys)` - 选取属性
- `omit(obj, keys)` - 排除属性
- `keys(obj)` - 获取所有键
- `values(obj)` - 获取所有值
- `entries(obj)` - 获取键值对
- `invert(obj)` - 反转键值
- `mapValues(obj, iteratee)` - 映射对象值

### 字符串操作 (String)

丰富的字符串处理工具。

```typescript
import { camelCase, snakeCase, kebabCase, truncate } from 'kage-js';

// 驼峰命名
camelCase('hello-world');
// => 'helloWorld'

// 蛇形命名
snakeCase('helloWorld');
// => 'hello_world'

// 短横线命名
kebabCase('helloWorld');
// => 'hello-world'

// 截断字符串
truncate('hello world', { length: 8 });
// => 'hello...'
```

**可用方法:**
- `capitalize(str)` - 首字母大写
- `camelCase(str)` - 驼峰命名
- `snakeCase(str)` - 蛇形命名
- `kebabCase(str)` - 短横线命名
- `trim(str, chars)` - 去除空格
- `truncate(str, options)` - 截断字符串
- `words(str)` - 分词
- `repeat(str, n)` - 重复字符串
- `padStart(str, length, chars)` - 左侧填充
- `padEnd(str, length, chars)` - 右侧填充

### 函数工具 (Function)

高阶函数和函数式编程工具。

```typescript
import { debounce, throttle, once, memoize, curry } from 'kage-js';

// 防抖
const debouncedFn = debounce(() => {
  console.log('执行');
}, 1000);

// 节流
const throttledFn = throttle(() => {
  console.log('执行');
}, 1000);

// 只执行一次
const onceFn = once(() => {
  console.log('只执行一次');
});

// 记忆化
const memoizedFn = memoize((x) => x * 2);

// 柯里化
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
curriedAdd(1)(2)(3); // => 6
```

**可用方法:**
- `debounce(func, wait, options)` - 防抖
- `throttle(func, wait, options)` - 节流
- `once(func)` - 只执行一次
- `delay(func, wait, ...args)` - 延迟执行
- `memoize(func, resolver)` - 记忆化
- `curry(func, arity)` - 柯里化
- `compose(...funcs)` - 函数组合
- `pipe(...funcs)` - 管道函数

### 数学运算 (Math)

常用的数学计算工具。

```typescript
import { range, random, clamp, mean, max, min } from 'kage-js';

// 生成数字范围
range(5);
// => [0, 1, 2, 3, 4]

range(1, 5);
// => [1, 2, 3, 4]

range(0, 10, 2);
// => [0, 2, 4, 6, 8]

// 随机数
random(1, 10);
// => 7 (随机)

// 限制范围
clamp(15, 1, 10);
// => 10

// 求平均值
mean([1, 2, 3, 4, 5]);
// => 3
```

**可用方法:**
- `range(start, end, step)` - 生成数字范围
- `random(min, max, floating)` - 生成随机数
- `clamp(number, min, max)` - 限制数字范围
- `ceil(number, precision)` - 向上取整
- `floor(number, precision)` - 向下取整
- `round(number, precision)` - 四舍五入
- `mean(array)` - 求平均值
- `max(array)` - 求最大值
- `min(array)` - 求最小值
- `maxBy(array, iteratee)` - 根据迭代函数求最大值
- `minBy(array, iteratee)` - 根据迭代函数求最小值

## 🧪 测试

```bash
# 运行测试
npm test

# 观察模式
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

## 📖 生成 API 文档

本项目使用 TypeDoc 从源代码自动生成 API 文档：

```bash
# 生成文档
npm run docs

# 观察模式（开发时使用）
npm run docs:watch
```

生成的文档位于 `docs/` 目录，在浏览器中打开 `docs/index.html` 即可查看。

详细的文档编写指南请参考 [DOCS_GUIDE.md](./DOCS_GUIDE.md)。

## 🔨 构建

```bash
npm run build
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📝 更新日志

### 1.0.0 (2024-01-16)
- 🎉 首次发布
- ✨ 支持数组、对象、字符串、函数和数学运算工具
- 📝 完善的 TypeScript 类型定义
- 🧪 完整的测试覆盖
