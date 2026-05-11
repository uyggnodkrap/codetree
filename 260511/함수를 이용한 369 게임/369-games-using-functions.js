const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

const func1 = (x) => {
    const p = String(x).split('').find(v => v === '3' || v === '6' || v === '9') || []
    return p.length === 0 ? false : true
}
const func2 = (x) => {
    return x % 3 === 0 ? true : false
}

let answer = 0
for (let i = A; i <= B; i++) {
    func2(i) && answer++
    func1(i) && answer++    
    func2(i) && func1(i) && answer-- 
}

console.log(answer)