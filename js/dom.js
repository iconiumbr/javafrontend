// DOM - Manipular HTML e CSS via JS

// pegar pelo id
const getId1 = document.getElementById('main1');
console.log(getId1);

const getId2 = document.querySelector('#main1')
console.log(getId2);

//pegar pela class
const getClass1 = document.getElementsByClassName('col-md-4');
console.log(getClass1);
console.log(getClass1[0]);

const getClass2 = document.querySelectorAll('.form-label');
console.log(getClass2);
console.log(getClass2[3].textContent);

//pegar pela tag
const getTag1 = document.getElementsByTagName('td');
console.log(getTag1);

const getTag2 = document.querySelectorAll('td');
console.log(getTag2);


getTag2[4].textContent = 'Entregue ao cliente';