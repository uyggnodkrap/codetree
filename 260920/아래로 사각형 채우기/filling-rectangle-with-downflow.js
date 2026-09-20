const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

const answer = Array.from({length: input}, () => Array(input).fill(0))

for (let i = 0; i < input; i ++) {
    for (let j = 0; j < input; j++) {
        answer[j][i] =  (i * input) + (j + 1)
    }
}

for (let j = 0; j < input; j++) {
    console.log(answer[j].join(' '))
}
