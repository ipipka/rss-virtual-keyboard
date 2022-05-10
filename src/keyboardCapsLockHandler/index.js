const keyboardCapsLockHandler = () => {
  const keyboard = document.querySelector('.keyboard');
  const keyCapsLock = document.querySelector('.key--caps-lock');
  const { caps } = keyboard.dataset;

  if (caps === 'false') {
    keyboard.dataset.caps = 'true';
    keyCapsLock.classList.add('key--caps-lock-active');
  } else {
    keyboard.dataset.caps = 'false';
    keyCapsLock.classList.remove('key--caps-lock-active');
  }
};

export default keyboardCapsLockHandler;
