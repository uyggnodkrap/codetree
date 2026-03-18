const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.


const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

const lcm = (a, b) => (a * b)/ gcm(a, b)

console.log(lcm(n, m))