const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please write your code here.

let x = ""
let cnt = 0
for (let i = 0; i < n ** 2; i++) {
    let value = (i % 9) + 1
    x += value + ' '
    cnt++
    if (cnt == n) {
        console.log(x)
        x = ''
        cnt = 0
    }
}