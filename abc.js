// // const { countdown, lookUpProfile } = require('./basicsOfJS');
array = [
    { id: 1, name: "ali", friends: ['jibran', 'usman', 'ali', 'jm'] },
    { id: 2, name: "kamal", friends: ['jamshed', 'jibran', 'usman', 'ali'] }
];

function commonFriends(arr) {
    let final = []
    let user = arr
        .map(user => user['friends'])
    for (let i = 0; i < user.length - 1; i++) {
        for (let j = 0; j < user[i].length - 1; j++) {

            if (user[i][j] === user[i + 1][j + 1]) {
                final.push(user[i][j])
            }
        }
    }
    console.log('common friends are: ', final);
}

function allFriends(arr) {
    let array = arr.map(item => item.friends)
    console.log("List of all friends", array)

}
allFriends(array)
commonFriends(array)