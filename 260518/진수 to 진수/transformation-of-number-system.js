const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 

const [a, b] = binaryInput.split(' ').map(Number)
const n = Number(input[1])

console.log(parseInt(n, a).toString(b))
