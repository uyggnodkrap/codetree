const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n+1).map(v => v.trim().split(' ').map(Number))

// Please Write your code here.

const arr = Array(100 + 1).fill(0)

segments.forEach(v => {
    let [x, y] = v
    for (let i = x; i <= y; i++) {
        arr[i] += 1
    }
})

console.log(Math.max(...arr))