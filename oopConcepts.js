//initializing object
let dog = {
    name: "beagles",
    numLegs: "4"
};

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

// //Constructor to Create Objects

// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
// }

// let blueBird = new Bird();
// console.log(blueBird('jm', 'whitre', 0))


// //Understand Own Properties
// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];
//
// for (let property in canary) {
//     if (canary.hasOwnProperty(property)) {
//         ownProps.push(property)
//     }
// }
// console.log(ownProps)

// //difference between own property and prototype property

// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

//
// for (let property in beagle) {
//     if (beagle.hasOwnProperty(property)) {
//         ownProps.push(property);
//     } else {
//         prototypeProps.push(property);
//     }
// }

// console.log(ownProps);
// console.log(prototypeProps);

// //Change the Prototype to a New Object
// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype = {
//     //
//     numLegs: 4,
//     eat: () => {
//         console.log("nom nom nom");
//     },
//     describe: () => {
//         console.log("My name is " + this.name);
//     }

// };

// //inheritance and adding methods
// function Animal() {}
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = () => {
//     console.log("Woof!")
// }

// let beagle = new Dog();
// beagle.bark()
// beagle.eat()

// //override a function

// function Bird() {}

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() {}
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// Penguin.prototype.fly = function() {
//     return "Alas, this is a flightless bird."
// }


// let penguin = new Penguin();
// console.log(penguin.fly());

// //mixin property add common behaviour between unrelated objects
// let bird = {
//     name: "Donald",
//     numLegs: 2
// };

// let boat = {
//     name: "Warrior",
//     type: "race-boat"
// };

// let glideMixin = (object) => {
//     object.glide = () => {
//         console.log("gliding!")
//     }
// }
// glideMixin(bird)
// glideMixin(boat)
// bird.glide()
// boat.glide()

//use IIFE to create a module

/* 
CONVORTED BELOW TWO FUNCTIONS INTO A MODULE 

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}; */
let funModule = (
    function() {
        return {
            isCuteMixin: function(obj) {
                obj.isCute = function() {
                    return true;
                };
            },
            singMixin: function(obj) {
                obj.sing = function() {
                    console.log("Singing to an awesome tune");
                };
            }
        }
    }
)();
funModule.singMixin(dog)
dog.sing()