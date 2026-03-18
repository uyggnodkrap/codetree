const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// Please Write your code here.

const one = '1'

for (let i = 0; i < n; i++) {
    let str = ''
    for (let j = 0; j < m; j++) {
        str += one
    }
    console.log(str)
}