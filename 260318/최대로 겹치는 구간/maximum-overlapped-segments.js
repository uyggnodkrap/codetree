const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
let answer = Array(200 + 1).fill(0)

for (let i = 0; i < n; i++ ){
    let [stt, end] = [segments[i][0], segments[i][1]]
    for (let j = stt; j <= end; j++) {
        answer[j+100] += 1
    }
}

console.log(Math.max(...answer))