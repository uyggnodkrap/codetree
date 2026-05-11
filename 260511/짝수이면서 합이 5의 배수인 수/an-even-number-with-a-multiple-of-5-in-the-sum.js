const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const func1 = (x) => {
    if (x % 2 !== 0) return "No"
    const a = Math.floor(x / 10)
    const b = x % 10
    return (a + b) % 5 === 0 ? "Yes" : "No"
}

console.log(func1(n))