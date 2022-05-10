import './styles/style.scss';
import keyboard from './keyboardElement/index';
import about from './aboutElement/index';
import field from './fieldElement/index';
import keyboardCapsLockHandler from './keyboardCapsLockHandler/index';
import keyboardShiftHandler from './keyboardShiftHandler/index';
import keyboardLangHandler from './keyboardLangHandler/index';
import keyPrint from './keyPrint/index';

document.body.append(field);
document.body.append(keyboard);
document.body.append(about);

document.addEventListener('keydown', (e) => {
  const targetKey = document.querySelector(`.key[data-code="${e.code}"]`);

  if (targetKey) {
    targetKey.classList.add('key--active');

    // press capsLock
    if (e.code === 'CapsLock') {
      keyboardCapsLockHandler(e);
    }

    // press shift
    if (['ShiftLeft', 'ShiftRight'].includes(e.code) && !e.repeat) {
      keyboardShiftHandler(e);
    }

    // press any langKey
    if (['ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight'].includes(e.code) && !e.repeat) {
      keyboardLangHandler(e);
    }

    keyPrint(targetKey, e);
    e.preventDefault();
  }
});

document.addEventListener('keyup', (e) => {
  const targetKey = document.querySelector(`.key[data-code="${e.code}"]`);

  if (targetKey) {
    targetKey.classList.remove('key--active');

    // press shift
    if (['ShiftLeft', 'ShiftRight'].includes(e.code) && !e.repeat) {
      keyboardShiftHandler(e);
    }
  }
});
