
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

let result = ''

const recursive = (x) => {
    if (x === 0) return 
    recursive(x-1)
    result += "*".repeat(x) + "\n"
}


recursive(n)
console.log(result)