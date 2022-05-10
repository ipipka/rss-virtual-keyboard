const keyboardShiftHandler = () => {
  const keyboard = document.querySelector('.keyboard');
  const keyShiftLeft = document.querySelector('.key--shift-left.key--active');
  const keyShiftRight = document.querySelector('.key--shift-right.key--active');

  if (keyShiftLeft || keyShiftRight) {
    keyboard.dataset.shift = 'true';
  } else {
    keyboard.dataset.shift = 'false';
  }
};

export default keyboardShiftHandler;
