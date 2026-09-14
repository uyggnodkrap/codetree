const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b] = input[0].split(' ').map(Number)
const m = input[1].split(' ').map(Number)

let answer = 0

for (let i = 0; i < a; i++) {
    if (m[i] == b) {
        answer += 1
    }
} 
console.log(answer)

