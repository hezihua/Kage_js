# 开发入门指南

欢迎来到 Kage.js 项目！本指南将帮助你快速开始开发。

## 🚀 5 分钟快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 运行测试

```bash
npm test
```

### 3. 运行示例

```bash
npm run example
```

### 4. 构建项目

```bash
npm run build
```

🎉 恭喜！你已经成功运行了项目。

## 📖 项目文档导航

建议按以下顺序阅读文档：

1. **[README.md](./README.md)** - 项目概述和快速开始
   - 了解项目是什么
   - 查看基本用法示例

2. **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - 快速参考
   - 快速查找所有 API
   - 常用组合示例

3. **[GUIDE.md](./GUIDE.md)** - 详细使用指南
   - API 详细说明
   - 实际使用场景
   - 最佳实践

4. **[PROJECT.md](./PROJECT.md)** - 项目概述
   - 技术架构
   - 项目结构
   - 开发工具

5. **[CONTRIBUTING.md](./CONTRIBUTING.md)** - 贡献指南
   - 开发流程
   - 代码规范
   - 提交规范

6. **[CHANGELOG.md](./CHANGELOG.md)** - 更新日志
   - 版本历史
   - 功能清单

## 🛠️ 开发工作流

### 日常开发

```bash
# 1. 创建功能分支
git checkout -b feature/my-feature

# 2. 开发功能（编辑 src/*.ts）
# 3. 编写测试（编辑 src/__tests__/*.test.ts）

# 4. 运行测试（监视模式）
npm run test:watch

# 5. 代码格式化
npm run format

# 6. 代码检查
npm run lint

# 7. 查看覆盖率
npm run test:coverage

# 8. 构建验证
npm run build
```

### 添加新功能

1. **选择或创建模块文件**（如 `src/array.ts`）
2. **实现函数**
   ```typescript
   /**
    * 函数说明
    * @param param - 参数说明
    * @returns 返回值说明
    */
   export function myFunction<T>(param: T): T {
     // 实现
     return param;
   }
   ```

3. **导出函数**（在 `src/index.ts`）
   ```typescript
   export { myFunction } from './array';
   ```

4. **编写测试**（在 `src/__tests__/array.test.ts`）
   ```typescript
   describe('myFunction', () => {
     it('should work correctly', () => {
       expect(myFunction(input)).toEqual(expected);
     });
   });
   ```

5. **更新文档**（在 `README.md` 和 `GUIDE.md`）

### 修复 Bug

1. **创建修复分支**
   ```bash
   git checkout -b fix/bug-name
   ```

2. **编写失败的测试**（重现 bug）
3. **修复代码**
4. **确保测试通过**
5. **提交代码**

## 📝 代码风格指南

### TypeScript 最佳实践

```typescript
// ✅ 好的做法
export function add(a: number, b: number): number {
  return a + b;
}

// ✅ 使用泛型
export function identity<T>(value: T): T {
  return value;
}

// ✅ 使用类型守卫
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// ❌ 避免使用 any
export function bad(a: any): any {
  return a;
}
```

### 命名规范

```typescript
// 函数名：动词开头，camelCase
function getUserName() {}
function calculateTotal() {}
function isValid() {}

// 变量名：名词，camelCase
const userName = 'John';
const totalAmount = 100;

// 常量：UPPER_SNAKE_CASE
const MAX_SIZE = 100;
const DEFAULT_CONFIG = {};

// 类型/接口：PascalCase
interface UserProfile {}
type ResponseData = {};
```

### 注释规范

```typescript
/**
 * 函数简短描述
 * 
 * 更详细的说明（可选）
 * 
 * @param array - 参数说明
 * @param size - 参数说明
 * @returns 返回值说明
 * 
 * @example
 * ```typescript
 * chunk([1, 2, 3, 4], 2)
 * // => [[1, 2], [3, 4]]
 * ```
 */
export function chunk<T>(array: T[], size: number): T[][] {
  // 实现
}
```

## 🧪 测试指南

### 测试结构

