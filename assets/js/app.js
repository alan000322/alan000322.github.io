import { data } from './content.js';

const root = document.documentElement;
const q = new URLSearchParams(location.search);
const lang = root.dataset.lang;
const track = root.dataset.track;
const pdfMode = root.dataset.pdf === 'true';
const resumeParams = new URLSearchParams(location.search);
resumeParams.delete('pdf');
const resumeQuery = resumeParams.toString();
const resumeUrl = `alan000322.github.io/${resumeQuery ? `?${resumeQuery}` : ''}`;

// No photo by default. Chinese can opt in with ?photo=formal|talk; English never shows one.
const photoParam = q.get('photo');
const photoKey = !pdfMode && lang === 'zh' && data.photos[photoParam] ? photoParam : null;
const photo = photoKey ? data.photos[photoKey] : null;
root.dataset.layout = photo ? 'split' : 'single';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- helpers ---------- */

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Localised string: plain string, or { zh, en }.
const pdfValue = (v) => (pdfMode && v && typeof v === 'object' && v.pdf !== undefined ? v.pdf : v);
const t = (v) => {
  v = pdfValue(v);
  return v == null ? '' : typeof v === 'string' ? v : (v[lang] ?? v.zh ?? '');
};

// Per-track value: { tech, ai, media, startup, default }.
const tv = (v) => (v && (v[track] !== undefined || v.default !== undefined) ? v[track] ?? v.default : v);

// Inline markup after escaping: **bold** only.
const md = (s) => esc(t(s)).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const inTrack = (x) =>
  (!x.tracks || x.tracks.includes(track)) &&
  (!pdfMode || x.pdf !== false) &&
  (!pdfMode || !x.pdfTracks || x.pdfTracks.includes(track));
const byRank = (a, b) => (a.rank?.[track] ?? a.rank?.default ?? 50) - (b.rank?.[track] ?? b.rank?.default ?? 50);
const list = (xs) => (xs || []).filter(inTrack).sort(byRank);

const L = (key) => t(data.labels[key]);
const period = (p, note) => (p ? `<span class="period"><span>${esc(t(p))}</span>${note ? `<small class="period__note">${esc(t(note))}</small>` : ''}</span>` : '');
const contactIcon = (name) => ({
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 9.2v8.6M6.2 6.2v.1M10.2 17.8v-8.6m0 3.7c.7-2.3 6.8-3.3 6.8 1.9v3"/></svg>',
  writing: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM7 8h4v4H7zM14 8h3M14 11h3M7 15h10"/></svg>',
  scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l9-5 9 5-9 5-9-5zM6.5 11v5c3.7 2.7 7.3 2.7 11 0v-5M21 9v6"/></svg>',
}[name] || '');
const externalLinkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M18 13v5H6V6h5"/></svg>';
// Internal pages keep the current ?lang / ?track; external ones open in a new tab.
const extLink = (href) => {
  if (!href) return '';
  const external = /^https?:/.test(href);
  const url = external ? href : href + location.search;
  return ` <a class="more" href="${esc(url)}"${external ? ' target="_blank" rel="noopener"' : ''} aria-label="${esc(L('more'))}">${externalLinkIcon}</a>`;
};

const section = (key, body, cls = '') =>
  body ? `<section class="sec sec--${key} ${cls}" data-reveal><h2 class="sec__h">${esc(L(key))}</h2><div class="sec__b">${body}</div></section>` : '';

/* ---------- blocks ---------- */

function identity() {
  const p = data.profile;
  const contact = p.contact
    .filter((c) => (!c.lang || c.lang === lang) && (!pdfMode || c.icon === 'email'))
    .map((c) => `<li><a href="${esc(c.href)}" aria-label="${esc(t(c.label))}: ${esc(t(c.text))}"${c.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener"'}><span class="contact__icon">${contactIcon(c.icon)}</span><span class="v">${esc(t(c.text))}</span></a></li>`)
    .join('');
  const altName = lang === 'zh' ? `<span class="id__alt">${esc(p.name.en)}</span>` : '';
  const img = photo
    ? `<figure class="id__photo id__photo--${photoKey}"><img src="${esc(photo.src)}" alt="${esc(t(p.name))}" width="720" height="${photo.h}" style="object-position:${photo.pos}"></figure>`
    : '';
  return `<header class="id" data-reveal>
    ${img}
    <div class="id__name">
      <h1><span class="id__main">${esc(t(p.name))}</span>${altName}</h1>
      <p class="id__role">${esc(t(tv(p.role)))}</p>
    </div>
    ${photo ? '' : `<div class="id__intro"><p class="lead">${md(tv(data.summary))}</p></div>`}
    <ul class="id__contact">${contact}</ul>
  </header>`;
}

