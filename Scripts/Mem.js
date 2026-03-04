document.addEventListener('DOMContentLoaded', () => {
  const savedFont = localStorage.getItem('font');
  const savedTheme = localStorage.getItem('theme');

  if (savedFont) {
    document.documentElement.classList.add(savedFont);
    document.querySelector(`[onclick="setFont('${savedFont}')"]`)
      ?.classList.add('active');
  }

  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
    document.querySelector(`[onclick="setTheme('${savedTheme}')"]`)
      ?.classList.add('active');
  }
});