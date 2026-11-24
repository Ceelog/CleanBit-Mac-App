import { escapeHtml } from './markdown.mjs';

export const LANG_META = {
  en: { code: 'en', langAttr: 'en', hreflang: 'en', shortLabel: 'EN', home: '/', guides: '/guides/', feed: '/feed.xml', rssLang: 'en-us', screenPrefix: 'en' },
  zh: { code: 'zh', langAttr: 'zh-Hans', hreflang: 'zh-Hans', shortLabel: '中文', home: '/zh/', guides: '/zh/guides/', feed: '/zh/feed.xml', rssLang: 'zh-cn', screenPrefix: 'zh' },
  ja: { code: 'ja', langAttr: 'ja', hreflang: 'ja', shortLabel: '日本語', home: '/ja/', guides: '/ja/guides/', feed: '/ja/feed.xml', rssLang: 'ja', screenPrefix: 'en' },
  de: { code: 'de', langAttr: 'de', hreflang: 'de', shortLabel: 'DE', home: '/de/', guides: '/de/guides/', feed: '/de/feed.xml', rssLang: 'de', screenPrefix: 'en' }
};

export const LANG_ORDER = ['en', 'zh', 'ja', 'de'];

const COPY = {
  en: {
    langAttr: 'en',
    localeName: 'English',
    homeTitle: 'CleanBit — Sandboxed Mac App Store Disk Space Cleaner',
    nav: { demo: 'Demo', features: 'Features', safety: 'Safety', guides: 'Guides', tool: 'Disk Check', pricing: 'Pricing', support: 'Support' },
    ctaShort: 'Mac App Store',
    ctaMain: 'Download on the Mac App Store',
    ctaGuides: 'Read Storage Guides',
    ctaWatch: 'Watch Demo',
    demoEyebrow: 'Video Walkthrough',
    demoTitle: 'See CleanBit in action on macOS',
    demoSub: 'A quick real-screen walkthrough of Smart Scan, Build Artifacts, Space Analysis, and the Trash vs. permanent deletion confirmation dialog.',
    demoOpenYt: 'Watch on YouTube ↗',
    heroBadge: 'macOS 15+ · Mac App Store · App Sandbox · 9 Languages',
    heroTitleA: 'Free up Mac disk space.',
    heroTitleB: 'Know what you’re removing.',
    heroSub: 'CleanBit finds caches, logs, build artifacts, and app leftovers in your home folder. Every item explains what it is and what happens if you remove it—nothing is deleted until you confirm.',
    heroTrust: 'No root · No background helper · Free scan & 2 free cleans · One-time purchase option',
    tabs: [
      { id: 'smart-scan', label: 'Smart Scan', tint: 'brand', caption: 'Every group is labeled Recommended, Review, or Info Only, with plain-language impact notes, per-group cleaning, and active apps blocked automatically.' },
      { id: 'confirm', label: 'Confirmation', tint: 'coral', caption: 'Before anything is deleted, CleanBit splits what goes to the Trash from what is deleted permanently—and re-checks every item.' },
      { id: 'artifacts', label: 'Build Artifacts', tint: 'amber', caption: 'Find node_modules, target, .build, and .venv across projects with last-modified dates. Anything tracked by Git is skipped.' },
      { id: 'space', label: 'Space Analysis', tint: 'ocean', caption: 'Drill down into your home folder or any folder you grant to see where your gigabytes actually went.' },
      { id: 'uninstall', label: 'Uninstall Apps', tint: 'sky', caption: 'Remove an app with its caches, preferences, and logs. Personal app data is listed separately and never pre-selected.' }
    ],
    safetyEyebrow: 'Safe by Design',
    safetyTitle: 'No blind "one-click clean." Every deletion is explained and classified.',
    safetySub: 'Most Mac cleaners hand you one giant number and a single button. CleanBit shows three clear tiers and lets you decide.',
    tiers: [
      {
        badge: 'Recommended',
        badgeClass: 'level-safe',
        title: 'Caches that rebuild themselves',
        desc: 'App caches, browser caches (never touching cookies, history, or passwords), Xcode DerivedData, and package manager caches. Deleted permanently by default so space returns immediately—or send them to Trash in Settings.'
      },
      {
        badge: 'Review',
        badgeClass: 'level-review',
        title: 'Not pre-selected. Always goes to Trash.',
        desc: 'Project build folders (node_modules, target, .venv), old installers (.dmg, .pkg), uninstalled app leftovers, AI sessions, and uninstalled apps. Always moved to the Trash so you can put them back.'
      },
      {
        badge: 'Info Only',
        badgeClass: 'level-info',
        title: 'Shown for awareness. Never deletable.',
        desc: 'Local AI models (Hugging Face, Ollama, LM Studio), pnpm store (hard-linked), and Docker Desktop disk images. CleanBit shows how much space they take and points you to the right command.'
      }
    ],
    boundaryTitle: 'Honest about App Sandbox boundaries',
    boundarySub: 'CleanBit runs strictly inside the macOS App Sandbox with no root privileges and no background daemon. We do not pretend to clean what macOS protects:',
    boundaryItems: [
      'No APFS local snapshots or system caches',
      'No iCloud Drive items (handled safely in Finder)',
      'No "RAM freeing", "Mac speed-up", or antivirus claims',
      'No silent background deletions',
      'No file names or paths ever leave your Mac'
    ],
    devEyebrow: 'Built for Developers & AI Coding',
    devTitle: 'Clean up what Xcode, package managers, and AI tools leave behind.',
    devSub: 'Whether you ship Swift apps or build side projects with Claude Code and Codex, developer caches quietly grow to tens of gigabytes.',
    devCards: [
      {
        tile: 'tile-amber', icon: '{}', title: 'Project Build Artifacts',
        desc: 'Finds node_modules, target, .build, .venv, Pods, and more—showing when you last touched each project. Anything tracked by Git is automatically skipped, and removed folders go to the Trash.'
      },
      {
        tile: 'tile-brand', icon: '⌘', title: 'Xcode & 12+ Package Managers',
        desc: 'Covers Xcode DerivedData, old DeviceSupport versions, SwiftUI previews, shut-down simulator caches, plus npm, Yarn, pnpm, Bun, pip, uv, SwiftPM, CocoaPods, Homebrew, Go, Cargo, and Gradle.'
      },
      {
        tile: 'tile-violet', icon: 'AI', title: 'AI Tools & Old Sessions',
        desc: 'Cleans old Claude Code versions and Claude desktop caches, and lets you review old Claude Code and Codex sessions by date range. Local models from Ollama, LM Studio, and Hugging Face are listed without risk.'
      },
      {
        tile: 'tile-ocean', icon: '◫', title: 'Space Map, Large Files & Duplicates',
        desc: 'Drill-down folder map, large files filtered by size and last-opened date, byte-identical duplicate finder (always keeping at least one copy), and clean app uninstaller.'
      }
    ],
    pricingEyebrow: 'Transparent Pricing',
    pricingTitle: 'Scan for free. Pay once if you want.',
    pricingSub: 'Every purchase is handled securely by Apple through the Mac App Store. No accounts, no dark patterns.',
    plans: [
      {
        name: 'Free to Try', price: '$0', unit: 'forever', featured: false,
        items: ['Unlimited scanning & space analysis', 'First 2 cleans completely free', 'Inspect every item & impact before buying', 'Dry Run Mode available anytime']
      },
      {
        name: 'Monthly / Yearly', price: '$4.99', unit: '/ mo · or $19.99 / yr', featured: false,
        items: ['Unlimited cleaning across all modules', 'Cancel anytime in Apple Account settings', 'All future rule updates included', 'Family Sharing supported via App Store']
      },
      {
        name: 'Lifetime', price: '$29.99', unit: 'one-time purchase', featured: true,
        items: ['Pay once, no recurring subscription', 'Unlimited cleaning across all modules', 'All future rule updates included', 'Restorable anytime via Mac App Store']
      }
    ],
    guidesEyebrow: 'Mac Storage Guides',
    guidesTitle: 'Practical guides backed by real measurements',
    guidesSub: 'Step-by-step manual terminal & Finder solutions first—so every guide is useful even if you never install CleanBit.',
    allGuides: 'View all guides →',
    readGuide: 'Read guide →',
    faqEyebrow: 'FAQ',
    faqTitle: 'Common questions',
    faqs: [
      {
        q: 'Why is CleanBit only on the Mac App Store and sandboxed?',
        a: 'Running inside Apple’s App Sandbox means CleanBit never asks for root access, never installs a persistent background helper daemon, and can only read folders you explicitly grant in a standard macOS open panel. Full Disk Access is optional and only needed for the Trash, Safari caches, and other apps’ containers.'
      },
      {
        q: 'Can deleted items be recovered?',
        a: 'It depends on the risk tier, and CleanBit tells you before you confirm. Recommended caches that apps rebuild automatically are deleted permanently by default (you can switch them to Trash in Settings). Review items, build artifacts, manually picked files, and uninstalled apps always move to the Trash so you can put them back.'
      },
      {
        q: 'Why doesn’t CleanBit clean APFS local snapshots or system caches?',
        a: 'macOS protects system locations and APFS snapshots outside the App Sandbox. Rather than asking for root privileges or claiming to clean things macOS manages itself, CleanBit focuses strictly on the user-space caches, developer files, and leftovers inside your home folder.'
      },
      {
        q: 'Does CleanBit collect or upload my file names?',
        a: 'Never. Scanning, duplicate hashing, and cleaning happen entirely locally on your Mac. File names, paths, contents, and installed app lists never leave your device. CleanBit uses Firebase Analytics only for anonymous product telemetry (built-in rule IDs, counts, and sizes rounded to MB).'
      },
      {
        q: 'What macOS version and languages are supported?',
        a: 'CleanBit is built natively with SwiftUI for macOS 15 (Sequoia) and later. Version 1.0.1 supports 9 languages following your macOS system language: English, Simplified Chinese, Traditional Chinese, Japanese, Korean, French, German, Spanish, and Russian.'
      }
    ],
    guidesIndexTitle: 'Mac Storage & Developer Cleanup Guides',
    guidesIndexSub: 'Honest, practical guides on Xcode caches, node_modules, AI coding tools, and macOS storage—with real measurements and manual commands.',
    guidesEmpty: 'More guides in this language are on the way. In the meantime, browse our English guides or try the read-only Disk Check command generator.',
    articleCtaTitle: 'Prefer to inspect and clean visually?',
    articleCtaSub: 'CleanBit is a sandboxed Mac App Store utility. Every item shows what it is and what happens if you remove it—scanning and your first 2 cleans are free.',
    tocCtaEyebrow: 'Mac App Store · Sandboxed',
    tocCtaTitle: 'CleanBit for macOS',
    tocCtaBody: 'Know what you’re removing before you confirm. Free scan & first 2 cleans free.',
    tocCtaButton: 'Download on App Store',
    tocCtaMeta: 'macOS 15+ · 9 languages · One-time option',
    tocTitle: 'On this page',
    relatedTitle: 'Related guides',
    updatedLabel: 'Updated',
    minRead: 'min read',
    disclosureDefault: 'Written by the CleanBit developer with AI assistance. All measurements were taken on a real developer Mac.',
    footerNote: 'macOS 15+ · 9 languages · Available exclusively on the Mac App Store.'
  },
  zh: {
    langAttr: 'zh-Hans',
    localeName: '简体中文',
    homeTitle: 'CleanBit — Mac App Store 沙盒磁盘清理工具，看得见删什么',
    nav: { demo: '视频演示', features: '功能', safety: '安全设计', guides: '指南', tool: '排查命令', pricing: '定价', support: '支持' },
    ctaShort: 'Mac App Store',
    ctaMain: '前往 Mac App Store 下载',
    ctaGuides: '阅读 Mac 空间清理指南',
    ctaWatch: '观看演示视频',
    demoEyebrow: '产品演示',
    demoTitle: '实机录屏：看清 CleanBit 怎么扫描与确认清理',
    demoSub: '完整演示智能扫描、项目产物、空间分析以及清理前的「废纸篓 / 永久删除」分栏确认流程。',
    demoOpenYt: '在 YouTube 打开 ↗',
    heroBadge: 'macOS 15+ · Mac App Store · App 沙盒 · 支持 9 种语言',
    heroTitleA: '释放 Mac 磁盘空间，',
    heroTitleB: '删之前清楚知道删的是什么。',
    heroSub: 'CleanBit 在你授权的个人文件夹里找出缓存、日志、项目构建产物和卸载残留。每一项都写明是什么、删了有什么影响，你确认之前什么都不删。',
    heroTrust: '不要 root · 不装后台 helper · 扫描免费、前 2 次清理免费 · 支持一次买断',
    tabs: [
      { id: 'smart-scan', label: '智能扫描', tint: 'brand', caption: '结果分为「建议清理」「需要确认」「仅展示」三类，支持按分组单独清理，每一项写明删除影响，正在运行的应用缓存自动锁定。' },
      { id: 'confirm', label: '删除前确认', tint: 'coral', caption: '确认框明确分开显示多少移到废纸篓、多少永久删除；真正删除前每一项都会再次校验。' },
      { id: 'artifacts', label: '项目产物', tint: 'amber', caption: '找出项目里的 node_modules、target、.build、.venv，显示每个项目最后改动时间；被 Git 跟踪的内容一律跳过。' },
      { id: 'space', label: '空间分析', tint: 'ocean', caption: '一张图看清个人文件夹或任意文件夹的占用分布，点进去逐层查看空间去向。' },
      { id: 'uninstall', label: '卸载应用', tint: 'sky', caption: '连同缓存、偏好设置、日志和窗口状态一起卸载；可能含用户文档的应用数据单独列出且默认不勾选。' }
    ],
    safetyEyebrow: '安全设计',
    safetyTitle: '不做盲目的「一键清理」，按风险决定怎么删',
    safetySub: '市面上很多清理工具只给一个大数字和一键按钮。CleanBit 把每一项按风险分成三档，把选择权交给你。',
    tiers: [
      {
        badge: '建议清理',
        badgeClass: 'level-safe',
        title: '会自动重建的缓存',
        desc: '应用缓存、浏览器缓存（不碰 Cookie、历史记录和密码）、Xcode DerivedData 及包管理器缓存。默认直接删除让空间立刻回来，也可在设置中改为移到废纸篓。'
      },
      {
        badge: '需要确认',
        badgeClass: 'level-review',
        title: '默认不勾选，一律进废纸篓',
        desc: '项目构建目录（node_modules、target、.venv）、旧安装包（.dmg、.pkg）、应用残留、AI 旧会话与卸载的应用。一律移到废纸篓，随时可以放回原处。'
      },
      {
        badge: '仅展示',
        badgeClass: 'level-info',
        title: '只列出体积，永远不删除',
        desc: '本地 AI 模型（Hugging Face、Ollama、LM Studio）、pnpm store（硬链接存储）和 Docker 虚拟磁盘。只告诉你占了多大，并提示更稳妥的官方清理命令。'
      }
    ],
    boundaryTitle: '坦诚说明 App 沙盒边界',
    boundarySub: 'CleanBit 运行在 macOS App Sandbox 内，不要 root 权限，不安装常驻后台的 helper，也不假装能清理系统保护区域：',
    boundaryItems: [
      '不碰系统缓存和 APFS 本地快照',
      '不删除 iCloud Drive 云盘文件（由访达处理）',
      '不做「释放内存」「加速 Mac」或杀毒',
      '不在后台静默自动删除任何文件',
      '文件名、路径和文件内容从不离开你的 Mac'
    ],
    devEyebrow: '为开发者与 AI 编程打造',
    devTitle: '看清 Xcode、包管理器和 AI 工具悄悄占掉的空间',
    devSub: '无论是写原生应用，还是用 Claude Code / Codex 做一堆实验项目，开发缓存和旧依赖都会在几周内涨到几十 GB。',
    devCards: [
      {
        tile: 'tile-amber', icon: '{}', title: '项目产物（Build Artifacts）',
        desc: '扫描 node_modules、target、.build、.venv、Pods 等构建目录，标出每个项目的最后修改时间。被 Git 跟踪的内容一律跳过，删除时移到废纸篓。'
      },
      {
        tile: 'tile-brand', icon: '⌘', title: 'Xcode 与 12+ 包管理器缓存',
        desc: '覆盖 Xcode DerivedData、旧版 iOS DeviceSupport、SwiftUI 预览、已关机模拟器缓存，以及 npm、Yarn、pnpm、Bun、pip、uv、SwiftPM、CocoaPods、Homebrew、Go、Cargo、Gradle。'
      },
      {
        tile: 'tile-violet', icon: 'AI', title: 'AI 工具与旧会话',
        desc: '清理 Claude Code 旧版本与 Claude 桌面版缓存，按时间范围查看 Claude Code 和 Codex 旧会话；Ollama、LM Studio、Hugging Face 本地模型只展示大小、不删除。'
      },
      {
        tile: 'tile-ocean', icon: '◫', title: '空间分析、大文件与重复文件',
        desc: '逐层下钻的文件夹占用视图、按大小和上次打开时间筛选的大文件、按内容完全一致比对的重复文件查找（每组至少保留一份），以及完整的应用卸载。'
      }
    ],
    pricingEyebrow: '透明定价',
    pricingTitle: '扫描免费，支持订阅或一次买断',
    pricingSub: '全部购买与恢复均通过 Mac App Store 处理，无需注册账号；中国区等店面实际价格以 App Store 显示为准。',
    plans: [
      {
        name: '免费体验', price: '免费', unit: '扫描无限次', featured: false,
        items: ['无限次扫描与空间分析', '前 2 次清理完全免费', '先看清每项细节再决定', '内置演练模式（Dry Run）随时试用']
      },
      {
        name: '按月 / 按年订阅', price: '$4.99', unit: '/ 月 · 或 $19.99 / 年', featured: false,
        items: ['解锁全部模块无限次清理', 'Apple 账户设置中随时取消', '包含后续规则库更新', '价格以当地 App Store 显示为准']
      },
      {
        name: '终身买断', price: '$29.99', unit: '一次付费 · 无续费', featured: true,
        items: ['一次购买，无需持续订阅', '解锁全部模块无限次清理', '包含后续规则库更新', '通过 Mac App Store 随时恢复购买']
      }
    ],
    guidesEyebrow: 'Mac 存储清理指南',
    guidesTitle: '先给不依赖工具的手动方案，再用真实数据说话',
    guidesSub: '每一篇指南都包含完整可用的终端命令与访达路径，即使不装 CleanBit 也能直接解决问题。',
    allGuides: '查看全部指南 →',
    readGuide: '阅读指南 →',
    faqEyebrow: '常见问题',
    faqTitle: '你可能会关心的问题',
    faqs: [
      {
        q: '为什么 CleanBit 只上架 Mac App Store 且坚持使用沙盒？',
        a: 'App Sandbox 保证了 CleanBit 不需要 root 权限、不安装常驻后台的 helper，只能访问你在系统打开面板中明确授权的文件夹。完全磁盘访问权限是可选的，仅在需要清理废纸篓、Safari 和其他应用容器时才需要打开。'
      },
      {
        q: '删掉的文件还能恢复吗？',
        a: '按风险分级处理，确认前会写清楚。「建议清理」中会自动重建的缓存默认直接删除以立即腾出空间（你也可以在设置里改为移到废纸篓）；「需要确认」项、项目产物、手动选择的文件和卸载的应用一律移到废纸篓，可以放回原处。'
      },
      {
        q: '为什么 CleanBit 不清理 APFS 本地快照或系统缓存？',
        a: '这些位置受 macOS 系统保护，沙盒应用无法触碰。我们不要求 root 权限，也不假装能清理系统自己管理的空间，只专注处理个人文件夹内明确可安全检查的缓存、开发产物和残留。'
      },
      {
        q: 'CleanBit 会上传我的文件名或路径吗？',
        a: '不会。扫描、重复文件校验和清理全部在你的 Mac 本地完成，文件名、路径、内容和已安装应用列表从不离开电脑。CleanBit 仅通过 Firebase Analytics 收集匿名使用统计（规则 ID、数量与体积）。'
      },
      {
        q: '支持哪些 macOS 版本和语言？',
        a: 'CleanBit 使用 SwiftUI 原生开发，支持 macOS 15 及以上版本。1.0.1 起支持 9 种语言（跟随系统语言）：英语、简体中文、繁体中文、日语、韩语、法语、德语、西班牙语和俄语。'
      }
    ],
    guidesIndexTitle: 'Mac 磁盘空间与开发者清理指南',
    guidesIndexSub: '围绕 Xcode 缓存、node_modules、AI 编程工具与 macOS 存储占用的实测指南，提供完整手动命令。',
    guidesEmpty: '更多中文指南正在整理中，也可以直接查看英文指南或使用只读终端排查命令生成器。',
    articleCtaTitle: '想可视化查看每一项、确认后再安全清理？',
    articleCtaSub: 'CleanBit 是 Mac App Store 里的沙盒磁盘清理工具：每一项都写明是什么和删除影响，扫描和前 2 次清理免费。',
    tocCtaEyebrow: 'Mac App Store · App 沙盒',
    tocCtaTitle: 'CleanBit 磁盘清理',
    tocCtaBody: '每项写明用途与删除影响，确认前不动文件。扫描免费，前 2 次清理免费。',
    tocCtaButton: '前往 Mac App Store',
    tocCtaMeta: 'macOS 15+ · 9 语言 · 支持一次买断',
    tocTitle: '本文目录',
    relatedTitle: '相关指南',
    updatedLabel: '更新于',
    minRead: '分钟阅读',
    disclosureDefault: '本文由 CleanBit 开发者借助 AI 整理，数据为作者在一台开发用 Mac 上实测。',
    footerNote: 'macOS 15+ · 支持 9 种语言 · 仅在 Mac App Store 上架。'
  },
  ja: {
    langAttr: 'ja',
    localeName: '日本語',
    homeTitle: 'CleanBit — App Sandbox 対応の Mac ディスク容量クリーナー（Mac App Store）',
    nav: { demo: 'デモ', features: '機能', safety: '安全性', guides: 'ガイド', tool: '容量チェック', pricing: '料金', support: 'サポート' },
    ctaShort: 'Mac App Store',
    ctaMain: 'Mac App Store でダウンロード',
    ctaGuides: 'Mac ストレージガイドを読む',
    ctaWatch: 'デモを見る',
    demoEyebrow: '動画デモ',
    demoTitle: 'macOS 上でのスキャンと削除確認の流れ',
    demoSub: 'スマートスキャン、ビルド成果物、容量分析、そして「ゴミ箱へ移動 / 完全に削除」の確認画面を実機画面で紹介しています。',
    demoOpenYt: 'YouTube で見る ↗',
    heroBadge: 'macOS 15+ · Mac App Store · App Sandbox · 9 言語対応',
    heroTitleA: 'Mac の空き容量を、',
    heroTitleB: '消す前に中身と影響を確認して整理。',
    heroSub: 'CleanBit はホームフォルダ内のキャッシュ、ログ、開発ビルド成果物、アプリの残留ファイルを見つけます。各項目に「何か」「削除するとどうなるか」を明記し、確認するまで何も削除しません。',
    heroTrust: 'root 権限不要 · 常駐バックグラウンドヘルパーなし · スキャン無料・初回 2 回無料 · 買い切り対応',
    tabs: [
      { id: 'smart-scan', label: 'スマートスキャン', tint: 'brand', caption: '「推奨」「要確認」「表示のみ」の 3 段階で分類。グループ単位のクリーンに対応し、起動中アプリのキャッシュは自動で保護します。' },
      { id: 'confirm', label: '削除前の確認', tint: 'coral', caption: '実行前に「ゴミ箱へ移動」と「完全に削除」を明確に分けて表示し、削除直前に各項目を再検証します。' },
      { id: 'artifacts', label: 'ビルド成果物', tint: 'amber', caption: 'node_modules・target・.build・.venv を最終更新日つきで一覧表示。Git 追跡中のファイルは自動でスキップします。' },
      { id: 'space', label: '容量分析', tint: 'ocean', caption: 'ホームフォルダや許可したフォルダを階層ごとに掘り下げ、どこが容量を圧迫しているか可視化します。' },
      { id: 'uninstall', label: 'アプリ削除', tint: 'sky', caption: 'アプリ本体とキャッシュ・設定・ログをまとめて整理。ユーザーデータを含む領域は別枠で表示し、初期選択しません。' }
    ],
    safetyEyebrow: '安全設計',
    safetyTitle: '中身の見えない「ワンクリック一括削除」はしません。',
    safetySub: '合計サイズとボタン 1 つだけを見せるクリーナーとは違い、CleanBit はリスク別に 3 段階へ整理して判断を委ねます。',
    tiers: [
      {
        badge: '推奨',
        badgeClass: 'level-safe',
        title: '自動で再生成されるキャッシュ',
        desc: 'アプリキャッシュ、ブラウザキャッシュ（Cookie・履歴・パスワードには触れません）、Xcode DerivedData、パッケージマネージャキャッシュ。初期設定では即時削除（設定でゴミ箱移動に変更可能）です。'
      },
      {
        badge: '要確認',
        badgeClass: 'level-review',
        title: '初期状態では未選択。常にゴミ箱へ移動',
        desc: 'プロジェクトのビルドフォルダ（node_modules、target、.venv）、古いインストーラ（.dmg / .pkg）、アンインストール済みアプリの残り、AI セッション履歴など。必ずゴミ箱へ移動するため戻せます。'
      },
      {
        badge: '表示のみ',
        badgeClass: 'level-info',
        title: '容量の把握のみ。アプリからは削除不可',
        desc: 'ローカル AI モデル（Hugging Face、Ollama、LM Studio）、ハードリンク構造の pnpm store、Docker Desktop 仮想ディスクなど。使用量を示し、公式コマンドを案内します。'
      }
    ],
    boundaryTitle: 'App Sandbox の境界を正直に公開しています',
    boundarySub: 'CleanBit は macOS App Sandbox 内で動作し、root 権限も常駐デーモンも要求しません。macOS が保護する領域には手を出さず、できる範囲を明確にしています。',
    boundaryItems: [
      'APFS ローカルスナップショットやシステムキャッシュは対象外',
      'iCloud Drive 上のファイルは触りません（Finder 側で安全に管理）',
      'メモリ解放・Mac 高速化・ウイルス対策といった誇張表現はしません',
      'バックグラウンドでの自動サイレント削除は一切なし',
      'ファイル名・パス・中身が Mac の外へ送信されることはありません'
    ],
    devEyebrow: '開発者・AI コーディング環境向け',
    devTitle: 'Xcode、パッケージマネージャ、AI ツールが溜め込む数十 GB を可視化。',
    devSub: 'Swift 開発でも Claude Code / Codex を使った試作でも、開発用キャッシュとビルド成果物は数週間で数十 GB に膨らみます。',
    devCards: [
      {
        tile: 'tile-amber', icon: '{}', title: 'プロジェクトのビルド成果物',
        desc: 'node_modules、target、.build、.venv、Pods などを横断検出し、各プロジェクトの最終更新日を表示。Git 追跡対象はスキップし、削除時はゴミ箱へ移動します。'
      },
      {
        tile: 'tile-brand', icon: '⌘', title: 'Xcode と 12 種以上のパッケージキャッシュ',
        desc: 'Xcode DerivedData、古い iOS DeviceSupport、SwiftUI プレビュー、停止済みシミュレータ、さらに npm・Yarn・pnpm・Bun・pip・uv・SwiftPM・CocoaPods・Homebrew・Go・Cargo・Gradle に対応。'
      },
      {
        tile: 'tile-violet', icon: 'AI', title: 'AI ツールと古いセッション履歴',
        desc: 'Claude Code の旧バージョンや Claude デスクトップキャッシュを整理し、Claude Code / Codex の古いセッションを期間別に見直せます。Ollama / LM Studio / Hugging Face モデルは表示のみです。'
      },
      {
        tile: 'tile-ocean', icon: '◫', title: '容量マップ・大きなファイル・重複検出',
        desc: '階層ドリルダウン型の容量分析、サイズと最終開封日で絞れる大きなファイル一覧、バイト完全一致の重複検出（各グループ最低 1 つを保持）、アプリ関連ファイル整理まで 1 つに集約。'
      }
    ],
    pricingEyebrow: 'わかりやすい料金',
    pricingTitle: 'スキャン無料。買い切りプランも用意。',
    pricingSub: '購入と復元はすべて Mac App Store 経由で完結。アカウント登録は不要です（日本円など各国の実価格は App Store 表示に準拠）。',
    plans: [
      {
        name: '無料でお試し', price: '$0', unit: 'スキャン無制限', featured: false,
        items: ['スキャンと容量分析は無制限', '最初の 2 回のクリーンが無料', '購入前に全項目と影響を確認可能', '削除せず試せるドライランモード搭載']
      },
      {
        name: '月額 / 年額', price: '$4.99', unit: '/ 月 · または $19.99 / 年', featured: false,
        items: ['全モジュールで回数無制限のクリーン', 'Apple Account 設定からいつでも解約可能', '今後のルール更新をすべて含む', 'App Store のファミリー共有に対応']
      },
      {
        name: '買い切り（Lifetime）', price: '$29.99', unit: '一度きり・更新なし', featured: true,
        items: ['一度の購入で継続課金なし', '全モジュールで回数無制限のクリーン', '今後のルール更新をすべて含む', 'Mac App Store からいつでも復元可能']
      }
    ],
    guidesEyebrow: 'Mac ストレージガイド',
    guidesTitle: '実測データと手動コマンドを先に載せた実用ガイド',
    guidesSub: 'CleanBit を入れなくても解決できるよう、Terminal と Finder の手動手順を先に整理しています。',
    allGuides: 'ガイド一覧を見る →',
    readGuide: 'ガイドを読む →',
    faqEyebrow: 'よくある質問',
    faqTitle: 'FAQ',
    faqs: [
      {
        q: 'なぜ Mac App Store 専用で App Sandbox に限定しているのですか？',
        a: 'App Sandbox 内で動作することで、root 権限や常駐バックグラウンドヘルパーを一切使わず、macOS 標準のパネルで許可したフォルダだけにアクセス範囲を限定できます。フルディスクアクセスは任意で、ゴミ箱・Safari キャッシュ・他アプリコンテナを扱う場合のみ必要です。'
      },
      {
        q: '削除したファイルは元に戻せますか？',
        a: 'リスク区分によって扱いが異なり、確認ダイアログで事前に明示します。自動再生成される「推奨」キャッシュは初期設定で即時削除（設定でゴミ箱移動へ変更可）、「要確認」項目・ビルド成果物・手動選択ファイル・アンインストール対象は必ずゴミ箱へ移動します。'
      },
      {
        q: 'APFS ローカルスナップショットやシステムキャッシュはなぜ削除しないのですか？',
        a: 'macOS がシステム保護している領域は App Sandbox の外にあります。root 権限を求めたり OS 管理領域を無理に触ったりせず、ホームフォルダ内で安全に確認できる領域だけに集中しています。'
      },
      {
        q: 'ファイル名やパスが外部に送信されることはありますか？',
        a: 'ありません。スキャン・ハッシュ照合・削除はすべて Mac ローカルで完結し、ファイル名・パス・内容・アプリ一覧は外部に送信しません。匿名の製品利用統計（内蔵ルール ID・件数・MB 単位のサイズ）のみ Firebase Analytics を使用します。'
      },
      {
        q: '対応 macOS バージョンと対応言語は？',
        a: 'SwiftUI でネイティブ開発されており、macOS 15（Sequoia）以降に対応します。v1.0.1 よりシステム言語に連動した 9 言語（英語、簡体字中国語、繁体字中国語、日本語、韓国語、フランス語、ドイツ語、スペイン語、ロシア語）に対応しています。'
      }
    ],
    guidesIndexTitle: 'Mac ストレージ＆開発環境クリーンアップガイド',
    guidesIndexSub: 'Xcode キャッシュ、node_modules、AI コーディングツール、macOS ストレージ整理を実測データと手動コマンドで解説します。',
    guidesEmpty: '日本語ガイドを順次追加しています。現在は英語ガイドおよび読み取り専用の容量チェックコマンド生成ツールをご利用いただけます。',
    articleCtaTitle: '視覚的に確認してから安全に整理したい方へ',
    articleCtaSub: 'CleanBit は App Sandbox 対応の Mac App Store ツールです。削除前にすべての項目と影響を確認でき、スキャンと初回 2 回のクリーンは無料です。',
    tocCtaEyebrow: 'Mac App Store · App Sandbox',
    tocCtaTitle: 'CleanBit for macOS',
    tocCtaBody: '確認するまで何も削除しません。スキャン無料・初回 2 回クリーン無料。',
    tocCtaButton: 'Mac App Store で見る',
    tocCtaMeta: 'macOS 15+ · 9 言語対応 · 買い切り対応',
    tocTitle: '目次',
    relatedTitle: '関連ガイド',
    updatedLabel: '更新日',
    minRead: '分で読めます',
    disclosureDefault: 'CleanBit 開発者が AI 補助を用いて執筆し、実機の開発用 Mac での計測値に基づいています。',
    footerNote: 'macOS 15+ · 9 言語対応 · Mac App Store 専売。'
  },
  de: {
    langAttr: 'de',
    localeName: 'Deutsch',
    homeTitle: 'CleanBit — Sandbox-Speicherbereinigung für macOS im Mac App Store',
    nav: { demo: 'Demo', features: 'Funktionen', safety: 'Sicherheit', guides: 'Guides', tool: 'Speicher-Check', pricing: 'Preise', support: 'Support' },
    ctaShort: 'Mac App Store',
    ctaMain: 'Im Mac App Store laden',
    ctaGuides: 'Speicher-Guides lesen',
    ctaWatch: 'Demo ansehen',
    demoEyebrow: 'Video-Rundgang',
    demoTitle: 'CleanBit live auf macOS erleben',
    demoSub: 'Ein kurzer Einblick in Smart Scan, Build-Artefakte, Speicheranalyse und den Bestätigungsdialog mit Trennung zwischen Papierkorb und endgültigem Löschen.',
    demoOpenYt: 'Auf YouTube ansehen ↗',
    heroBadge: 'macOS 15+ · Mac App Store · App Sandbox · 9 Sprachen',
    heroTitleA: 'Mac-Speicher freigeben.',
    heroTitleB: 'Immer wissen, was gelöscht wird.',
    heroSub: 'CleanBit findet Caches, Protokolle, Build-Artefakte und App-Reste in Ihrem Benutzerordner. Jeder Eintrag erklärt, was er ist und was beim Entfernen passiert – gelöscht wird erst nach Ihrer Bestätigung.',
    heroTrust: 'Kein Root · Kein Hintergrund-Helper · Scan & 2 Bereinigungen kostenlos · Einmalkauf verfügbar',
    tabs: [
      { id: 'smart-scan', label: 'Smart Scan', tint: 'brand', caption: 'Jede Gruppe ist als Empfohlen, Prüfen oder Nur Info markiert – mit verständlichen Hinweisen, Gruppen-Bereinigung und automatischem Schutz für laufende Apps.' },
      { id: 'confirm', label: 'Bestätigung', tint: 'coral', caption: 'Vor dem Löschen trennt CleanBit klar zwischen Papierkorb und endgültigem Entfernen und prüft jeden Eintrag erneut.' },
      { id: 'artifacts', label: 'Build-Artefakte', tint: 'amber', caption: 'Findet node_modules, target, .build und .venv mit letztem Änderungsdatum. Von Git verfolgte Inhalte werden automatisch übersprungen.' },
      { id: 'space', label: 'Speicheranalyse', tint: 'ocean', caption: 'Navigieren Sie Ebene für Ebene durch Ihren Benutzerordner, um zu sehen, wohin Ihre Gigabytes tatsächlich gehen.' },
      { id: 'uninstall', label: 'Apps entfernen', tint: 'sky', caption: 'Entfernt Apps samt Caches, Einstellungen und Logs. Persönliche App-Daten werden separat aufgeführt und nie vorausgewählt.' }
    ],
    safetyEyebrow: 'Sicherheitskonzept',
    safetyTitle: 'Kein blindes „Ein-Klick-Bereinigen“. Jede Löschung wird erklärt.',
    safetySub: 'Viele Mac-Cleaner zeigen nur eine große Zahl und einen Knopf. CleanBit trennt transparent in drei Risikostufen.',
    tiers: [
      {
        badge: 'Empfohlen',
        badgeClass: 'level-safe',
        title: 'Caches, die sich selbst neu aufbauen',
        desc: 'App-Caches, Browser-Caches (ohne Cookies, Verlauf oder Passwörter anzutasten), Xcode DerivedData und Paketmanager-Caches. Standardmäßig direkt gelöscht – oder optional in den Papierkorb.'
      },
      {
        badge: 'Prüfen',
        badgeClass: 'level-review',
        title: 'Nicht vorausgewählt. Immer in den Papierkorb.',
        desc: 'Build-Ordner (node_modules, target, .venv), alte Installer (.dmg, .pkg), App-Reste, ältere AI-Sitzungen und deinstallierte Apps. Alles landet im Papierkorb und lässt sich zurückholen.'
      },
      {
        badge: 'Nur Info',
        badgeClass: 'level-info',
        title: 'Nur zur Übersicht. Niemals löschbar.',
        desc: 'Lokale KI-Modelle (Hugging Face, Ollama, LM Studio), Hardlink-basierter pnpm-Store und Docker-Disk-Images. CleanBit zeigt die Größe und nennt den passenden offiziellen Befehl.'
      }
    ],
    boundaryTitle: 'Transparente Grenzen der App Sandbox',
    boundarySub: 'CleanBit läuft strikt in der macOS App Sandbox ohne Root-Rechte und ohne Hintergrund-Daemon. Geschützte macOS-Bereiche werden bewusst nicht angetastet:',
    boundaryItems: [
      'Keine APFS-Snapshots oder System-Caches',
      'Keine iCloud-Drive-Dateien (sicher im Finder verwalten)',
      'Keine Versprechen zu RAM-Freigabe, Beschleunigung oder Virenschutz',
      'Keine stillen Löschvorgänge im Hintergrund',
      'Dateinamen und Pfade verlassen niemals Ihren Mac'
    ],
    devEyebrow: 'Für Entwickler & KI-Coding gebaut',
    devTitle: 'Aufräumen, was Xcode, Paketmanager und KI-Tools hinterlassen.',
    devSub: 'Ob Swift-Apps oder Nebenprojekte mit Claude Code und Codex – Entwickler-Caches wachsen unbemerkt auf dutzende Gigabytes an.',
    devCards: [
      {
        tile: 'tile-amber', icon: '{}', title: 'Projekt-Build-Artefakte',
        desc: 'Findet node_modules, target, .build, .venv, Pods und mehr samt letztem Änderungsdatum. Von Git verfolgte Dateien werden übersprungen; entfernte Ordner landen im Papierkorb.'
      },
      {
        tile: 'tile-brand', icon: '⌘', title: 'Xcode & 12+ Paketmanager',
        desc: 'Deckt Xcode DerivedData, ältere iOS DeviceSupport-Versionen, SwiftUI-Previews, gestoppte Simulatoren sowie npm, Yarn, pnpm, Bun, pip, uv, SwiftPM, CocoaPods, Homebrew, Go, Cargo und Gradle ab.'
      },
      {
        tile: 'tile-violet', icon: 'AI', title: 'KI-Tools & alte Sitzungen',
        desc: 'Bereinigt ältere Claude-Code-Versionen und Claude-Desktop-Caches und filtert alte Claude-Code- und Codex-Sitzungen nach Zeitraum. Modelle von Ollama, LM Studio und Hugging Face werden nur angezeigt.'
      },
      {
        tile: 'tile-ocean', icon: '◫', title: 'Speicherkarte, große Dateien & Duplikate',
        desc: 'Ordner-Drilldown, große Dateien nach Größe und letztem Zugriff, Byte-identische Duplikatsuche (mindestens eine Kopie bleibt immer erhalten) und sauberer App-Uninstaller.'
      }
    ],
    pricingEyebrow: 'Transparente Preise',
    pricingTitle: 'Kostenlos scannen. Auf Wunsch einmalig kaufen.',
    pricingSub: 'Alle Käufe laufen sicher über den Mac App Store. Kein Konto nötig (lokale Euro-Preise laut Mac App Store).',
    plans: [
      {
        name: 'Kostenlos testen', price: '$0', unit: 'dauerhaft', featured: false,
        items: ['Unbegrenztes Scannen & Speicheranalyse', 'Erste 2 Bereinigungen kostenlos', 'Jeden Eintrag vor dem Kauf prüfen', 'Dry-Run-Modus jederzeit verfügbar']
      },
      {
        name: 'Monatlich / Jährlich', price: '$4.99', unit: '/ Monat · oder $19.99 / Jahr', featured: false,
        items: ['Unbegrenzte Bereinigung in allen Modulen', 'Jederzeit in den Apple-Account-Einstellungen kündbar', 'Alle künftigen Regel-Updates enthalten', 'Familienfreigabe über den App Store']
      },
      {
        name: 'Lifetime (Einmalkauf)', price: '$29.99', unit: 'einmalig · kein Abo', featured: true,
        items: ['Einmal zahlen, keine laufenden Kosten', 'Unbegrenzte Bereinigung in allen Modulen', 'Alle künftigen Regel-Updates enthalten', 'Jederzeit über den Mac App Store wiederherstellbar']
      }
    ],
    guidesEyebrow: 'Mac-Speicher-Guides',
    guidesTitle: 'Praxisnahe Guides mit echten Messwerten',
    guidesSub: 'Zuerst manuelle Terminal- und Finder-Wege – damit jeder Guide auch ohne CleanBit weiterhilft.',
    allGuides: 'Alle Guides ansehen →',
    readGuide: 'Guide lesen →',
    faqEyebrow: 'FAQ',
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        q: 'Warum gibt es CleanBit ausschließlich mit App Sandbox im Mac App Store?',
        a: 'Durch Apples App Sandbox fordert CleanBit niemals Root-Rechte, installiert keinen dauerhaften Hintergrund-Helper und liest nur Ordner, die Sie explizit über den macOS-Öffnen-Dialog freigeben. Festplattenvollzugriff ist optional und nur für Papierkorb, Safari-Caches und fremde App-Container nötig.'
      },
      {
        q: 'Lassen sich gelöschte Elemente wiederherstellen?',
        a: 'Das hängt von der Risikostufe ab und wird vor jeder Bestätigung klar getrennt angezeigt. Empfohlene Caches, die Apps selbst neu anlegen, werden standardmäßig direkt gelöscht (in den Einstellungen auf Papierkorb umstellbar). Prüfen-Einträge, Build-Artefakte, manuell gewählte Dateien und entfernte Apps landen immer im Papierkorb.'
      },
      {
        q: 'Warum bereinigt CleanBit keine APFS-Snapshots oder System-Caches?',
        a: 'Diese Bereiche schützt macOS außerhalb der App Sandbox. Statt Root-Rechte zu verlangen, konzentriert sich CleanBit auf sicher prüfbare Caches, Entwicklerdaten und App-Reste im Benutzerordner.'
      },
      {
        q: 'Werden meine Dateinamen oder Pfade hochgeladen?',
        a: 'Niemals. Scannen, Hashing und Bereinigen laufen vollständig lokal auf Ihrem Mac. Dateinamen, Pfade, Inhalte und App-Listen verlassen Ihr Gerät nicht. Firebase Analytics erfasst ausschließlich anonyme Nutzungskennzahlen (eingebaute Regel-IDs, Anzahlen und auf MB gerundete Größen).'
      },
      {
        q: 'Welche macOS-Version und Sprachen werden unterstützt?',
        a: 'CleanBit ist nativ mit SwiftUI für macOS 15 (Sequoia) und neuer entwickelt. Ab Version 1.0.1 werden 9 Systemsprachen unterstützt: Englisch, Chinesisch (vereinfacht & traditionell), Japanisch, Koreanisch, Französisch, Deutsch, Spanisch und Russisch.'
      }
    ],
    guidesIndexTitle: 'Mac-Speicher & Entwickler-Guides',
    guidesIndexSub: 'Ehrliche Praxis-Guides zu Xcode-Caches, node_modules, KI-Coding-Tools und macOS-Speicher mit echten Messungen und manuellen Befehlen.',
    guidesEmpty: 'Weitere deutschsprachige Guides folgen in Kürze. Bis dahin stehen unsere englischen Guides sowie der schreibgeschützte Speicher-Check-Befehlsgenerator bereit.',
    articleCtaTitle: 'Lieber visuell prüfen und sicher bereinigen?',
    articleCtaSub: 'CleanBit ist ein Sandbox-Tool aus dem Mac App Store: Jeder Eintrag zeigt Zweck und Auswirkung – Scannen und die ersten 2 Bereinigungen sind kostenlos.',
    tocCtaEyebrow: 'Mac App Store · App Sandbox',
    tocCtaTitle: 'CleanBit für macOS',
    tocCtaBody: 'Vor jeder Bestätigung klar sehen, was entfernt wird. Scan & erste 2 Bereinigungen gratis.',
    tocCtaButton: 'Im Mac App Store laden',
    tocCtaMeta: 'macOS 15+ · 9 Sprachen · Einmalkauf möglich',
    tocTitle: 'Auf dieser Seite',
    relatedTitle: 'Ähnliche Guides',
    updatedLabel: 'Aktualisiert',
    minRead: 'Min. Lesezeit',
    disclosureDefault: 'Verfasst vom CleanBit-Entwickler mit KI-Unterstützung. Alle Messwerte stammen von einem realen Entwickler-Mac.',
    footerNote: 'macOS 15+ · 9 Sprachen · Exklusiv im Mac App Store.'
  }
};

