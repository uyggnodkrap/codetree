const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const x = input[1].split(' ').map(Number)

let answer = 0
for (let i = 0; i < x.length; i++) {
    if (x[i] === 2) {
        answer += 1
    }
    if (answer === 3) {
        console.log(i+1)
        break
    }
}