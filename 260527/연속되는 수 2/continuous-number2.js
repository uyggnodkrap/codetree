const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let answer = 0, cnt = 1

for (let i = 0; i < n; i++) {
    if (arr[i] == arr[i-1]) {
        cnt++
    } else {
        cnt = 1
    }
    answer = Math.max(answer, cnt)
}
console.log(answer)