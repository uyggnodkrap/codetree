
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const recursive = (x) => {
    if (x === 0) return 
    const arr = []
    for (let i = 0; i < n - x + 1; i++) arr.push('*')
    console.log(arr.join(''))
    recursive(x-1)
}

recursive(n)