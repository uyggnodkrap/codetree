const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
const n = a * b * c

const recursive = (x) => {
    if (x < 10) return x 
    return recursive(parseInt(x / 10)) + (x % 10)
}

console.log(recursive(n))