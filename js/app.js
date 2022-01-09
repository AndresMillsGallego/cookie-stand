/* eslint-disable no-unused-vars */
'use strict';
console.log('Anyone else think "salmon cookies" sound gross?');

let storeHoursAndTotal = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];
let storeHoursOnly = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let controlCurvePercentage = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];//This has one less than on the assignment since the listed array had 15 values and our method only creates 14.
let storeArray = [];
let hourlyTotalsArray = [];

const storeTable = document.querySelector('table tbody');
const tossersBody = document.getElementById('t2Body');
const form = document.querySelector('form');

function Store(name, min, max, avg) {
  this.storeName = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookiePerCust = avg;
  this.totalCookiesPerHour = [];
  this.cookieTotal = 0;
  this.customersPerHour = [];
  this.cookieTossersPerHour = [];
  this.randomCustPerHour = function () {
    for (let i = 0; i < storeHoursOnly.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      hourlyCustomer *= controlCurvePercentage[i];
      this.customersPerHour.push(hourlyCustomer);
      let hourlyCookieTotal = Math.ceil(hourlyCustomer * this.avgCookiePerCust);
      this.totalCookiesPerHour.push(hourlyCookieTotal);
      this.cookieTotal += hourlyCookieTotal;
    }
    this.totalCookiesPerHour.push(this.cookieTotal);
  };
  this.renderTable = function (variable, array) {
    this.randomCustPerHour();
    let tr = document.createElement('tr');
    variable.appendChild(tr);
    let th = document.createElement('th');
    th.textContent = this.storeName;
    tr.appendChild(th);
    for (let i = 0; i < array.length; i++) {
      let td = document.createElement('td');
      td.classList.add('data');
      td.textContent = array[i];
      tr.appendChild(td);
    }
  };
  this.tossersNeeded = function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      let cookieTossers = 2;
      if (this.customersPerHour[i] > 40 && this.customersPerHour[i] < 60) {
        cookieTossers += 1;
        this.cookieTossersPerHour.push(cookieTossers);
      } else if (this.customersPerHour[i] > 60) {
        let largeCustomerFormula = Math.ceil(this.customersPerHour[i] / 20) - 2;
        cookieTossers += largeCustomerFormula;
        this.cookieTossersPerHour.push(cookieTossers);
      } else {
        this.cookieTossersPerHour.push(cookieTossers);
      }
    }
  };
  storeArray.push(this);
}

let seattleStore = new Store('Seattle', 23, 65, 6.3);
let tokyoStore = new Store('Tokyo', 3, 24, 1.2);
let dubaiStore = new Store('Dubai', 11, 38, 3.7);
let parisStore = new Store('Paris', 20, 38, 2.3);
let limaStore = new Store('Lima', 2, 16, 4.6);

let addNewStore = function(event) {
  event.preventDefault();
  let storeName = event.target.name.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookie = +event.target.avgCookieSale.value;
  let newStore = new Store (storeName,
    minCust,
    maxCust,
    avgCookie);
  for (let i = 0; i < storeArray.length; i++) {
    if (newStore.storeName.toLowerCase() === storeArray[i].storeName.toLowerCase()) {
      storeArray.splice(i,1);
      document.getElementById('salesTable').deleteRow(i+1);
      document.getElementById('tossersTable').deleteRow(i+1);
      break;
    }
  }
  newStore.renderTable(storeTable, newStore.totalCookiesPerHour);
  newStore.tossersNeeded();
  newStore.renderTable(tossersBody,newStore.cookieTossersPerHour);
  hourlyTotalsArray = [];
  document.getElementById('salesTable').deleteRow(-1);
  tableFooter('salesTotals');
  // console.log(newStore);
};

let tableHeader = function (id, array) {
  const tHead = document.getElementById(id);
  let tr = document.createElement('tr');
  tHead.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  for (let i = 0; i < array.length; i++) {
    let th = document.createElement('th');
    th.textContent = array[i];
    tr.appendChild(th);
  }
};

let tableFooter = function (id) {
  const tableFoot = document.getElementById(id);
  let tr = document.createElement('tr');
  tableFoot.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Totals';
  for (let j = 0; j < storeHoursAndTotal.length; j++) {
    let hourlyTotal = 0;
    for (let i = 0; i < storeArray.length; i++) {
      hourlyTotal += storeArray[i].totalCookiesPerHour[j];
    } hourlyTotalsArray.push(hourlyTotal);
  }
  for (let i = 0; i < storeHoursAndTotal.length; i++) {
    let td = document.createElement('td');
    td.classList.add('highlights');
    td.textContent = hourlyTotalsArray[i];
    tr.appendChild(td);
  }
};

// Everything gets called and rendered with the code below

tableHeader('salesData', storeHoursAndTotal);
tableHeader('cookieTossers', storeHoursOnly);

for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].renderTable(storeTable, storeArray[i].totalCookiesPerHour);
  storeArray[i].tossersNeeded();
  storeArray[i].renderTable(tossersBody, storeArray[i].cookieTossersPerHour);
}

tableFooter('salesTotals');
console.log(storeArray);

form.addEventListener('submit',addNewStore);

