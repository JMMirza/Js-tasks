// //initializing object
// let dog = {
//     name: "",
//     numLegs: ""
// };

// //accessing propertiesof an object
// let duck = {
//     name: "Aflac",
//     numLegs: 2
// };
// console.log(duck.name);

// //creating method in object
// let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName() { return `The name of this duck is ${duck.name} .`; }
// };
// duck.sayName();

// //using this keyword
// let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function() { return `The name of this duck is  ${this.name} .`; }
// };

// duck.sayName();

// //constructor
// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
// }

//Constructor to Create Objects

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();
console.log(blueBird('jm', 'whitre', 0))