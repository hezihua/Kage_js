# NPM 发布指南

本指南将帮助你将 `wssf-kage-js` 发布到 npm。

## 📋 发布前准备

### 1. 检查 package.json

确保以下信息正确：

```json
{
  "name": "wssf-kage-js",
  "version": "1.0.0",
  "description": "一个现代化的 JavaScript 工具库，类似 lodash",
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/hezihua/Kage-js.git"
  }
}
```

**需要修改的地方：**
- `author`: 替换为你的名字和邮箱
- `repository.url`: 替换为你的 GitHub 仓库地址

### 2. 确保所有文件就绪

- ✅ `README.md` - 项目说明
- ✅ `LICENSE` - MIT 许可证
- ✅ `.npmignore` - npm 忽略文件配置
- ✅ 源代码和类型定义

### 3. 运行完整检查

```bash
# 运行测试
pnpm test

# 代码检查
pnpm lint

# 构建项目
pnpm build
```

确保所有步骤都成功！

## 🚀 发布步骤

### 步骤 1: 登录 npm

```bash
npm login
```

输入你的 npm 账号信息：
- Username
- Password
- Email
- 2FA Code（如果启用了）

### 步骤 2: 验证构建

```bash
# 清理旧的构建文件
rm -rf dist

# 重新构建
pnpm build

# 检查 dist 目录
ls -la dist/
```

应该看到：
- `index.js` - CommonJS 版本
- `index.esm.js` - ES Module 版本
- `index.d.ts` - TypeScript 类型定义

### 步骤 3: 测试打包

```bash
# 查看将要发布的文件
npm pack --dry-run

# 或者实际打包（生成 .tgz 文件）
npm pack
```

检查输出，确保只包含必要的文件（dist 目录和文档）。

### 步骤 4: 发布

```bash
# 发布到 npm
npm publish
```

如果是第一次发布有作用域的包（@username/package），需要：
```bash
npm publish --access public
```

但由于 `wssf-kage-js` 不是作用域包，直接 `npm publish` 即可。

### 步骤 5: 验证发布

1. 访问 npm 页面：
   ```
   https://www.npmjs.com/package/wssf-kage-js
   ```

2. 测试安装：
   ```bash
   # 在另一个目录测试
   mkdir test-install
   cd test-install
   npm init -y
   npm install wssf-kage-js
   ```

3. 测试使用：
   ```javascript
   // test.js
   const { chunk, camelCase } = require('wssf-kage-js');
   
   console.log(chunk([1, 2, 3, 4], 2));
   console.log(camelCase('hello-world'));
   ```

## 🔄 更新版本

### 语义化版本控制

- **Major (1.0.0 → 2.0.0)**: 破坏性变更
- **Minor (1.0.0 → 1.1.0)**: 新功能，向后兼容
- **Patch (1.0.0 → 1.0.1)**: Bug 修复

### 更新版本号

```bash
# Patch 更新（bug 修复）
npm version patch

# Minor 更新（新功能）
npm version minor

# Major 更新（破坏性变更）
npm version major
```

这会自动：
1. 更新 `package.json` 中的版本号
2. 创建 git commit
3. 创建 git tag

### 发布新版本

```bash
# 1. 更新版本
npm version patch  # 或 minor/major

# 2. 构建
pnpm build

# 3. 发布
npm publish

# 4. 推送到 git（包括 tags）
git push && git push --tags
```

## 📝 发布清单

发布前检查：

- [ ] 所有测试通过 (`pnpm test`)
- [ ] 代码检查通过 (`pnpm lint`)
- [ ] 构建成功 (`pnpm build`)
- [ ] README.md 完整准确
- [ ] LICENSE 文件存在
- [ ] package.json 信息正确
  - [ ] name
  - [ ] version
  - [ ] description
  - [ ] author
  - [ ] repository
  - [ ] keywords
- [ ] .npmignore 配置正确
- [ ] 已登录 npm (`npm login`)
- [ ] CHANGELOG.md 已更新

## 🔐 安全建议

### 1. 启用 2FA

在 npm 账号设置中启用双因素认证：
```
https://www.npmjs.com/settings/your-username/profile
```

### 2. 使用 npm token

在 CI/CD 中使用 token 而不是密码：
```bash
npm token create
```

### 3. 检查依赖安全

```bash
npm audit
```

## 🤖 自动化发布（GitHub Actions）

创建 `.github/workflows/publish.yml`：

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Publish
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

设置 GitHub Secret：
1. 在 npm 创建 token
2. 在 GitHub 仓库设置中添加 `NPM_TOKEN` secret

## 📊 发布后

### 1. 更新文档

在 README.md 中添加 npm 徽章：

```markdown
[![npm version](https://badge.fury.io/js/wssf-kage-js.svg)](https://www.npmjs.com/package/wssf-kage-js)
[![npm downloads](https://img.shields.io/npm/dm/wssf-kage-js.svg)](https://www.npmjs.com/package/wssf-kage-js)
```

### 2. 宣传你的包

- 在社交媒体分享
- 提交到 awesome 列表
- 写博客文章介绍

### 3. 监控

- 查看下载统计
- 回复 issues 和 PR
- 收集用户反馈

## 🐛 常见问题

### 1. 包名已被占用

**错误**: `403 Forbidden - PUT https://registry.npmjs.org/package-name`

**解决**: 
- 更改包名
- 使用作用域包 `@username/package-name`

### 2. 发布权限问题

**错误**: `You do not have permission to publish`

**解决**:
```bash
npm login
npm publish --access public
```

### 3. 版本号冲突

**错误**: `Cannot publish over existing version`

**解决**:
```bash
npm version patch
npm publish
```

### 4. 文件太大

**警告**: `package size exceeds recommended limit`

**解决**:
- 检查 `.npmignore`
- 移除不必要的文件
- 压缩资源

## 📚 相关资源

- [npm 发布文档](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [语义化版本](https://semver.org/lang/zh-CN/)
- [npm 包最佳实践](https://docs.npmjs.com/packages-and-modules)
- [创建 Node.js 模块](https://docs.npmjs.com/creating-node-js-modules)

## 🎉 快速命令总结

```bash
# 完整发布流程
pnpm test              # 测试
pnpm lint              # 检查
pnpm build             # 构建
npm login              # 登录
npm publish            # 发布

# 更新版本
npm version patch      # 版本号 +0.0.1
pnpm build            # 重新构建
npm publish           # 发布新版本
git push --tags       # 推送标签
```

---

现在你可以开始发布你的包了！记得先修改 `package.json` 中的 author 和 repository 信息。🚀
