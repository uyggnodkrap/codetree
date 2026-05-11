const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

const isPrime = (x) =>  {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false
        }
    }
    return true
}

let answer = 0
for (let i = A; i <= B; i++) {
    if (isPrime(i)) {
        answer += i
    }
}

console.log(answer)