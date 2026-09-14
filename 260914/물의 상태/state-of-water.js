const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

let answer = ''
if (input >= 100) {
    answer = 'vapor'
} else if (input < 0){
    answer = 'ice'
} else {
    answer = 'water'
}

console.log(answer)