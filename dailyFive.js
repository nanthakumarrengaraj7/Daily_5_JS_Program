Day-1
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



day-2
function missingNumber(arr) {
    if (arr.length === 0) return "";
    let n = arr.length;
    let tot = Math.floor(n * (n + 1) / 2);
    let sum = arr.reduce((a, b) => a + b);
    return tot - sum;
}
let arr = [0, 2, 3];
console.log(missingNumber(arr))


it's only for sorted array
function binarSearch(arr, target) {
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] === target)
            return mid;

        else if (arr[mid] > target) {
            last = mid - 1;
        }
        else {
            first = mid + 1;
        }
    }
}
let arr = [1, 2, 3, 4, 5];
console.log(binarSearch(arr, 3));


function spiralMatrix(arr) {
    let res = [];
    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(arr[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            res.push(arr[i][right]);
        }
        right--;
        if (left <= right) {
            for (let i = right; i >= left; i--) {
                res.push(arr[bottom][i]);
            }
            bottom--;
        }
        if (top <= bottom) {
            for (let i = bottom; i >= top; i--) {
                res.push(arr[i][left]);
            }
            left++;
        }
    }
    return res;
}
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralMatrix(arr));



function longestCommonSubString(arr) {
    if (arr.length === 0) return "";
    arr.sort();
    let i = 0;
    let first = arr[0];
    let last = arr[arr.length - 1];
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    return first.substring(0, i);
}
let arr = ['siva', 'siva', 'sivarama'];
console.log(longestCommonSubString(arr));


function longestCommonSuffix(arr) {
    if (arr.length === 0) return "";
    arr.sort();
    let i = 0;
    let first = arr[0];
    let last = arr[arr.length - 1];
    while (i < first.length && i < last.length && first[first.length - 1 - i] === last[last.length - 1 - i]) {
        i++;
    }
    return first.substring(first.length - i);
}
let arr = ['eating', 'drawing', 'playing'];
console.log(longestCommonSuffix(arr));

function pascalTraiangle(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res[i] = [];
        res[i][0] = 1;
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res[i][i] = 1;
    }
    return res;
}
console.log(pascalTraiangle(5));



function validParantheses(s) {
    let res = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let char of s) {
        if (char === '{' || char === '[' || char === '(') {
            res.push(char);
        }
        else {
            if (res.length === 0) return false;
            if (res.pop() !== map[char]) return false;
        }
    }
    return res.length === 0;
}
console.log(validParantheses('{}{}{}()[]'))


function searchInsertPosition(arr, target) {
    let first = 0;
    let last = arr.length - 1;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] === target)
            return mid;
        else if (arr[mid] > target)
            last = mid - 1;
        else
            first = mid + 1;
    }
    return first;
}
let arr=[1,2,3,4,6,8,9,10]
console.log(searchInsertPosition(arr,7));


function reverseInterger(x) {
    let s = x.toString();
    console.log(s);
    return s === s.split('').reverse().join('');
}
console.log(reverseInterger(121));


function lengthOfLastWord(str) {
    let ogStr = str.trim();
    let ogStrSplit = ogStr.split(' ');
    return ogStrSplit[ogStrSplit.length - 1].length;

oneLineCode:
return str.trim().split('').pop().length;
}
console.log(lengthOfLastWord(' i am siva '));


function squareRoot(x) {
    return Math.floor(Math.sqrt(x));
}
console.log(squareRoot(4));


function squareRoot(n) {
    let low = 1, high = n, ans = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid * mid === n) {
            return mid;
        }
        else if (mid * mid < x) {
            ans = mid;
            low = mid + 1;
        }
        high = mid - 1
    }
    return ans;
}
console.log(squareRoot(4));



day-4
function pascalTriangleII(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
        res[i] = [];
        res[i][0] = 1;
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res[i][i] = 1;
    }
    return res[n];
}
console.log(pascalTriangleII(3));


function validPalindrome(str) {
    // return str === str.trim().split('').reverse().join('');

    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(validPalindrome('ra ce car'))


function frequency(arr) {
    let frq = {};
    for (let num of arr) {
        frq[num] = (frq[num] || 0) + 1;
    }
    return frq;
}
let arr = [1, 2, 3, 4, 5, 1, 2, 1, 2, 1, 2];
console.log(frequency(arr))


function findfrequencyOnce(arr) {
    let frq={};
    for(let num of arr){
        frq[num]=(frq[num]||0)+1;
    }
    for(let num in frq){
        if(frq[num]===1)
            return Number(num);
    }
}
let arr=[1,2,3,4,1,2,3];
console.log(findfrequencyOnce(arr));

function findFrquencyAtOnce(arr) {
    let frq = {};
    for (let num of arr) {
        frq[num] = (frq[num] || 0) + 1;
    }
    return Object.keys(frq).filter(key => frq[key]===1);
}
let arr=[12,3,1,2,3,41,2,3];
console.log(findFrquencyAtOnce(arr))


function majorityEle(arr) {
    let frq = {};
    for (let num of arr) {
        frq[num] = (frq[num] || 0) + 1;
    }
    for (let num in frq) {
        if (frq[num] > arr.length / 2) {
            return Number(num);
        }
    }
}
let arr=[1,2,3,1,1];
console.log(majorityEle(arr));
