const fs = require("fs")
const input =  fs.readFileSync(0).toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const answer = Array.from({length: n}, () => Array(m).fill(1))

for (let i = 0; i < n; i++) {
    let a = input[i+1].split(' ').map(Number)
    let b = input[i+1+n].split(' ').map(Number)
    for (let j = 0; j < m; j++) {
        if (a[j] === b[j]) {
            answer[i][j] = 0 
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(answer[i].join(' '))
}