// const user = {
//     username: "ankit",
//     price: 100,
//     welcomeMessage: function () {
//         console.log(`Welcome ${this.username}`);
//         console.log(this);
//     }

// }


// user.welcomeMessage();
// user.username = "ram";
// user.welcomeMessage();

// this function correct context ki baat karta hai. 
// browser ke andar jo object hai wo windows object hai. 
// console.log(this);


// function chai(){
//     console.log(this);
// }

// chai();

// const chai = () => {
//     let username = 'ankit';
//     console.log(this.username);
// }
// chai();
// output => undefined

// arrow function 
// explicit return
//  const add = (a,b) => {
//     return a + b
//  }
//  console.log(add(3 , 4));

// //  implied return 
// // const add2 = (a,b) => a + b;
// // console.log(add2(3 , 4));
// // curly braces ke sath return keyword use karna hi hota hai. but agar implied return use karna hai to curly braces ko remove karna hai.

// // for returning object
// const add3 = (a,b) => ({username: 'ankit'});
// console.log(add3(3 , 4));



// Immediately invoked function expression (IIFE)

// (function () {
//     console.log("IIFE");
// })();

function greeting() {
    // [1] Some code here
    sayHi();
    // [2] Some code here
  }
  function sayHi() {
    return "Hi!";
  }
  
  // Invoke the `greeting` function
  greeting();
  
  // [3] Some code here
  console.log(greeting());
//   console.log(sayHi());