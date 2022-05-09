import './styles/style.scss';
import keyboard from './keyboardElement/index';

document.body.append(keyboard);

document.addEventListener('keypress', (e) => {
  // eslint-disable-next-line no-console
  console.log(`---\nkey=${e.key}\nchar=${e.char}\ncode=${e.code}`);
});
