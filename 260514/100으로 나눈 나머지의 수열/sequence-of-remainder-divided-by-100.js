const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

const recursive = (x) => {
    if (x === 1) return 2
    if (x === 2) return 4
    return (recursive(x-1) * recursive(x-2)) % 100
}


console.log(recursive(N))