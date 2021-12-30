/* eslint-disable no-unused-vars */
'use strict';
console.log('Anyone else think "salmon cookies" sound gross?');

let storeHoursAndTotal = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm', 'Daily Location Total'];
let storeHoursOnly = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let storeArray = [];
let hourlyTotalsArray = [];

const storeTable = document.querySelector('table tbody');
const tossersHeader = document.getElementById('cookieTossers');
const tossersBody = document.getElementById('t2Body');

function Store(name,min, max, avg) {
  this.storeName = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookiePerCust = avg;
  this.totalCookiesPerHour = [];
  this.cookieTotal = 0;
  this.customersPerHour = [];
  this.cookieTossersPerHour = [];
  this.randomCustPerHour = function() {
    for (let i = 0; i < storeHoursAndTotal.length - 1; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      this.customersPerHour.push(hourlyCustomer);
      let hourlyCookieTotal = Math.ceil(hourlyCustomer * this.avgCookiePerCust);
      this.totalCookiesPerHour.push(hourlyCookieTotal);
      this.cookieTotal += hourlyCookieTotal;
    }
    this.totalCookiesPerHour.push(this.cookieTotal);
  };
  this.renderTable = function(variable,array) {
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
  this.tossersNeeded = function() {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      let cookieTossers = 2;
      if (this.customersPerHour[i] > 40 && this.customersPerHour[i] < 60) {
        cookieTossers += 1;
        this.cookieTossersPerHour.push(cookieTossers);
      } else if ( this.customersPerHour[i] > 60) {
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
let seattleStore = new Store('Seattle',23,65,6.3);
let tokyoStore = new Store('Tokyo',3,24,1.2);
let dubaiStore = new Store('Dubai',11,38,3.7);
let parisStore = new Store('Paris',20,38,2.3);
let limaStore = new Store('Lima',2,16,4.6);

let tableHeader = function(id,array) {
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

let tableFooter = function() {
  const tableFoot = document.querySelector('table tfoot');
  let tr = document.createElement('tr');
  tableFoot.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Totals';
  for (let j =0; j < storeHoursAndTotal.length; j++) {
    let hourlyTotal = 0;
    for (let i =0; i < storeArray.length; i++) {
      hourlyTotal += storeArray[i].totalCookiesPerHour[j];
    } hourlyTotalsArray.push(hourlyTotal);
  }
  for (let i = 0; i < storeHoursAndTotal.length; i++) {
    let td = document.createElement('td');
    td.classList.add('highlights');
    td.textContent = hourlyTotalsArray[i];
    tr.appendChild(td);
  }
  let grandCookieTotal = 0;
  for (let i = 0; i < storeArray.length; i++) {
    grandCookieTotal += storeArray[i].cookieTotal;
  }
};


// Everything gets called and rendered with the code below

tableHeader('salesData',storeHoursAndTotal);

for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].renderTable(storeTable,storeArray[i].totalCookiesPerHour);
}

tableFooter();

tableHeader('cookieTossers',storeHoursOnly);

for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].tossersNeeded();
  storeArray[i].renderTable(tossersBody,storeArray[i].cookieTossersPerHour);
}


// seattleStore.tossersNeeded();
// console.log(seattleStore.cookieTossersPerHour);
// console.log(seattleStore.customersPerHour);


// const seattleStoreContainer = document.getElementById('seattleStore');
// const seattleTable = document.querySelector('table tbody');

// let seattleStore = {
//   customersPerHourArray: [],
//   cookieTotal: 0,
//   minCust: 23,
//   maxCust: 65,
//   avgCookiePerCust: 6.3,
//   seattleStorePerHour: function() {
//     let ul = document.createElement('ul');
//     let p = document.createElement('p');
//     p.classList.add('text');
//     p.textContent = 'Seattle Store';
//     ul.appendChild(p);
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//       //console.log(hourlyCustomer);//To check the method is working
//       let hourlyCookieTotal = Math.ceil(hourlyCustomer * this.avgCookiePerCust);
//       let salesMessage = `${storeHours[i]}: ${hourlyCookieTotal} cookies`;
//       this.customersPerHourArray.push(hourlyCookieTotal);
//       this.cookieTotal += hourlyCookieTotal;
//       let li = document.createElement('li');
//       li.classList.add('data');
//       li.textContent = salesMessage;
//       ul.appendChild(li);
//     }
//     let total = `Total: ${this.cookieTotal} cookies`;
//     this.customersPerHourArray.push(total);
//     let li = document.createElement('li');
//     li.textContent = total;
//     ul.appendChild(li);
//     seattleStoreContainer.appendChild(ul);
//   }
// };
// seattleStore.seattleStorePerHour();

// seattleStore.renderTable = function() {
//   let tr1 = document.createElement('tr');
//   seattleTable.appendChild(tr1);
//   for (let i = 0; i < storeHours.length; i++) {
//     let td = document.createElement('td');
//     td.textContent = storeHours[i];
//     tr1.appendChild(td);
//   }
//   let tr2 = document.createElement('tr');
//   seattleTable.appendChild(tr2);
//   for (let i = 0; i < this.customersPerHourArray.length; i++) {
//     let td = document.createElement('td');
//     td.textContent = this.customersPerHourArray[i];
//     tr2.appendChild(td);
//   }
// };
// seattleStore.renderTable();

// const tokyoStoreContainer = document.getElementById('tokyoStore');

// let tokyoStore = {
//   customersPerHourArray: [],
//   cookieTotal: 0,
//   minCust: 3,
//   maxCust: 24,
//   avgCookiePerCust: 1.2,
//   tokyoStorePerHour: function() {
//     let ul = document.createElement('ul');
//     let p = document.createElement('p');
//     p.classList.add('text');
//     p.textContent = 'Tokyo Store';
//     ul.appendChild(p);
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//       //console.log(hourlyCustomer);//To check the method is working
//       let hourlyCookieTotal = Math.ceil(hourlyCustomer * this.avgCookiePerCust);
//       let salesMessage = `${storeHours[i]}: ${hourlyCookieTotal} cookies`;
//       this.customersPerHourArray.push(salesMessage);
//       this.cookieTotal += hourlyCookieTotal;
//       let li = document.createElement('li');
//       li.classList.add('data');
//       li.textContent = salesMessage;
//       ul.appendChild(li);
//     }
//     let total = `Total: ${this.cookieTotal} cookies`;
//     this.customersPerHourArray.push(total);
//     let li = document.createElement('li');
//     li.textContent = total;
//     ul.appendChild(li);
//     tokyoStoreContainer.appendChild(ul);
//   }
// };
// tokyoStore.tokyoStorePerHour();

// const dubaiStoreContainer = document.getElementById('dubaiStore');

// let dubaiStore = {
//   customersPerHourArray: [],
//   cookieTotal: 0,
//   minCust: 11,
//   maxCust: 38,
//   avgCookiePerCust: 3.7,
//   dubaiStorePerHour: function() {
//     let ul = document.createElement('ul');
//     let p = document.createElement('p');
//     p.classList.add('text');
//     p.textContent = 'Dubai Store';
//     ul.appendChild(p);
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//       //console.log(hourlyCustomer);//To check the method is working
//       let hourlyCookieTotal = Math.ceil(hourlyCustomer * this.avgCookiePerCust);
//       let salesMessage = `${storeHours[i]}: ${hourlyCookieTotal} cookies`;
//       this.customersPerHourArray.push(salesMessage);
//       this.cookieTotal += hourlyCookieTotal;
//       let li = document.createElement('li');
//       li.classList.add('data');
//       li.textContent = salesMessage;
//       ul.appendChild(li);
//     }
//     let total = `Total: ${this.cookieTotal} cookies`;
//     this.customersPerHourArray.push(total);
//     let li = document.createElement('li');
//     li.textContent = total;
//     ul.appendChild(li);
//     dubaiStoreContainer.appendChild(ul);
//   }
// };
// dubaiStore.dubaiStorePerHour();

// const parisStoreContainer = document.getElementById('parisStore');

// let parisStore = {
//   customersPerHourArray: [],
//   cookieTotal: 0,
//   minCust: 20,
//   maxCust: 38,
//   avgCookiePerCust: 2.3,
//   parisStorePerHour: function() {
//     let ul = document.createElement('ul');
//     let p = document.createElement('p');
//     p.classList.add('text');
//     p.textContent = 'Paris Store';
//     ul.appendChild(p);
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//       //console.log(hourlyCustomer);//To check the method is working
//       let hourlyCookieTotal = Math.ceil(hourlyCustomer * this.avgCookiePerCust);
//       let salesMessage = `${storeHours[i]}: ${hourlyCookieTotal} cookies`;
//       this.customersPerHourArray.push(salesMessage);
//       this.cookieTotal += hourlyCookieTotal;
//       let li = document.createElement('li');
//       li.classList.add('data');
//       li.textContent = salesMessage;
//       ul.appendChild(li);
//     }
//     let total = `Total: ${this.cookieTotal} cookies`;
//     this.customersPerHourArray.push(total);
//     let li = document.createElement('li');
//     li.textContent = total;
//     ul.appendChild(li);
//     parisStoreContainer.appendChild(ul);
//   }
// };
// parisStore.parisStorePerHour();

// const limaStoreContainer = document.getElementById('limaStore');

// let limaStore = {
//   customersPerHourArray: [],
//   cookieTotal: 0,
//   minCust: 2,
//   maxCust: 16,
//   avgCookiePerCust: 4.6,
//   limaStorePerHour: function() {
//     let ul = document.createElement('ul');
//     let p = document.createElement('p');
//     p.classList.add('text');
//     p.textContent = 'Lima Store';
//     ul.appendChild(p);
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//       //console.log(hourlyCustomer);//To check the method is working
//       let hourlyCookieTotal = Math.ceil(hourlyCustomer * this.avgCookiePerCust);
//       let salesMessage = `${storeHours[i]}: ${hourlyCookieTotal} cookies`;
//       this.customersPerHourArray.push(salesMessage);
//       this.cookieTotal += hourlyCookieTotal;
//       let li = document.createElement('li');
//       li.classList.add('data');
//       li.textContent = salesMessage;
//       ul.appendChild(li);
//     }
//     let total = `Total: ${this.cookieTotal} cookies`;
//     this.customersPerHourArray.push(total);
//     let li = document.createElement('li');
//     li.textContent = total;
//     ul.appendChild(li);
//     limaStoreContainer.appendChild(ul);
//   }
// };
// limaStore.limaStorePerHour();
