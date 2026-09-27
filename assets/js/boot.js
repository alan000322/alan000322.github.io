// Resolve ?lang and ?track before first paint (shared by every page).
(function () {
  var q = new URLSearchParams(location.search);
  var lang = q.get('lang') === 'en' ? 'en' : 'zh';
  var tracks = ['tech', 'ai', 'media', 'startup'];
  var track = tracks.indexOf(q.get('track')) > -1 ? q.get('track') : 'ai';
  var el = document.documentElement;
  el.lang = lang === 'en' ? 'en' : 'zh-Hant';
  el.dataset.lang = lang;
  el.dataset.track = track;
  el.dataset.pdf = q.get('pdf') === '1' ? 'true' : 'false';
  var fonts = {
    media: 'family=Noto+Serif+TC:wght@500;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700',
    startup: 'family=Anton',
  }[track];
  if (fonts) document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?' + fonts + '&display=swap">');
})();

// Wait for module-rendered resume content before justfont scans the page.
(function () {
  var productionUrl = new URL('justfont-production.js', document.currentScript.src).href;
  document.addEventListener('DOMContentLoaded', function () {
    // Read original weights before applying the new font classes.
    var targets = Array.from(document.body.querySelectorAll('*'))
      .filter(function (el) {
        return !el.closest('script, style, noscript, svg') &&
          Array.from(el.childNodes).some(function (node) {
            return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
          });
      })
      .map(function (el) {
        return { el: el, heavy: !!el.closest('h1, h2, h3, h4, h5, h6, strong, b') || parseInt(getComputedStyle(el).fontWeight, 10) >= 600 };
      });
    targets.forEach(function (target) {
      target.el.classList.add(target.heavy ? 'jf-lanyanghei-extraheavy' : 'jf-lanyanghei-bold');
    });
    var local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || location.protocol === 'file:';
    var script = document.createElement('script');
    script.src = local
      ? 'https://s3-ap-northeast-1.amazonaws.com/justfont-user-script/jf-65986.js'
      : productionUrl;
    script.async = true;
    document.head.appendChild(script);
  }, { once: true });
})();
