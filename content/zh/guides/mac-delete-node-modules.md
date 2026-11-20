---
title: Mac 上怎么找出并安全清理旧的 node_modules？（实测 304 个占 66.3 GB）
description: 实测一台开发用 Mac 上 304 个 node_modules 占去 66.3 GB。手把手教你用终端安全排查、识别 pnpm 硬链接陷阱，以及何时不该直接删。
target_query: Mac 批量删除 node_modules
category: 开发者存储
date: 2026-11-21
updated: 2026-11-21
alt_slug: how-to-find-and-delete-old-node-modules-on-mac
image: /assets/screens/zh-artifacts.webp
ai_disclosure: 本文由 CleanBit 开发者借助 AI 整理，数据为作者在一台开发用 Mac 上实测。
---

**结论：不再开发的项目里的 `node_modules` 可以放心删。**只要项目里还留着 `package.json` 和 lockfile，以后重新打开时执行一次 `npm install` / `pnpm install` 就能恢复。

用 Cursor、Claude Code、Codex 做 Vibe Coding 久了，硬盘里很容易不知不觉躺着几十上百个测试项目。我们在**一台开发用 Mac 上实测**（仅统计个人文件夹内，不含 `~/Library`）：共找到 **304 个 `node_modules`，合计占用 66.3 GB**；另外还有 8 个 `.venv`（5.1 GB）和 7 个 `.build`（2.9 GB）。每台电脑情况差别很大，但先量一下自己的机器往往会有惊喜。

> [!NOTE]
> `du` 统计的是目录总占用，不等于直接删掉就能立刻腾出这么多空间——例如使用 `pnpm` 的项目和公共 store 之间存在硬链接，下面第 3 节会详细说明。

## 1. 一行只读命令：先看清你的 Mac 上有多少 `node_modules`

不要上来就 `rm -rf`。先用 `-prune` 跳过嵌套的 `node_modules` 和 `~/Library`，只列出体积最大的前 25 个：

```bash
find ~ \( -path ~/Library -o -path ~/.Trash -o -name .git \) -prune -o \
  -type d -name node_modules -prune -exec du -sh {} + 2>/dev/null \
  | sort -h | tail -25
```

如果只想看某个工作目录（比如 `~/work`）里超过 60 天没动过的项目：

```bash
find ~/work -name node_modules -type d -prune -mtime +60 -exec du -sh {} + 2>/dev/null | sort -h
```

## 2. 哪些情况不要盲目删？

- **正在跑服务的项目**：开着 dev server 或后台构建的项目，删了会立刻报错。
- **被 Git 跟踪的 `node_modules`**：极少数老项目会把依赖提交进仓库，动手前最好确认 `git ls-files node_modules | head` 为空。
- **使用 `pnpm` 的项目**：`pnpm` 通过硬链接把 `~/Library/pnpm` 里的包映射到各个项目的 `node_modules`。只删单个项目的目录不一定立刻释放空间，需要配合 `pnpm store prune`。
- **即将离线工作**：如果马上要在飞机或无网环境改某个项目，记得先把它的依赖留着。

## 3. 安全清理的两种手动方式

在确认目标文件夹后，比起直接 `rm -rf`，更推荐使用交互式工具或先移入废纸篓：

```bash
# 方式 A：进入项目总目录，用 npkill 按最后修改时间交互选择清理
cd ~/work
npx npkill

# 方式 B：如果你主要用 pnpm，记得清理未被引用的 store 缓存
pnpm store prune
```

## 4. 如果不想敲命令，也可以用 CleanBit 可视化筛选

我是 **CleanBit** 的开发者，这是一款上架在 Mac App Store、运行在 macOS 沙盒里的磁盘清理工具（支持 macOS 15+）：

- **项目产物**模块会找出 `node_modules`、`target`、`.build`、`.venv`、`Pods` 等目录，直接显示**每个项目最后一次改动的时间**。
- **被 Git 跟踪的内容一律跳过**，近期有写入的活跃项目会自动标出并禁止误选。
- 所有项目产物属于「需要确认」（默认不勾选），删除时**一律移到废纸篓**，万一删错随时可以放回原处。
- `pnpm store` 在 CleanBit 里仅展示大小、不直接删除，并提示你使用 `pnpm store prune`。

![CleanBit 项目产物页面截图，展示构建目录、最后修改时间与安全防护提示](/assets/screens/zh-artifacts.webp "CleanBit「项目产物」列出各项目最后改动时间，跳过 Git 跟踪内容，删除时移到废纸篓。")

## 常见问题

### 删掉 `node_modules` 会影响全局 npm 包或 Node.js 环境吗？
不会。项目目录下的 `node_modules` 只属于当前项目，不影响全局安装的 CLI 工具或源代码。

### 为什么删完之后，访达里看到的可用空间没有立刻变多？
常见原因有两个：如果是移到废纸篓，需要清空废纸篓才会释放；如果是 `pnpm` 项目，因为存在硬链接，需要再执行 `pnpm store prune`。此外 macOS 的本地时间机器快照（APFS 快照）也可能导致系统延迟更新可用空间。
