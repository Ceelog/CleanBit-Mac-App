import { escapeHtml } from './markdown.mjs';

const COPY = {
  en: {
    langAttr: 'en',
    localeName: 'English',
    switchLabel: '中文',
    nav: { features: 'Features', safety: 'Safety', guides: 'Guides', pricing: 'Pricing', support: 'Support' },
    ctaShort: 'Mac App Store',
    ctaMain: 'Download on the Mac App Store',
    ctaGuides: 'Read Storage Guides',
    heroBadge: 'macOS 15+ · Mac App Store · App Sandbox',
    heroTitleA: 'Free up Mac disk space.',
    heroTitleB: 'Know what you’re removing.',
    heroSub: 'CleanBit finds caches, logs, build artifacts, and app leftovers in your home folder. Every item explains what it is and what happens if you remove it—nothing is deleted until you confirm.',
    heroTrust: 'No root · No background helper · Free scan & 2 free cleans · One-time purchase option',
    tabs: [
      { id: 'smart-scan', label: 'Smart Scan', tint: 'brand', caption: 'Every group is labeled Recommended, Review, or Info Only, with plain-language impact notes and active apps blocked automatically.' },
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
        q: 'What macOS version is required?',
        a: 'CleanBit is built natively with SwiftUI for macOS 15 (Sequoia) and later.'
      }
    ],
    guidesIndexTitle: 'Mac Storage & Developer Cleanup Guides',
    guidesIndexSub: 'Honest, practical guides on Xcode caches, node_modules, AI coding tools, and macOS storage—with real measurements and manual commands.',
    articleCtaTitle: 'Prefer to inspect and clean visually?',
    articleCtaSub: 'CleanBit is a sandboxed Mac App Store utility. Every item shows what it is and what happens if you remove it—scanning and your first 2 cleans are free.',
    tocTitle: 'On this page',
    relatedTitle: 'Related guides',
    updatedLabel: 'Updated',
    minRead: 'min read',
    footerNote: 'macOS 15+ · Available exclusively on the Mac App Store.'
  },
  zh: {
    langAttr: 'zh-Hans',
    localeName: '简体中文',
    switchLabel: 'English',
    nav: { features: '功能', safety: '安全设计', guides: '指南', pricing: '定价', support: '支持' },
    ctaShort: 'Mac App Store',
    ctaMain: '前往 Mac App Store 下载',
    ctaGuides: '阅读 Mac 空间清理指南',
    heroBadge: 'macOS 15+ · Mac App Store · App 沙盒',
    heroTitleA: '释放 Mac 磁盘空间，',
    heroTitleB: '删之前清楚知道删的是什么。',
    heroSub: 'CleanBit 在你授权的个人文件夹里找出缓存、日志、项目构建产物和卸载残留。每一项都写明是什么、删了有什么影响，你确认之前什么都不删。',
    heroTrust: '不要 root · 不装后台 helper · 扫描免费、前 2 次清理免费 · 支持一次买断',
    tabs: [
      { id: 'smart-scan', label: '智能扫描', tint: 'brand', caption: '结果分为「建议清理」「需要确认」「仅展示」三类，每一项写明删除影响，正在运行的应用缓存自动锁定。' },
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
        q: '支持哪些 macOS 版本？',
        a: 'CleanBit 使用 SwiftUI 原生开发，支持 macOS 15 及以上版本。'
      }
    ],
    guidesIndexTitle: 'Mac 磁盘空间与开发者清理指南',
    guidesIndexSub: '围绕 Xcode 缓存、node_modules、AI 编程工具与 macOS 存储占用的实测指南，提供完整手动命令。',
    articleCtaTitle: '想可视化查看每一项、确认后再安全清理？',
    articleCtaSub: 'CleanBit 是 Mac App Store 里的沙盒磁盘清理工具：每一项都写明是什么和删除影响，扫描和前 2 次清理免费。',
    tocTitle: '本文目录',
    relatedTitle: '相关指南',
    updatedLabel: '更新于',
    minRead: '分钟阅读',
    footerNote: 'macOS 15+ · 仅在 Mac App Store 上架。'
  }
};

