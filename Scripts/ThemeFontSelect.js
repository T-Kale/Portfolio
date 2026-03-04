function setFont(name) {
  document.documentElement.classList.remove('font-Open_Sans', 'font-Atkinson_Hyperlegible');
  document.documentElement.classList.add(name);
  localStorage.setItem('font', name);

  document.querySelectorAll('.MobileFontSettings a')
    .forEach(link => link.classList.remove('active'));

  document.querySelector(`[onclick="setFont('${name}')"]`)
    ?.classList.add('active');
}

function setTheme(name) {
  document.documentElement.classList.remove('theme-navy', 'theme-nature','theme-white','theme-solar');
  document.documentElement.classList.add(name);
  localStorage.setItem('theme', name);

  document.querySelectorAll('.MobileThemeSettings a')
    .forEach(link => link.classList.remove('active'));

  document.querySelector(`[onclick="setTheme('${name}')"]`)
    ?.classList.add('active');
}