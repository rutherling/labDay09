// Array of store locations.
var storeLocation = [
  'hillsboro',
  'pearl',
  'downtown',
  'buckman',
  'airport',
  'clackamas',
];

// Array of hours the store is open for business.
// Used to determing hour by hour information for sales data and supply purchasing.
var storeHour = [
  ' 8:00 AM',
  ' 9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  ' 1:00 PM',
  ' 2:00 PM',
  ' 3:00 PM',
  ' 4:00 PM',
  ' 5:00 PM',
  ' 6:00 PM',
  ' 7:00 PM',
  ' 8:00 PM',
  ' 9:00 PM',
  '10:00 PM',
  '11:00 PM',
  '12:00 AM',
  ' 1:00 AM',
];

function store (storeLocation, storeHour) {
  this.storeLocation = storeLocation;
  this.storeHour = storeHour;
}

// To determine number of pies made and delivered per hour, along with driver staffing recommendation
var pizzaSales = function(hour, piesMade, piesDelivered) {
  this.storeHour = hour;
  this.piesMade = generateRandom(piesMade[0], piesMade[1]);
  this.piesDelivered = generateRandom(piesDelivered[0], piesDelivered[1]);
  this.driversNeeded = Math.ceil(this.piesDelivered / 3);
};

// To generate random numbers using min/max values
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// html IDs
var hillsboro = document.getElementById('hillsboro');
var pearl = document.getElementById('pearl');
var downtown = document.getElementById('downtown');
var buckman = document.getElementById('buckman');
var airport = document.getElementById('airport');
var clackamas = document.getElementById('clackamas');

var topPizza1 = document.getElementById('topPizza1');
var topPizza2 = document.getElementById('topPizza2');
var topPizza3 = document.getElementById('topPizza3');

// Hillsboro location: Loop determining random # pies made/delivered per hour for biz estimation purposes.
// Store hours of operation divided into shifts of 3 hours each.
for (i = 0; i < storeHour.length; i++) {
  var shift;
  if (i < 3) {
    shift = new pizzaSales(storeHour[i],[1, 3], [1, 7]);
  } else if (i < 6) {
    shift = new pizzaSales(storeHour[i],[5, 9], [2, 8]);
  } else if (i < 9) {
    shift = new pizzaSales(storeHour[i],[2, 13], [1, 6]);
  } else if (i < 12) {
    shift = new pizzaSales(storeHour[i],[18, 32], [3, 9]);
  } else if (i < 15) {
    shift = new pizzaSales(storeHour[i],[1, 3], [5, 12]);
  } else if (i < 18) {
    shift = new pizzaSales(storeHour[i],[8, 20], [6, 16]);
  }
  hillsboro.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
}

// TODO: render information in tablet to html
// TODO: create/insert table for each store location
//var newTable = document.createElement('table');
// var newTR = document.createElement('tr');
// // Make <tr> a child of <table>
// newTable.appendChild(newTR);
//
// function makeTable() {
//   var tds = [];
//   // Connect <td>'s as children of <tr>
//   for (var ii = 0; ii < 2; ii++) {
//     var newTD = document.createElement('td'); // New <td>
//     newTD.innerHTML = hillsboro.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
//     newTR.appendChild(newTD);
//     tds.push(newTD);
//   }
//   return tds;
// }
//
// var myTDs = makeTable();



// Pearl location: Loop determining random # pies made/delivered per hour for biz estimation purposes.
// Store hours of operation divided into shifts of 3 hours each.
for (i = 0; i < storeHour.length; i++) {
  var shift;
  if (i < 3) {
    shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
  } else if (i < 6) {
    shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
  } else if (i < 9) {
    shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
  } else if (i < 12) {
    shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
  } else if (i < 15) {
    shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
  } else if (i < 18) {
    shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
  }
  pearl.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
}

// Downtown location: Loop determining random # pies made/delivered per hour for biz estimation purposes.
// Store hours of operation divided into shifts of 3 hours each.
for (i = 0; i < storeHour.length; i++) {
  var shift;
  if (i < 3) {
    shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
  } else if (i < 6) {
    shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
  } else if (i < 9) {
    shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
  } else if (i < 12) {
    shift = new pizzaSales(storeHour[i],[10, 26], [4, 6]);
  } else if (i < 15) {
    shift = new pizzaSales(storeHour[i],[8, 22], [7, 15]);
  } else if (i < 18) {
    shift = new pizzaSales(storeHour[i],[0, 2], [2, 8]);
  }
  downtown.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
}

// Buckman location: Loop determining random # pies made/delivered per hour for biz estimation purposes.
// Store hours of operation divided into shifts of 3 hours each.
for (i = 0; i < storeHour.length; i++) {
  var shift;
  if (i < 3) {
    shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
  } else if (i < 6) {
    shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
  } else if (i < 9) {
    shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
  } else if (i < 12) {
    shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
  } else if (i < 15) {
    shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
  } else if (i < 18) {
    shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
  }
  buckman.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
}

// Airport location: Loop determining random # pies made/delivered per hour for biz estimation purposes.
// Store hours of operation divided into shifts of 3 hours each.
for (i = 0; i < storeHour.length; i++) {
  var shift;
  if (i < 3) {
    shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
  } else if (i < 6) {
    shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
  } else if (i < 9) {
    shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
  } else if (i < 12) {
    shift = new pizzaSales(storeHour[i],[6, 9], [5, 18]);
  } else if (i < 15) {
    shift = new pizzaSales(storeHour[i],[4, 8], [2, 5]);
  } else if (i < 18) {
    shift = new pizzaSales(storeHour[i],[2, 4], [3, 11]);
  }
  airport.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
}

// Clackamas location: Loop determining random # pies made/delivered per hour for biz estimation purposes.
// Store hours of operation divided into shifts of 3 hours each.
for (i = 0; i < storeHour.length; i++) {
  var shift;
  if (i < 3) {
    shift = new pizzaSales(storeHour[i],[2, 7], [3, 5]);
  } else if (i < 6) {
    shift = new pizzaSales(storeHour[i],[3, 8], [3, 9]);
  } else if (i < 9) {
    shift = new pizzaSales(storeHour[i],[1, 5], [1, 4]);
  } else if (i < 12) {
    shift = new pizzaSales(storeHour[i],[5, 13], [2, 4]);
  } else if (i < 15) {
    shift = new pizzaSales(storeHour[i],[22, 41], [15, 42]);
  } else if (i < 18) {
    shift = new pizzaSales(storeHour[i],[15, 20], [6, 21]);
  }
  clackamas.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
}

// TODO: Total weekly sales per store


// TODO: Total weekly sales per hour across all stores





// Top-selling pizzas
var topPizza1 = {
  name: 'Sleep with the Fish Pizza',
  toppings: 'cream cheese, salmon, crispy calamari, seaweed',
  price: '$ 28.00'
};

var topPizza2 = {
  name: 'The Made Man Pizza',
  toppings: 'cheese, sausage, ground beef, pepperoni, gun powder seasong',
  price: '$ 28.00'
};

var topPizza3 = {
  name: 'Brooklyn\'s Finest Pizza',
  toppings: 'goat cheese, heirloom tomatoes, kalamata olives, dusting of Park Slope dirt',
  price: '$ 35.00'
};
topPizza1.innerHTML = '<p>' + name + '</p>';
topPizza2.innerHTML = '<p>' + name + '</p>';
topPizza3.innerHTML = '<p>' + name + '</p>';
