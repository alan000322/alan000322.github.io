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
  var fonts = {
    media: 'family=Noto+Serif+TC:wght@500;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700',
    startup: 'family=Anton',
  }[track];
  if (fonts) document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?' + fonts + '&display=swap">');
})();
