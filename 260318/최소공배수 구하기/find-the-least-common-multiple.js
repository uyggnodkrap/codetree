const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const gcd = (a,b) => b === 0 ? a : gcd(b, a % b)

const lcm = (a,b) => (a * b) / gcd(a, b)

console.log(lcm(n, m)) 