const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
let answer = 0

const recursive = (x) => {
    if (x < 10) return x**2
    return recursive(parseInt(x / 10)) + (parseInt(x % 10) ** 2)
} 

console.log(recursive(n))