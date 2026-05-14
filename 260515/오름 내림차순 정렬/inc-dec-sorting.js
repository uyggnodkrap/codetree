const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.
const asc = (a, b) => {
    return a - b
}

const desc = (a, b) => {
    return b -a
}
nums.sort(asc)
console.log(nums.join(' '))

nums.sort(desc)
console.log(nums.join(' '))