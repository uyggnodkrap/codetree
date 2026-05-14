const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

const arr = [2, 4]
let idx1 = 0
let idx2 =1
const recursive = (x) => {
    if (x === 0) return
    arr.push(arr[idx1++] * arr[idx2++] % 100)
    return recursive(x-1)
}

recursive(N)
console.log(arr[N-1])