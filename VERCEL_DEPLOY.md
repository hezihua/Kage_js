# Vercel 部署指南

本指南将帮助你将 Kage.js 文档部署到 Vercel。

## 🚀 快速部署

### 方法 1: 使用 Vercel CLI（推荐）

#### 1. 安装 Vercel CLI

```bash
npm install -g vercel
# 或
pnpm add -g vercel
```

#### 2. 登录 Vercel

```bash
vercel login
```

#### 3. 生成文档

```bash
npm run docs:build
```

#### 4. 部署

```bash
vercel
```

首次部署时，Vercel 会询问一些问题：
- **Set up and deploy?** → Yes
- **Which scope?** → 选择你的账号
- **Link to existing project?** → No
- **Project name?** → kage-js-docs（或自定义）
- **Directory?** → ./（当前目录）
- **Override settings?** → No

#### 5. 生产部署

```bash
vercel --prod
```

### 方法 2: 通过 Vercel 网站

#### 1. 推送代码到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### 2. 在 Vercel 上导入项目

1. 访问 [https://vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. 配置构建设置：
   - **Framework Preset**: Other
   - **Build Command**: `npm run docs:build`
   - **Output Directory**: `docs`
   - **Install Command**: `npm install`

5. 点击 "Deploy"

## ⚙️ 配置说明

### vercel.json

项目已包含 `vercel.json` 配置文件：

```json
{
  "version": 2,
  "name": "kage-js-docs",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "docs"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/docs/$1"
    }
  ],
  "outputDirectory": "docs"
}
```

### package.json

已添加 `docs:build` 脚本用于 Vercel 构建：

```json
{
  "scripts": {
    "docs:build": "typedoc"
  }
}
```

## 🔄 自动部署

### GitHub 集成

连接 GitHub 后，每次推送到主分支都会自动部署：

```bash
git add .
git commit -m "Update documentation"
git push
```

Vercel 会自动：
1. 检测到代码变更
2. 安装依赖
3. 运行 `npm run docs:build`
4. 部署生成的文档

### 预览部署

推送到其他分支会创建预览部署：

```bash
git checkout -b feature/new-docs
git push origin feature/new-docs
```

每个 PR 都会获得一个预览 URL。

## 🌐 自定义域名

### 1. 在 Vercel 添加域名

1. 进入项目设置
2. 点击 "Domains"
3. 添加你的域名（例如：`docs.kage-js.com`）

### 2. 配置 DNS

在你的域名提供商处添加 DNS 记录：

**CNAME 记录**:
```
docs.kage-js.com → cname.vercel-dns.com
```

或 **A 记录**:
```
@ → 76.76.21.21
```

## 📊 环境变量（如果需要）

如果文档生成需要环境变量：

### 通过 CLI
```bash
vercel env add API_KEY
```

### 通过网站
1. 项目设置 → Environment Variables
2. 添加变量名和值

## 🔍 部署后检查

部署成功后，Vercel 会提供 URL：

```
https://kage-js-docs-xxx.vercel.app
```

检查以下内容：
- ✅ 文档首页正常显示
- ✅ 导航菜单工作正常
- ✅ 搜索功能可用
- ✅ 代码示例高亮正确
- ✅ 所有模块页面可访问

## 🐛 常见问题

### 1. 构建失败

**检查**:
```bash
# 本地测试构建
npm run docs:build
```

**解决**: 确保本地能成功生成文档

### 2. 404 错误

**原因**: 输出目录配置错误

**解决**: 检查 `vercel.json` 中的 `outputDirectory` 设置

### 3. 样式丢失

**原因**: 静态资源路径问题

**解决**: 在 `typedoc.json` 中添加 `--options.publicPath`

### 4. TypeScript 版本不匹配

**警告**: TypeDoc 可能警告 TypeScript 版本

**解决**: 
```bash
pnpm add -D typescript@5.3.3
```

## 📝 最佳实践

### 1. 分支保护

在 GitHub 设置分支保护规则：
- 要求 PR 审查
- 要求状态检查通过（Vercel 部署）

### 2. 预览评论

启用 Vercel GitHub 集成后，PR 会自动获得预览链接评论。

### 3. 性能优化

- 启用 Vercel 的 Edge Network
- 配置缓存头
- 压缩静态资源

### 4. 监控

在 Vercel Dashboard 查看：
- 部署历史
- 分析数据
- 错误日志

## 🔐 安全设置

### 密码保护（Pro 功能）

如果需要保护文档：

1. 项目设置 → Deployment Protection
2. 启用 Password Protection

### 访问控制

限制特定 IP 或团队成员访问（Enterprise 功能）

## 📚 相关资源

- [Vercel 文档](https://vercel.com/docs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [自定义域名](https://vercel.com/docs/concepts/projects/domains)
- [环境变量](https://vercel.com/docs/concepts/projects/environment-variables)

## ✅ 部署清单

部署前检查：

- [ ] 已安装 Vercel CLI
- [ ] 已登录 Vercel 账号
- [ ] 文档已生成（`npm run docs:build`）
- [ ] 本地预览正常
- [ ] Git 仓库已初始化
- [ ] 代码已推送到 GitHub（如果使用方法 2）
- [ ] `vercel.json` 配置正确

---

现在你可以运行 `vercel` 命令开始部署了！🚀
