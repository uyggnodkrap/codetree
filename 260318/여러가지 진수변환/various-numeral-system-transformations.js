const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.
const num = Number(binaryStr.split(' ')[0])
const base = Number(binaryStr.split(' ')[1])

console.log(num.toString(base))