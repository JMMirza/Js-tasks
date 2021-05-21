// //script to covert celsius to fahrenheit

// function convertToF(celsius) {
//     let fahrenheit = (celsius * 9 / 5) + 32;
//     return fahrenheit;
// }

// console.log(convertToF(30));


// //reverse a string
// function reverseString(str) {
//     let reverseArr = [];
//     let reverseStr = "";
//     for (let i = 0; i < str.length; i++) {
//         reverseArr.push(str[(str.length - 1) - i]);
//         reverseStr += reverseArr[i];
//     }
//     return reverseStr;
// }

// console.log(reverseString("hello"));

// //factrolization
// function factorialize(num) {
//     if (num === 0) {
//         return 1;
//     }
//     return num * factorialize(num - 1)


// }

// console.log(factorialize(5));

// //find longest word in the string
// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxWord = "";
//     let maxLength = 0;

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxWord = words[i];
//             maxLength = words[i].length;
//         }
//     }
//     console.log(maxWord);
//     return maxLength;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the jumping lazy dog"));


// //Return Largest Numbers in Arrays

// function largestOfFour(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let largeNum = arr[i][0];
//         //console.log(i)
//         for (let j = 1; j < arr[i].length; j++) {
//             if (arr[i][j] > largeNum) {
//                 largeNum = arr[i][j]
//                     //  console.log(j)

//             }
//             result[i] = largeNum
//         }

//     }
//     return result;
// }

// console.log(largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1]
// ]));

// //repeat string
// function repeatStringNumTimes(str, num) {
//     if (num <= 0) {
//         return "";
//     } else {
//         //console.log(str)
//         const print = str + repeatStringNumTimes(str, num - 1);
//         return print;

//     }
//     //return str;
// }

// console.log(repeatStringNumTimes("abc", 6));

// //truncate a string
// function truncateString(str, num) {
//     let arr = str.split("");
//     let newStr = "";
//     if (arr.length <= num) {
//         return str
//     } else {
//         newStr = arr.splice(0, num).join("") + " ...";

//     }
//     return newStr;
// }

// console.log(truncateString("My name is Jan Muhammad Mirza. I am working at magnus mage as backend developer", 10));

// // chunky monkey
// //Write a function that splits an array into groups the length of size and returns them as a two-dimensional array.
// function chunkArrayInGroups(arr, size) {
//     let temp = [];
//     let result = [];

//     for (let a = 0; a < arr.length; a++) {
//         if (a % size !== size - 1) temp.push(arr[a]);
//         else {
//             temp.push(arr[a]);
//             result.push(temp);
//             temp = [];
//         }
//     }

//     if (temp.length !== 0) result.push(temp);
//     return result;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//falsy bouncer
// function bouncer(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) newArray.push(arr[i]);
//     }
//     return newArray;
// }
// console.log(bouncer([7, "ate", "", false, 9]));