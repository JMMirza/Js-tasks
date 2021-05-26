//symmentic difference between two arrays
function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//seek and destroy
function destroyer(arr, ...params) {
    return arr.filter(items => !params.includes(items))
}

console.log(destroyer([1, 4, 6, 3, 1, 2, 3], 2, 3));

//spinal tap case
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}
console.log(
    spinalCase('AllThe-small Things'))


//pig latin
function translatePigLatin(str) {
    str.toLowerCase();
    if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u' || str[0] === 'y') {
        return str.concat('way')
    } else {
        let elem = str.split("").slice(1)
        return elem.join("").concat(str[0], 'ay')
    }
}

console.log(translatePigLatin("paragraphs"));

//search and replace
function myReplace(str, before, after) {
    let elem = str.split(" ").filter(item => before.includes(item)).join("");
    let com = elem.toLowerCase()
    after = after.toLowerCase()
    console.log(after, elem, com)
        //return com
    if (elem[0] === com[0]) {
        return str.replace(before, after)
    } else {
        let a = after[0].toUpperCase()
        after = a.concat(after.slice(1))
        return str.replace(before, after)
    }
}

console.log(myReplace("I think we should look up there", "up", "Down"));

//missing letter
function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);

        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}
fearNotLetter("abce");

//sorted union
function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    var finalArray = [];

    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];

        // Loops through the array at hand
        for (var j = 0; j < arrayArguments.length; j++) {
            var indexValue = arrayArguments[j];

            // Checks if the value is already on the final array.
            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }

    return finalArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//convert HTML entities
function convertHTML(str) {
    let arr = str.split('');
    //console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        //console.log("in")
        if (arr[i] === '&') {
            //console.log("in")
            arr.splice(i, 1, '&amp;')
        } else if (arr[i] === '<') {
            arr.splice(i, 1, '&lt;')
        } else if (arr[i] === '>') {
            arr.splice(i, 1, '&gt;')
        } else if (arr[i] === '\'') {
            arr.splice(i, 1, '&apos;')
        } else if (arr[i] === '\"') {

            arr.splice(i, 1, '&quot;')
        } else {

        }
    }
    return arr.join("");

}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

//sum of prime numbers
function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
        if (primes.every((prime) => i % prime !== 0))
            primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}
console.log(sumPrimes(977));

//drop it
function dropElements(arr, func) {
    let len = arr.length
    for (let i = 0; i < len; i++) {

        if (func(arr[0])) {
            break

        } else {
            console.log(arr, i)
            arr.shift();
        }
    }
    return arr
}


dropElements([1, 2, 3, 4], function(n) { return n > 5; })

//streamroller
function steamrollArray(val, flatArr = []) {
    val.forEach(item => {
        if (Array.isArray(item)) steamrollArray(item, flatArr);
        else flatArr.push(item);
    });
    return flatArr;
}
console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));

//everything be true
function truthCheck(collection, pre) {
    let counter = 0
    for (let i in collection) {
        if (collection[i].hasOwnProperty(pre)) {
            counter++
        }
    }
    return counter === collection.length;
}

console.log(truthCheck([
        { "user": "Tinky-Winky", "sex": "male" },
        { "user": "Dipsy", "sex": "male" },
        { "user": "Laa-Laa", "sex": "female" },
        { "user": "Po", "sex": "female" }
    ],
    "sex"));

//arguments optional
function addTogether() {
    const [first, second] = Object.values(arguments);
    // Check first argument
    if (typeof first !== "number") {
        return undefined;
    }

    // Function to add second argument
    const addSecond = (second) => typeof second === "number" ? first + second : undefined;

    // Check second argument
    if (second !== undefined) {
        return addSecond(second);
    } else {
        return addSecond
    }
}

addTogether(2, 3);

//make a person
var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        fullName = name;
    };
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());

//Map the Debris
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
        const earth = earthRadius + avgAlt;
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
        return { name, orbitalPeriod };
    });
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));