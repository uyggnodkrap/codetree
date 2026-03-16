const fs = require("fs")

const n = Number(fs.readFileSync(0).toString().trim())



const answer = Array.from({length: n}, () => new Array(n).fill(0))

for (let i = 0; i < n; i++) {
    let asc = 1
    let desc = n
    for (let j = 0; j < n; j++) {
        if (i % 2 == 0) {
            answer[j][i] = asc++
        } else {
            answer[j][i] = desc--
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(answer[i].join(''))
}