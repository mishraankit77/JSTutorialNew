// function sayMyName() {
//     console.log('A');
//     console.log('N');
//     console.log('K');
//     console.log('I');
//     console.log('T');
// }

// sayMyName();
// sayMyName -->  function reference 
// () --> function execution

// add 2 numbers
// function  add(num1, num2)  {
//     console.log(num1 + num2);
// }
// add(10, 20);
// add(20, "30"); --> 2030 
// add(2 , "a"); --> 2a
// add(2 , null); --> 2
// add(2, undefined); --> nan



// for return value
// function add(num1, num2) {
//    let result = num1 + num2;
//    return result;

// }
// const result = add(10, 20);
// console.log("result", result);


// function loginUserMessage(username) {
//     if (!username ) {
//         console.log("Please enter a username");
//         return
//     }
//     return`${username} just logged in`;
// }

// console.log(loginUserMessage("ankit")); --> ankit just logged in

// console.log(loginUserMessage()); 

const user = {
    username: "ankit",
    price: 999,
}
function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
// handleObject({
//     username: "ram",
//     price: 666
// }) --> User name is ram and price is 666
const arr = [1, 2, 3, 4, 5];
function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(arr));
