const keyboardModifierHandler = (e) => {
  const keyboard = document.querySelector('.keyboard');
  const keyCapsLock = document.querySelector('.key--caps-lock');

  // caps
  const isCapsActive = e.getModifierState('CapsLock');
  keyboard.dataset.caps = String(isCapsActive);
  if (isCapsActive) {
    keyCapsLock.classList.add('key--caps-lock-active');
  } else {
    keyCapsLock.classList.remove('key--caps-lock-active');
  }

  // shift
  const isShiftActive = e.getModifierState('Shift');
  keyboard.dataset.shift = String(isShiftActive);
};

export default keyboardModifierHandler;
