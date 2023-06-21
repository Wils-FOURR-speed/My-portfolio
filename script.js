const btnmenu = document.getElementById('menu');// \r\n
const item = document.getElementById('item');// \r\n
const btnclose = document.getElementById('close');
btnmenu.addEventListener('click', () => {
  item.style = 'display: block;';
});

btnclose.addEventListener('click', () => {
  item.style = 'display: none;';
});
