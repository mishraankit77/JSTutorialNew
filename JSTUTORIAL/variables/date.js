let myDate = new Date();
// console.log(myDate);  // 2025-01-16T09:13:30.818Z
// console.log(myDate.toDateString());  // Thu Jan 16 2025
// console.log(myDate.toTimeString());  // 14:43:30 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); // 1/16/2025, 2:43:30 PM
// console.log(myDate.getFullYear()); // 2025
// console.log(myDate.getMonth()); // 0
// console.log(myDate.getDate());  // 16
// console.log(myDate.getDay()); // 4 because it starts from 0 index
// console.log(myDate.getHours());  // 14
// console.log(myDate.getMinutes()); // 43
// console.log(myDate.getSeconds()); // 30
// console.log(myDate.getMilliseconds());  // 818
// console.log(myDate.getTime()); // 1737018810818

// console.log(myDate.toISOString()); // 2025-01-16T09:13:30.818Z
// console.log(myDate.toJSON()); // 2025-01-16T09:13:30.818Z
// note :- 
// The console.log(myDate.toJSON()); statement in JavaScript is used 
// to convert a Date object (myDate) into a JSON-compliant string and
//  log it to the console. The JSON-compliant string is a string that 
// is in the ISO format (YYYY-MM-DDTHH:MM:SS.sssZ) and is used to
//  represent a date and time in JSON data. The toJSON() method is
//  a built-in method of the Date object that returns a JSON-compliant
//  string representing the Date object.
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025 , 11 ,13)
// console.log(myCreatedDate.toLocaleString());

// time stamp
let timestamp = Date.now();
// console.log(timestamp); // 1737019946801
// note :- The Date.now() method returns the current timestamp in milliseconds since the Unix Epoch.
// let timestamp: The variable timestamp stores the millisecond timestamp returned by Date.now().

// console.log(Math.floor(Date.now() / 1000)); 1737020261sec
// console.log(Math.floor(Date.now() / 1000 / 60)); 28950min
// console.log(Math.floor(Date.now() / 1000 / 60 / 60)); 4680hr
// console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24)); 195days

 let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMinutes() + 1);
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    month: 'numeric',
})