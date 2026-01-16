# API 文档生成指南

本项目使用 **TypeDoc** 从 TypeScript 源代码自动生成 API 文档。

## 📖 什么是 TypeDoc？

TypeDoc 是一个 TypeScript 项目的文档生成器，它能够从你的代码注释和类型定义自动生成美观的 API 文档。

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 生成文档

```bash
npm run docs
```

文档将生成在 `docs/` 目录下。

### 3. 查看文档

在浏览器中打开 `docs/index.html` 即可查看生成的 API 文档。

```bash
# 在 Linux/WSL 中
xdg-open docs/index.html

# 在 macOS 中
open docs/index.html

# 在 Windows 中
start docs/index.html
```

### 4. 监视模式（开发时使用）

```bash
npm run docs:watch
```

这会在你修改源代码时自动重新生成文档。

## 📝 编写文档注释

### 基本格式

使用 JSDoc 风格的注释：

```typescript
/**
 * 函数的简短描述
 * 
 * 更详细的说明（可选）
 * 
 * @param paramName - 参数说明
 * @returns 返回值说明
 * @example
 * ```typescript
 * // 使用示例
 * functionName(param)
 * // => result
 * ```
 */
export function functionName(paramName: type): returnType {
  // 实现
}
```

### 推荐的标签

#### @category - 分类

将函数分组到不同的类别：

```typescript
/**
 * 数组去重
 * @category Array
 */
export function uniq<T>(array: T[]): T[] {
  return [...new Set(array)];
}
```

#### @param - 参数说明

描述函数参数：

```typescript
/**
 * @param array - 源数组
 * @param size - 每块的大小
 */
export function chunk<T>(array: T[], size: number): T[][] {
  // ...
}
```

#### @returns - 返回值说明

描述返回值：

```typescript
/**
 * @returns 去重后的新数组
 */
export function uniq<T>(array: T[]): T[] {
  // ...
}
```

#### @example - 示例代码

提供使用示例（非常重要！）：

```typescript
/**
 * @example
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 2)
 * // => [[1, 2], [3, 4], [5]]
 * ```
 */
export function chunk<T>(array: T[], size: number): T[][] {
  // ...
}
```

#### @module - 模块说明

在文件顶部描述整个模块：

```typescript
/**
 * 数组操作模块 - 提供强大的数组处理工具
 * @module Array
 */

// 后面是各个函数...
```

### 完整示例

```typescript
/**
 * 数组操作模块
 * @module Array
 */

/**
 * 将数组分割成指定大小的块
 * 
 * 这个函数会将一个数组分割成多个小数组，每个小数组包含指定数量的元素。
 * 如果数组无法均匀分割，最后一块将包含剩余的元素。
 * 
 * @category Array
 * @param array - 要分割的源数组
 * @param size - 每块的大小，必须大于 0，默认为 1
 * @returns 分块后的二维数组
 * 
 * @example
 * 基本用法：
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 2)
 * // => [[1, 2], [3, 4], [5]]
 * ```
 * 
 * @example
 * 不能均匀分割的情况：
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 3)
 * // => [[1, 2, 3], [4, 5]]
 * ```
 * 
 * @example
 * 默认大小为 1：
 * ```typescript
 * chunk([1, 2, 3])
 * // => [[1], [2], [3]]
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
```

## ⚙️ TypeDoc 配置

配置文件：`typedoc.json`

```json
{
  "$schema": "https://typedoc.org/schema.json",
  "entryPoints": ["src/index.ts"],
  "out": "docs",
  "exclude": ["**/*+(test|spec).ts", "node_modules/**/*"],
  "excludePrivate": true,
  "excludeProtected": true,
  "excludeExternals": true,
  "readme": "README.md",
  "name": "Kage.js API 文档",
  "includeVersion": true,
  "sort": ["source-order"],
  "categorizeByGroup": true,
  "categoryOrder": [
    "Lang",
    "Array",
    "Object",
    "String",
    "Function",
    "Math",
    "*"
  ],
  "theme": "default",
  "hideGenerator": true
}
```

### 主要配置项说明

- **entryPoints**: 文档入口文件（通常是 `src/index.ts`）
- **out**: 生成文档的输出目录
- **exclude**: 排除的文件（测试文件等）
- **readme**: 作为文档首页的 README 文件
- **name**: 文档项目名称
- **categoryOrder**: 分类显示顺序

## 📂 生成的文档结构

```
docs/
├── index.html              # 文档首页
├── modules/                # 模块文档
│   ├── Array.html
│   ├── Object.html
│   ├── String.html
│   ├── Function.html
│   ├── Math.html
│   └── Lang.html
├── functions/              # 函数文档
│   ├── chunk.html
│   ├── uniq.html
│   └── ...
└── assets/                 # 样式和脚本
    ├── style.css
    └── ...
