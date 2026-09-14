const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

let answer = ''
if (input >= 1.0) {
    answer = 'High'
} else if (input >= 0.5) {
    answer = 'Middle'
} else {
    answer = 'Low'
}

console.log(answer)

