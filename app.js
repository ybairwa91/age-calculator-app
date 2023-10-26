// create date objects

const d = new Date();
console.log(d); //created date
//==Thu Oct 26 2023 09:10:04 GMT+0530 (India Standard Time)
//
console.log(d.getFullYear()); //gives only year==2-023

// new Date()
/*
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

*/

const e = new Date("oct 11,2011,11:11:11");

console.log(e);

console.log(new Date(2018, 11, 24, 10, 33, 30, 0));
