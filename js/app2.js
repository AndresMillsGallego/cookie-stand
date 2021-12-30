'use strict';
console.log('Salut!');

let storeHoursOnly = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

let renderLocations = function () {
  const firstDiv = document.getElementById('div1');
  let ul = document.createElement('ul');
  firstDiv.appendChild(ul);
  let h2 = document.createElement('h2');
  h2.textContent = 'Our Locations';
  ul.appendChild(h2);
  for (let i = 0; i < locations.length; i++) {
    let li = document.createElement('li');
    li.textContent = locations[i];
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
};
storeHours();
