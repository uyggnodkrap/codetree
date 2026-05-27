const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let cnt = 1
let answer = 0
for (let i = 0; i < n; i++) {

    arr[i] * arr[i-1] > 0 ? cnt++ : cnt = 1

    answer = Math.max(cnt, answer)
}

console.log(answer)