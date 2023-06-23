const btnmenu = document.getElementById('menu');

const item = document.getElementById('item');

const items = document.querySelectorAll('.item');
const emailval = document.querySelector('.email');
const submit = document.querySelector('.get-button1');
const terror = document.getElementById('error');
const Myname = document.querySelector('.name');
const comments = document.getElementById('comments');

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

const data = [];
submit.addEventListener('click', () => {
  if (emailval.value === emailval.value.toLowerCase() && emailval.value !== '') {
    data[0] = Myname.value;
    data[1] = emailval.value;
    data[2] = comments.value;
    localStorage.setItem('local', JSON.stringify(data));
  } else {
    terror.textContent = 'error';
  }
});

window.addEventListener('load', () => {
  if (localStorage.getItem('local') === null) {
    Myname.value = '';
    emailval.value = '';
    comments.value = '';
  } else {
    const set = JSON.parse(localStorage.getItem('local'));
    Myname.value = set[0];
    emailval.value = set[1];
    comments.value = set[2];
  }
});
