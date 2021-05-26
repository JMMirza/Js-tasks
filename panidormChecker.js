function palindrome(str) {
    let newStr = str.split(/\s|_|:|,|\.|\/|-|\(|\)|\+|\*|(?=[A-Z])/).join("").toLowerCase();
    let reverseStr = [];
    let len = newStr.length - 1

    for (let i = len; i >= 0; i--) {
        //console.log(i)
        reverseStr.push(newStr[i]);

    }
    return reverseStr.join("") == newStr
}



console.log(palindrome("not a palindrome"), palindrome("eye"), palindrome("race car"), palindrome("A man, a plan, a canal. Panama"));