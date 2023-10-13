
const score = 400
console.log(score);// 400
const balance = new Number(100)
console.log(balance); // [Number:100]
console.log( balance.toString());// 100, typeof string
console.log( balance.toString().length);//3 because in 100 there are three characters
console.log( balance.toFixed(2))//100.00
console.log( balance.toFixed(1))//100.0
const otherNumber = 23.899767
console.log(otherNumber.toPrecision(3)); // 23.9
//if//
const otherNumber = 123.899767 
console.log(otherNumber.toPrecision(3));// 124
//if//
const otherNumber = 1123.899767 
console.log(otherNumber.toPrecision(3));// 1.12e+3


const hundreds = 1000000
console.log(hundreds.toLocaleString());// 1,000,000


/// +++++++ Maths +++++++


console.log(Math);
console.log(Math.abs(-4));// 4 chnage negative sign
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5 if number is increased little bit then chose higher number
console.log(Math.floor(4.9)); // 5 if number is increased then chose lower number
console.log(Math.min(4,3,6,7,8)); // 3
console.log(Math.max(4,3,6,7,8)); // 8
console.log(Math.random()); //  #

console.log( Math.random());// random values appear between 0 to 1 for example 0.988 or 0.0344
console.log( Math.random()*10) // so value would appear on left side for example 0.988( 9.88) or 0.0344(03.44)
console.log((Math.random()*10) + 1);// to avoid 0 value so value would appear above 1 or 1 for example 0.0344*10+1(1.344)
console.log(Math.floor(Math.random()*10)+1); //to get the minimum value for example 1.344 (1) 0r 3.234(2)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
//12, 13, 11

