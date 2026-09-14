const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, q] = input[0].split(' ').map(Number)
const m = input[1].split(' ').map(Number)

for (let i = 2; i < q+2; i++) {
    const x = input[i].split(' ').map(Number)
    const arr = x.slice(0)

    if (x[0] == 1) {
        console.log(m[x[1]-1])
    } else if (x[0] == 2) {
        console.log(m.indexOf(x[1]) + 1)
    } else if (x[0] == 3) {
        let t = m.slice(x[1]-1, x[2]).join(' ')
        console.log(t)
    }
}