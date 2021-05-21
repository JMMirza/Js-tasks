//creating global array to store user data
let userRecord = [];
// creating global variable to check how many users is added in the array
let totalUser = 0;

//creating interface to get input value from the user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//creating an object
function User(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//function that is shown when the program is executed
function welcome() {
    //welcome the user
    console.log("\nWeclome please select the options below: \n")
        //taking input from the user from 1 to 3
    readline.question('1. Enter new record:\n2. Show existing\n3. Exit\n', input => {
        //validating that the number that is added is typeof interger (1 to 3) or not
        if (input > 0 && input < 4) {
            //checking that what user want
            if (input == 1) {
                //taking input from the user
                readline.question('How many users you want to add?(in between 1-5)\n', record => {
                    //again validating that the entered value is in range or not
                    if (record > 0 && record < 6) {
                        //go to the function defined below
                        back(record)
                    } else {
                        //if user entered wrong input
                        console.log("you have enter wrong input, program is starting over")
                            //call again that function
                        welcome()
                    }
                })
            } else if (input == 2) { //if input value is 2
                //go to function that returns you all the user data
                showExisting()

            } else {
                //on input 3 the program is terminated
                readline.close();
            }
        } else {
            //if user entered wrong input from 1 to 3
            console.log("you have enter wrong input, program is starting over")
                //calling again that function
            welcome()
        }
    });
}
//calling this function to start the function
welcome();

//function to get values from the user that he wants to add
function back(loop) {
    if (loop > 0) {
        //if the condition is true than call this function with an argument to add user
        addUser(loop)
    } else {
        //if condition is false then take user the function
        finalInput()
    }
}

//function that is written to create user
function addUser(record) {
    //taking input from the user
    readline.question('Enter name of the user: \n', namedata => {
        readline.question('Enter age of the user: \n', agedata => {
            readline.question('Enter gender of the user: \n', genderdata => {
                //decrementing the record because we want to add the user that user want to add
                record--;
                //calling a function to create object of the user
                newRecord(namedata, agedata, genderdata, record)
            })
        })
    })
}

//function to create user object
function newRecord(userName, userAge, userGender, record) {
    //converting gender value to lower case
    userGender.toLowerCase();
    //vaidating the data
    if (userName !== '' && userName !== undefined && userAge > 0 && userAge !== undefined && userGender !== '' && userGender !== undefined && userGender[0] == 'male' || userGender == 'female' || userGender[0] == 'm' || userGender == 'f') {
        //creating the user object
        let newUser = new User(userName, userAge, userGender);
        //printing values 
        console.log('New user information is: ', newUser, '\nTotal User: ', ++totalUser);
        //adding it into the array
        userRecord.push(newUser);
        //calling back function again to crate a loop of adding user 
        back(record)
    } else {
        //if the entered values are not correct
        console.log("Please enter correct data")
            //we have decremented this in adduser so if user's value is not added so the place in array will be empty
        record++
        //calling again addUser function so that user can create user again
        addUser(record)
    }
}
//function if user want to continue or not
function finalInput() {
    //taking input
    readline.question('Do you want to exit? ', finalinput => {
        //user have to enter yes or no so i have validate this too
        if (finalinput[0] === 'y' || finalinput[0] === 'n') {
            //if user do not want to continue
            if (finalinput[0] == 'y') {
                //termenating the program
                readline.close()
            } else {
                //again calling welcome function 
                welcome();
            }
        } else { //if validation is wrong
            console.log("please enter correct input(only yes/no): ")
                //calling function again
            finalInput()
        }
    })
}
//showing data that has created
function showExisting() {
    console.log("welcome please find below the all records: \n")
        //retreving the array
    for (let i = 0; i < userRecord.length; i++) {
        console.log(i, ":", userRecord[i]);
    }
    //calling this function to terminate the function in a good manner.
    finalInput()
}

//ending the process
readline.on("close", function() {
    console.log("\nHope you enjoyed it!!!  GoodBye");
    process.exit(0);
});