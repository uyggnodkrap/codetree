const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const answer = Array.from({length: n}, () => Array(n).fill(0))

let idx = 1
if (n % 2 == 0) {
    for (let i = n -1; i >= 0; i--) {
        if (i % 2 != 0) {
            for (let j = n - 1; j >= 0; j--) {
                answer[j][i] = idx++
            }       
        } else {
            for (let j = 0; j < n; j++) {
                answer[j][i] = idx++
            }        
        }
    }
} else {
    for (let i = n -1; i >= 0; i--) {
        if (i % 2 == 0) {
            for (let j = n - 1; j >= 0; j--) {
                answer[j][i] = idx++
            }       
        } else {
            for (let j = 0; j < n; j++) {
                answer[j][i] = idx++
            }        
        }
    }    
}


for (let i = 0; i < n; i ++) {
    console.log(answer[i].join(' '))
}