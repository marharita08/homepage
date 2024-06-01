document.addEventListener('DOMContentLoaded', (event) => {
  const switches = [
    { switch: document.getElementById('switch-linkedin'), element: document.getElementById('button-linkedin') },
    { switch: document.getElementById('switch-github'), element: document.getElementById('button-github') },
    { switch: document.getElementById('switch-telegram'), element: document.getElementById('button-telegram') },
    { switch: document.getElementById('switch-bitbucket'), element: document.getElementById('button-bitbucket') }
  ];

  function updateClass(sw, element) {
    if (sw.checked) {
      element.classList.add('on');
    } else {
      element.classList.remove('on');
    }
  }

  switches.forEach(({ switch: sw, element }) => {
    sw.addEventListener('change', () => {
      updateClass(sw, element);
    });
    sw.checked = Math.random() < 0.5;
    updateClass(sw, element);
  });
});
