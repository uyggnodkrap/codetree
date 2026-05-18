const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
const offset = 50
const arr = Array.from({length: offset * 2 + 1}, () => 0) 

segments.forEach(v => {
    const [x, y] = v
    for (let i = x; i <= y; i++) {
        arr[i] += 1
    }
})

console.log(arr.reduce((acc, cur) => Math.max(acc, cur)))