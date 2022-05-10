import './styles/style.scss';
import keyboard from './keyboardElement/index';
import about from './aboutElement/index';
import field from './fieldElement/index';
import keyboardModifierHandler from './keyboardModifierHandler/index';
import keyboardLangHandler from './keyboardLangHandler/index';
import keyPrint from './keyPrint/index';

document.body.append(field);
document.body.append(keyboard);
document.body.append(about);

document.addEventListener('keydown', (e) => {
  const targetKey = document.querySelector(`.key[data-code="${e.code}"]`);

  if (targetKey) {
    targetKey.classList.add('key--active');

    keyboardModifierHandler(e);
    keyboardLangHandler(e);
    keyPrint(targetKey, e);
    e.preventDefault();
  }
});

document.addEventListener('keyup', (e) => {
  const targetKey = document.querySelector(`.key[data-code="${e.code}"]`);

  if (targetKey) {
    targetKey.classList.remove('key--active');

    keyboardModifierHandler(e);
  }
});

// eslint-disable-next-line no-alert
setTimeout(() => { alert('Прошу по возможности проверить работу немного позже (10 мая доделаю). Не успела...'); }, 500);
