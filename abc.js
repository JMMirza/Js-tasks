// // const { countdown, lookUpProfile } = require('./basicsOfJS');
// // import * as count from "./basicsOfJS"
// array = [
//     { id: 1, name: "ali", friends: ['jibran', 'usman', 'ali', 'jm', 'avx', 'usman', 'qwerty', 'aswd', 'jamshed'] },
//     // { id: 2, name: "kamal", friends: ['jamshed', 'jibran', 'usman', 'jm', 'ali', 'aswd', 'xyz', 'qazxcvbnm'] }
// ];

// function commonFriends(arr) {
//     let dummy = []
//     arr[0].name = "jibran"
//     console.log(arr)
//     let user = arr.map(item => item.friends).flat();
//     for (let i = 0; i <= user.length - 1; i++) {
//         for (let j = 1; j < user.length; j++) {

//             if (user[i] === user[j + i]) {
//                 dummy.push(user[i])
//             }
//         }
//     }
//     console.log('common friends are: ', dummy);
// }

// function allFriends(arr) {
//     let array = arr.map(item => item.friends).flat();
//     console.log("List of all friends", array)

// }
// allFriends(array)
// commonFriends(array)
//     // lookUpProfile("Akira", "likes")
//     // console.log(countdown(30))
//     // console.log(count(10))
//     // x = 10
//     // var x
//     // console.log(x);

// name = "Arrow function"
// let me = {
//     name: "Regular function",
//     thisInArrow: () => {
//         console.log("Example of " + this.name); //no 'this' binding here 
//     },
//     thisInRegular() {
//         console.log("Example of " + this.name); //'this' binding works here 
//     }
// };

// me.thisInArrow();
// me.thisInRegular();
// console.log("Example of " + name);

// let myFunc = {
//     showArgs() {
//         console.log(arguments);
//     }
// };
// myFunc.showArgs(1, 2, 3, 4);
// let myArrowFunc = {
//     showArgs: () => {
//         console.log(arguments);
//     }
// };
// myArrowFunc.showArgs(1, 2, 3, 4);

// const increment = (num) => num + 1;

// console.log(increment(41)); // => 42
// function myRegularFunction() {
//     console.log(arguments)

//     const myArrowFunction = (...args) => {
//         console.log(args);
//     }

//     myArrowFunction('c', 'd');
// }

// myRegularFunction('a', 'b'); // logs ['c', 'd']

import countdown from "./basicsOfJS"
console.log(countdown(10))