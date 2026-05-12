const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
let answer = 0
const recursive = (x) => {
    if (x === 0) return
    answer += x
    recursive(x-1)
}

recursive(n)
console.log(answer)