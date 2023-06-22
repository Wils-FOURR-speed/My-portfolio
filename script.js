const btnmenu = document.getElementById('menu');

const item = document.getElementById('item');

const items = document.querySelectorAll('.item');
items.forEach((it) => {
  it.addEventListener('click', () => {
    item.style = 'display: none;';
  });
});

const btnclose = document.getElementById('close');
btnmenu.addEventListener('click', () => {
  item.style = 'display: block;';
});

btnclose.addEventListener('click', () => {
  item.style = 'display: none;';
});
