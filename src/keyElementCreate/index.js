const keyElementCreate = ({
  code,
  ru,
  ruShift,
  ruCapsEffect,
  en,
  enShift,
  enCapsEffect,
  className,
}) => {
  // ru
  let keyText = `<span class="char char--ru">${ru}</span>`;
  keyText += `<span class="char char--ru-shift">${ruShift}</span>`;
  keyText += ruCapsEffect
    ? `<span class="char char--ru-caps">${ruShift}</span>`
    : `<span class="char char--ru-caps">${ru}</span>`;
  keyText += ruCapsEffect
    ? `<span class="char char--ru-caps-shift">${ru}</span>`
    : `<span class="char char--ru-caps-shift">${ruShift}</span>`;

  // en
  keyText += `<span class="char char--en">${en}</span>`;
  keyText += `<span class="char char--en-shift">${enShift}</span>`;
  keyText += enCapsEffect
    ? `<span class="char char--en-caps">${enShift}</span>`
    : `<span class="char char--en-caps">${en}</span>`;
  keyText += enCapsEffect
    ? `<span class="char char--en-caps-shift">${en}</span>`
    : `<span class="char char--en-caps-shift">${enShift}</span>`;

  // create key
  const key = document.createElement('div');
  key.classList.add('key');
  if (className) {
    key.classList.add(className);
  }
  key.dataset.code = code;
  key.innerHTML = keyText;
  return key;
};

export default keyElementCreate;