function buildAnalyticsSnippet(config) {
  if (!config.gtmId && !config.gaMeasurementId) return '';
  const gtmLoader = config.gtmId
    ? `var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id=${escapeHtml(config.gtmId)}';document.head.appendChild(s);`
    : '';
  const gaLoader = config.gaMeasurementId
    ? `var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=${escapeHtml(config.gaMeasurementId)}';document.head.appendChild(g);gtag('config','${escapeHtml(config.gaMeasurementId)}');`
    : '';
  return `<script>
  (function(){
    try {
      var q = new URLSearchParams(location.search);
      var f = q.get('analytics');
      if (f === 'off') localStorage.setItem('cb_no_analytics', '1');
      else if (f === 'on') localStorage.removeItem('cb_no_analytics');
    } catch (e) {}
    var off = navigator.doNotTrack === '1' || window.doNotTrack === '1';
    try { if (localStorage.getItem('cb_no_analytics') === '1') off = true; } catch (e) {}
    if (off) return;
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    ${gtmLoader}${gaLoader}
  })();
  </script>`;
}

export function renderLayout({
  lang = 'en',
  title,
  description,
  canonicalPath,
  altLinks = null,
  ogImage,
  ogType = 'website',
  jsonLd = [],
  activeNav = '',
  bodyHtml,
  extraScript = '',
  ctx
}) {
  const meta = LANG_META[lang] || LANG_META.en;
  const t = COPY[lang] || COPY.en;
  const fullCanonical = ctx.absUrl(canonicalPath);
  const homeHref = ctx.relUrl(meta.home);
  const guidesHref = ctx.relUrl(meta.guides);
  const toolHref = ctx.relUrl('/tools/disk-check/');
  const ctMap = { guides: 'website-guides', tool: 'website-tools' };
  const appStoreHref = ctx.appStoreUrl(ctMap[activeNav] || 'website');
  const ogImgAbs = ctx.absUrl(ogImage || '/assets/og-cover.png');

  const resolvedAlts = altLinks || {
    en: '/',
    zh: '/zh/',
    ja: '/ja/',
    de: '/de/'
  };

  const hreflangTags = LANG_ORDER
    .filter((code) => resolvedAlts[code])
    .map((code) => `<link rel="alternate" hreflang="${LANG_META[code].hreflang}" href="${escapeHtml(ctx.absUrl(resolvedAlts[code]))}" />`)
    .join('\n  ');
  const xDefaultHref = ctx.absUrl(resolvedAlts.en || '/');

  const langStripHtml = LANG_ORDER
    .map((code) => {
      const m = LANG_META[code];
      const target = resolvedAlts[code] || m.home;
      const cls = code === lang ? ' class="is-current" aria-current="page"' : '';
      return `<a href="${escapeHtml(ctx.relUrl(target))}" hreflang="${m.hreflang}"${cls}>${escapeHtml(m.shortLabel)}</a>`;
    })
    .join('');

  const ldScripts = jsonLd
    .filter(Boolean)
    .map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join('\n  ');

  const analyticsSnippet = buildAnalyticsSnippet(ctx.config);

  return `<!DOCTYPE html>
<html lang="${t.langAttr}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${escapeHtml(fullCanonical)}" />
  ${hreflangTags}
  <link rel="alternate" hreflang="x-default" href="${escapeHtml(xDefaultHref)}" />
  <link rel="icon" type="image/png" href="${escapeHtml(ctx.relUrl('/assets/favicon.png'))}" />
  <link rel="apple-touch-icon" href="${escapeHtml(ctx.relUrl('/assets/icon.png'))}" />
  <link rel="alternate" type="application/rss+xml" title="CleanBit Guides (${escapeHtml(t.localeName)})" href="${escapeHtml(ctx.absUrl(meta.feed))}" />
  <meta property="og:type" content="${escapeHtml(ogType)}" />
  <meta property="og:site_name" content="CleanBit" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${escapeHtml(fullCanonical)}" />
  <meta property="og:image" content="${escapeHtml(ogImgAbs)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(ogImgAbs)}" />
  <meta name="theme-color" content="#111419" />
  <link rel="stylesheet" href="${escapeHtml(ctx.relUrl('/styles.css'))}?v=${escapeHtml(ctx.cssVersion || '1')}" />
  ${ldScripts}
  ${analyticsSnippet}
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${escapeHtml(homeHref)}">
        <img src="${escapeHtml(ctx.relUrl('/assets/icon.png'))}" alt="CleanBit icon" width="28" height="28" />
        <span>CleanBit</span>
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="${escapeHtml(homeHref)}#features">${escapeHtml(t.nav.features)}</a>
        <a href="${escapeHtml(homeHref)}#safety">${escapeHtml(t.nav.safety)}</a>
        <a href="${escapeHtml(guidesHref)}" class="${activeNav === 'guides' ? 'active' : ''}">${escapeHtml(t.nav.guides)}</a>
        <a href="${escapeHtml(toolHref)}" class="${activeNav === 'tool' ? 'active' : ''}">${escapeHtml(t.nav.tool)}</a>
        <a href="${escapeHtml(homeHref)}#pricing">${escapeHtml(t.nav.pricing)}</a>
        <a href="${escapeHtml(ctx.relUrl('/support/'))}" class="${activeNav === 'support' ? 'active' : ''}">${escapeHtml(t.nav.support)}</a>
      </nav>
      <div class="header-actions">
        <div class="lang-strip" aria-label="Language switcher">${langStripHtml}</div>
        <a class="pill pill-primary pill-sm" href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.ctaShort)}</a>
      </div>
    </div>
  </header>

  <main>
    ${bodyHtml}
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <strong style="color:var(--text)">CleanBit</strong> · ${escapeHtml(t.footerNote)}
        <div style="margin-top:6px">© ${new Date().getFullYear()} ${escapeHtml(ctx.config.company)}</div>
      </div>
      <div class="footer-links">
        <a href="${escapeHtml(guidesHref)}">${escapeHtml(t.nav.guides)}</a>
        <a href="${escapeHtml(toolHref)}">${escapeHtml(t.nav.tool)}</a>
        <a href="${escapeHtml(ctx.relUrl('/support/'))}">${escapeHtml(t.nav.support)}</a>
        <a href="${escapeHtml(ctx.relUrl('/privacy/'))}">Privacy</a>
        <a href="${escapeHtml(ctx.relUrl('/terms/'))}">Terms</a>
        <a href="${escapeHtml(ctx.relUrl(meta.feed))}">RSS</a>
        <a href="${escapeHtml(ctx.config.repoUrl)}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">Mac App Store</a>
      </div>
    </div>
  </footer>

  <script>
  (function(){
    var frame = document.getElementById('showcase-frame');
    var img = document.getElementById('showcase-img');
    var cap = document.getElementById('showcase-caption');
    document.querySelectorAll('[data-tab-btn]').forEach(function(btn){
      btn.addEventListener('click', function(){
        document.querySelectorAll('[data-tab-btn]').forEach(function(b){ b.classList.remove('is-active'); b.setAttribute('aria-selected','false'); });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected','true');
        if (img) { img.src = btn.dataset.src; img.alt = btn.dataset.alt; }
        if (cap) cap.textContent = btn.dataset.caption;
        if (frame) frame.setAttribute('data-tint', btn.dataset.tint);
      });
    });
    document.querySelectorAll('[data-copy]').forEach(function(btn){
      btn.addEventListener('click', function(){
        var pre = btn.closest('.code-block').querySelector('pre code');
        if (!pre || !navigator.clipboard) return;
        navigator.clipboard.writeText(pre.textContent || '').then(function(){
          var old = btn.textContent;
          btn.textContent = 'Copied';
          setTimeout(function(){ btn.textContent = old; }, 1600);
        });
      });
    });
  })();
  </script>
  ${extraScript}
</body>
</html>`;
}

