const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split('\n').map(v => v.split(' ').map(Number))

for (let i = 0; i < 4; i++) {
    console.log(input[i].reduce((acc, cur) => acc + cur, 0))
}