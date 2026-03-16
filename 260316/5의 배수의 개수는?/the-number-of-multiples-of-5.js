const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split('\n').map(v => v.split(' ').map(Number))

let answer = 0
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (input[i][j] % 5 === 0) {
            answer += 1
        }
    }
}

console.log(answer)