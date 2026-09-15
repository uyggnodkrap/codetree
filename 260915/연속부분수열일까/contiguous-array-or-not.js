const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[1].split(' ').map(Number)
const b = input[2].split(' ').map(Number)

let answer = 'No'

for (let i = 0; i <= a.length - b.length; i++) {
    answer = 'Yes'
    for (let j = 0; j < b.length; j++) {
        if (a[i+j] !== b[j] ) {
            answer = 'No'
            break
        }
    }
    if (answer == 'Yes') break
}
console.log(answer)

