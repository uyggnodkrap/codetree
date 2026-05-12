const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const word = 'HelloWorld'

const recursive = (x) => {
    if (x === 0) return
    console.log(word)
    recursive(x-1)

}

recursive(n)