// ex1

// const coding = ["js", "ruby","java", "java","cpp"]
// *******callback function ********
// coding.forEach(function (val){
//     console.log(val)
// })


//  *******arrow function ********
// coding.forEach( (item) => {
//     console.log(item)
// })


const mynums = [1,2,3,4,5,6,7,8,9,10]
// basic example
// const newnums = mynums.filter((num) => num >4)
// console.log(newnums);

// scope example
// const newnums = mynums.filter((num) => {
//     return num >4
// })
// console.log(newnums);

// note:- scope yaani curly rasses use krege to return keyword use karna hoga

// usung for each loop
// const newnums = []
// mynums.forEach((num) => {
//     if(num>4){
//         newnums.push(num)
//     }
  
// })
// console.log(newnums);


// map function
// const newnums = mynums.map((num) => {return num*2})
// console.log(newnums);

// map function using forech loop
// const newnums = []
// mynums.forEach((num) => {
//     newnums.push(num*2)
// })
// console.log(newnums);



//  chaining

// const newnums = mynums.map((num) => num*2)
// .map((num) => num+1)
// .filter((num) => num>14)
// console.log(newnums);



// reduce function

// const newnums = mynums.reduce((acc,curr) => (acc+curr),0)
// console.log(newnums);


// example


const shoppingCart = [
    {name: 'shoes', price: 1200, quantity: 2},
    {name: 'shirt', price: 300, quantity: 4},
    {name: 'pant', price: 800, quantity: 3}
]

const totalAmount = shoppingCart.reduce((acc, curr) => (acc + curr.price * curr.quantity), 0)
console.log(totalAmount);