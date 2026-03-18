const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please write your code here.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let x = ""
let cnt = 0
for (let i = 0; i < n ** 2; i++) {
    let idx = i % 9  
    let value = arr[idx]
    x += value + ' '
    cnt++
    if (cnt == n) {
        console.log(x)
        x = ''
        cnt = 0
    }
}