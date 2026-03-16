const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

const getDate = (m, d) => {
    const month = [0,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return month.slice(1, m).reduce((acc, cur) => acc + cur, 0) 
}

let month = (A - 11) * 24 * 60
let day = (B - 11) * 60
let min = C - 11

let answer = month + day + min
console.log(answer < 0 ? - 1 : answer)