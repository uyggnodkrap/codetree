const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
let cnt = 0

const recursive = (x) => {
    if (x === 1) return 
    cnt++
    x % 2 === 0 ? recursive(parseInt(x / 2)) : recursive(parseInt(x / 3))
}

recursive(n)
console.log(cnt)