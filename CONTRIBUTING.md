# 贡献指南

感谢你考虑为 Kage.js 做出贡献！本文档将指导你如何参与项目开发。

## 🎯 项目目标

Kage.js 的目标是提供一个现代化、类型安全、高性能的 JavaScript 工具库。

## 🚀 开始之前

### 环境要求

- Node.js >= 16
- npm >= 7 或 yarn >= 1.22

### 克隆项目

```bash
git clone https://github.com/hezihua/Kage-js.git
cd wssf-kage-js
npm install
```

## 📁 项目结构

```
wssf-kage-js/
├── src/                    # 源代码
│   ├── array.ts           # 数组操作
│   ├── object.ts          # 对象操作
│   ├── string.ts          # 字符串操作
│   ├── function.ts        # 函数工具
│   ├── math.ts            # 数学运算
│   ├── lang.ts            # 类型检查
│   ├── index.ts           # 入口文件
│   └── __tests__/         # 测试文件
├── dist/                  # 构建输出
├── jest.config.js         # Jest 配置
├── tsconfig.json          # TypeScript 配置
└── rollup.config.js       # Rollup 配置
```

## 🔧 开发流程

### 1. 创建分支

```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

### 2. 开发

#### 添加新功能

1. 在相应的模块文件中添加函数（例如 `src/array.ts`）
2. 添加 JSDoc 注释
3. 在 `src/index.ts` 中导出
4. 编写测试用例

**示例：添加一个新的数组函数**

```typescript
// src/array.ts

/**
 * 反转数组
 * @param array - 要反转的数组
 * @returns 反转后的新数组
 */
export function reverse<T>(array: T[]): T[] {
  return [...array].reverse();
}
```

```typescript
// src/index.ts

export {
  // ... 其他导出
  reverse,
} from './array';
```

```typescript
// src/__tests__/array.test.ts

describe('reverse', () => {
  it('should reverse array', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
});
```

### 3. 运行测试

```bash
# 运行所有测试
npm test

# 观察模式
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

### 4. 代码检查

```bash
# ESLint 检查
npm run lint

# 代码格式化
npm run format
```

### 5. 构建

```bash
npm run build
```

## ✅ 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型

- `feat`: 新功能
- `fix`: 错误修复
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行）
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 示例

```bash
git commit -m "feat(array): add reverse function"
git commit -m "fix(object): fix deep clone for Date objects"
git commit -m "docs: update README with new examples"
```

## 📝 代码规范

### TypeScript 规范

1. **使用严格模式**

```typescript
// ✅ 好的做法
export function add(a: number, b: number): number {
  return a + b;
}

// ❌ 避免使用 any
export function add(a: any, b: any): any {
  return a + b;
}
```

2. **类型注解**

```typescript
// ✅ 明确的类型
export function map<T, R>(
  array: T[],
  iteratee: (value: T, index: number) => R
): R[] {
  return array.map(iteratee);
}
```

3. **泛型使用**

```typescript
// ✅ 使用泛型保持类型安全
export function identity<T>(value: T): T {
  return value;
}
```

### 命名规范

- 函数：使用 camelCase，描述性动词开头
- 类型：使用 PascalCase
- 常量：使用 UPPER_SNAKE_CASE
- 私有成员：使用下划线前缀

```typescript
// 函数
function getUserName() {}

// 类型
interface UserProfile {}

// 常量
const MAX_SIZE = 100;
```

### 注释规范

使用 JSDoc 注释：

```typescript
/**
 * 合并多个数组
 * @param arrays - 要合并的数组
 * @returns 合并后的新数组
 * @example
 * ```typescript
 * concat([1, 2], [3, 4], [5, 6])
 * // => [1, 2, 3, 4, 5, 6]
 * ```
 */
export function concat<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}
```

## 🧪 测试规范

### 测试结构

```typescript
describe('FunctionName', () => {
  describe('scenario', () => {
    it('should do something', () => {
      // Arrange
      const input = [1, 2, 3];
      
      // Act
      const result = someFunction(input);
      
      // Assert
      expect(result).toEqual([3, 2, 1]);
    });
  });
  
  it('should handle edge cases', () => {
    expect(someFunction([])).toEqual([]);
    expect(someFunction([1])).toEqual([1]);
  });
});
```

### 测试覆盖率要求

- 分支覆盖率：>= 80%
- 函数覆盖率：>= 80%
- 行覆盖率：>= 80%
- 语句覆盖率：>= 80%

### 测试清单

- [ ] 正常情况测试
- [ ] 边界条件测试
- [ ] 错误处理测试
- [ ] 类型测试（如果适用）

## 📤 提交 Pull Request

1. 确保所有测试通过
2. 确保代码覆盖率达标
3. 更新相关文档
4. 填写 PR 描述

### PR 描述模板

```markdown
## 变更类型
- [ ] 新功能
- [ ] 错误修复
- [ ] 文档更新
- [ ] 性能优化
- [ ] 重构

## 描述
简要描述你的变更...

## 相关 Issue
Closes #issue_number

## 测试
描述你如何测试这些变更...

## Checklist
- [ ] 代码遵循项目规范
- [ ] 添加了必要的测试
- [ ] 所有测试通过
- [ ] 更新了文档
- [ ] 没有引入破坏性变更
```

## 🐛 报告 Bug

使用 GitHub Issues 报告 bug，请包含：

1. **清晰的标题**
2. **重现步骤**
3. **期望行为**
4. **实际行为**
5. **环境信息**（Node.js 版本、OS 等）
6. **最小可复现示例**

### Bug 报告模板

```markdown
**描述**
简要描述 bug...

**重现步骤**
1. 导入函数 '...'
2. 调用 '....'
3. 查看错误

**期望行为**
应该返回...

**实际行为**
实际返回...

**环境**
- Node.js 版本：
- Kage.js 版本：
- OS：

**最小可复现示例**
\`\`\`typescript
import { someFunc } from 'wssf-wssf-kage-js';
someFunc([1, 2, 3]);
\`\`\`
```

## 💡 功能请求

使用 GitHub Issues 提出功能请求，请包含：

1. **功能描述**
2. **使用场景**
3. **API 设计建议**
4. **替代方案**

## 📚 文档贡献

文档同样重要！你可以：

- 修复文档错误
- 添加示例
- 改进解释
- 翻译文档

## ❓ 问题和帮助

- 查看 [README.md](./README.md)
- 查看 [GUIDE.md](./GUIDE.md)
- 提交 Issue
- 加入讨论

## 🙏 感谢

感谢所有贡献者的付出！

## 📄 许可证

通过贡献代码，你同意你的贡献将按照 MIT 许可证授权。
