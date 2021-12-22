'use strict';
console.log('Bonjour!');

let storeHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

const seattleStoreContainer = document.getElementById('seattleStore');
let ulSeattle = document.createElement('ul');
ulSeattle.textContent = 'Seattle Store';

let seattleStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  seattleStorePerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)}`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ulSeattle.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal}`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ulSeattle.appendChild(li);
  }
};
//console.log(seattleStore.customersPerHourArray);
seattleStore.seattleStorePerHour();

const tokyoStoreContainer = document.getElementById('tokyoStore');
let ulTokyo = document.createElement('ul');
ulTokyo.textContent = 'Tokyo Store';

let tokyoStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  tokyoStorePerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)}`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ulTokyo.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal}`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ulTokyo.appendChild(li);
  }
};
tokyoStore.tokyoStorePerHour();

const dubaiStoreContainer = document.getElementById('dubaiStore');
let ulDubai = document.createElement('ul');
ulDubai.textContent = 'Dubai Store';

let dubaiStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 11,
  maxCust: 38,
  avgCookiePerCust: 3.7,
  dubaiStorePerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)}`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ulDubai.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal}`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ulDubai.appendChild(li);
  }
};
dubaiStore.dubaiStorePerHour();

const parisStoreContainer = document.getElementById('parisStore');
let ulParis = document.createElement('ul');
ulParis.textContent = 'Paris Store';

let parisStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  parisStorePerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)}`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ulParis.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal}`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ulParis.appendChild(li);
  }
};
parisStore.parisStorePerHour();

const limaStoreContainer = document.getElementById('limaStore');
let ulLima = document.createElement('ul');
ulLima.textContent = 'Lima Store';

let limaStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 2,
  maxCust: 16,
  avgCookiePerCust: 4.6,
  limaStorePerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = hourlyCustomer * this.avgCookiePerCust;
      let salesMessage = `${storeHours[i]}: ${Math.round(hourlyCookieTotal)}`;
      this.customersPerHourArray.push(salesMessage);
      this.cookieTotal += Math.round(hourlyCookieTotal);
      let li = document.createElement('li');
      li.textContent = salesMessage;
      ulLima.appendChild(li);
    }
    let total = `Total: ${this.cookieTotal}`;
    this.customersPerHourArray.push(total);
    let li = document.createElement('li');
    li.textContent = total;
    ulLima.appendChild(li);
  }
};
limaStore.limaStorePerHour();


seattleStoreContainer.appendChild(ulSeattle);
tokyoStoreContainer.appendChild(ulTokyo);
dubaiStoreContainer.appendChild(ulDubai);
parisStoreContainer.appendChild(ulParis);
limaStoreContainer.appendChild(ulLima);
