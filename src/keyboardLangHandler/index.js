const keyboardLangHandler = (e) => {
  const keyboard = document.querySelector('.keyboard');

  // lang
  if (['ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight'].includes(e.code) && !e.repeat) {
    // alt + shift
    if (e.getModifierState('Alt') && e.getModifierState('Shift')) {
      const { lang } = keyboard.dataset;

      if (lang === 'en') {
        keyboard.dataset.lang = 'ru';
        localStorage.setItem('keyboardLang', 'ru');
      } else {
        keyboard.dataset.lang = 'en';
        localStorage.setItem('keyboardLang', 'en');
      }
    }
  }
};

export default keyboardLangHandler;