export function renderLayout({ lang = 'en', title, description, canonicalPath, altPath, ogImage, ogType = 'website', jsonLd = [], activeNav = '', bodyHtml, ctx }) {
  const t = COPY[lang];
  const fullCanonical = ctx.absUrl(canonicalPath);
  const enUrl = lang === 'en' ? fullCanonical : (altPath ? ctx.absUrl(altPath) : ctx.absUrl('/'));
  const zhUrl = lang === 'zh' ? fullCanonical : (altPath ? ctx.absUrl(altPath) : ctx.absUrl('/zh/'));
  const switchHref = altPath ? ctx.relUrl(altPath) : ctx.relUrl(lang === 'en' ? '/zh/' : '/');
  const homeHref = ctx.relUrl(lang === 'en' ? '/' : '/zh/');
  const guidesHref = ctx.relUrl(lang === 'en' ? '/guides/' : '/zh/guides/');
  const appStoreHref = ctx.appStoreUrl(activeNav === 'guides' ? 'website-guides' : 'website');
  const ogImgAbs = ctx.absUrl(ogImage || '/assets/og-cover.png');

  const ldScripts = jsonLd
    .filter(Boolean)
    .map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join('\n  ');

  const gaSnippet = ctx.config.gaMeasurementId
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${escapeHtml(ctx.config.gaMeasurementId)}"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${escapeHtml(ctx.config.gaMeasurementId)}');</script>`
    : '';

  return `<!DOCTYPE html>
<html lang="${t.langAttr}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${escapeHtml(fullCanonical)}" />
  <link rel="alternate" hreflang="en" href="${escapeHtml(enUrl)}" />
  <link rel="alternate" hreflang="zh-Hans" href="${escapeHtml(zhUrl)}" />
  <link rel="alternate" hreflang="x-default" href="${escapeHtml(enUrl)}" />
  <link rel="icon" type="image/png" href="${escapeHtml(ctx.relUrl('/assets/favicon.png'))}" />
  <link rel="apple-touch-icon" href="${escapeHtml(ctx.relUrl('/assets/icon.png'))}" />
  <link rel="alternate" type="application/rss+xml" title="CleanBit Guides (${t.localeName})" href="${escapeHtml(ctx.absUrl(lang === 'en' ? '/feed.xml' : '/zh/feed.xml'))}" />
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
  <link rel="stylesheet" href="${escapeHtml(ctx.relUrl('/styles.css'))}" />
  ${ldScripts}
  ${gaSnippet}
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${escapeHtml(homeHref)}">
        <img src="${escapeHtml(ctx.relUrl('/assets/icon.png'))}" alt="CleanBit icon" width="28" height="28" />
        <span>CleanBit</span>
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="${escapeHtml(homeHref)}#features">${t.nav.features}</a>
        <a href="${escapeHtml(homeHref)}#safety">${t.nav.safety}</a>
        <a href="${escapeHtml(guidesHref)}" class="${activeNav === 'guides' ? 'active' : ''}">${t.nav.guides}</a>
        <a href="${escapeHtml(homeHref)}#pricing">${t.nav.pricing}</a>
        <a href="${escapeHtml(ctx.relUrl('/support/'))}" class="${activeNav === 'support' ? 'active' : ''}">${t.nav.support}</a>
      </nav>
      <div class="header-actions">
        <a class="lang-switch" href="${escapeHtml(switchHref)}" hreflang="${lang === 'en' ? 'zh-Hans' : 'en'}">${t.switchLabel}</a>
        <a class="pill pill-primary pill-sm" href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">${t.ctaShort}</a>
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
        <a href="${escapeHtml(guidesHref)}">${t.nav.guides}</a>
        <a href="${escapeHtml(ctx.relUrl('/support/'))}">${t.nav.support}</a>
        <a href="${escapeHtml(ctx.relUrl('/privacy/'))}">Privacy</a>
        <a href="${escapeHtml(ctx.relUrl('/terms/'))}">Terms</a>
        <a href="${escapeHtml(ctx.relUrl(lang === 'en' ? '/feed.xml' : '/zh/feed.xml'))}">RSS</a>
        <a href="${escapeHtml(ctx.config.repoUrl)}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${escapeHtml(appStoreHref)}" target="_blank" rel="noopener noreferrer">Mac App Store</a>
      </div>
    </div>
  </footer>

  <script>
  (function(){
    // Interactive module-tinted screenshot switcher
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
    // One-click code block copy
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
</body>
</html>`;
}

