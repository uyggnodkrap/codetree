const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

let answer = Array(a).fill(0)
const blocks = input.slice(1,b+1).map(v => v.split(' ').map(Number))

for (let i = 0; i < b; i++) {
    let [start, end] = blocks[i]
    for (let j = start - 1; j < end; j++){
        answer[j] += 1
    }
}
console.log(Math.max(...answer))