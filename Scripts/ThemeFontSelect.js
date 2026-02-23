function setFont(name) {
  document.documentElement.classList.remove('font-Open_Sans', 'font-Atkinson_Hyperlegible');
  document.documentElement.classList.add(name);
}

function setTheme(name) {
  document.documentElement.classList.remove('theme-navy', 'theme-nature','theme-white','theme-solar');
  document.documentElement.classList.add(name);
}