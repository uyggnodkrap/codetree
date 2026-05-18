const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const addMonth = Array.from({length: 13}, () => 0)

for (let i = 1; i < 13; i++) {
    addMonth[i] =  addMonth[i-1] + month[i]
}

const a = addMonth[m1-1] + d1
const b = addMonth[m2-1] + d2
console.log(b - a + 1)