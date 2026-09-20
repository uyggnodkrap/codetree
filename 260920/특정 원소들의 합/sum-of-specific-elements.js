const fs = require("fs")
const input =  fs.readFileSync(0).toString().trim().split('\n')

const a = []
for (let i = 0; i < 4; i++) {
    const x = input[i].split(' ').map(Number)
    a.push(x)

}

let answer = 0
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (i >= j) {
            answer += a[i][j]
        }
    }
}

console.log(answer)