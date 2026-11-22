#!/usr/bin/env node
// CleanBit static website & guide generator (zero dependencies, Node >= 20).
// Usage: node build.mjs

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter, renderMarkdown, estimateReadingTime, extractFaqFromMarkdown, escapeHtml } from './src/markdown.mjs';
import { renderHome, renderGuidesIndex, renderGuideDetail, renderDocPage, render404 } from './src/templates.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'docs');
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));

const basePath = (config.basePath || '').replace(/\/+$/, '');
const origin = (config.origin || '').replace(/\/+$/, '');
const cssHash = crypto
  .createHash('sha256')
  .update(fs.readFileSync(path.join(ROOT, 'src/styles.css')))
  .digest('hex')
  .slice(0, 8);

const ctx = {
  config,
  cssVersion: cssHash,
  relUrl(p) {
    if (!p) return basePath + '/';
    if (/^https?:\/\//.test(p) || p.startsWith('mailto:') || p.startsWith('#')) return p;
    const clean = p.startsWith('/') ? p : '/' + p;
    return `${basePath}${clean}`;
  },
  absUrl(p) {
    const clean = p.startsWith('/') ? p : '/' + p;
    return `${origin}${basePath}${clean}`;
  },
  appStoreUrl(ct = 'website') {
    return `${config.appStoreBase}?pt=${config.providerToken}&ct=${encodeURIComponent(ct)}&mt=8`;
  }
};

function writePage(relFilePath, content) {
  const full = path.join(DIST, relFilePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
}

function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function loadGuides(dir, lang) {
  if (!fs.existsSync(dir)) return [];
  const guides = [];
  for (const file of fs.readdirSync(dir).sort()) {
    if (!file.endsWith('.md') || file.toLowerCase() === 'readme.md') continue;
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    if (meta.draft === true) continue;
    const { html, toc } = renderMarkdown(body, (u) => ctx.relUrl(u));
    const urlPath = lang === 'en' ? `/guides/${slug}/` : `/zh/guides/${slug}/`;
    const altPath = meta.alt_slug
      ? (lang === 'en' ? `/zh/guides/${meta.alt_slug}/` : `/guides/${meta.alt_slug}/`)
      : (lang === 'en' ? '/zh/guides/' : '/guides/');
    const date = String(meta.date || meta.updated || '2026-11-21');
    const updated = String(meta.updated || date);
    guides.push({
      slug,
      lang,
      title: String(meta.title || slug),
      description: String(meta.description || ''),
      targetQuery: String(meta.target_query || ''),
      category: String(meta.category || (lang === 'en' ? 'Mac Storage' : 'Mac 存储')),
      date,
      updated,
      image: meta.image ? String(meta.image) : '',
      aiDisclosure: meta.ai_disclosure ? String(meta.ai_disclosure) : '',
      urlPath,
      altPath,
      html,
      toc,
      faqs: extractFaqFromMarkdown(body),
      readingTime: estimateReadingTime(body, lang)
    });
  }
  return guides.sort((a, b) => (b.updated + b.slug).localeCompare(a.updated + a.slug));
}

function buildRss(lang, guides) {
  const siteUrl = ctx.absUrl(lang === 'en' ? '/' : '/zh/');
  const feedUrl = ctx.absUrl(lang === 'en' ? '/feed.xml' : '/zh/feed.xml');
  const title = lang === 'en' ? 'CleanBit Mac Storage Guides' : 'CleanBit Mac 存储清理指南';
  const desc = lang === 'en'
    ? 'Practical guides on freeing Mac disk space safely for developers and everyday users.'
    : '围绕 Mac 存储空间、Xcode、node_modules 与 AI 编程工具的实测清理指南。';

  const items = guides
    .map(
      (g) => `    <item>
      <title>${escapeHtml(g.title)}</title>
      <link>${escapeHtml(ctx.absUrl(g.urlPath))}</link>
      <guid isPermaLink="true">${escapeHtml(ctx.absUrl(g.urlPath))}</guid>
      <pubDate>${new Date(g.date + 'T00:00:00Z').toUTCString()}</pubDate>
      <description>${escapeHtml(g.description)}</description>
    </item>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeHtml(title)}</title>
    <link>${escapeHtml(siteUrl)}</link>
    <atom:link href="${escapeHtml(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeHtml(desc)}</description>
    <language>${lang === 'en' ? 'en-us' : 'zh-cn'}</language>
${items}
  </channel>
</rss>
`;
}

function buildSitemap(entries) {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${escapeHtml(ctx.absUrl(e.path))}</loc>
    <lastmod>${escapeHtml(e.lastmod)}</lastmod>
  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildLlmsTxt(enGuides, zhGuides) {
  const lines = [
    '# CleanBit: Disk Space Cleaner for macOS',
    '',
    '> Sandboxed Mac App Store disk cleaner for macOS 15+. Every item explains what it is and what happens if you remove it, and nothing is deleted until you confirm.',
    '',
    `- Official Site: ${ctx.absUrl('/')}`,
    `- Mac App Store: ${ctx.appStoreUrl('website')}`,
    ...(config.youtubeVideoId ? [`- Product Demo Video (YouTube): https://www.youtube.com/watch?v=${config.youtubeVideoId}`] : []),
    '- Requirements: macOS 15+, App Sandbox (no root, no background helper daemon)',
    '- Pricing: Free scanning & 2 free cleans; $4.99/mo, $19.99/yr, or $29.99 lifetime one-time purchase',
    '- Safety Model: Recommended caches rebuild automatically (deleted permanently by default, Trash optional); Review items, project build artifacts, manual selections, and uninstalled apps always move to Trash; Info Only items (local AI models, pnpm store, Docker disk image) are never deleted.',
    '',
    '## English Guides',
    ...enGuides.map((g) => `- [${g.title}](${ctx.absUrl(g.urlPath)}): ${g.description}`),
    '',
    '## Chinese Guides',
    ...zhGuides.map((g) => `- [${g.title}](${ctx.absUrl(g.urlPath)}): ${g.description}`),
    '',
    '## Documentation & Legal',
    `- [Support](${ctx.absUrl('/support/')})`,
    `- [Privacy Policy](${ctx.absUrl('/privacy/')})`,
    `- [Terms of Use](${ctx.absUrl('/terms/')})`,
    ''
  ];
  return lines.join('\n');
}

// Clean & rebuild dist/
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

// Static assets
copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));
fs.copyFileSync(path.join(ROOT, 'src/styles.css'), path.join(DIST, 'styles.css'));
// Preserve root verification / custom-domain files (e.g. Google Search Console google*.html, CNAME)
for (const entry of fs.readdirSync(ROOT)) {
  if (/^google[a-f0-9]+\.html$/i.test(entry) || entry === 'CNAME') {
    fs.copyFileSync(path.join(ROOT, entry), path.join(DIST, entry));
  }
}
writePage('.nojekyll', '');

// Load guides
const enGuides = loadGuides(path.join(ROOT, 'content/guides'), 'en');
const zhGuides = loadGuides(path.join(ROOT, 'content/zh/guides'), 'zh');

const today = new Date().toISOString().slice(0, 10);
const sitemapEntries = [];

// Homepages
writePage('index.html', renderHome('en', enGuides, ctx));
sitemapEntries.push({ path: '/', lastmod: today });
writePage('zh/index.html', renderHome('zh', zhGuides, ctx));
sitemapEntries.push({ path: '/zh/', lastmod: today });

// Guides index & details
writePage('guides/index.html', renderGuidesIndex('en', enGuides, ctx));
sitemapEntries.push({ path: '/guides/', lastmod: enGuides[0]?.updated || today });
for (const g of enGuides) {
  writePage(`guides/${g.slug}/index.html`, renderGuideDetail(g, enGuides, ctx));
  sitemapEntries.push({ path: g.urlPath, lastmod: g.updated });
}

writePage('zh/guides/index.html', renderGuidesIndex('zh', zhGuides, ctx));
sitemapEntries.push({ path: '/zh/guides/', lastmod: zhGuides[0]?.updated || today });
for (const g of zhGuides) {
  writePage(`zh/guides/${g.slug}/index.html`, renderGuideDetail(g, zhGuides, ctx));
  sitemapEntries.push({ path: g.urlPath, lastmod: g.updated });
}

// Legal & Support pages
const docPages = [
  { file: 'support.md', slug: 'support', title: 'Support', description: 'CleanBit troubleshooting, FAQ, and support contact.' },
  { file: 'privacy.md', slug: 'privacy', title: 'Privacy Policy', description: 'How CleanBit handles local files, permissions, and anonymous analytics.' },
  { file: 'terms.md', slug: 'terms', title: 'Terms of Use', description: 'CleanBit license, cleaning responsibility, and Mac App Store purchase terms.' }
];

for (const dp of docPages) {
  const full = path.join(ROOT, 'content/pages', dp.file);
  if (!fs.existsSync(full)) continue;
  const raw = fs.readFileSync(full, 'utf8');
  const { body } = parseFrontmatter(raw);
  const { html } = renderMarkdown(body, (u) => ctx.relUrl(u));
  const urlPath = `/${dp.slug}/`;
  writePage(`${dp.slug}/index.html`, renderDocPage({ ...dp, urlPath, html }, ctx));
  sitemapEntries.push({ path: urlPath, lastmod: today });
}

// 404, RSS, sitemap, robots, llms.txt
writePage('404.html', render404(ctx));
writePage('feed.xml', buildRss('en', enGuides));
writePage('zh/feed.xml', buildRss('zh', zhGuides));
writePage('sitemap.xml', buildSitemap(sitemapEntries));
writePage('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ctx.absUrl('/sitemap.xml')}\n`);
writePage('llms.txt', buildLlmsTxt(enGuides, zhGuides));
if (config.indexNowKey) {
  writePage(`${config.indexNowKey}.txt`, `${config.indexNowKey}\n`);
}

// Validation summary
const warnings = [];
for (const g of [...enGuides, ...zhGuides]) {
  if (!g.description) warnings.push(`Missing description: ${g.slug}`);
  if (g.description.length > 170) warnings.push(`Long description (${g.description.length} chars): ${g.slug}`);
}
console.log(`Built CleanBit site -> ${DIST}`);
console.log(`  Pages: ${sitemapEntries.length} (${enGuides.length} EN guides, ${zhGuides.length} ZH guides, ${docPages.length} docs)`);
console.log(`  Feeds: sitemap.xml, robots.txt, feed.xml, zh/feed.xml, llms.txt`);
if (warnings.length) {
  console.log('  Warnings:');
  for (const w of warnings) console.log('   -', w);
}
