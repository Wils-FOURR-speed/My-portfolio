const btnmenu = document.getElementById('menu');
const menu = document.getElementById('list');
const item = document.getElementById('item');
const btnclose = document.getElementById('close');
btnmenu.addEventListener('click', () => {
  item.style = 'display: block;';
});

btnclose.addEventListener('click', () => {
  item.style = 'display: none;';
});

menu.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});
