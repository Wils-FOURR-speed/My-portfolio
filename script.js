const btnmenu = document.getElementById('menu');

const item = document.getElementById('item');

const items = document.querySelectorAll('.item');
const emailval = document.querySelector('.email');
const submit = document.querySelector('.get-button1');
const terror = document.getElementById('error');
const Myname = document.querySelector('.name');
const comments = document.getElementById('comments');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
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
submit.addEventListener('click', (e) => {
  if (emailval.value === emailval.value.toLowerCase() && emailval.value !== '') {
    data[0] = Myname.value;
    data[1] = emailval.value;
    data[2] = comments.value;
    data[3] = firstName.value;
    data[4] = lastName.value;
    localStorage.setItem('local', JSON.stringify(data));
  } else {
    terror.textContent = 'Error!! Please add valid email';
    e.preventDefault();
  }
});

window.addEventListener('load', () => {
  if (localStorage.getItem('local') === null) {
    Myname.value = '';
    emailval.value = '';
    comments.value = '';
    firstName.value = '';
    lastName.value = '';
  } else {
    const [set, col, me, you, us] = JSON.parse(localStorage.getItem('local'));
    Myname.value = set;
    emailval.value = col;
    comments.value = me;
    firstName.value = you;
    lastName.value = us;
  }
});
