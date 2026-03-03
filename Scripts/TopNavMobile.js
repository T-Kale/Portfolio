const topnav = document.querySelector('.topnav');
const mainBtn = document.querySelector('.main-menu');
const settingsBtn = document.querySelector('.settings-menu');

mainBtn.addEventListener('click', () => {
  topnav.classList.remove('settings-open');
  topnav.classList.toggle('menu-open');
});

settingsBtn.addEventListener('click', () => {
  topnav.classList.remove('menu-open');
  topnav.classList.toggle('settings-open');
});