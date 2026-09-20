const fs = require("fs")
const [n, m] =  fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = Array.from({length: n}, () => Array(m).fill(0))

let idx = 1
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr[i][j] = idx++
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(' '))
}