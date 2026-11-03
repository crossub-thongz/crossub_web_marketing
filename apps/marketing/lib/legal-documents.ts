import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export type LegalDocumentId = 'privacy' | 'terms';

export type LegalSection = {
  id: string;
  name: string;
};

export type LegalDocument = {
  id: LegalDocumentId;
  title: string;
  category: string;
  kicker: string;
  intro: string;
  callout: string;
  status: string;
  html: string;
  toc: LegalSection[];
};

const DOCUMENTS: Record<
  LegalDocumentId,
  { file: string; title: string; category: string; kicker: string; intro: string; callout: string; status: string }
> = {
  privacy: {
    file: 'privacy.md',
    title: 'Privacy Policy',
    category: 'PRIVACY & DATA',
    kicker: 'OUR COMMITMENT TO YOU',
    intro:
      'Your information matters. Learn how CROSSUB protects your data across our software and services.',
    callout:
      'Our primary platform is hosted on AWS in Australia. Our AI features and optional services may involve additional authorised processing, as explained below.',
    status: 'Last updated: 1 November 2026',
  },
  terms: {
    file: 'terms.md',
    title: 'Terms of Use',
    category: 'USING CROSSUB',
    kicker: 'A BETTER WAY TO WORK',
    intro:
      'Simple, clear rules for using our free property management software, Cros AI, and optional services.',
    callout:
      'CROSSUB software is free to use. Inspection Only and Full Service are optional, separately authorised services with their own applicable fees and terms.',
    status: 'Last updated: 1 November 2026',
  },
};

function readLegalSource(file: string): string {
  const paths = [
    join(process.cwd(), 'content/legal', file),
    join(process.cwd(), 'apps/marketing/content/legal', file),
  ];
  for (const path of paths) {
    try {
      return readFileSync(path, 'utf8');
    } catch {
      // The dev server and the repo root use different working directories.
    }
  }
  throw new Error(`Missing legal document ${file}`);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inline(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\b(info@crossub\.com\.au)\b/g, '<a href="mailto:$1">$1</a>');
}

/** Same visible document as the legal preview. Draft header lines stay off the page. */
export function renderLegalMarkdown(source: string): { html: string; toc: LegalSection[] } {
  const lines = source.split(/\r?\n/);
  const toc: LegalSection[] = [];
  let html = '';
  let list: 'ul' | 'ol' | null = null;
  let para: string[] = [];

  const flush = () => {
    if (!para.length) return;
    const text = para.join(' ').trim();
    if (text) html += `<p>${inline(text)}</p>`;
    para = [];
  };
  const closeList = () => {
    if (!list) return;
    html += `</${list}>`;
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line === '---') {
      flush();
      closeList();
      continue;
    }
    if (/^# /.test(line)) continue;
    if (/^## /.test(line)) {
      flush();
      closeList();
      const name = line.slice(3).replace(/^\d+\.\s*/, '');
      const id = `s${toc.length}`;
      toc.push({ id, name });
      html += `<h3 id="${id}">${inline(line.slice(3))}</h3>`;
      continue;
    }
    if (/^\*\*Draft for legal/.test(line) || /^\*\*Effective date/.test(line) || /^\*\*Operator/.test(line)) {
      continue;
    }
    if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      flush();
      const desired = /^\d+\. /.test(line) ? 'ol' : 'ul';
      if (list !== desired) {
        closeList();
        list = desired;
        html += `<${list}>`;
      }
      html += `<li>${inline(line.replace(/^([-*]|\d+\.)\s+/, ''))}</li>`;
      continue;
    }
    closeList();
    if (/^\*\*Pre-publication verification/.test(line)) {
      flush();
      html += `<p class="draft-note">${inline(line)}</p>`;
      continue;
    }
    para.push(line.replace(/ {2}$/, ''));
  }
  flush();
  closeList();
  return { html, toc };
}

export function getLegalDocument(id: LegalDocumentId): LegalDocument {
  const config = DOCUMENTS[id];
  const rendered = renderLegalMarkdown(readLegalSource(config.file));
  return { id, ...config, ...rendered };
}
