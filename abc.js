// // const { countdown, lookUpProfile } = require('./basicsOfJS');
array = [
    { id: 1, name: "ali", friends: ['jibran', 'usman', 'ali', 'jm', 'avx', 'qwerty', 'aswd', 'jamshed'] },
    { id: 2, name: "kamal", friends: ['jamshed', 'jibran', 'usman', 'jm', 'ali', 'aswd', 'xyz', 'qazxcvbnm'] }
];

function commonFriends(arr) {
    let dummy = []
    let user = arr.map(item => item.friends).reduce((acc, val) => acc.concat(val), []);
    for (let i = 0; i <= user.length - 1; i++) {
        for (let j = 1; j < user.length; j++) {

            if (user[i] === user[j + i]) {
                dummy.push(user[i])
            }
        }
    }
    console.log('common friends are: ', dummy);
}

function allFriends(arr) {
    let array = arr.map(item => item.friends).reduce((acc, val) => acc.concat(val), []);
    console.log("List of all friends", array)

}
allFriends(array)
commonFriends(array)