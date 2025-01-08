"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr[0] = -b / (2 * a);
  } else if (d > 0) {    
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else {
    arr = [];
  }
  return arr;
  console.log(arr);
}
 

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
	let s = amount - contribution;
	let totalAmount = 0;
	if (s > 0) {
		let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
    let allPercent = payment * countMonths;
		totalAmount = +(allPercent).toFixed(2);
		return totalAmount;
	} else return totalAmount;  
}