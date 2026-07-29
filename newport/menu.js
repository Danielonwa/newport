const menuPanel = document.querySelector('.menu-panel');
const cartDrawer = document.querySelector('.cart-drawer');
const drawerBackdrop = document.querySelector('.drawer-backdrop');
const closeDrawers = () => {
  menuPanel.classList.remove('open'); cartDrawer.classList.remove('open'); drawerBackdrop.classList.remove('show');
  menuPanel.setAttribute('aria-hidden', 'true'); cartDrawer.setAttribute('aria-hidden', 'true');
};
document.querySelector('.menu-button').addEventListener('click', () => { menuPanel.classList.add('open'); menuPanel.setAttribute('aria-hidden', 'false'); drawerBackdrop.classList.add('show'); });
document.querySelector('.close-menu').addEventListener('click', closeDrawers);
document.querySelectorAll('.menu-panel a').forEach(link => link.addEventListener('click', closeDrawers));
document.querySelector('.cart-toggle').addEventListener('click', () => { cartDrawer.classList.add('open'); cartDrawer.setAttribute('aria-hidden', 'false'); drawerBackdrop.classList.add('show'); });
document.querySelector('.close-cart').addEventListener('click', closeDrawers);
document.querySelector('.close-cart-link').addEventListener('click', closeDrawers);
drawerBackdrop.addEventListener('click', closeDrawers);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDrawers(); });
