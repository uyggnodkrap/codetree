const fs = require("fs")

const n = Number(fs.readFileSync(0).toString().trim())

const arr = Array.from({length: n} , (_, i) => i+1)
const rarr = [...arr].reverse()

const str = arr.join('')
const rstr = rarr.join('')

for (let i = 0; i < n; i++) {
    i % 2 === 0 ? console.log(str) : console.log(rstr)
}