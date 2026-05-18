const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.

const arr = Array.from({length: 100 * 2 + 1}, () => 0)

for (let i = 0; i < n; i++) {
    const [stt, end] = segments[i]
    for (let j = stt; j < end; j++) {
        arr[j + 100] += 1
    }
}

console.log(arr.reduce((a, b) => Math.max(a, b)))