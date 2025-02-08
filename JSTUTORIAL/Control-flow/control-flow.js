// if statement 
// if (2==2){
//     console.log("condition is true");

// }
// if(2==3){
//     console.log("condition is false");
// }

// if else statement
// const temperature = 46;
// if(temperature<30){
//     console.log("it's not a hot day");
// }
// else{
//     console.log("it's  a hot day");
// }

// note:- if else statement is used when we want to check multiple conditions
// const balance =1000;
// if(balance>500){
//     console.log("you are eligible for loan");
// }

// nested if statement
// const balance1 = 2000;
// if(balance1<500){
//     console.log("you are eligible for loan");

// }else if(balance1>1000){
//         console.log("you can borrow upto 1000");
//     }
//     else{
//         console.log("you can borrow upto 500");
//     }
// example user authentication
// let username = 'admin';
// let password = '1234';
// let isAuthenticated = false;

// if (username === 'admin') {
//     if (password === '1234') {
//         isAuthenticated = true;
//         console.log('Authentication successful.');
//     } else {
//         console.log('Invalid password.');
//     }
// } else {
//     console.log('Invalid username.');
// }

// console.log(`User authenticated: ${isAuthenticated}`);



// switct case

const month = "sep";

switch (month) {
    case 1: 
        console.log("january");
        break;      
    case 2: 
        console.log("february");
        break;
    case 3: 
        console.log("march");
        break;
    case 4: 
        console.log("april");
        break;
    case 5: 
        console.log("may");
        break;
    case 6: 
        console.log("june");
        break;
    case 7: 
        console.log("july");
        break;
    case 8: 
        console.log("august");
        break;
    case "sep": 
        console.log("september");
        break;
        default:
            console.log("invalid month");
            break;
}

// note:- brack keyword is used to break the loop