const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
console.log(n)
console.log(commands)

const arr = Array(2000 + 1).fill(0)
const idx = 1000
for (let i = 0; i < n; i++) {
    const[x, d] = commands[i]
} 