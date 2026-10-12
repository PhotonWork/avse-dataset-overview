const languageButton = document.getElementById('language');
let currentLanguage = 'en';
languageButton.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en][data-zh]').forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });
  languageButton.textContent = currentLanguage === 'en' ? '中文' : 'English';
  languageButton.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Chinese' : 'Switch to English');
});
const heights = [12,20,15,28,19,40,25,57,36,72,46,61,32,53,76,48,31,68,39,58,80,46,65,32,51,25,43,61,34,49,23,38,19,28,14,22,12];
const wave = document.querySelector('.wave');
heights.forEach(height => {
  const bar = document.createElement('span');
  bar.style.height = `${height}px`;
  wave.appendChild(bar);
});
