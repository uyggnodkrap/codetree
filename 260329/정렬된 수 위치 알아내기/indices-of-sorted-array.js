const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

const sortFunc = (x, y) => x[0] - y[0] || x[1] - y[1]

let iarr = Array.from({length: n} , () => Array(2).fill(0))
let tiarr = Array.from({length: n} , () => Array(3).fill(0))

for (let i = 0; i < n; i++) {
    iarr[i] = [arr[i], i+1]
}

iarr.sort((a, b) => sortFunc(a, b))

for (let i = 0; i < n; i++) {
    tiarr[i] = [iarr[i][1], arr[i], i+1]
}

tiarr.sort((a, b) => sortFunc(a, b))

let answer = Array(n).fill(0)

for (let i = 0; i < n; i++) {
    answer[i] = tiarr[i][2]
}

console.log(answer.join(' '))