function TwoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return -1;
}
let arr = [2, 3, 7, 9, 5];
console.log(TwoSum(arr, 9));


function onePlus(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
}
let arr = [1, 9, 9, 9];
console.log(onePlus(arr));


function moveToZero(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }
    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }
    return arr;
}
let arr = [1, 0, 2, 0, 3];
console.log(moveToZero(arr));


function romanToInteger(s) {
    let map = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    let tot = 0;
    for (let i = 0; i < s.length; i++) {
        let cur = map[s[i]];
        let next = map[s[i + 1]];
        if (cur < next) {
            tot += next - cur;
            i++
        }
        else {
            tot += cur;
        }
    }
    return tot;
}
console.log(romanToInteger('XI'));


function integerToRoman(num) {
    let map = [
        { sym: 'M', val: 1000 },
        { sym: 'CM', val: 900 },
        { sym: 'D', val: 500 },
        { sym: 'CD', val: 400 },
        { sym: 'C', val: 100 },
        { sym: 'XC', val: 90 },
        { sym: 'L', val: 50 },
        { sym: 'XL', val: 40 },
        { sym: 'X', val: 10 },
        { sym: 'IX', val: 9 },
        { sym: 'V', val: 5 },
        { sym: 'IV', val: 4 },
        { sym: 'I', val: 1 },
    ];
    let string = '';
    for (let i = 0; i < map.length; i++) {
        while (num >= map[i].val) {
            string += map[i].sym;
            num -= map[i].val;
        }
    }
    return string;
}
console.log(integerToRoman(21));
