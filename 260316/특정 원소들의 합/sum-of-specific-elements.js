const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split('\n').map(v => v.split(' ').map(Number))

let answer = 0
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
        answer += input[i][j]
    }
}

console.log(answer)