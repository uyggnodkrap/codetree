const fs = require("fs")

const n = Number(fs.readFileSync(0).toString().trim())

const asc = Array.from({length: n} , (_, i) => i + 1).join('')
const desc = Array.from({length: n} , (_, i) => n - i).join('')

for (let i = 0; i < n; i++) {
    i % 2 === 0 ? console.log(asc) : console.log(desc)
}