export function renderHome(lang, guides, ctx) {
  const meta = LANG_META[lang] || LANG_META.en;
  const t = COPY[lang] || COPY.en;
  const appStoreHref = ctx.appStoreUrl('website');
  const guidesHref = ctx.relUrl(guides.length ? meta.guides : '/guides/');
  const screenPrefix = meta.screenPrefix;
  const firstTab = t.tabs[0];

  const tabsHtml = t.tabs
    .map((tab, idx) => {
      const src = ctx.relUrl(`/assets/screens/${screenPrefix}-${tab.id}.webp`);
      return `<button type="button" class="tab-btn${idx === 0 ? ' is-active' : ''}" role="tab" aria-selected="${idx === 0}" data-tab-btn data-tint="${tab.tint}" data-src="${escapeHtml(src)}" data-alt="${escapeHtml('CleanBit ' + tab.label)}" data-caption="${escapeHtml(tab.caption)}"><span class="tab-dot dot-${tab.tint}"></span>${escapeHtml(tab.label)}</button>`;
    })
    .join('');

  const tiersHtml = t.tiers
    .map(
      (tier) => `<article class="card">
        <div class="card-top"><span class="level-chip ${tier.badgeClass}">${escapeHtml(tier.badge)}</span></div>
        <h3>${escapeHtml(tier.title)}</h3>
        <p>${escapeHtml(tier.desc)}</p>
      </article>`
    )
    .join('');

  const devCardsHtml = t.devCards
    .map(
      (c) => `<article class="card">
        <div class="card-top"><span class="icon-tile ${c.tile}">${escapeHtml(c.icon)}</span></div>
        <h3>${escapeHtml(c.title)}</h3>
        <p>${escapeHtml(c.desc)}</p>
      </article>`
    )
    .join('');

  const plansHtml = t.plans
    .map(
      (p) => `<article class="card price-card${p.featured ? ' featured' : ''}">
        <div>
          <h3>${escapeHtml(p.name)}</h3>
          <div class="price-num">${escapeHtml(p.price)} <span class="price-unit">${escapeHtml(p.unit)}</span></div>
          <ul class="price-list">${p.items.map((it) => `<li>${escapeHtml(it)}</li>`).join('')}</ul>
        </div>
      </article>`
    )
    .join('');

  const guidesCardsHtml = guides
    .slice(0, 6)
    .map(
      (g) => `<a class="card guide-card" href="${escapeHtml(ctx.relUrl(g.urlPath))}">
        <div>
          <div class="guide-meta">
            <span>${escapeHtml(g.category)}</span>
            <span>·</span>
            <span>${escapeHtml(g.updated)}</span>
            <span>·</span>
            <span>${g.readingTime} ${escapeHtml(t.minRead)}</span>
          </div>
          <h3 style="margin-top:8px">${escapeHtml(g.title)}</h3>
          <p style="margin-top:8px">${escapeHtml(g.description)}</p>
        </div>
        <span class="guide-more">${escapeHtml(t.readGuide)}</span>
      </a>`
    )
    .join('');

  const faqsHtml = t.faqs
    .map(
      (f, idx) => `<details class="faq-item"${idx === 0 ? ' open' : ''}>
        <summary>${escapeHtml(f.q)}</summary>
        <p>${escapeHtml(f.a)}</p>
      </details>`
    )
    .join('');

  const bodyHtml = `
  <section class="hero">
    <div class="container">
      <div class="badge"><span class="badge-dot"></span>${escapeHtml(t.heroBadge)}</div>
      <h1>${escapeHtml(t.heroTitleA)}<br /><span class="accent">${escapeHtml(t.heroTitleB)}</span></h1>
      <p class="hero-sub">${escapeHtml(t.heroSub)}</p>
      <div class="hero-cta">
        <a class="pill pill-primary" href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.ctaMain)}</a>
        ${ctx.config.youtubeVideoId ? `<a class="pill pill-secondary" href="#demo">▶ ${escapeHtml(t.ctaWatch)}</a>` : ''}
        <a class="pill pill-secondary" href="${escapeHtml(ctx.relUrl('/tools/disk-check/'))}">${escapeHtml(t.nav.tool)}</a>
      </div>
      <div class="hero-trust">${escapeHtml(t.heroTrust)}</div>

      <div class="showcase">
        <div class="showcase-tabs" role="tablist">${tabsHtml}</div>
        <div class="showcase-frame" id="showcase-frame" data-tint="${firstTab.tint}">
          <img id="showcase-img" src="${escapeHtml(ctx.relUrl(`/assets/screens/${screenPrefix}-${firstTab.id}.webp`))}" alt="CleanBit ${escapeHtml(firstTab.label)}" width="1800" height="1125" fetchpriority="high" />
        </div>
        <p class="showcase-caption" id="showcase-caption">${escapeHtml(firstTab.caption)}</p>
      </div>
    </div>
  </section>

  ${ctx.config.youtubeVideoId ? `<section class="section" id="demo">
    <div class="container">
      <div class="section-head">
        <div class="section-eyebrow">${escapeHtml(t.demoEyebrow)}</div>
        <h2>${escapeHtml(t.demoTitle)}</h2>
        <p>${escapeHtml(t.demoSub)}</p>
      </div>
      <div class="video-shell">
        <div class="video-frame" style="position:relative;width:100%;aspect-ratio:16/9;">
          <iframe
            src="https://www.youtube.com/embed/${escapeHtml(ctx.config.youtubeVideoId)}?rel=0"
            title="${escapeHtml(t.demoTitle)}"
            loading="lazy"
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
        <div class="video-foot">
          <a href="https://www.youtube.com/watch?v=${escapeHtml(ctx.config.youtubeVideoId)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.demoOpenYt)}</a>
        </div>
      </div>
    </div>
  </section>` : ''}

  <section class="section" id="safety">
    <div class="container">
      <div class="section-head">
        <div class="section-eyebrow">${escapeHtml(t.safetyEyebrow)}</div>
        <h2>${escapeHtml(t.safetyTitle)}</h2>
        <p>${escapeHtml(t.safetySub)}</p>
      </div>
      <div class="grid-3">${tiersHtml}</div>
      <div class="boundary-box">
        <h3>${escapeHtml(t.boundaryTitle)}</h3>
        <p>${escapeHtml(t.boundarySub)}</p>
        <ul class="boundary-list">${t.boundaryItems.map((it) => `<li>${escapeHtml(it)}</li>`).join('')}</ul>
      </div>
    </div>
  </section>

  <section class="section" id="features">
    <div class="container">
      <div class="section-head">
        <div class="section-eyebrow">${escapeHtml(t.devEyebrow)}</div>
        <h2>${escapeHtml(t.devTitle)}</h2>
        <p>${escapeHtml(t.devSub)}</p>
      </div>
      <div class="grid-2">${devCardsHtml}</div>
    </div>
  </section>

  <section class="section" id="pricing">
    <div class="container">
      <div class="section-head">
        <div class="section-eyebrow">${escapeHtml(t.pricingEyebrow)}</div>
        <h2>${escapeHtml(t.pricingTitle)}</h2>
        <p>${escapeHtml(t.pricingSub)}</p>
      </div>
      <div class="grid-3">${plansHtml}</div>
      <div style="margin-top:24px">
        <a class="pill pill-primary" href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.ctaMain)}</a>
      </div>
    </div>
  </section>

  ${guides.length ? `<section class="section" id="guides">
    <div class="container">
      <div class="section-head">
        <div class="section-eyebrow">${escapeHtml(t.guidesEyebrow)}</div>
        <h2>${escapeHtml(t.guidesTitle)}</h2>
        <p>${escapeHtml(t.guidesSub)}</p>
      </div>
      <div class="grid-2">${guidesCardsHtml}</div>
      <div style="margin-top:22px"><a class="pill pill-secondary" href="${escapeHtml(guidesHref)}">${escapeHtml(t.allGuides)}</a></div>
    </div>
  </section>` : ''}

  <section class="section" id="faq">
    <div class="container">
      <div class="section-head">
        <div class="section-eyebrow">${escapeHtml(t.faqEyebrow)}</div>
        <h2>${escapeHtml(t.faqTitle)}</h2>
      </div>
      <div class="faq-list">${faqsHtml}</div>
    </div>
  </section>`;

  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CleanBit: Disk Space Cleaner',
    softwareVersion: '1.0.1',
    operatingSystem: 'macOS 15+',
    applicationCategory: 'UtilitiesApplication',
    inLanguage: ['en', 'zh-Hans', 'zh-Hant', 'ja', 'ko', 'fr', 'de', 'es', 'ru'],
    downloadUrl: ctx.appStoreUrl('website'),
    url: ctx.absUrl(meta.home),
    image: ctx.absUrl('/assets/icon.png'),
    screenshot: ctx.absUrl(`/assets/screens/${screenPrefix}-smart-scan.webp`),
    description: t.heroSub,
    offers: [
      { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free scan and first 2 cleans free' },
      { '@type': 'Offer', price: '4.99', priceCurrency: 'USD', description: 'Monthly subscription' },
      { '@type': 'Offer', price: '19.99', priceCurrency: 'USD', description: 'Yearly subscription' },
      { '@type': 'Offer', price: '29.99', priceCurrency: 'USD', description: 'One-time lifetime purchase' }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const videoLd = ctx.config.youtubeVideoId
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: t.demoTitle,
        description: t.demoSub,
        thumbnailUrl: [
          `https://i.ytimg.com/vi/${ctx.config.youtubeVideoId}/hqdefault.jpg`,
          ctx.absUrl('/assets/og-cover.png')
        ],
        uploadDate: '2026-11-21',
        contentUrl: `https://www.youtube.com/watch?v=${ctx.config.youtubeVideoId}`,
        embedUrl: `https://www.youtube.com/embed/${ctx.config.youtubeVideoId}`
      }
    : null;

  return renderLayout({
    lang,
    title: t.homeTitle,
    description: t.heroSub,
    canonicalPath: meta.home,
    altLinks: { en: '/', zh: '/zh/', ja: '/ja/', de: '/de/' },
    jsonLd: [softwareLd, faqLd, videoLd],
    bodyHtml,
    ctx
  });
}

export function renderGuidesIndex(lang, guides, ctx) {
  const meta = LANG_META[lang] || LANG_META.en;
  const t = COPY[lang] || COPY.en;
  const homeHref = ctx.relUrl(meta.home);

  const cardsHtml = guides.length
    ? `<div class="grid-2">${guides
        .map(
          (g) => `<a class="card guide-card" href="${escapeHtml(ctx.relUrl(g.urlPath))}">
            <div>
              <div class="guide-meta">
                <span>${escapeHtml(g.category)}</span>
                <span>·</span>
                <span>${escapeHtml(t.updatedLabel)} ${escapeHtml(g.updated)}</span>
                <span>·</span>
                <span>${g.readingTime} ${escapeHtml(t.minRead)}</span>
              </div>
              <h3 style="margin-top:8px">${escapeHtml(g.title)}</h3>
              <p style="margin-top:8px">${escapeHtml(g.description)}</p>
            </div>
            <span class="guide-more">${escapeHtml(t.readGuide)}</span>
          </a>`
        )
        .join('')}</div>`
    : `<div class="card">
        <p>${escapeHtml(t.guidesEmpty)}</p>
        <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
          <a class="pill pill-secondary pill-sm" href="${escapeHtml(ctx.relUrl('/guides/'))}">English Guides →</a>
          <a class="pill pill-primary pill-sm" href="${escapeHtml(ctx.relUrl('/tools/disk-check/'))}">${escapeHtml(t.nav.tool)} →</a>
        </div>
      </div>`;

  const bodyHtml = `
  <section class="article-shell">
    <div class="container">
      <div class="breadcrumbs">
        <a href="${escapeHtml(homeHref)}">CleanBit</a>
        <span>/</span>
        <span>${escapeHtml(t.nav.guides)}</span>
      </div>
      <div class="section-head" style="margin-bottom:32px">
        <div class="section-eyebrow">${escapeHtml(t.guidesEyebrow)}</div>
        <h1 style="margin:0 0 12px;font-size:clamp(28px,4vw,40px);letter-spacing:-0.025em">${escapeHtml(t.guidesIndexTitle)}</h1>
        <p>${escapeHtml(t.guidesIndexSub)}</p>
      </div>
      ${cardsHtml}
    </div>
  </section>`;

  return renderLayout({
    lang,
    title: `${t.guidesIndexTitle} — CleanBit`,
    description: t.guidesIndexSub,
    canonicalPath: meta.guides,
    altLinks: { en: '/guides/', zh: '/zh/guides/', ja: '/ja/guides/', de: '/de/guides/' },
    activeNav: 'guides',
    bodyHtml,
    ctx
  });
}

export function renderGuideDetail(guide, allGuides, ctx) {
  const lang = guide.lang;
  const meta = LANG_META[lang] || LANG_META.en;
  const t = COPY[lang] || COPY.en;
  const homeHref = ctx.relUrl(meta.home);
  const guidesHref = ctx.relUrl(meta.guides);
  const appStoreHref = ctx.appStoreUrl('website-guides');
  const authorName = (ctx.config.author && ctx.config.author[lang]) || ctx.config.author.en;

  const tocCardHtml = guide.toc.length
    ? `<nav class="toc-card" aria-label="Table of contents">
        <div class="toc-title">${escapeHtml(t.tocTitle)}</div>
        <ul class="toc-list">
          ${guide.toc.map((item) => `<li class="toc-h${item.level}"><a href="#${escapeHtml(item.id)}">${escapeHtml(item.text)}</a></li>`).join('')}
        </ul>
      </nav>`
    : '';

  const tocHtml = `<aside class="toc-aside" aria-label="Guide sidebar">
      ${tocCardHtml}
      <div class="toc-cta">
        <div class="toc-cta-head">
          <img src="${escapeHtml(ctx.relUrl('/assets/icon.png'))}" alt="CleanBit icon" width="28" height="28" />
          <div>
            <div class="toc-cta-eyebrow">${escapeHtml(t.tocCtaEyebrow)}</div>
            <div class="toc-cta-title">${escapeHtml(t.tocCtaTitle)}</div>
          </div>
        </div>
        <p class="toc-cta-body">${escapeHtml(t.tocCtaBody)}</p>
        <a class="pill pill-primary pill-sm toc-cta-btn" href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.tocCtaButton)}</a>
        <div class="toc-cta-meta">${escapeHtml(t.tocCtaMeta)}</div>
      </div>
    </aside>`;

  const related = allGuides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const relatedHtml = related.length
    ? `<section style="margin-top:44px">
        <h2 style="font-size:20px;margin:0 0 16px">${escapeHtml(t.relatedTitle)}</h2>
        <div class="grid-2">
          ${related
            .map(
              (r) => `<a class="card guide-card" href="${escapeHtml(ctx.relUrl(r.urlPath))}">
                <div>
                  <div class="guide-meta"><span>${escapeHtml(r.category)}</span><span>·</span><span>${r.readingTime} ${escapeHtml(t.minRead)}</span></div>
                  <h3 style="margin-top:6px;font-size:16px">${escapeHtml(r.title)}</h3>
                </div>
                <span class="guide-more">${escapeHtml(t.readGuide)}</span>
              </a>`
            )
            .join('')}
        </div>
      </section>`
    : '';

  const disclosureText = guide.aiDisclosure || t.disclosureDefault;

  const bodyHtml = `
  <article class="article-shell">
    <div class="container">
      <div class="breadcrumbs">
        <a href="${escapeHtml(homeHref)}">CleanBit</a>
        <span>/</span>
        <a href="${escapeHtml(guidesHref)}">${escapeHtml(t.nav.guides)}</a>
        <span>/</span>
        <span>${escapeHtml(guide.category)}</span>
      </div>
      <div class="article-grid">
        <div>
          <header class="article-header">
            <div class="badge">${escapeHtml(guide.category)}</div>
            <h1>${escapeHtml(guide.title)}</h1>
            <p class="article-lead">${escapeHtml(guide.description)}</p>
            <div class="article-meta">
              <span>${escapeHtml(authorName)}</span>
              <span>·</span>
              <span>${escapeHtml(t.updatedLabel)} ${escapeHtml(guide.updated)}</span>
              <span>·</span>
              <span>${guide.readingTime} ${escapeHtml(t.minRead)}</span>
            </div>
          </header>

          <div class="prose">
            ${guide.html}
          </div>

          <aside class="article-cta">
            <div>
              <h3>${escapeHtml(t.articleCtaTitle)}</h3>
              <p>${escapeHtml(t.articleCtaSub)}</p>
            </div>
            <a class="pill pill-primary" href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.ctaMain)}</a>
          </aside>

          <p class="disclosure-note">${escapeHtml(disclosureText)}</p>
          ${relatedHtml}
        </div>
        ${tocHtml}
      </div>
    </div>
  </article>`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.updated,
    inLanguage: t.langAttr,
    author: { '@type': 'Organization', name: authorName, url: ctx.absUrl('/') },
    publisher: {
      '@type': 'Organization',
      name: 'CleanBit',
      logo: { '@type': 'ImageObject', url: ctx.absUrl('/assets/icon.png') }
    },
    mainEntityOfPage: ctx.absUrl(guide.urlPath),
    image: ctx.absUrl(guide.image || '/assets/og-cover.png')
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'CleanBit', item: ctx.absUrl(meta.home) },
      { '@type': 'ListItem', position: 2, name: t.nav.guides, item: ctx.absUrl(meta.guides) },
      { '@type': 'ListItem', position: 3, name: guide.title, item: ctx.absUrl(guide.urlPath) }
    ]
  };

  const jsonLd = [articleLd, breadcrumbLd];
  if (guide.faqs.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    });
  }

  const altLinks = {
    en: lang === 'en' ? guide.urlPath : '/guides/',
    zh: lang === 'zh' ? guide.urlPath : '/zh/guides/',
    ja: lang === 'ja' ? guide.urlPath : '/ja/guides/',
    de: lang === 'de' ? guide.urlPath : '/de/guides/'
  };
  if (guide.altPath && lang === 'en') altLinks.zh = guide.altPath;
  if (guide.altPath && lang === 'zh') altLinks.en = guide.altPath;

  return renderLayout({
    lang,
    title: `${guide.title} — CleanBit`,
    description: guide.description,
    canonicalPath: guide.urlPath,
    altLinks,
    ogImage: guide.image || '/assets/og-cover.png',
    ogType: 'article',
    activeNav: 'guides',
    jsonLd,
    bodyHtml,
    ctx
  });
}

