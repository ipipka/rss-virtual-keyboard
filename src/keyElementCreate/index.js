const keyElementCreate = () => {
  const element = document.createElement('div');
  element.classList.add('key');
  element.innerHTML = 'key';

  return element;
};

export default keyElementCreate;
