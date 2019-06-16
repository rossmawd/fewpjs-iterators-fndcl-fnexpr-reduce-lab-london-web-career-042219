const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let doubledAndSummed = [0, 3, 3, 3].reduce(function(fart, element) {
  debugger;
  return element * 2 - fart;
}, 0);
// => 11

//totalBatteries: the sum of all of the battery amounts in the batteryBatches array. Naturally, use reduce() for this!
let totalBatteries = batteryBatches.reduce(myFunc);

function myFunc(total, element) {
  return total + element;
}
