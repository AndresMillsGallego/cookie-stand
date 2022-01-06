'use strict';
console.log('Salut!');

let storeHoursOnly = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

//Code below renders store locations and makes them links to each store's page. As the array gets updated so does the function!
let renderLocations = function () {
  const firstDiv = document.getElementById('div1');
  let ul = document.createElement('ul');
  firstDiv.appendChild(ul);
  let h2 = document.createElement('h2');
  h2.textContent = 'Our Locations';
  ul.appendChild(h2);
  for (let i = 0; i < locations.length; i++) {
    let link = `${locations[i].toLocaleLowerCase()}.html`;
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href',link);
    a.textContent = locations[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
};
renderLocations();

let storeHours = function () {
  const thirdDiv = document.getElementById('div3');
  let h3 = document.createElement('h3');
  h3.textContent = 'Our Store Hours';
  thirdDiv.appendChild(h3);
  let days = document.createElement('article');
  days.setAttribute('id', 'days');
  days.textContent = 'Monday - Friday';
  thirdDiv.appendChild(days);
  let hours = document.createElement('article');
  hours.textContent = `${storeHoursOnly[0]} - ${storeHoursOnly[13]}`;
  thirdDiv.appendChild(hours);
  let fish = document.createElement('img');
  fish.src = 'img/fish.jpg';
  thirdDiv.appendChild(fish);
};
storeHours();

// eslint-disable-next-line no-unused-vars
let changeStyle = function() {
  document.body.style.backgroundColor = 'midnightBlue';
  document.getElementById('main-body').style.color = 'yellow';
  document.getElementById('main-body').style.borderColor = 'salmon';
  document.getElementById('main-header').style.borderColor = 'salmon';
  document.getElementById('div2').style.backgroundColor = 'black';
  document.getElementById('h1').style.backgroundColor = 'black';
  document.getElementById('line').style.borderColor = 'salmon';
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = 'lime';
  }
  let buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'black';
    buttons[i].style.color = 'lime';
  }
};
