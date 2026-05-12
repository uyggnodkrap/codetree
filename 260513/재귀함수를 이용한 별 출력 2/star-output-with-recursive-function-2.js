const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.
let star = ""
const recursive = (x) => {
    if (x === 0) return
    star += "* ".repeat(x) + "\n"
    recursive(x-1)
    star += "* ".repeat(x) + "\n"

}

recursive(n)
console.log(star)