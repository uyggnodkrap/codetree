const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)

const arr1 = input.slice(1,n+1).map(i => i.split(' ').map(Number))
const arr2 = input.slice(n+1).map(i => i.split(' ').map(Number))

const answer = Array.from({length: n}, () => new Array(m).fill(0))

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j ++) {
        if (arr1[i][j] !== arr2[i][j]) {
            answer[i][j] = 1
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(answer[i].join(' '))
}