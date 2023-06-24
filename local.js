const cards = document.getElementById('cards');

const carddetailsmain = document.querySelector('#carddetailsmain');
const dclosebtn = document.querySelector('.dclosebtn');

dclosebtn.addEventListener('click', () => {
  carddetailsmain.style = 'display: none;';
});

// array

const cardArray = [
  {
    name: 'Multi-Post Stories <br> Gain + Glory',
    tec: [
      'Ruby on rails',
      'css',
      'JavaScript',
      'HTML',
    ],
    btn: 'See Project',
    title: 'Keeping track of hundreds of <br> components ',
    discripts: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it 1960s with the relea ',

  },
  {
    name: 'Multi-Post Stories <br> Gain + Glory',
    tec: [
      'Ruby on rails',
      'css',
      'JavaScript',
      'HTML',
    ],
    btn: 'See Project',
    title: 'Keeping track of hundreds of <br> components ',
    discripts: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it 1960s with the relea ',

  },
  {
    name: 'Multi-Post Stories <br> Gain + Glory',
    tec: [
      'Ruby on rails',
      'css',
      'JavaScript',
      'HTML',
    ],
    btn: 'See Project',
    title: 'Keeping track of hundreds of <br> components',
    discripts: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it 1960s with the relea ',

  },
  {
    name: 'Multi-Post Stories <br> Gain + Glory',
    tec: [
      'Ruby on rails',
      'css',
      'JavaScript',
      'HTML',
    ],
    btn: 'See Project',
    title: 'Keeping track of hundreds of <br> components',
    discripts: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it 1960s with the relea ',

  },
  {
    name: 'Multi-Post Stories <br> Gain + Glory',
    tec: [
      'Ruby on rails',
      'css',
      'JavaScript',
      'HTML',
    ],
    btn: 'See Project',
    title: 'Keeping track of hundreds of <br> components',
    discripts: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it 1960s with the relea ',

  },
  {
    name: 'Multi-Post Stories <br> Gain + Glory',
    tec: [
      'Ruby on rails',
      'css',
      'JavaScript',
      'HTML',
    ],
    btn: 'See Project',
    title: 'Keeping track of hundreds of <br> components',
    discripts: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it 1960s with the relea ',

  },
];

const tit = document.getElementById('tit');
const tech = document.getElementById('tech');
const dicriptss = document.getElementById('dicriptss');
cardArray.forEach((car) => {
  const container = document.createElement('div');
  container.classList.add('pic-holder-container');
  const innercontainer = document.createElement('div');
  innercontainer.classList.add('holder-container');
  container.appendChild(innercontainer);
  const h3 = document.createElement('h3');
  h3.innerHTML = car.name;
  innercontainer.appendChild(h3);
  const ul = document.createElement('ul');
  ul.classList.add('stories');
  innercontainer.appendChild(ul);
  car.tec.forEach((ele) => {
    const li = document.createElement('li');
    li.innerHTML = ele;
    ul.appendChild(li);
  });
  const sbtn = document.createElement('button');
  sbtn.innerHTML = car.btn;
  innercontainer.appendChild(sbtn);
  sbtn.classList.add('get-button');
  sbtn.addEventListener('click', () => {
    carddetailsmain.style = 'display:flex;';
    tit.innerHTML = car.title;
    tech.innerHTML = null;
    car.tec.forEach((ele) => {
      const li = document.createElement('li');
      li.innerHTML = ele;
      tech.appendChild(li);
    });
    dicriptss.innerHTML = car.discripts;
  });
  cards.appendChild(container);
});