export function renderDiskCheckTool(ctx) {
  const appStoreHref = ctx.appStoreUrl('website-tools');
  const stacks = [
    {
      id: 'xcode',
      checked: true,
      title: 'Xcode & iOS Simulators',
      desc: 'DerivedData, iOS DeviceSupport, CoreSimulator devices, SwiftUI Previews'
    },
    {
      id: 'js',
      checked: true,
      title: 'Node.js & JS Package Caches',
      desc: 'Old node_modules in your home folder plus npm, Yarn, pnpm, and Bun caches'
    },
    {
      id: 'ai',
      checked: true,
      title: 'AI Coding Tools & Local Models',
      desc: 'Claude Code, Codex, Claude desktop cache, Ollama, LM Studio, Hugging Face'
    },
    {
      id: 'caches',
      checked: true,
      title: 'User Caches, Logs & Old Installers',
      desc: 'Top folders in ~/Library/Caches, ~/Library/Logs, and .dmg / .pkg files in ~/Downloads'
    },
    {
      id: 'python',
      checked: false,
      title: 'Python, Rust, Go & SwiftPM',
      desc: '.venv folders, pip / uv caches, Cargo, Go module cache, and SwiftPM cache'
    },
    {
      id: 'docker',
      checked: false,
      title: 'Docker Desktop & Homebrew',
      desc: 'Docker virtual disk image (Docker.raw) and Homebrew download cache'
    }
  ];

  const checksHtml = stacks
    .map(
      (s) => `<label class="stack-option${s.checked ? ' is-checked' : ''}" data-stack-label>
        <input type="checkbox" value="${s.id}"${s.checked ? ' checked' : ''} data-stack-input />
        <div>
          <strong>${escapeHtml(s.title)}</strong>
          <span>${escapeHtml(s.desc)}</span>
        </div>
      </label>`
    )
    .join('');

  const bodyHtml = `
  <section class="article-shell">
    <div class="container" style="max-width:920px">
      <div class="breadcrumbs">
        <a href="${escapeHtml(ctx.relUrl('/'))}">CleanBit</a>
        <span>/</span>
        <span>Disk Check</span>
      </div>
      <div class="section-head" style="max-width:none;margin-bottom:24px">
        <div class="section-eyebrow">Read-Only macOS Terminal Audit</div>
        <h1 style="margin:0 0 12px;font-size:clamp(28px,4vw,42px);letter-spacing:-0.025em">Mac Developer Disk Space Audit Generator</h1>
        <p>Pick the stacks you use on your Mac and copy a 100% read-only Terminal command. It inspects folder sizes with <code>du</code> and <code>find</code> and never deletes, moves, or modifies any file.</p>
      </div>

      <div class="tool-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
          <strong style="font-size:15px">1. Select what to inspect in your home folder</strong>
          <div class="tool-actions">
            <button type="button" class="pill pill-secondary pill-sm" id="tool-select-all">Select All</button>
            <button type="button" class="pill pill-secondary pill-sm" id="tool-reset">Default</button>
          </div>
        </div>
        <div class="tool-checks">${checksHtml}</div>

        <div class="tool-controls">
          <strong style="font-size:15px">2. Copy &amp; run in macOS Terminal (read-only)</strong>
          <button type="button" class="pill pill-primary pill-sm" id="tool-copy-btn">Copy Audit Script</button>
        </div>
        <div class="tool-code">
          <div class="tool-code-head">
            <span>zsh · read-only (zero delete commands)</span>
            <span id="tool-count">4 stacks selected</span>
          </div>
          <pre><code id="tool-output"></code></pre>
        </div>

        <div class="tool-notes">
          <div class="tool-note">
            <strong>Recommended to rebuild</strong>
            Xcode DerivedData, package manager caches, and app caches rebuild automatically when reopened.
          </div>
          <div class="tool-note">
            <strong>Review before removing</strong>
            Old <code>node_modules</code>, <code>.venv</code>, installers, and AI session logs should be checked by date and moved to Trash.
          </div>
          <div class="tool-note">
            <strong>Manage with native tools</strong>
            Local AI models (Ollama, Hugging Face), hard-linked pnpm store, and Docker disk images are best cleaned with their own CLI.
          </div>
        </div>
      </div>

      <aside class="article-cta">
        <div>
          <h3>Want to inspect and clean visually instead of Terminal?</h3>
          <p>CleanBit runs inside the macOS App Sandbox with no root privileges. Every item explains what it is and what happens if you remove it—scanning and your first 2 cleans are free.</p>
        </div>
        <a class="pill pill-primary" href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">Download on the Mac App Store</a>
      </aside>

      <section style="margin-top:44px">
        <h2 style="font-size:20px;margin:0 0 16px">Deep-dive cleanup guides</h2>
        <div class="grid-2">
          <a class="card guide-card" href="${escapeHtml(ctx.relUrl('/guides/is-xcode-deriveddata-safe-to-delete/'))}">
            <div><h3>Is Xcode DerivedData Safe to Delete?</h3><p style="margin-top:6px">Real measurements across DerivedData, DeviceSupport, and Simulators with safe manual steps.</p></div>
            <span class="guide-more">Read guide →</span>
          </a>
          <a class="card guide-card" href="${escapeHtml(ctx.relUrl('/guides/how-to-find-and-delete-old-node-modules-on-mac/'))}">
            <div><h3>How to Find and Delete Old node_modules on a Mac</h3><p style="margin-top:6px">Audit hundreds of inactive project build folders without touching Git-tracked files.</p></div>
            <span class="guide-more">Read guide →</span>
          </a>
          <a class="card guide-card" href="${escapeHtml(ctx.relUrl('/guides/claude-code-cursor-codex-disk-space-mac/'))}">
            <div><h3>Claude Code, Cursor &amp; Codex Disk Space on Mac</h3><p style="margin-top:6px">Where AI coding agents store sessions, caches, and worktrees—and what is safe to prune.</p></div>
            <span class="guide-more">Read guide →</span>
          </a>
          <a class="card guide-card" href="${escapeHtml(ctx.relUrl('/guides/claude-code-worktrees-disk-space-mac/'))}">
            <div><h3>Claude Code Worktrees Filling Your Disk?</h3><p style="margin-top:6px">Inspect leftover Git worktrees and duplicate dependency trees cleanly.</p></div>
            <span class="guide-more">Read guide →</span>
          </a>
        </div>
      </section>
    </div>
  </section>`;

  const extraScript = `<script>
  (function(){
    var BLOCKS = {
      xcode: [
        'echo "\\n=== Xcode & iOS Simulators ==="',
        'du -sh ~/Library/Developer/Xcode/DerivedData ~/Library/Developer/Xcode/iOS\\\\ DeviceSupport ~/Library/Developer/CoreSimulator/Devices ~/Library/Developer/Xcode/UserData/Previews 2>/dev/null || true'
      ],
      js: [
        'echo "\\n=== Node.js / JS Package Caches & node_modules ==="',
        'du -sh ~/.npm ~/Library/Caches/Yarn ~/Library/pnpm/store ~/.bun/install/cache 2>/dev/null || true',
        'echo "Top node_modules folders (depth <= 5, skipping Library):"',
        'find ~ -maxdepth 5 \\\\( -path ~/Library -o -path ~/.Trash -o -path ~/Pictures -o -path ~/Movies -o -path ~/Music \\\\) -prune -o -type d -name node_modules -prune -print0 2>/dev/null | xargs -0 du -sh 2>/dev/null | sort -hr | head -n 15'
      ],
      ai: [
        'echo "\\n=== AI Coding Tools & Local Models ==="',
        'du -sh ~/.claude ~/.codex ~/Library/Application\\\\ Support/Claude/Cache ~/.ollama/models ~/.cache/lm-studio ~/.cache/huggingface 2>/dev/null || true'
      ],
      caches: [
        'echo "\\n=== Top User Caches, Logs & Installers ==="',
        'du -sh ~/Library/Caches/* 2>/dev/null | sort -hr | head -n 12',
        'du -sh ~/Library/Logs 2>/dev/null || true',
        'find ~/Downloads -maxdepth 2 -type f \\\\( -name "*.dmg" -o -name "*.pkg" \\\\) -exec du -sh {} + 2>/dev/null | sort -hr | head -n 10'
      ],
      python: [
        'echo "\\n=== Python, Rust, Go & SwiftPM Caches ==="',
        'du -sh ~/Library/Caches/pip ~/Library/Caches/uv ~/.cargo/registry ~/.cargo/git ~/go/pkg/mod ~/Library/Caches/org.swift.swiftpm 2>/dev/null || true',
        'find ~ -maxdepth 5 \\\\( -path ~/Library -o -path ~/.Trash \\\\) -prune -o -type d \\\\( -name .venv -o -name target -o -name .build \\\\) -prune -print0 2>/dev/null | xargs -0 du -sh 2>/dev/null | sort -hr | head -n 15'
      ],
      docker: [
        'echo "\\n=== Docker Desktop & Homebrew ==="',
        'du -sh ~/Library/Containers/com.docker.docker/Data/vms ~/Library/Caches/Homebrew 2>/dev/null || true'
      ]
    };
    var inputs = Array.from(document.querySelectorAll('[data-stack-input]'));
    var out = document.getElementById('tool-output');
    var countEl = document.getElementById('tool-count');
    var copyBtn = document.getElementById('tool-copy-btn');
    var selectAllBtn = document.getElementById('tool-select-all');
    var resetBtn = document.getElementById('tool-reset');

    function render() {
      var selected = [];
      inputs.forEach(function(inp){
        var label = inp.closest('[data-stack-label]');
        if (label) label.classList.toggle('is-checked', inp.checked);
        if (inp.checked) selected.push(inp.value);
      });
      if (countEl) countEl.textContent = selected.length + (selected.length === 1 ? ' stack selected' : ' stacks selected');
      if (!selected.length) {
        out.textContent = '# Select at least one stack above to generate a read-only audit command.';
        return;
      }
      var lines = [
        '# CleanBit Read-Only Mac Disk Space Audit (inspects sizes only — deletes nothing)',
        'df -h /'
      ];
      selected.forEach(function(id){
        if (BLOCKS[id]) lines = lines.concat([''].concat(BLOCKS[id]));
      });
      out.textContent = lines.join('\\n');
    }

    inputs.forEach(function(inp){ inp.addEventListener('change', render); });
    if (selectAllBtn) selectAllBtn.addEventListener('click', function(){ inputs.forEach(function(i){ i.checked = true; }); render(); });
    if (resetBtn) resetBtn.addEventListener('click', function(){
      var defaults = { xcode: true, js: true, ai: true, caches: true };
      inputs.forEach(function(i){ i.checked = !!defaults[i.value]; });
      render();
    });
    if (copyBtn) copyBtn.addEventListener('click', function(){
      if (!navigator.clipboard || !out) return;
      navigator.clipboard.writeText(out.textContent || '').then(function(){
        var old = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(function(){ copyBtn.textContent = old; }, 1600);
      });
    });
    render();
  })();
  </script>`;

  const webAppLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'CleanBit Mac Developer Disk Space Audit Generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'macOS',
    url: ctx.absUrl('/tools/disk-check/'),
    description: 'Generate safe, 100% read-only macOS Terminal commands to measure Xcode, node_modules, AI coding tools, and cache sizes without deleting any files.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
  };

  return renderLayout({
    lang: 'en',
    title: 'Mac Developer Disk Space Audit Generator (Read-Only) — CleanBit',
    description: 'Generate safe, 100% read-only macOS Terminal commands to inspect Xcode, node_modules, Claude Code, Codex, and cache sizes without deleting anything.',
    canonicalPath: '/tools/disk-check/',
    altLinks: { en: '/tools/disk-check/' },
    activeNav: 'tool',
    jsonLd: [webAppLd],
    bodyHtml,
    extraScript,
    ctx
  });
}

