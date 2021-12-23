'use strict';
console.log('Bonjour!');

let storeHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

const seattleStoreContainer = document.getElementById('seattleStore');

let seattleStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  seattleStorePerHour: function() {
    let ul = document.createElement('ul');
    let p = document.createElement('p');
    p.textContent = 'Seattle Store';
    ul.appendChild(p);
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)} cookies`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ul.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal} cookies`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ul.appendChild(li);
    seattleStoreContainer.appendChild(ul);
  }
};
seattleStore.seattleStorePerHour();

const tokyoStoreContainer = document.getElementById('tokyoStore');

let tokyoStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  tokyoStorePerHour: function() {
    let ul = document.createElement('ul');
    let p = document.createElement('p');
    p.textContent = 'Tokyo Store';
    ul.appendChild(p);
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)} cookies`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ul.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal} cookies`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ul.appendChild(li);
    tokyoStoreContainer.appendChild(ul);
  }
};
tokyoStore.tokyoStorePerHour();

const dubaiStoreContainer = document.getElementById('dubaiStore');

let dubaiStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 11,
  maxCust: 38,
  avgCookiePerCust: 3.7,
  dubaiStorePerHour: function() {
    let ul = document.createElement('ul');
    let p = document.createElement('p');
    p.textContent = 'Dubai Store';
    ul.appendChild(p);
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)} cookies`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ul.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal} cookies`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ul.appendChild(li);
    dubaiStoreContainer.appendChild(ul);
  }
};
dubaiStore.dubaiStorePerHour();

const parisStoreContainer = document.getElementById('parisStore');

let parisStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  parisStorePerHour: function() {
    let ul = document.createElement('ul');
    let p = document.createElement('p');
    p.textContent = 'Paris Store';
    ul.appendChild(p);
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)} cookies`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ul.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal} cookies`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ul.appendChild(li);
    parisStoreContainer.appendChild(ul);
  }
};
parisStore.parisStorePerHour();

const limaStoreContainer = document.getElementById('limaStore');

let limaStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 2,
  maxCust: 16,
  avgCookiePerCust: 4.6,
  limaStorePerHour: function() {
    let ul = document.createElement('ul');
    let p = document.createElement('p');
    p.textContent = 'Lima Store';
    ul.appendChild(p);
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)} cookies`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ul.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal} cookies`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ul.appendChild(li);
    limaStoreContainer.appendChild(ul);
  }
};
limaStore.limaStorePerHour();
