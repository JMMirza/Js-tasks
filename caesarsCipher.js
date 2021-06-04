function rot13(str) {
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
    str = str.toUpperCase();

    let final = '';
    for (let i = 0; i < str.length; i++) {
        final += decoded[str[i]];
    }
    return final;
}
console.log(rot13("WNA ZHUNZZNQ ZVEMN"));