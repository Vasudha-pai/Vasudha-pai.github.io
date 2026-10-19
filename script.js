// Theme toggle (remembers choice per visitor)
const root = document.documentElement;
try {
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
} catch (e) {}
document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = isDark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

// Fade sections in on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.section .wrap').forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Open Posters when reached from the nav link
document.querySelectorAll('a[href="#posters"]').forEach(a => a.addEventListener('click', () => { document.querySelector('#posters details').open = true; }));

document.getElementById('year').textContent = new Date().getFullYear();
