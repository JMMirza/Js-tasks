let userRecord = [];
let totalUser = 0;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function User(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

function welcome() {


    readline.question('1. Enter new record:\n2. Show existing\n3. Exit\n', input => {
        if (input == 1) {
            console.log("Weclome Enter new record below: \n")
            readline.question('Enter name of the user: \n', namedata => {
                readline.question('Enter age of the user: \n', agedata => {
                        readline.question('Enter gender of the user: \n', genderdata => {
                            newRecord(namedata, agedata, genderdata)
                        })
                    })
                    //let arr = data.split(',')
                    //console.log(arr)

            })
        } else if (input == 2) {
            showExisting()

        } else {
            readline.close();

        }
    });
}
welcome();

function newRecord(userName, userAge, userGender) {
    userGender.toLowerCase();
    if (userName !== '' && userName !== undefined && userAge > 0 && userAge !== undefined && userGender !== '' && userGender !== undefined && userGender[0] == 'male' || userGender == 'female' || userGender[0] == 'm' || userGender == 'f') {
        let newUser = new User(userName, userAge, userGender);
        console.log('New user information is: ', newUser, '\nTotal User: ', ++totalUser);
        userRecord.push(newUser);
        finalInput()
    } else {
        console.log("Please enter correct data")
        finalInput()
    }


}

function finalInput() {

    readline.question('Do you want to exit? ', finalinput => {
        if (finalinput[0] === 'y' || finalinput[0] === 'n') {
            if (finalinput[0] == 'y') {
                readline.close()
            } else {
                welcome();
            }


        } else {
            console.log("please enter correct input(only yes/no): ")
            finalInput()
        }
    })
}

function showExisting() {
    console.log("welcome please find below the all records: \n")
    for (let i = 0; i < userRecord.length; i++) {
        console.log(i, ":", userRecord[i]);
    }
    finalInput()
}