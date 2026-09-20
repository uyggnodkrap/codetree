const fs = require("fs")
const input =  fs.readFileSync(0).toString().trim().split('\n')

const a = input.slice(0,3)
const b = input.slice(4,7)

const aArr = a.map(x => x.split(' ').map(Number))
const bArr = b.map(x => x.split(' ').map(Number))

const answer = Array.from({length: 3}, () => Array(3).fill(0))

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const x = Number(aArr[i][j]) * Number(bArr[i][j])
        answer[i][j] = x
    }
}

for (let i = 0; i < 3; i++) {
    console.log(answer[i].join(' '))
}