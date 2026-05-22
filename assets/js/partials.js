/* ============================================================
   Shared partials — nav + footer + SVG icons.
   Inserted via JS so all pages stay in sync.
   ============================================================ */

// Determine path prefix so subpages (products/*, stages/*) get "../"
const _path = location.pathname.replace(/\/+$/, '');
const _depth = (_path.match(/\/(products|stages|articles|events)\//) ? 1 : 0);
const _base = '../'.repeat(_depth);

const NAV_HTML = `
<nav class="nav" aria-label="Primary">
  <div class="container">
    <a href="${_base}index.html" class="nav-logo">
      <svg class="logo-mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="46" stroke="#a88440" stroke-width="0.7" opacity="0.5"/>
        <circle cx="50" cy="50" r="36" stroke="#a88440" stroke-width="0.9" opacity="0.7"/>
        <circle cx="50" cy="50" r="26" stroke="#a44d3a" stroke-width="1.1"/>
        <circle cx="50" cy="50" r="16" stroke="#a44d3a" stroke-width="1.3"/>
        <circle cx="50" cy="50" r="6" fill="#a44d3a"/>
      </svg>
      <span class="logo-word">
        <span class="logo-en">JI<i>·</i>XIN<i>·</i>LIU</span>
        <span class="logo-tc" data-i18n="brand.full">極心流自然療法工作室</span>
      </span>
    </a>
    <button class="nav-burger" aria-label="Menu" data-i18n-aria="common.menu">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-links">
      <a href="${_base}index.html#vision" data-i18n="nav.vision">願景</a>
      <a href="${_base}master.html" data-i18n="nav.master">羅老師</a>
      <a href="${_base}index.html#stages" data-i18n="nav.stages">六階段</a>
      <a href="${_base}trinity.html" data-i18n="nav.trinity">極心三元</a>
      <a href="${_base}index.html#therapies" data-i18n="nav.therapies">療癒服務</a>
      <a href="${_base}index.html#products" data-i18n="nav.products">能量商品</a>
      <a href="${_base}index.html#events" data-i18n="nav.events">活動</a>
      <a href="${_base}faq.html" data-i18n="nav.faq">Q&A</a>
    </div>
    <div class="nav-tools">
      <div class="lang-switch" role="group" aria-label="Language">
        <button data-lang="zh-TW">中</button>
        <button data-lang="en">EN</button>
        <button data-lang="it">IT</button>
      </div>
      <a href="${_base}booking.html" class="nav-cta" data-i18n="nav.book">預約</a>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div>
      <div class="brand-name" data-i18n="footer.brand">極心流自然療法工作室</div>
      <p style="margin-bottom:8px;color:var(--gold-light);font-style:italic;font-family:var(--serif-en);" data-i18n="footer.brand.master">羅紹綸 老師主持</p>
      <p data-i18n="footer.brand.body">融合古法武學、中醫經絡與量子能量學，引導身心靈整合療癒，重啟您與生俱來的自癒力量。</p>
    </div>
    <div>
      <h4 data-i18n="footer.col.services">Services</h4>
      <ul>
        <li><a href="${_base}index.html#stages" data-i18n="footer.link.stages">六階段課程</a></li>
        <li><a href="${_base}trinity.html" data-i18n="footer.link.trinity">極心三元</a></li>
        <li><a href="${_base}index.html#products" data-i18n="footer.link.products">能量商品</a></li>
        <li><a href="${_base}index.html#events" data-i18n="footer.link.events">活動行事曆</a></li>
        <li><a href="${_base}booking.html" data-i18n="footer.link.book">預約諮詢</a></li>
      </ul>
    </div>
    <div>
      <h4 data-i18n="footer.col.about">About</h4>
      <ul>
        <li><a href="${_base}index.html#vision" data-i18n="footer.link.vision">願景</a></li>
        <li><a href="${_base}master.html" data-i18n="footer.link.master">羅老師簡介</a></li>
        <li><a href="${_base}index.html#philosophy" data-i18n="footer.link.phi">核心理念</a></li>
        <li><a href="${_base}index.html#articles" data-i18n="footer.link.articles">文章知識庫</a></li>
        <li><a href="${_base}faq.html" data-i18n="footer.link.faq">常見問答</a></li>
      </ul>
    </div>
    <div>
      <h4 data-i18n="footer.col.contact">Contact</h4>
      <ul>
        <li><a href="${_base}booking.html" data-i18n="footer.link.book">預約諮詢</a></li>
        <li><a href="#" data-i18n="footer.link.line">LINE @mind6688</a></li>
        <li><a href="#" data-i18n="footer.link.fb">Facebook</a></li>
        <li><a href="#" data-i18n="footer.link.ig">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <span data-i18n="footer.copy">© 2026 極心流自然療法工作室・羅氏自癒力療癒系統</span>
  </div>
</footer>
`;

function injectPartials() {
  const navMount = document.querySelector("[data-mount=nav]");
  if (navMount) navMount.outerHTML = NAV_HTML;
  const footerMount = document.querySelector("[data-mount=footer]");
  if (footerMount) footerMount.outerHTML = FOOTER_HTML;
}

// Inject before DOMContentLoaded handlers from i18n.js run
injectPartials();

/* ============== SVG Icon Library ============== */
const ICONS = {
  // Vision card icons
  heaven: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="32" cy="22" r="9"/><path d="M8 44h48"/><path d="M14 50h36"/><path d="M20 56h24"/><path d="M22 22h-6M48 22h-6M32 4v6M32 34v6"/></svg>`,
  eye: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M4 32c8-12 18-18 28-18s20 6 28 18c-8 12-18 18-28 18S12 44 4 32z"/><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="2.5" fill="currentColor"/></svg>`,
  seed: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M32 56V32"/><path d="M32 32c0-8 6-14 14-14-1 8-7 14-14 14z"/><path d="M32 36c0-7-5-12-12-12 1 7 5 12 12 12z"/><path d="M14 56h36"/></svg>`,

  // Philosophy 4 icons
  chemical: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="32" cy="32" r="6"/><circle cx="14" cy="20" r="4"/><circle cx="50" cy="20" r="4"/><circle cx="14" cy="44" r="4"/><circle cx="50" cy="44" r="4"/><path d="M28 28L17 22M36 28L47 22M28 36L17 41M36 36L47 41"/></svg>`,
  physical: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M32 6v52"/><path d="M22 14h20M20 22h24M22 30h20M20 38h24M22 46h20"/></svg>`,
  energetic: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M8 32c8-12 16-12 24 0s16 12 24 0"/><path d="M8 22c8-12 16-12 24 0s16 12 24 0" opacity=".55"/><path d="M8 42c8-12 16-12 24 0s16 12 24 0" opacity=".55"/></svg>`,
  spiritual: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="32" cy="32" r="5"/><path d="M32 8v10M32 46v10M8 32h10M46 32h10M15 15l7 7M42 42l7 7M49 15l-7 7M22 42l-7 7"/></svg>`,

  // Stages icons
  scan: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><rect x="10" y="10" width="44" height="44" rx="2"/><path d="M10 22h44M10 32h44M10 42h44M22 10v44M32 10v44M42 10v44"/><circle cx="32" cy="32" r="6" fill="currentColor" opacity=".15"/></svg>`,
  axis: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M32 6v52"/><path d="M22 14c4 0 4 4 0 4M42 14c-4 0-4 4 0 4" /><path d="M22 26c4 0 4 4 0 4M42 26c-4 0-4 4 0 4"/><path d="M22 38c4 0 4 4 0 4M42 38c-4 0-4 4 0 4"/><path d="M22 50c4 0 4 4 0 4M42 50c-4 0-4 4 0 4"/></svg>`,
  meridian: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M8 32c0-12 10-22 24-22M56 32c0 12-10 22-24 22"/><path d="M8 32c0 12 10 22 24 22M56 32c0-12-10-22-24-22"/><circle cx="32" cy="14" r="2" fill="currentColor"/><circle cx="32" cy="50" r="2" fill="currentColor"/></svg>`,
  chakra: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="6"/><circle cx="32" cy="32" r="1.6" fill="currentColor"/></svg>`,
  flame: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6c2 8-4 12-8 18s-6 14 0 22 14 8 20 0 6-14-2-22c-3 4-6 4-6 0 0-6 0-12-4-18z"/><path d="M28 40c-2 4 0 8 4 8s6-4 4-8c-1 2-3 2-4 0-1 2-3 2-4 0z"/></svg>`,
  yinyang: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="32" cy="32" r="24"/><path d="M32 8c8 0 12 6 12 12s-4 12-12 12-12 6-12 12 4 12 12 12" fill="currentColor" opacity=".15"/><circle cx="32" cy="20" r="2.5" fill="currentColor"/><circle cx="32" cy="44" r="2.5"/></svg>`,

  // Trinity icons
  paw: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><ellipse cx="20" cy="22" rx="4.5" ry="6"/><ellipse cx="32" cy="16" rx="4.5" ry="6"/><ellipse cx="44" cy="22" rx="4.5" ry="6"/><ellipse cx="50" cy="36" rx="4" ry="5.5"/><ellipse cx="14" cy="36" rx="4" ry="5.5"/><path d="M22 44c0-6 4-10 10-10s10 4 10 10c0 8-6 12-10 12s-10-4-10-12z"/></svg>`,
  coin: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="32" cy="32" r="22"/><rect x="26" y="26" width="12" height="12"/><path d="M32 10v8M32 46v8M10 32h8M46 32h8" stroke-linecap="round"/></svg>`,
  shield: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M32 6l20 6v18c0 12-8 22-20 28-12-6-20-16-20-28V12l20-6z"/><path d="M22 32l8 8 12-14"/></svg>`,

  // Misc
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2 1c1 3 3 5 6 6l1-2 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><rect x="4" y="6" width="16" height="14" rx="1.5"/><path d="M4 10h16M9 4v4M15 4v4"/></svg>`,
  leaf: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M14 50C14 28 32 14 50 14c0 22-14 36-32 36-1 0-3 0-4-1z"/><path d="M14 50c8-10 18-18 30-22"/></svg>`,
  lavender: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M32 56V28"/><path d="M28 30c-2-2-2-6 0-8M36 30c2-2 2-6 0-8"/><path d="M28 22c-2-2-2-6 0-8M36 22c2-2 2-6 0-8"/><path d="M30 14c-1-2-1-5 0-7M34 14c1-2 1-5 0-7"/><path d="M22 56h20"/></svg>`,
  card: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="12" y="14" width="40" height="36" rx="2"/><path d="M22 24h12M22 32h20M22 40h16"/></svg>`,
};

function icon(name) {
  return ICONS[name] || "";
}

function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach(el => {
    const n = el.getAttribute("data-icon");
    if (ICONS[n]) el.innerHTML = ICONS[n];
  });
}

// Run icon injection on initial load and after partials inject
document.addEventListener("DOMContentLoaded", injectIcons);
