# 更新日志

所有值得注意的项目变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [1.0.0] - 2024-01-16

### 新增

#### 语言检查模块 (Lang)
- `isNil` - 检查是否为 null 或 undefined
- `isArray` - 检查是否为数组
- `isObject` - 检查是否为对象
- `isFunction` - 检查是否为函数
- `isString` - 检查是否为字符串
- `isNumber` - 检查是否为数字
- `isBoolean` - 检查是否为布尔值
- `isEmpty` - 检查是否为空

#### 数组操作模块 (Array)
- `head` - 获取第一个元素
- `last` - 获取最后一个元素
- `tail` - 获取除第一个元素外的所有元素
- `slice` - 数组切片
- `uniq` - 数组去重
- `uniqBy` - 根据迭代函数去重
- `flatten` - 浅层扁平化
- `flattenDeep` - 深度扁平化
- `chunk` - 分块数组
- `compact` - 过滤假值
- `difference` - 数组差集
- `intersection` - 数组交集
- `sum` - 数组求和
- `sumBy` - 根据迭代函数求和
- `shuffle` - 随机打乱数组
- `sample` - 随机取一个元素
- `sampleSize` - 随机取多个元素

#### 对象操作模块 (Object)
- `cloneDeep` - 深度克隆
- `get` - 获取嵌套属性
- `set` - 设置嵌套属性
- `merge` - 合并对象
- `pick` - 选取属性
- `omit` - 排除属性
- `keys` - 获取所有键
- `values` - 获取所有值
- `entries` - 获取键值对
- `invert` - 反转键值
- `mapValues` - 映射对象值

#### 字符串操作模块 (String)
- `upperCase` - 转换为大写
- `lowerCase` - 转换为小写
- `capitalize` - 首字母大写
- `camelCase` - 驼峰命名
- `snakeCase` - 蛇形命名
- `kebabCase` - 短横线命名
- `trim` - 去除空格
- `trimStart` - 去除开头空格
- `trimEnd` - 去除结尾空格
- `repeat` - 重复字符串
- `padStart` - 左侧填充
- `padEnd` - 右侧填充
- `truncate` - 截断字符串
- `words` - 分词
- `replace` - 字符串替换
- `startsWith` - 检查是否以指定字符串开头
- `endsWith` - 检查是否以指定字符串结尾

#### 函数工具模块 (Function)
- `debounce` - 创建防抖函数
- `throttle` - 创建节流函数
- `once` - 创建只执行一次的函数
- `delay` - 延迟执行函数
- `memoize` - 创建记忆化函数
- `curry` - 柯里化函数
- `compose` - 函数组合（从右到左）
- `pipe` - 管道函数（从左到右）

#### 数学运算模块 (Math)
- `range` - 生成数字范围
- `random` - 生成随机数
- `clamp` - 限制数字范围
- `ceil` - 向上取整
- `floor` - 向下取整
- `round` - 四舍五入
- `mean` - 求平均值
- `max` - 求最大值
- `min` - 求最小值
- `maxBy` - 根据迭代函数求最大值
- `minBy` - 根据迭代函数求最小值

### 技术栈
- TypeScript 5.3+
- Jest 测试框架
- Rollup 打包工具
- ESLint + Prettier 代码规范

### 文档
- 完整的 README 文档
- 详细的使用指南 (GUIDE.md)
- 贡献指南 (CONTRIBUTING.md)
- 丰富的示例代码 (examples.ts)

---

## [未发布]

### 计划中的功能
- 集合操作模块
- 日期时间工具
- URL 工具
- 正则表达式工具
- Promise 工具
- 类型守卫增强

---

**注意**: 版本号遵循语义化版本规范 (SemVer)
- 主版本号 (MAJOR): 不兼容的 API 修改
- 次版本号 (MINOR): 向下兼容的功能性新增
- 修订号 (PATCH): 向下兼容的问题修正
