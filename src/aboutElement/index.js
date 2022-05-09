const aboutCreate = () => {
  const element = document.createElement('div');
  element.classList.add('about');
  element.innerHTML += `<div class="about__content">
      <div class="about__system">Клавиатура создана в операционной системе Windows</div>
      <div class="about__lang">Комбинация для переключения языка Shift + Alt</div>
    </div>`;

  return element;
};

const aboutElement = aboutCreate();

export default aboutElement;
