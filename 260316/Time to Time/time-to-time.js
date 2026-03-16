const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

let answer = 0;

answer += (c - a) * 60
answer += (d - b)

console.log(answer)