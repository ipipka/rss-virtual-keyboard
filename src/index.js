import './styles/style.scss';
import keyboard from './keyboardElement/index';
import about from './aboutElement/index';
import keyboardModifierHandler from './keyboardModifierHandler/index';
import keyboardLangHandler from './keyboardLangHandler';

document.body.append(keyboard);
document.body.append(about);

document.addEventListener('keydown', (e) => {
  const targetKey = document.querySelector(`.key[data-code="${e.code}"]`);

  if (targetKey) {
    targetKey.classList.add('key--active');

    keyboardModifierHandler(e);
    keyboardLangHandler(e);
  }
});

document.addEventListener('keyup', (e) => {
  const targetKey = document.querySelector(`.key[data-code="${e.code}"]`);

  if (targetKey) {
    targetKey.classList.remove('key--active');

    keyboardModifierHandler(e);
  }
});
