const fs = require("fs")
const input =  fs.readFileSync(0).toString().trim().split('\n')

for (let i = 0; i < input.length; i++) {
    const a = input[i].split(' ').map(Number)
    const answer = a.reduce((acc, cur) => acc + cur, 0)
    console.log(answer)
}