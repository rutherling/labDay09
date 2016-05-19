// Please disregard this file.
// It is what I use to store previous and ongoing efforts/attempts.
// My working sandbox...

var storeHrs = [
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

var piesMade = [];
var piesDelivered = [];

function Store(storeLocation, storeHrs) {
  this.storeLocation = storeLocation;
  this.storeHrs = storeHrs;
  this.piesMade = piesMade;
  this.piesDelivered = piesDelivered;
  this.generateRandom = generateRandom(piesMade[0], piesMade[1]);
  this.driversNeeded = Math.ceil(this.piesDelivered / 3);
}

// function Store(storeLocation, storeHrs, piesMade, piesDelivered, driversNeeded) {
//   this.storeLocation = storeLocation;
//   this.storeHrs = storeHrs;
//   this.piesMade = generateRandom(piesMade[0], piesMade[1]);
//   this.piesDelivered = generateRandom(piesDelivered[0], piesDelivered[1]);
//   this.driversNeeded = Math.ceil(this.piesDelivered / 3);
// }
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//array here []
var hillsboroStore = new Store('Hillsboro', storeHrs, piesMade, piesDelivered, driversNeeded);
for (i = 0; i < storeHrs.length; i++) {
  if (i < 3) {
    piesMade = [0, 4];
    piesDelivered = [0, 4];
  } else if (i < 6) {
    piesMade = [0, 7];
    piesDelivered = [0, 4];
  } else if (i < 9) {
    piesMade = [2, 15];
    piesDelivered = [1, 4];
  } else if (i < 12) {
    piesMade = [15, 35];
    piesDelivered = [3, 8];
  } else if (i < 15) {
    piesMade = [12, 31];
    piesDelivered = [5, 12];
  } else if (i < 18) {
    piesMade = [5, 20];
    piesDelivered = [5, 11];
  }
};
  hillsboro.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';  }




  //   shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
  // } else if (i < 6) {
  //   shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
  // } else if (i < 9) {
  //   shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
  // } else if (i < 12) {
  //   shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
  // } else if (i < 15) {
  //   shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
  // } else if (i < 18) {
  //   shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
  // }
  // hillsboro.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';  }


// var storeLocation = [
//   'hillsboro',
//   'pearl',
//   'downtown',
//   'buckman',
//   'airport',
//   'clackamas',
// ];
//
//
// function store (storeLocation, storeHour) {
//   this.storeLocation = storeLocation;
//   this.storeHour = storeHour;
// }
//
// var pizzaSales = function(hour, piesMade, piesDelivered) {
//   this.storeHour = hour;
//   this.piesMade = generateRandom(piesMade[0], piesMade[1]);
//   this.piesDelivered = generateRandom(piesDelivered[0], piesDelivered[1]);
//   this.driversNeeded = Math.ceil(this.piesDelivered / 3);
// };
//
//
// //Hillsboro, Pearl, DowntownPDX, Buckman, PDXairport, and Clackamas
//       //        Min/max Piz/hr     min/max Del/hr
// // Shift 1  8am-11am	 0	4	  0	 4
// // Shift 2  11am-2pm	 0	7	  0	 4
// // Shift 3  2pm-5pm	   2	15	1	 4
// // Shift 4  5pm-8pm	  15	35	3	 8
// // Shift 5  8pm-11pm	12	31	5	12
// // Shift 6  11pm-2am   5 	20	5	11
//
// var hillsboro = document.getElementById('hillsboro');
// var pearl = document.getElementById('pearl');
// var downtown = document.getElementById('downtown');
// var buckman = document.getElementById('buckman');
// var airport = document.getElementById('airport');
// var clackamas = document.getElementById('clackamas');
//
// var topPizza1 = document.getElementById('topPizza1');
// var topPizza2 = document.getElementById('topPizza2');
// var topPizza3 = document.getElementById('topPizza3');
//
// for (i = 0; i < storeHour.length; i++) {
//   var shift;
//   if (i < 3) {
//     shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
//   } else if (i < 6) {
//     shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
//   } else if (i < 9) {
//     shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
//   } else if (i < 12) {
//     shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
//   } else if (i < 15) {
//     shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
//   } else if (i < 18) {
//     shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
//   }
//   hillsboro.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
// }
//
// for (i = 0; i < storeHour.length; i++) {
//   var shift;
//   if (i < 3) {
//     shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
//   } else if (i < 6) {
//     shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
//   } else if (i < 9) {
//     shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
//   } else if (i < 12) {
//     shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
//   } else if (i < 15) {
//     shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
//   } else if (i < 18) {
//     shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
//   }
//   pearl.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
// }
//
// for (i = 0; i < storeHour.length; i++) {
//   var shift;
//   if (i < 3) {
//     shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
//   } else if (i < 6) {
//     shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
//   } else if (i < 9) {
//     shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
//   } else if (i < 12) {
//     shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
//   } else if (i < 15) {
//     shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
//   } else if (i < 18) {
//     shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
//   }
//   downtown.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
// }
//
// for (i = 0; i < storeHour.length; i++) {
//   var shift;
//   if (i < 3) {
//     shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
//   } else if (i < 6) {
//     shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
//   } else if (i < 9) {
//     shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
//   } else if (i < 12) {
//     shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
//   } else if (i < 15) {
//     shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
//   } else if (i < 18) {
//     shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
//   }
//   buckman.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
// }
//
// for (i = 0; i < storeHour.length; i++) {
//   var shift;
//   if (i < 3) {
//     shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
//   } else if (i < 6) {
//     shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
//   } else if (i < 9) {
//     shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
//   } else if (i < 12) {
//     shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
//   } else if (i < 15) {
//     shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
//   } else if (i < 18) {
//     shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
//   }
//   airport.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
// }
//
// for (i = 0; i < storeHour.length; i++) {
//   var shift;
//   if (i < 3) {
//     shift = new pizzaSales(storeHour[i],[0, 4], [0, 4]);
//   } else if (i < 6) {
//     shift = new pizzaSales(storeHour[i],[0, 7], [0, 4]);
//   } else if (i < 9) {
//     shift = new pizzaSales(storeHour[i],[2, 15], [1, 4]);
//   } else if (i < 12) {
//     shift = new pizzaSales(storeHour[i],[15, 35], [3, 8]);
//   } else if (i < 15) {
//     shift = new pizzaSales(storeHour[i],[12, 31], [5, 12]);
//   } else if (i < 18) {
//     shift = new pizzaSales(storeHour[i],[5, 20], [5, 11]);
//   }
//   clackamas.innerHTML += '<p>' + shift.storeHour + ': Sold: ' + shift.piesMade + '; Delivered: ' + shift.piesDelivered + ' -- Drivers Recommended: ' + shift.driversNeeded + '</p>';
// }
//
//
// var topPizza1 = {
//   name: 'Sleep with the Fish Pizza',
//   toppings: 'cream cheese, salmon, crispy calamari, seaweed',
//   price: '$ 28.00'
// };
//
// var topPizza2 = {
//   name: 'The Made Man Pizza',
//   toppings: 'cheese, sausage, ground beef, pepperoni, gun powder seasong',
//   price: '$ 28.00'
// };
//
// var topPizza3 = {
//   name: 'Brooklyn\'s Finest Pizza',
//   toppings: 'goat cheese, heirloom tomatoes, kalamata olives, dusting of Park Slope dirt',
//   price: '$ 35.00'
// };
// topPizza1.innerHTML = '<p>' + name + '</p>';
// topPizza2.innerHTML = '<p>' + name + '</p>';
// topPizza3.innerHTML = '<p>' + name + '</p>';
//
//
// // IGNORE PLEASE - saving for my own review at a later time
//
// // var minMaxPies = [
// //   [0, 4],
// //   [0, 7],
// //   [2, 15],
// //   [15, 35],
// //   [12, 31],
// //   [5, 20],
// // ];
// //
// // var minMaxDeliveries = [
// //   [0, 4],
// //   [0, 4],
// //   [1, 4],
// //   [3, 8],
// //   [5, 12],
// //   [5, 11],
// // ];
//
// // function store (piesMade, piesDelivered, storeLocation, storeHour) {
// //   this.storeLocation = storeLocation;
// //   this.storeHour = storeHour;
// //   this.piesMade = generateRandom(piesMade[0], piesMade[1]);
// //   this.piesDelivered = generateRandom(piesDelivered[0], piesDelivered[1]);
// //   this.driversNeeded = Math.ceil(this.piesDelivered / 3);
// // }
// //
// // function store (storeLocation, storeHour, minMaxPies, minMaxDeliveries) {
// //   this.storeLocation = storeLocation;
// //   this.storeHour = storeHour;
// //   this.piesMade = generateRandom(minMaxPies[0], minMaxPies[1]);
// //   this.piesDelivered = generateRandom(minMaxDeliveries[0], minMaxDeliveries[1]);
// //   this.driversNeeded = Math.ceil(this.piesDelivered / 3);
// // }
// //
// // var hillsboro = new store ('hillsboro', storeHour, minMaxPies, minMaxDeliveries  )
