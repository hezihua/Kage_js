# Kage.js 快速参考

快速查找所有可用函数的简明参考指南。

## 📑 目录

- [Lang](#lang) - 类型检查
- [Array](#array) - 数组操作
- [Object](#object) - 对象操作
- [String](#string) - 字符串操作
- [Function](#function) - 函数工具
- [Math](#math) - 数学运算

---

## Lang

```typescript
isNil(value)                    // 是否为 null/undefined
isArray(value)                  // 是否为数组
isObject(value)                 // 是否为对象
isFunction(value)               // 是否为函数
isString(value)                 // 是否为字符串
isNumber(value)                 // 是否为数字
isBoolean(value)                // 是否为布尔值
isEmpty(value)                  // 是否为空
```

## Array

```typescript
head(array)                     // 第一个元素
last(array)                     // 最后一个元素
tail(array)                     // 除第一个外的所有元素
slice(array, start, end)        // 切片

uniq(array)                     // 去重
uniqBy(array, iteratee)         // 根据函数去重

flatten(array)                  // 浅层扁平化
flattenDeep(array)              // 深度扁平化

chunk(array, size)              // 分块
compact(array)                  // 移除假值

difference(array, values)       // 差集
intersection(array, ...arrays)  // 交集

sum(array)                      // 求和
sumBy(array, iteratee)          // 根据函数求和

shuffle(array)                  // 随机打乱
sample(array)                   // 随机取一个
sampleSize(array, n)            // 随机取 n 个
```

## Object

```typescript
cloneDeep(value)                // 深拷贝
get(obj, path, defaultValue)    // 获取嵌套属性
set(obj, path, value)           // 设置嵌套属性

merge(target, ...sources)       // 合并对象
pick(obj, keys)                 // 选取属性
omit(obj, keys)                 // 排除属性

keys(obj)                       // 所有键
values(obj)                     // 所有值
entries(obj)                    // 键值对数组

invert(obj)                     // 反转键值
mapValues(obj, iteratee)        // 映射值
```

## String

```typescript
upperCase(str)                  // 转大写
lowerCase(str)                  // 转小写
capitalize(str)                 // 首字母大写

camelCase(str)                  // 驼峰命名
snakeCase(str)                  // 蛇形命名
kebabCase(str)                  // 短横线命名

trim(str, chars?)               // 去除空格
trimStart(str, chars?)          // 去除开头空格
trimEnd(str, chars?)            // 去除结尾空格

repeat(str, n)                  // 重复字符串
padStart(str, length, chars)    // 左侧填充
padEnd(str, length, chars)      // 右侧填充

truncate(str, options)          // 截断字符串
words(str)                      // 分词
replace(str, pattern, repl)     // 替换

startsWith(str, target, pos?)   // 检查开头
endsWith(str, target, pos?)     // 检查结尾
```

## Function

```typescript
debounce(func, wait, options?)  // 防抖
throttle(func, wait, options?)  // 节流
once(func)                      // 只执行一次
delay(func, wait, ...args)      // 延迟执行

memoize(func, resolver?)        // 记忆化
curry(func, arity?)             // 柯里化

compose(...funcs)               // 函数组合（右到左）
pipe(...funcs)                  // 管道（左到右）
```

## Math

```typescript
range(start, end?, step?)       // 生成数字范围
random(min, max, floating?)     // 随机数
clamp(number, min, max)         // 限制范围

ceil(number, precision?)        // 向上取整
floor(number, precision?)       // 向下取整
round(number, precision?)       // 四舍五入

mean(array)                     // 平均值
max(array)                      // 最大值
min(array)                      // 最小值

maxBy(array, iteratee)          // 根据函数求最大值
minBy(array, iteratee)          // 根据函数求最小值
```

---

## 💡 常用组合

### 数据清洗
```typescript
const cleanData = (data) => compact(uniq(data));
```

### 深拷贝并修改
```typescript
const updated = set(cloneDeep(obj), 'path.to.value', newValue);
```

### 安全的属性访问
```typescript
const value = get(obj, 'deeply.nested.value', 'default');
```

### 性能优化
```typescript
const debouncedSearch = debounce(searchFn, 300);
const memoizedCalc = memoize(expensiveCalc);
```

### 数据转换
```typescript
const transformed = mapValues(obj, (v) => v * 2);
const picked = pick(obj, ['id', 'name']);
```

### 字符串格式化
```typescript
const formatted = camelCase(kebabCase(str));
const short = truncate(longText, { length: 50 });
```

---

## 📌 提示

1. **按需导入**
   ```typescript
   import { chunk, uniq } from 'wssf-kage-js';
   ```

2. **类型安全**
   ```typescript
   const name = get<string>(user, 'profile.name');
   ```

3. **链式调用**
   ```typescript
   import { pipe } from 'wssf-kage-js';
   const process = pipe(trim, upperCase, (s) => s + '!');
   ```

4. **默认值**
   ```typescript
   get(obj, 'missing.path', 'default')
   ```

---

更多详情请查看 [完整文档](./GUIDE.md)
