// const userEmail = []
// if(userEmail){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }
// note :- falsy values
// false
// 0 , -0  BigInt 0n 
// ""
// undefined
// null
// NaN
// if (+0) {
//     console.log("Truthy");
//   } else {
//     console.log("Falsy");
//   } 
//   console.log(+0 === 0); // true
// console.log(+0 == false); // true

// note :- truthy values
// true
// any number not 0
// any string
// any object
// "0" --> 0 inside string
// any array 
// function (){}

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//         console.log("Object is empty");
//     } else {
//         console.log("Object is not empty");
//     }


    // nullish coalescing operator (??) : null , undefined

    // let val1;
    // // val1 = 5 ?? 10;
    // // val1 = null ?? 10;
    // val1 = undefined ?? 10;
    // console.log(val1);

    // terniary operator
    // condition ? true : false
    // ex :-
    const iceTeaPrice = 9;
    const tea = iceTeaPrice > 10 ? "tea" : "coffee";
    console.log(tea);