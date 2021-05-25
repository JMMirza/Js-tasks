//Basics of Javascript 
/* 
 *First topic is Commenting
 */
// initializing varibales
// var varible1 = 10;
// var variable2 = 9;
// var myName = "JM Mirza";
// //concatination
// var noramlString = " My name is " + myName + ".";
// //printing on console
// console.log(noramlString);
// // getting string lenght
// var stringLength = noramlString.length;
// console.log(stringLength);
// //indexing
// firstLetter = "";
// firstLetter = myName[0];
// var a = 2;
// console.log(a, "a");
// console.log(a++, "a++");
// console.log(a, "a after ");
// console.log(++a, "++a")
//function declaration

// function practice() {
//     console.log("Hello World");
//     // string immutibility
//     myName = "Jan Muhammad Mirza";
//     console.log("string immutibility: " + myName);
//     //last character of string
//     var lastCharacter = myName[myName.length - 1];
//     console.log("last character of string \"" + lastCharacter + "\"");
//     //array
//     var myArray = [variable1, myName, noramlString];
//     console.log("Printing array first element: " + myArray[0] + "\nPrinting array second element: " + myArray[1] + "\nPrinting array third element: " + myArray[2]);
//     //multi dimensional array
//     var myArray = [
//         ["Jm", 98],
//         ["hamza", 97]
//     ];
//     console.log("Printing multidimensional array's first element: " + myArray[0] + "\nPrinting multidimensional array's second element: " + myArray[1]);
//     // alter array
//     var myArray = [18, 64, 99];
//     console.log("my array: " + myArray);
//     myArray[0] = 45;
//     console.log("Altering my array: " + myArray);
// }
// practice();

// function multiDimensionalArray() {
//     // reterive data in multidimensinal array
//     var myArray = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//         [
//             [10, 11, 12], 13, 14
//         ]
//     ];
//     var myData = myArray[2][1];
//     console.log("Print data at index 2 and 1 " + myData);
//     return myData;
//     // myData = 8;
// }
// multiDimensionalArray();


// function manipulateArrays() {
//     /*
//      *Manipulate Arrays with push()
//      * insert in the last index of array 
//      */
//     var myArray = [
//         ["John", 23],
//         ["cat", 2]
//     ];
//     myArray.push(["dog", 3]);
//     console.log("Manipulate Arrays with push: [" + myArray[0] + "]" + "[" + myArray[1] + "]");
//     /*
//      *Manipulate Arrays With pop()
//      *Remove last element of array*/

//     var myArray = [
//         ["John", 23],
//         ["cat", 2]
//     ];

//     var removedFromMyArray = myArray.pop();
//     console.log("Manipulate Arrays With pop: [" + myArray[0] + "]" + "\nRemoved element is: " + removedFromMyArray);

//     /*
//      *Manipulate Arrays With shift()
//      *Remove first element of array 
//      */
//     var myArray = [
//         ["John", 23],
//         ["dog", 3]
//     ];

//     var removedFromMyArray = myArray.shift();
//     console.log("Manipulate Arrays With shift: [" + myArray[0] + "]" + "\nRemoved element is: " + removedFromMyArray);
//     /*
//      *Manipulate Arrays With unshift()
//      * adds the element at the beginning of the array. 
//      */
//     var myArray = [
//         ["John", 23],
//         ["dog", 3]
//     ];
//     //myArray.shift();
//     myArray.unshift(["Paul", 35]);
//     console.log("Manipulate Arrays With unshift: " + myArray);

// }
// manipulateArrays();

// function withParameters(pm1, pm2) {

//     console.log(pm1, pm2);
//     return
// }
// withParameters(firstLetter, varible1);

// function timesFive(num) {
//     return num * 5;
// }
// var answer = timesFive(5);
// console.log(answer)

// function nextInLine(arr, item) {
//     //
//     arr.push(item);
//     item = arr.shift()

//     return item;
//     // above this line


// }

// // Setup
// var testArr = [1, 2, 3, 4, 5];

// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//     //
//     if (strokes == 1) {
//         console.log(
//             names[0]);
//     } else if (strokes <= par - 2) {
//         console.log(
//             names[1]);
//     } else if (strokes == (par - 1)) {
//         console.log(
//             names[2]);
//     } else if (strokes == par) {
//         console.log(
//             names[3]);
//     } else if (strokes == (par + 1)) {
//         console.log(
//             names[4]);
//     } else if (strokes == (par + 2)) {
//         console.log(
//             names[5]);
//     } else {
//         console.log(
//             names[6]);
//     }



//     // above this line
// }
// golfScore(1, 2);
// golfScore(6, 4);
// golfScore(4, 4);
// golfScore(1, 3);
// golfScore(6, 3);
// golfScore(2, -1);

// function chainToSwitch(val) {
//     var answer = "";
//     //
//     switch (val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer";
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case 7:
//             answer = "Ate Nine";
//             break;
//     }


//     // above this line
//     console.log(answer);
// }

// chainToSwitch('bob');

// //creating Objects
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };
// console.log(myDog);
// myDog.dob = "1997-09-8";
// console.log(myDog);
// delete myDog.friends;
// console.log(myDog);

//lookup objects like dictonery
// function phoneticLookup(val) {
//     var result = "";

//     //
//     var myObject = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "Frank"
//     };
//     result = myObject[val];
//     // above this line
//     return result;
// }

// phoneticLookup("charlie");

// var arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// function multiplyAll(arr) {
//     var product = 1;
//     // below this lin
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];


//         }
//     }

//     // above this line
//     console.log(product, 'product of the given array');
// }

// multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7]
// ]);


// var contacts = [{
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];
//
// function lookUpProfile(name, prop) {
//     for (let x = 0; x < contacts.length; x++) {
//         if (contacts[x].firstName === name) {
//             if (contacts[x].hasOwnProperty(prop)) {
//                 console.log(contacts[x][prop]);
//             } else {
//                 console.log("No such property");
//             }
//         }
//     }
//     console.log("No such contact")
// }

// // above this line


// lookUpProfile("Akira", "likes");
// lookUpProfile("Kristian", "lastName")
// lookUpProfile("Sherlock", "likes")
// lookUpProfile("Harry", "likes")
// lookUpProfile("Bob", "number")
// lookUpProfile("Bob", "potato")
// lookUpProfile("Akira", "address")
// myMin = 20;
// myMax = 50;
// for (var i = myMin; i <= myMax; i++) {
//     console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + myMin)
// }


//Recursion (function to print count down)
function countdown(n) {
    if (n < 1) {
        //console.log("in if")
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        // console.log(countArray);
        return countArray;
    }
}
console.log(countdown(5))