const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const panel = document.querySelector('.search-panel');
document.querySelector('.search-toggle').addEventListener('click', () => { panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); panel.querySelector('input').focus(); });
document.querySelector('.close-search').addEventListener('click', () => { panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); });
document.querySelectorAll('.wish').forEach(button => button.addEventListener('click', () => { const saved = button.textContent === '♥'; button.textContent = saved ? '♡' : '♥'; button.setAttribute('aria-label', saved ? button.getAttribute('aria-label').replace('Remove','Save') : button.getAttribute('aria-label').replace('Save','Remove')); }));
document.querySelector('.newsletter form').addEventListener('submit', event => { event.preventDefault(); const input = event.currentTarget.querySelector('input'); input.value = ''; input.placeholder = 'Thank you — you’re on the list.'; });