```typescript
describe('模块名', () => {
  describe('函数名', () => {
    it('should 正常情况描述', () => {
      // Arrange - 准备
      const input = [1, 2, 3];
      
      // Act - 执行
      const result = myFunction(input);
      
      // Assert - 断言
      expect(result).toEqual([3, 2, 1]);
    });
    
    it('should 边界情况描述', () => {
      expect(myFunction([])).toEqual([]);
    });
    
    it('should 错误情况描述', () => {
      expect(() => myFunction(null)).toThrow();
    });
  });
});
```

### 测试清单

- [ ] 正常输入
- [ ] 边界条件（空数组、空字符串等）
- [ ] 错误输入
- [ ] 类型正确性
- [ ] 不可变性（不修改原始数据）

## 🔍 调试技巧

### 1. 使用 Jest 的调试功能

```bash
# 只运行特定测试
npm test -- array.test.ts

# 只运行包含特定描述的测试
npm test -- -t "chunk"

# 显示详细输出
npm test -- --verbose
```

### 2. 使用 Node.js 调试器

在测试或示例代码中添加 `debugger`:

```typescript
export function myFunction(input: any) {
  debugger; // 在这里暂停
  return input;
}
```

然后：
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

### 3. 使用 console.log

```typescript
export function myFunction(input: any) {
  console.log('input:', input);
  const result = process(input);
  console.log('result:', result);
  return result;
}
```

## 📦 构建和发布

### 本地构建

```bash
npm run build
```

这将在 `dist/` 目录生成：
- `index.js` - CommonJS 格式
- `index.esm.js` - ES Module 格式
- `index.d.ts` - TypeScript 类型定义

### 发布前检查清单

- [ ] 所有测试通过
- [ ] 代码覆盖率达标
- [ ] 更新 CHANGELOG.md
- [ ] 更新版本号（package.json）
- [ ] 构建成功
- [ ] 文档更新

## 🎯 常见任务

### 添加新的数组函数

1. 编辑 `src/array.ts`
2. 编辑 `src/index.ts`（添加导出）
3. 编辑 `src/__tests__/array.test.ts`
4. 运行 `npm test`

### 优化性能

1. 使用 `console.time()` 测量
2. 使用更高效的算法
3. 添加性能测试
4. 在 PR 中说明性能提升

### 更新文档

1. **API 变更** → 更新 README.md, GUIDE.md, QUICK_REFERENCE.md
2. **新功能** → 更新 CHANGELOG.md
3. **示例** → 更新 examples.ts

## 🆘 获取帮助

### 文档资源

- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [Jest 文档](https://jestjs.io/docs/getting-started)
- [Rollup 文档](https://rollupjs.org/guide/en/)

### 项目资源

- GitHub Issues - 报告问题
- GitHub Discussions - 讨论想法
- 代码审查 - 学习最佳实践

### 常见问题

**Q: 测试失败怎么办？**
A: 运行 `npm test -- --verbose` 查看详细错误信息

**Q: 如何只运行一个测试？**
A: 使用 `it.only()` 或 `describe.only()`

**Q: 类型错误怎么解决？**
A: 检查 TypeScript 配置，确保类型定义正确

**Q: 构建失败？**
A: 检查 TypeScript 编译错误，运行 `npx tsc --noEmit`

## 🎓 学习路径

### 初学者

1. 熟悉项目结构
2. 阅读现有代码
3. 修复简单的文档错误
4. 添加测试用例

### 进阶

1. 实现简单函数
2. 优化现有代码
3. 添加新功能
4. 编写详细文档

### 高级

1. 设计新模块
2. 性能优化
3. 架构改进
4. 指导他人

## ✅ 开发清单

每次开发前：
- [ ] 拉取最新代码 `git pull`
- [ ] 安装依赖 `npm install`
- [ ] 运行测试确保一切正常

开发中：
- [ ] 编写清晰的代码
- [ ] 添加类型注解
- [ ] 编写测试
- [ ] 添加注释

提交前：
- [ ] 所有测试通过
- [ ] 代码格式化
- [ ] ESLint 检查通过
- [ ] 构建成功
- [ ] 文档更新

## 🎉 开始贡献

现在你已经准备好了！选择一个 Issue 或者创建一个新功能，开始你的贡献之旅吧！

记住：
- 💬 不懂就问
- 🧪 测试驱动开发
- 📝 文档同样重要
- 🤝 代码审查是学习的好机会

祝你编码愉快！🚀
