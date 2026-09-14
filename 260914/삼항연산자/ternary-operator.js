const fs = require("fs")
const input = fs.readFileSync(0).toString().trim()

const res = Number(input)

console.log(res === 100 ? 'pass' : 'failure')