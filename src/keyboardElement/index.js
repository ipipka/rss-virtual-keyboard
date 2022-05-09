import keyRowCreate from '../keyRowCreate/index';
import keyElementCreate from '../keyElementCreate/index';
import keyboardData from '../keyboardData/index';

const keyboardCreate = () => {
  const element = document.createElement('div');
  element.classList.add('keyboard');
  element.dataset.lang = keyboardData.lang;
  element.dataset.caps = String(keyboardData.caps);
  element.dataset.shift = String(keyboardData.shift);

  return element;
};

const keyboardElement = keyboardCreate();
let keyCurrent = 0;

for (let row = 0; row < keyboardData.rows.length; row += 1) {
  const keyboardRow = keyRowCreate();

  for (let col = 0; col < keyboardData.rows[row]; col += 1) {
    keyboardRow.append(keyElementCreate(keyboardData.keys[keyCurrent + col]));
  }

  keyboardElement.append(keyboardRow);
  keyCurrent += keyboardData.rows[row];
}

export default keyboardElement;