function summary() {
  return photo ? `<section class="sec sec--summary" data-reveal><p class="lead">${md(tv(data.summary))}</p></section>` : '';
}

function entries(items) {
  return list(items)
    .map((e) => {
      const bullets = list(e.bullets).map((b) => `<li>${md(b)}${extLink(b.href)}${(b.hrefs || []).map((link) => extLink(link.href)).join('')}</li>`).join('');
      const note = e.note ? `<p class="entry__note">${md(tv(e.note))}</p>` : '';
      const tags = e.tags ? `<p class="entry__tags">${tv(e.tags).map((x) => `<span>${esc(x)}</span>`).join('')}</p>` : '';
      return `<article class="entry">
        <div class="entry__head">
          <h3>${esc(t(tv(e.title)))}${extLink(e.href)}</h3>
          ${period(e.period, e.periodNote)}
          ${e.org ? `<p class="entry__org">${esc(t(tv(e.org)))}</p>` : ''}
        </div>
        ${note}
        ${bullets ? `<ul class="bullets">${bullets}</ul>` : ''}
        ${tags}
      </article>`;
    })
    .join('');
}

function compact(items) {
  const rows = list(items)
    .map((e) => {
      const meta = e.meta ? t(e.meta) : '';
      return `<li>
        <span class="row__t">${md(tv(e.title))}${extLink(e.href)}</span>
        ${meta ? `<span class="row__m">${esc(meta)}</span>` : ''}
        ${period(e.period)}
      </li>`;
    })
    .join('');
  return rows ? `<ul class="rows">${rows}</ul>` : '';
}

function skills() {
  const groups = list(data.skills)
    .map((g) => `<div class="skill"><h3>${esc(t(g.group))}</h3><p>${tv(g.items).map((x) => `<span>${esc(t(x))}</span>`).join('')}</p></div>`)
    .join('');
  return groups ? `<div class="skills">${groups}</div>` : '';
}

const builders = {
  experience: () => section('experience', entries(data.experience)),
  projects: () => section('projects', entries(data.projects)),
  journalism: () => section('journalism', compact(data.journalism)),
  research: () => section('research', entries(data.research)),
  publications: () => section('publications', compact(data.publications)),
  talks: () => section('talks', compact(data.talks)),
  writing: () => section('writing', compact(data.writing)),
  education: () => section('education', entries(data.education)),
  awards: () => section('awards', compact(data.awards)),
  leadership: () => section('leadership', compact(data.leadership)),
  skills: () => section('skills', skills()),
  languages: () => section('languages', compact(data.languages)),
};

/* ---------- compose ---------- */

function marquee() {
  if (pdfMode || track !== 'startup') return '';
  const words = tv(data.marquee).map((w) => `<span>${esc(t(w))}</span>`).join('');
  return `<div class="marquee" aria-hidden="true"><div class="marquee__track">${words}${words}</div></div>`;
}

function render() {
  const order = pdfMode ? data.pdfOrder[track] : data.order[track];
  const sideKeys = pdfMode ? [] : photo ? order.side : [];
  const mainKeys = pdfMode ? order : photo ? order.main : [...order.main, ...order.side];
  const build = (keys) => keys.map((k) => builders[k]?.() ?? '').join('');

  document.title = `${t(data.profile.name)}${lang === 'zh' ? ` ${data.profile.name.en}` : ''} — ${t(tv(data.profile.role))}${pdfMode ? ' — A4' : ''}`;

  document.getElementById('sheet').innerHTML = `
    ${identity()}
    ${marquee()}
    <div class="main">
      ${summary()}
      ${build(mainKeys)}
    </div>
    ${sideKeys.length ? `<aside class="side">${build(sideKeys)}</aside>` : ''}
    ${pdfMode ? `<footer class="pdf-footer">${lang === 'zh' ? '完整履歷請見' : 'Full résumé:'} ${esc(resumeUrl)}</footer>` : ''}`;

  const label = lang === 'zh' ? '下載／列印 PDF' : 'Download / Print PDF';
  document.querySelector('.canvas').insertAdjacentHTML('afterbegin', `<button class="print-pdf" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v5H7zM7 16h10v5H7zM5 8h14a2 2 0 0 1 2 2v7h-4v-1H7v1H3v-7a2 2 0 0 1 2-2zM17 11h1"/></svg><span>${label}</span></button>`);
  document.querySelector('.print-pdf').addEventListener('click', (event) => pdfMode ? printCurrentPdf(event.currentTarget) : printPdf(event.currentTarget));
}

