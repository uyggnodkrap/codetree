const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
let answer = []
answer.push(arr[0])
answer.push(Math.max(answer[0], arr[1]))
for (let i = 2; i < n; i++) {
    answer.push(Math.max(answer[i-1], arr[i]))
}

console.log(answer[n-1])