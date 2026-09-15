const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
    let x = input[i].split(' ').map(p => p.toUpperCase())
    console.log(x.join(' '))
}