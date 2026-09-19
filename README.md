# AI 视频教程网站

小白向 AI 视频制作教程平台,看视频学步骤轻松复刻。

![预览](https://github.com/reed35/ai-video-tutorials/blob/cursor/ai-video-tutorial-site-a8c1/public/GEN_preview.jpg?raw=true)

## ✨ 特性

- 🎬 **视频教程** - 完整的 30 秒 AI 视频制作流程
- 📝 **详细步骤** - 从参考图到视频生成,每步都有提示词
- 🎨 **精美设计** - 深色电影风格,teal/gold 配色
- 📱 **响应式** - 完美适配桌面端和移动端
- ⚡ **高性能** - 基于 Next.js 16,静态预渲染

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/reed35/ai-video-tutorials.git
cd ai-video-tutorials

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 📦 部署到 Vercel

### 方法一:通过 Vercel Dashboard(推荐)

1. 访问 [vercel.com/new](https://vercel.com/new)
2. 点击 "Import Git Repository"
3. 选择此仓库: `reed35/ai-video-tutorials`
4. 框架预设会自动检测为 **Next.js**
5. 点击 **Deploy** 按钮
6. 等待部署完成,获取生产 URL

### 方法二:通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署到生产环境
vercel --prod
```

### 方法三:通过 GitHub 集成

1. 在 Vercel 中连接 GitHub 仓库
2. 选择 `reed35/ai-video-tutorials`
3. 启用自动部署
4. 每次推送到 main 分支自动部署

## 📖 当前教程

### 猫鼠画隧道 (Painted Tunnel)

**Tom and Jerry Live Action 风格**

- ⏱️ 30 秒动画,13 个镜头
- 🎭 真人摄影质感
- 🖼️ 5 张高质量参考图
- 🎬 Seedance 2.5 模型
- 📐 16:9 宽屏比例

**内容包括:**
- 角色设定板(Milo 猫、Finn 老鼠)
- 场景设定(画隧道、碎石路)
- 道具参考(画笔与油漆)
- 完整视频生成提示词
- 详细的镜头故事板

## 🏗️ 技术栈

- **框架**: Next.js 16.3
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 3.4
- **部署**: Vercel
- **包管理**: npm

## 📁 项目结构

```
ai-video-tutorials/
├── app/                      # Next.js App Router
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页(教程列表)
│   └── tutorials/
│       └── [id]/
│           └── page.tsx     # 教程详情页
├── components/               # React 组件
│   └── tutorial-card.tsx    # 教程卡片
├── lib/                      # 业务逻辑
│   ├── types.ts             # 类型定义
│   └── tutorials.ts         # 教程数据
├── public/                   # 静态资源
│   ├── demo-web.mp4         # 演示视频
│   ├── GEN_preview.jpg      # 视频封面
│   └── REF*.jpg             # 参考图片
├── package.json             # 项目配置
├── tsconfig.json            # TypeScript 配置
└── tailwind.config.ts       # Tailwind 配置
```

## 🎯 功能路线图

- [ ] 添加更多教程内容
- [ ] 实现搜索和筛选
- [ ] 用户账号系统
- [ ] 提示词收藏功能
- [ ] 一键复制提示词
- [ ] 多语言支持
- [ ] 标签分类系统
- [ ] 评论和评分功能

## 📄 许可

本项目仅用于演示目的。素材来自 Filmera 公开模板。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request!

---

**在线访问**: 部署后将在此处显示生产 URL
