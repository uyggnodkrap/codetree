const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.

const recursive = (x) => {
    if (x < 2) return 1 
    return recursive(x - 1) * x
}

console.log(recursive(N))