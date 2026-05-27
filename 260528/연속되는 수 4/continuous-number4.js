const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.
let answer = 0, cnt = 1
for (let i = 0; i < n; i++) {
    (arr[i] > arr[i-1]) ? cnt++ : cnt = 1
    answer = Math.max(answer, cnt)
}

console.log(answer)