const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

const month = (A - 11) * 24 * 60
const day = (B - 11) * 60
const min = C - 11

const answer = month + day + min
console.log(answer < 0 ? - 1 : answer)