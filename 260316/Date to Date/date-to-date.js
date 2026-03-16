const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const month = [0,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const getDate = (x, y) => {
    return month.slice(0, x).reduce((acc, cur) => acc + cur, y)
}

console.log(getDate(m2, d2) - getDate(m1, d1))