export function renderDocPage(page, ctx) {
  const bodyHtml = `
  <article class="article-shell">
    <div class="container">
      <div class="breadcrumbs">
        <a href="${escapeHtml(ctx.relUrl('/'))}">CleanBit</a>
        <span>/</span>
        <span>${escapeHtml(page.title)}</span>
      </div>
      <div style="max-width:780px">
        <div class="prose">
          ${page.html}
        </div>
      </div>
    </div>
  </article>`;

  return renderLayout({
    lang: 'en',
    title: `${page.title} — CleanBit`,
    description: page.description,
    canonicalPath: page.urlPath,
    altLinks: { en: page.urlPath },
    activeNav: page.slug === 'support' ? 'support' : '',
    bodyHtml,
    ctx
  });
}

export function render404(ctx) {
  const bodyHtml = `
  <section class="hero">
    <div class="container">
      <div class="badge">404</div>
      <h1>Page not found</h1>
      <p class="hero-sub">The page you’re looking for may have moved. Head back to CleanBit or browse our Mac storage guides.</p>
      <div class="hero-cta">
        <a class="pill pill-primary" href="${escapeHtml(ctx.relUrl('/'))}">Back to Home</a>
        <a class="pill pill-secondary" href="${escapeHtml(ctx.relUrl('/guides/'))}">Browse Guides</a>
      </div>
    </div>
  </section>`;

  return renderLayout({
    lang: 'en',
    title: 'Page Not Found — CleanBit',
    description: 'CleanBit Mac App Store disk space cleaner.',
    canonicalPath: '/404.html',
    bodyHtml,
    ctx
  });
}
