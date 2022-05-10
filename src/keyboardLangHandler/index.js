const keyboardLangHandler = () => {
  const keyboard = document.querySelector('.keyboard');
  const keyShiftLeft = document.querySelector('.key--shift-left.key--active');
  const keyShiftRight = document.querySelector('.key--shift-right.key--active');
  const keyAltLeft = document.querySelector('.key--alt-left.key--active');
  const keyAltRight = document.querySelector('.key--alt-right.key--active');

  const shiftActive = keyShiftLeft || keyShiftRight;
  const altActive = keyAltLeft || keyAltRight;

  // alt + shift
  if (shiftActive && altActive) {
    const { lang } = keyboard.dataset;

    if (lang === 'en') {
      keyboard.dataset.lang = 'ru';
      localStorage.setItem('keyboardLang', 'ru');
    } else {
      keyboard.dataset.lang = 'en';
      localStorage.setItem('keyboardLang', 'en');
    }
  }
};

export default keyboardLangHandler;
