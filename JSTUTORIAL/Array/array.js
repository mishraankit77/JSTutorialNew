// const myArr = [1, 2, 3, 4, 5];
// // console.log(myArr); // [1, 2, 3, 4, 5]
// // console.log(myArr[0]); // 1
// // console.log(myArr[1]); // 2

// // myArr.push(6);
// // console.log(myArr); // [1, 2, 3, 4, 5, 6]
// // myArr.pop();
// // console.log(myArr); // [1, 2, 3, 4, 5]

// // myArr.unshift(9);
// // console.log(myArr); 

// // myArr.shift();
// // console.log(myArr); 

// const newArr  = myArr.join()
// console.log(myArr); // [1,2,3,4,5]
// console.log( typeof newArr);  // 1,2,3,4,5  --> string

// const arr = [1, 2, 3, 4, 5];

// const newArr =[3, 4, 5, 6, 7];
// const finalArr = newArr.concat(arr)
// console.log(finalArr); // [3, 4, 5, 6, 7, 1, 2, 3, 4, 5]

// const allArr = [...arr, ...newArr]
// console.log(allArr); // [1, 2, 3, 4, 5, 3, 4, 5, 6, 7]

console.log(Array.isArray('Ankit')) // false
console.log(Array.from('Ankit')) // ['A', 'n', 'k', 'i', 't']