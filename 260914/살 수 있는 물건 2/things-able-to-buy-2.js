const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

if (input >= 3000) {
    console.log('book')
} else if (input >= 1000) {
    console.log('mask')
} else if (input >= 500) {
    console.log('pen')
} else {
    console.log('no')
}