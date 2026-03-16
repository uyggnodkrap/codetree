const fs = require("fs")

const n = Number(fs.readFileSync(0).toString().trim())

const answer = Array.from({length: n}, () => new Array(n).fill(0))

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        answer[j][i] = i % 2 === 0 ? j + 1 : n - j
    }
}

for (let i = 0; i < n; i++) {
    console.log(answer[i].join(''))
}