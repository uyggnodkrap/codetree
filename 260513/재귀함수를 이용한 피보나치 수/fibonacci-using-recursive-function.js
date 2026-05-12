const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const recursive = (x) => {
    if (x < 2) return x
    return recursive(x-1) + recursive(x-2)
}

console.log(recursive(n))