const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = Array.from({length : 2 }, () => Array(4).fill(0))

let x = []
for (let i = 0; i < input.length; i++) {
    arr[i] = input[i].split(' ').map(Number)
    let avg = arr[i].reduce((acc, cur) => acc + cur, 0) / 4
    x.push(avg.toFixed(1))

}

console.log(x.join(' '))

let y = []
for (let i = 0; i < 4; i++) {
    let sum = 0
    for (let j = 0; j < 2; j++) {
        sum += arr[j][i]
    }
    let avg = sum / 2
    y.push(avg.toFixed(1))
}

console.log(y.join(' '))

let z = arr.flat().reduce((acc, cur) => acc + cur, 0) / 8
console.log(z.toFixed(1))