//Dates
let myDate = new Date ()
console.log(myDate.toString());// 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);// object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());// MOnday Jan 2023

let myCreatedDate = new Date(2023,0,23 5,3)
console.log(myCreatedDate.toLocaleString())// 1/3/2023 5:03:00 AM
  

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) // 167762733

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //
console.log(newDate.getDay()); /
//${newDate.getDay()} and the time

newDate.toLocaleString('default', { weekday: "long"}) // more customize local string

console.log();

