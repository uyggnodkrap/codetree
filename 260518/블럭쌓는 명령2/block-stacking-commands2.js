const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
const arr = Array.from({length: n}, () => 0)

for (let i = 0; i < k; i++) {
    const [x, y] = segments[i]
    for (let j = x-1; j < y; j++) {
        arr[j]+=1
    }
}

console.log(arr.reduce((a, b) => Math.max(a, b)))