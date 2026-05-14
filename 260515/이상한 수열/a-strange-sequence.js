const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.
const arr =[1, 2]
const recursive = (x) => {
    if (x === 1) return 1
    if (x === 2) return 2
    return recursive(parseInt(x / 3)) + recursive(x - 1)
}

console.log(recursive(n))