```

## 🎨 文档特性

生成的文档包含：

1. **类型信息** - 完整的 TypeScript 类型定义
2. **参数说明** - 每个参数的详细说明
3. **返回值** - 返回值类型和说明
4. **使用示例** - 实际代码示例
5. **源码链接** - 链接到 GitHub 源代码（如果配置）
6. **搜索功能** - 快速搜索 API
7. **分类导航** - 按模块和类别浏览

## 📋 文档编写最佳实践

### 1. 始终添加描述

```typescript
// ✅ 好的做法
/**
 * 将数组分割成指定大小的块
 * @param array - 要分割的数组
 * @param size - 每块的大小
 */
export function chunk<T>(array: T[], size: number): T[][] {}

// ❌ 避免
export function chunk<T>(array: T[], size: number): T[][] {}
```

### 2. 提供实际示例

```typescript
/**
 * @example
 * ```typescript
 * // 实际可运行的代码
 * chunk([1, 2, 3, 4], 2)
 * // => [[1, 2], [3, 4]]
 * ```
 */
```

### 3. 说明边界情况

```typescript
/**
 * 计算数组总和
 * 
 * @param array - 数字数组
 * @returns 总和，如果数组为空返回 0
 * 
 * @example
 * ```typescript
 * sum([1, 2, 3]) // => 6
 * sum([])        // => 0
 * ```
 */
```

### 4. 使用分类标签

```typescript
/**
 * @category Array  // 将此函数归类到 Array 分组
 */
```

### 5. 链接相关函数

```typescript
/**
 * 浅层扁平化
 * 
 * 参见 {@link flattenDeep} 进行深度扁平化
 */
export function flatten<T>(array: (T | T[])[]): T[] {}
```

## 🔧 常见问题

### Q: 文档没有更新？

清除旧文档重新生成：

```bash
rm -rf docs
npm run docs
```

### Q: 如何修改文档主题？

编辑 `typedoc.json`：

```json
{
  "theme": "default" // 或其他主题
}
```

### Q: 如何排除某个函数？

在函数前添加 `@internal` 标签：

```typescript
/**
 * @internal
 * 内部使用的函数，不会出现在文档中
 */
export function internalFunction() {}
```

### Q: 如何添加自定义页面？

在 `typedoc.json` 中配置：

```json
{
  "readme": "README.md",
  "includes": "docs-includes"
}
```

## 📚 更多资源

- [TypeDoc 官方文档](https://typedoc.org/)
- [JSDoc 标签参考](https://typedoc.org/guides/tags/)
- [TypeDoc 配置选项](https://typedoc.org/options/)

## 🚀 发布文档

### GitHub Pages

1. 生成文档：
   ```bash
   npm run docs
   ```

2. 推送到 gh-pages 分支：
   ```bash
   git checkout --orphan gh-pages
   git add docs
   git commit -m "Deploy documentation"
   git push origin gh-pages
   ```

3. 在 GitHub 仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支。

### 自动化部署

添加 GitHub Actions 工作流（`.github/workflows/docs.yml`）：

```yaml
name: Deploy Documentation

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run docs
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

## ✅ 文档检查清单

提交代码前检查：

- [ ] 所有公开函数都有文档注释
- [ ] 包含参数说明（@param）
- [ ] 包含返回值说明（@returns）
- [ ] 包含使用示例（@example）
- [ ] 添加了分类标签（@category）
- [ ] 示例代码可以运行
- [ ] 文档生成无错误或警告

---

现在你可以运行 `npm run docs` 来生成美观的 API 文档了！