async function waitForPdf(doc) {
  const images = [...doc.images].filter((img) => !img.complete).map((img) => new Promise((resolve) => {
    img.addEventListener('load', resolve, { once: true });
    img.addEventListener('error', resolve, { once: true });
  }));
  await Promise.all(images);
  if (doc.fonts?.ready) await doc.fonts.ready;

  if (!doc.documentElement.matches('.jf-active, .jf-inactive')) {
    await new Promise((resolve) => {
      const observer = new MutationObserver(() => {
        if (!doc.documentElement.matches('.jf-active, .jf-inactive')) return;
        observer.disconnect();
        resolve();
      });
      observer.observe(doc.documentElement, { attributes: true, attributeFilter: ['class'] });
      setTimeout(() => { observer.disconnect(); resolve(); }, 3500);
    });
  }
  if (doc.fonts?.ready) await doc.fonts.ready;
}

function printPdf(button) {
  button.disabled = true;
  button.querySelector('span').textContent = lang === 'zh' ? '準備 PDF…' : 'Preparing PDF…';

  const url = new URL(location.href);
  url.searchParams.set('pdf', '1');
  const frame = document.createElement('iframe');
  frame.className = 'pdf-frame';
  frame.title = lang === 'zh' ? 'PDF 列印版本' : 'Printable PDF résumé';
  frame.setAttribute('aria-hidden', 'true');

  const restore = () => {
    frame.remove();
    button.disabled = false;
    button.querySelector('span').textContent = lang === 'zh' ? '下載／列印 PDF' : 'Download / Print PDF';
    button.focus({ preventScroll: true });
  };

  frame.addEventListener('load', async () => {
    try {
      await waitForPdf(frame.contentDocument);
      frame.contentWindow.addEventListener('afterprint', restore, { once: true });
      frame.contentWindow.focus();
      frame.contentWindow.print();
    } catch (error) {
      restore();
      location.href = url;
    }
  }, { once: true });

  frame.src = url;
  document.body.appendChild(frame);
}

async function printCurrentPdf(button) {
  button.disabled = true;
  button.querySelector('span').textContent = lang === 'zh' ? '準備 PDF…' : 'Preparing PDF…';
  const restore = () => {
    button.disabled = false;
    button.querySelector('span').textContent = lang === 'zh' ? '下載／列印 PDF' : 'Download / Print PDF';
  };
  try {
    await waitForPdf(document);
    addEventListener('afterprint', restore, { once: true });
    print();
  } catch (error) {
    restore();
    print();
  }
}

/* ---------- motion ---------- */

function animate() {
  const nodes = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || matchMedia('(max-width: 760px), (pointer: coarse)').matches || !('IntersectionObserver' in window)) {
    nodes.forEach((n) => n.classList.add('is-in'));
    return;
  }
  root.classList.add('motion');
  let i = 0;
  const io = new IntersectionObserver(
    (list) => {
      list.forEach((en) => {
        if (!en.isIntersecting) return;
        const n = en.target;
        n.style.setProperty('--d', `${Math.min(i++, 8) * 70}ms`);
        n.classList.add('is-in');
        io.unobserve(n);
      });
    },
    { rootMargin: '0px 0px -8% 0px' }
  );
  nodes.forEach((n) => io.observe(n));
  // Reset the stagger once the first screen has played.
  setTimeout(() => (i = 0), 900);
}

// Print must show everything regardless of scroll position.
addEventListener('beforeprint', () => document.querySelectorAll('[data-reveal]').forEach((n) => n.classList.add('is-in')));

render();
animate();
