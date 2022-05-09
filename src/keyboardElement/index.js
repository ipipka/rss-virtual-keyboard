import keyRowCreate from '../keyRowCreate/index';
import keyElementCreate from '../keyElementCreate/index';
// import keyboardData from '../keyboardData/index';

const keyboardCreate = () => {
  const element = document.createElement('div');
  element.classList.add('keyboard');

  return element;
};

const keyboardElement = keyboardCreate();
const keyboardRow1 = keyRowCreate();
const keyboardRow2 = keyRowCreate();

// for (key of keyboardData.keys) {
// }

keyboardRow1.append(keyElementCreate());
keyboardRow1.append(keyElementCreate());
keyboardRow1.append(keyElementCreate());
keyboardRow2.append(keyElementCreate());
keyboardRow2.append(keyElementCreate());

keyboardElement.append(keyboardRow1);
keyboardElement.append(keyboardRow2);

export default keyboardElement;
