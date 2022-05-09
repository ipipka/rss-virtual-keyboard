import './styles/style.scss';
import keyboard from './keyboardElement/index';
import keyboardModifierHandler from './keyboardModifierHandler/index';

document.body.append(keyboard);

document.addEventListener('keydown', (e) => {
  const targetKey = document.querySelector(`.key[data-code="${e.code}"]`);

  if (targetKey) {
    targetKey.classList.add('key--active');

    keyboardModifierHandler(e);
  }
});

document.addEventListener('keyup', (e) => {
  const targetKey = document.querySelector(`.key[data-code="${e.code}"]`);

  if (targetKey) {
    targetKey.classList.remove('key--active');

    keyboardModifierHandler(e);
  }
});
