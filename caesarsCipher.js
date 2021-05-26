function rot13(str) {
    //Deciphered reference letters
    let decoded = {
        A: 'N',
        B: 'O',
        C: 'P',
        D: 'Q',
        E: 'R',
        F: 'S',
        G: 'T',
        H: 'U',
        I: 'V',
        J: 'W',
        K: 'X',
        L: 'Y',
        M: 'Z',
        N: 'A',
        O: 'B',
        P: 'C',
        Q: 'D',
        R: 'E',
        S: 'F',
        T: 'G',
        U: 'H',
        V: 'I',
        W: 'J',
        X: 'K',
        Y: 'L',
        Z: 'M',
        ' ': ' ',
        '!': '!',
        '?': '?',
        '.': '.'
    }

    //convert the string to lowercase
    str = str.toUpperCase();

    //decipher the code
    let decipher = '';
    for (let i = 0; i < str.length; i++) {
        decipher += decoded[str[i]];
    }

    //return the output
    return decipher;
}
// Change the inputs below to test
console.log(rot13("SERR CVMMN!")); //should decode to "FREE CODE CAMP"