export function renderHome(lang, guides, ctx) {
  const t = COPY[lang];
  const appStoreHref = ctx.appStoreUrl('website');
  const guidesHref = ctx.relUrl(lang === 'en' ? '/guides/' : '/zh/guides/');
  const screenPrefix = lang === 'en' ? 'en' : 'zh';
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
        <a class="pill pill-secondary" href="${escapeHtml(guidesHref)}">${escapeHtml(t.ctaGuides)}</a>
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
    operatingSystem: 'macOS 15+',
    applicationCategory: 'UtilitiesApplication',
    downloadUrl: ctx.appStoreUrl('website'),
    url: ctx.absUrl(lang === 'en' ? '/' : '/zh/'),
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

  return renderLayout({
    lang,
    title: lang === 'en'
      ? 'CleanBit — Sandboxed Mac App Store Disk Space Cleaner'
      : 'CleanBit — Mac App Store 沙盒磁盘清理工具，看得见删什么',
    description: t.heroSub,
    canonicalPath: lang === 'en' ? '/' : '/zh/',
    altPath: lang === 'en' ? '/zh/' : '/',
    jsonLd: [softwareLd, faqLd],
    bodyHtml,
    ctx
  });
}

export function renderGuidesIndex(lang, guides, ctx) {
  const t = COPY[lang];
  const homeHref = ctx.relUrl(lang === 'en' ? '/' : '/zh/');

  const cardsHtml = guides
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
    .join('');

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
      <div class="grid-2">${cardsHtml}</div>
    </div>
  </section>`;

  return renderLayout({
    lang,
    title: `${t.guidesIndexTitle} — CleanBit`,
    description: t.guidesIndexSub,
    canonicalPath: lang === 'en' ? '/guides/' : '/zh/guides/',
    altPath: lang === 'en' ? '/zh/guides/' : '/guides/',
    activeNav: 'guides',
    bodyHtml,
    ctx
  });
}

export function renderGuideDetail(guide, allGuides, ctx) {
  const lang = guide.lang;
  const t = COPY[lang];
  const homeHref = ctx.relUrl(lang === 'en' ? '/' : '/zh/');
  const guidesHref = ctx.relUrl(lang === 'en' ? '/guides/' : '/zh/guides/');
  const appStoreHref = ctx.appStoreUrl('website-guides');

  const tocHtml = guide.toc.length
    ? `<aside class="toc-aside" aria-label="Table of contents">
        <div class="toc-title">${escapeHtml(t.tocTitle)}</div>
        <ul class="toc-list">
          ${guide.toc.map((item) => `<li class="toc-h${item.level}"><a href="#${escapeHtml(item.id)}">${escapeHtml(item.text)}</a></li>`).join('')}
        </ul>
      </aside>`
    : '';

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

  const disclosureText =
    guide.aiDisclosure ||
    (lang === 'en'
      ? 'Written by the CleanBit developer with AI assistance. All measurements were taken on a real developer Mac.'
      : '本文由 CleanBit 开发者借助 AI 整理，数据为作者在一台开发用 Mac 上实测。');

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
              <span>${escapeHtml(ctx.config.author[lang])}</span>
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
    author: { '@type': 'Organization', name: ctx.config.author[lang], url: ctx.absUrl('/') },
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
      { '@type': 'ListItem', position: 1, name: 'CleanBit', item: ctx.absUrl(lang === 'en' ? '/' : '/zh/') },
      { '@type': 'ListItem', position: 2, name: t.nav.guides, item: ctx.absUrl(lang === 'en' ? '/guides/' : '/zh/guides/') },
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

  return renderLayout({
    lang,
    title: `${guide.title} — CleanBit`,
    description: guide.description,
    canonicalPath: guide.urlPath,
    altPath: guide.altPath,
    ogImage: guide.image || '/assets/og-cover.png',
    ogType: 'article',
    activeNav: 'guides',
    jsonLd,
    bodyHtml,
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
    altPath: '/zh/',
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
