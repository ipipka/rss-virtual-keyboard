const fleldCreate = () => {
  const element = document.createElement('div');
  element.classList.add('text');
  element.innerHTML = '<textarea class="text__field" readonly></textarea>';

  return element;
};

const fieldElement = fleldCreate();

export default fieldElement;
