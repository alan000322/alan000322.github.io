// Sub pages: carry ?lang / ?track through internal links, stagger reveals.

const search = location.search;

document.querySelectorAll('a[href]').forEach((a) => {
  const href = a.getAttribute('href');
  if (!search || /^(https?:|mailto:|#)/.test(href)) return;
  const [path, hash] = href.split('#');
  a.setAttribute('href', path + search + (hash ? `#${hash}` : ''));
});

document.querySelectorAll('a[href^="http"]').forEach((a) => {
  a.target = '_blank';
  a.rel = 'noopener';
});

const nodes = document.querySelectorAll('.hero, .facts, .prose > *');
if (!matchMedia('(prefers-reduced-motion: reduce), (max-width: 760px), (pointer: coarse)').matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion');
  nodes.forEach((n) => n.setAttribute('data-reveal', ''));
  let i = 0;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.style.setProperty('--d', `${Math.min(i++, 6) * 60}ms`);
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    },
    { rootMargin: '0px 0px -6% 0px' }
  );
  nodes.forEach((n) => io.observe(n));
  setTimeout(() => (i = 0), 800);
}
addEventListener('beforeprint', () => nodes.forEach((n) => n.classList.add('is-in')));
