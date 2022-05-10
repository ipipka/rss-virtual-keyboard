const keyPrint = (targetKey) => {
  const { lang, caps, shift } = document.querySelector('.keyboard').dataset;
  const field = document.querySelector('.text__field');

  let text = field.value;

  if (targetKey.dataset.modifier === 'false') {
    let char;

    if (caps === 'true' && shift === 'true') {
      char = targetKey.querySelector(`.char--${lang}-caps-shift`).innerText;
    } else if (caps === 'true') {
      char = targetKey.querySelector(`.char--${lang}-caps`).innerText;
    } else if (shift === 'true') {
      char = targetKey.querySelector(`.char--${lang}-shift`).innerText;
    } else {
      char = targetKey.querySelector(`.char--${lang}`).innerText;
    }

    text += char;
    field.value = text;
    return true;
  }

  switch (targetKey.dataset.code) {
    case 'Backspace':
      text = text.slice(0, -1);
      break;
    case 'Tab':
      text += '\t';
      break;
    case 'Enter':
      text += '\n';
      break;
    case 'Space':
      text += ' ';
      break;
    case 'ArrowLeft':
      text += '←';
      break;
    case 'ArrowDown':
      text += '↓';
      break;
    case 'ArrowRight':
      text += '→';
      break;
    case 'ArrowUp':
      text += '↑';
      break;
    default:
      break;
  }

  field.value = text;
  return true;
};

export default keyPrint;
