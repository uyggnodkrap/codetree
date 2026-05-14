const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
const recursive = (x) => {
    if (x === 0) return arr[0]
    return Math.max(recursive(x-1), arr[x])
}

console.log(recursive(n-1))