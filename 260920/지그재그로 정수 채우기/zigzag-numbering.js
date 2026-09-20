const fs = require("fs")
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = Array.from({length: n}, () => Array(m).fill(0))

let idx = 0
for (let i = 0; i < m; i ++) {
    if (i % 2 == 0) {
        for (let j = 0; j < n; j++) {
            answer[j][i] = idx++
        } 
    } else {
        for (let j = 0; j < n; j++) {
            answer[n-j-1][i] = idx++
        }        
    }
}

for (let i = 0; i < n; i ++) {
    console.log(answer[i].join(' '))
}