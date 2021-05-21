//use 'let' instead of 'var'
//scope of let
//let donot allow user to change its value
// function checkscope() {
//     let i = 'function scope';
//     // var i = 'function scope';
//     if (true) {
//         let i = 'block scope';
//         // var i = 'block scope';
//         console.log('block scope ', i);
//     }
//     console.log('function scope ', i)
// }
// checkscope();

// //constant keyword 'const' used to make variable immutable
// //use UPPERCASE for their names
// function printManyTimes(str) {

//     // Only change code below this line

//     const SENTENCE = str + " is cool!";
//     for (let i = 0; i < str.length; i += 2) {
//         console.log(SENTENCE);
//     }

//     // Only change code above this line

// }
// printManyTimes("freeCodeCamp");

// //making const mutable
// const s = [5, 7, 2];

// function editInPlace() {
//     // Only change code below this line
//     console.log('making const mutable');
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
//     console.log(s);


//     // Using s = [2, 5, 7] would be invalid

//     // Only change code above this line
// }
// editInPlace();

// //Prevent Object Mutation Passed
// //using Object.freeze(obj_name)
// let obj = {
//     name: "FreeCodeCamp",
//     review: "Awesome"
// };
// Object.freeze(obj);
// obj.review = "bad";
// obj.newProp = "Test";
// console.log(obj);

// //Inline functions with or without default parameters
// const print = () => console.log("Inline function");
// print()
// const increment = (number, value = 1) => number + value;


//Rest operator
// function xyz(x, y, ...z) {
//     console.log(x, ' ', y); // hey hello

//     console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
//     console.log(z[0]); // wassup
//     console.log(z.length); // 4
// }

// xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")

// function someFunction() {
//     console.log(arguments);
//     return arguments;
// }

// someFunction("joykare", 100, false);

// //spread operator
// var arr = [0, 1, 2, 3];
// var arr1 = [...arr];
// arr1.push(4);
// console.log('Array ', arr, 'Array1 ', arr1);

// //destructing assignment to neatly assigning values from objects
// let myObject = {
//     "name": "",
//     "age": 0,
//     "gender": "",
//     "dob": ""
// };
// const userName = "JM Mirza";
// const userAge = 22;
// const userGender = "male";
// const userDOB = "1999-05-13";
// const user = { name: userName, age: userAge, gender: userGender, dob: userDOB };
// //myObject['name'] = userName;
// //const user = { name: userName };
// console.log(user);


// //desturcting assignment to get specific elements from the array
// let a = 8,
//     b = 9;
// [a, b] = [b, a];
// console.log(a, b);

// //desturcting assignment using rest parameters
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function removeFirstTwo(list) {
//     // Only change code below this line
//     const [a, b, ...arr] = list; // Change this line

//     console.log(a, b, arr)
//         // Only change code above this line
//     return arr;
// }
// const arr = removeFirstTwo(source);
// //Destructuring Assignment to Pass an Object as a Function's Parameters
// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// };
// //using old tradition to pass object parameters
// //const half = (stats) => (stats.max + stats.min) / 2.0;
// const half = ({ max, min }) => {
//     const average = (max + min) / 2.0;
//     console.log(average);
// }
// half(stats);


// //create string using template literals
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
// };

// function makeList(arr) {
//     const failureItems = [];
//     for (let i = 0; i < arr.length; i++) {
//         failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
//     }
//     console.log(failureItems);
// }

// const failuresList = makeList(result.failure);

// //another example

// const person = {
//     name: "Zodiac Hasbro",
//     age: 56
// };

// const greeting = `Hello, my name is ${person.name}!
//   I am ${person.age} years old.`;

// console.log(greeting);


// //Concise Object Literal Declarations Using Object Property Shorthand

// const createPerson = (name, age, gender) => {
//     console.log(name, age, gender);
// };
// createPerson();

// //Concise Declarative Functions with ES6

// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//         gear = 10;
//         this.gear = gear;
//     }
// };
// console.log('bicycle gear before is: ', bicycle.gear);
// bicycle.setGear(3);
// console.log('bicycle gear after is: ', bicycle.gear);


// //constructor
// class SpaceShuttle {
//     constructor(targetPlanet) {
//         this.targetPlanet = targetPlanet;
//     }
// }
// const zeus = new SpaceShuttle('Jupiter');


//Since export default is used to declare a fallback value for a module or file, 
//you can only have one value be a default export in each module or file. 
//Additionally, you cannot use export default with var, let, or const


// //promises
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer represents a response from a server
//     let responseFromServer;

//     if (responseFromServer) {
//         resolve("Data recieved");
//     } else {
//         reject("Data not recieved");
//     }
// });
// //promise completion
// makeServerRequest.then(result => {
//     console.log(result)
// });
// //promise failed
// makeServerRequest.catch(error => {
//     console.log(error);
// });
let index = -1;
const makeServerResponse = new Promise((resolve, reject) => {

    arr = ['squash', 'onions', 'shallots'];
    elem = 'vegetables';

    if (arr.indexOf(elem) >= 0) {
        resolve(`yeah, we have ${elem} at index: ${arr.indexOf(elem)}`);
        // index = arr.indexOf(elem);
    } else {
        reject(`oho the entry .i.e. ${elem} is not available`);
    }

});
makeServerResponse.then(result => {
    console.log(result);
});
makeServerResponse.catch(result => {
    console.log(result);
});