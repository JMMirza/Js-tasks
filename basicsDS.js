// // //Access an Array's Contents Using Bracket Notation

// let myArray = ["a", "b", "c", "d"];
//
// myArray[9] = "jm";
// // above this line
// console.log(myArray);


// //Add Items to an Array with push() and unshift()
// function mixedNumbers(arr) {
//     //
//     arr.push(7, 'VIII', 9)
//     arr.unshift('I', 2, 'three')

//     // above this line
//     return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));

// //Remove Items from an Array with pop() and shift()

// function popShift(arr) {
//     let popped = arr.pop(); // Change this line
//     let shifted = arr.shift(); // Change this line
//     return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));


// //use splice to remove and inset data at the same time and same place
function htmlColorNames(arr) {
    //
    arr.splice(0, 2);
    // above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// //copying array items using slice()
function forecast(arr) {
    //
    let newArray = arr.slice(2, 4)

    return newArray;
}

// above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// //copy an arraywith spread operator
// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//         //
//         newArr[num - 1] = [...arr]
//             // above this line
//         num--;
//     }
//     return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

// //Check For The Presence and index of an Element With indexOf()
// function quickCheck(arr, elem) {
//     //
//     //console.log(arr.indexOf('shallots'))
//     if (arr.indexOf(elem) >= 0) {
//         return true
//     } else {
//         return false
//     }

//     // above this line
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'vegetables'));

// //nested array deep at level 5 
// let myNestedArray = [

//     ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//     [
//         ['loop', 'shift', 6, 7, 1000, 'method'],
//         ['deep'],
//         ['concat', false, true, 'spread', 'array']
//     ],
//     [
//         [
//             ['mutate', 1327.98, 'splice', 'slice', 'push'],
//             ['deeper'],
//             ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//         ],
//         [

//             [
//                 ['mutate', 1327.98, 'splice', 'slice', 'pop'],
//                 ['deepest'],
//                 ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//             ],
//             [
//                 ['deepest10']
//             ]

//         ]
//     ]

// ];
// console.log(myNestedArray[2][1][1][0]);

// //adding properties to an object
// let userActivity = {
//     id: 23894201352,
//     date: 'January 1, 2017',
//     data: {
//         totalUsers: 51,
//         online: 42
//     }
// };

// userActivity.name = "Jm Mirza";
// userActivity.dob = "99-05-13";
// userActivity.data.remotely = 9;
// userActivity.data.online = 45;
// userActivity.data.totalUsers = 54;
// console.log(userActivity);


// //Access Property Names with Bracket Notation
// //function to get the value of object

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// };

// function checkInventory(scannedItem) {
//     //
//     let inventory = foods[scannedItem];
//     return inventory

//     // above this line
// }

// console.log(checkInventory("apples"));


// //using delete keyword to delete property of object 
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// };

//
// delete foods.oranges
// delete foods.plums
// delete foods.strawberries
//     // above this line

// console.log(foods);



//Check if an Object has a Property
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {

    console.log(obj.Alan.age = 45);

    if ('Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj) {
        return true

    }
    return false;


}

console.log(isEveryoneHere(users));