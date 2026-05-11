const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

const func1 = (x) => {
    return x % 4 === 0 ? true : false
}

const func2 = (x) => {
    return x % 100 === 0 && x % 400 !== 0 ? true : false
}

console.log(func1(y) ? !func2(y) ? true : false : false)