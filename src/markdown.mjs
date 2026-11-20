// Zero-dependency Markdown + YAML frontmatter parser for CleanBit guides & pages.

export function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-') || 'section';
}

export function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return { meta: {}, body: normalized };
  }
  const endIdx = normalized.indexOf('\n---\n', 4);
  if (endIdx === -1) {
    return { meta: {}, body: normalized };
  }
  const fmText = normalized.slice(4, endIdx);
  const body = normalized.slice(endIdx + 5);
  const meta = {};
  let currentListKey = null;

  for (const line of fmText.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    if (currentListKey && /^\s*-\s+/.test(line)) {
      const val = line.replace(/^\s*-\s+/, '').trim().replace(/^["']|["']$/g, '');
      meta[currentListKey].push(val);
      continue;
    }

    const m = line.match(/^([a-zA-Z0-9_-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    currentListKey = null;

    if (val === '') {
      meta[key] = [];
      currentListKey = key;
    } else if (val.startsWith('[') && val.endsWith(']')) {
      meta[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else if (val === 'true') {
      meta[key] = true;
    } else if (val === 'false') {
      meta[key] = false;
    } else {
      meta[key] = val.replace(/^["']|["']$/g, '');
    }
  }
  return { meta, body };
}

export function estimateReadingTime(text, lang = 'en') {
  const plain = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*`_\-\[\]()]/g, ' ');
  if (lang === 'zh') {
    const cjk = (plain.match(/[\u4e00-\u9fff]/g) || []).length;
    const enWords = (plain.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g) || []).length;
    return Math.max(1, Math.round((cjk + enWords * 1.5) / 380));
  }
  const words = (plain.match(/\S+/g) || []).length;
  return Math.max(1, Math.round(words / 220));
}

export function extractFaqFromMarkdown(body) {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  let inFaq = false;
  let currentQ = null;
  let currentA = [];
  const faqs = [];

  const flush = () => {
    if (currentQ && currentA.length) {
      const answer = currentA
        .join(' ')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();
      if (answer) faqs.push({ q: currentQ, a: answer });
    }
    currentQ = null;
    currentA = [];
  };

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      flush();
      inFaq = /faq|frequently asked|常见问题/i.test(h2[1]);
      continue;
    }
    if (!inFaq) continue;
    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      flush();
      currentQ = h3[1].replace(/`([^`]+)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').trim();
      continue;
    }
    if (currentQ && line.trim() && !line.trim().startsWith('```')) {
      currentA.push(line.trim());
    }
  }
  flush();
  return faqs;
}

export function renderMarkdown(md, resolveUrl = (u) => u) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const toc = [];
  const usedIds = new Map();
  const out = [];

  const uniqueId = (base) => {
    const n = usedIds.get(base) || 0;
    usedIds.set(base, n + 1);
    return n === 0 ? base : `${base}-${n + 1}`;
  };

  const renderInline = (str) => {
    const tokens = [];
    let s = str.replace(/`([^`]+)`/g, (_, code) => {
      const idx = tokens.length;
      tokens.push(`<code>${escapeHtml(code)}</code>`);
      return `\u0000CODE${idx}\u0000`;
    });

    s = escapeHtml(s);

    // Images: ![alt](src)
    s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g, (_, alt, src, title) => {
      const url = src.startsWith('http://') || src.startsWith('https://') ? src : resolveUrl(src);
      const caption = title ? `<figcaption>${title}</figcaption>` : '';
      return `<figure class="prose-figure"><img src="${escapeHtml(url)}" alt="${alt}" loading="lazy" decoding="async" />${caption}</figure>`;
    });

    // Links: [text](href)
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
      const isExt = /^https?:\/\//.test(href);
      const finalHref = isExt || href.startsWith('mailto:') || href.startsWith('#') ? href : resolveUrl(href);
      const extAttrs = isExt ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escapeHtml(finalHref)}"${extAttrs}>${label}</a>`;
    });

    // Bold & italic
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>');

    // Restore inline code
    s = s.replace(/\u0000CODE(\d+)\u0000/g, (_, idx) => tokens[Number(idx)]);
    return s;
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Blank line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Fenced code block
    const fence = line.match(/^```([a-zA-Z0-9_-]*)\s*$/);
    if (fence) {
      const lang = fence[1] || '';
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      const rawCode = codeLines.join('\n');
      const langLabel = lang ? `<span class="code-lang">${escapeHtml(lang)}</span>` : '<span></span>';
      out.push(
        `<div class="code-block"><div class="code-head">${langLabel}<button type="button" class="code-copy" data-copy>Copy</button></div><pre><code>${escapeHtml(rawCode)}</code></pre></div>`
      );
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line.trim())) {
      out.push('<hr />');
      i++;
      continue;
    }

    // Headings
    const hm = line.match(/^(#{1,4})\s+(.+?)\s*#*$/);
    if (hm) {
      const level = hm[1].length;
      const rawText = hm[2].trim();
      const id = uniqueId(slugifyHeading(rawText));
      if (level === 2 || level === 3) {
        toc.push({ level, id, text: rawText.replace(/[`*_]/g, '') });
      }
      out.push(`<h${level} id="${id}">${renderInline(rawText)}<a class="heading-anchor" href="#${id}" aria-label="Link to section">#</a></h${level}>`);
      i++;
      continue;
    }

    // Blockquote / Callout
    if (line.trim().startsWith('>')) {
      const qLines = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        qLines.push(lines[i].replace(/^\s*>\s?/, ''));
        i++;
      }
      const first = qLines[0] || '';
      const alertMatch = first.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)$/i);
      if (alertMatch) {
        const kind = alertMatch[1].toLowerCase();
        const rest = [alertMatch[2], ...qLines.slice(1)].filter((l) => l.trim()).map((l) => `<p>${renderInline(l)}</p>`).join('');
        out.push(`<aside class="callout callout-${kind}"><div class="callout-title">${escapeHtml(kind.toUpperCase())}</div>${rest}</aside>`);
      } else {
        const inner = qLines.filter((l) => l.trim()).map((l) => `<p>${renderInline(l)}</p>`).join('');
        out.push(`<blockquote>${inner}</blockquote>`);
      }
      continue;
    }

    // Markdown Table
    if (line.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(lines[i + 1])) {
      const splitRow = (r) => r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
      const headers = splitRow(line);
      const aligns = splitRow(lines[i + 1]).map((c) => {
        if (c.startsWith(':') && c.endsWith(':')) return 'center';
        if (c.endsWith(':')) return 'right';
        return 'left';
      });
      i += 2;
      const bodyRows = [];
      while (i < lines.length && lines[i].trim() && lines[i].includes('|')) {
        bodyRows.push(splitRow(lines[i]));
        i++;
      }
      const ths = headers.map((h, idx) => `<th style="text-align:${aligns[idx] || 'left'}">${renderInline(h)}</th>`).join('');
      const trs = bodyRows
        .map((row) => `<tr>${headers.map((_, idx) => `<td style="text-align:${aligns[idx] || 'left'}">${renderInline(row[idx] || '')}</td>`).join('')}</tr>`)
        .join('');
      out.push(`<div class="table-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`);
      continue;
    }

    // Unordered list
    if (/^\s*[-*+]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) {
        items.push(`<li>${renderInline(lines[i].replace(/^\s*[-*+]\s+/, ''))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(`<li>${renderInline(lines[i].replace(/^\s*\d+\.\s+/, ''))}</li>`);
        i++;
      }
      out.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    // Standalone image line
    if (/^!\[[^\]]*\]\([^)]+\)\s*$/.test(line.trim())) {
      out.push(renderInline(line.trim()));
      i++;
      continue;
    }

    // Paragraph
    const pLines = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('```') &&
      !/^#{1,4}\s+/.test(lines[i]) &&
      !lines[i].trim().startsWith('>') &&
      !/^\s*[-*+]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i].trim())
    ) {
      pLines.push(lines[i].trim());
      i++;
    }
    out.push(`<p>${renderInline(pLines.join(' '))}</p>`);
  }

  return { html: out.join('\n'), toc };
}
