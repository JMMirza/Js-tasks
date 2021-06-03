var romanMatrix = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};

function convertToRoman(num) {
    let romanized = ''
    let arr = []
    for (let items in romanMatrix) {
        arr.unshift(items)
    }
    for (let i = 0; i < arr.length; i++) {
        while (num >= arr[i]) {
            romanized += romanMatrix[arr[i]]
            num -= arr[i]
        }
    }
    return romanized
}
console.log(convertToRoman(101));