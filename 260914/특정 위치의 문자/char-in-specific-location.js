const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

const arr = ['L', 'E', 'B', 'R', 'O', 'S']
const answer = arr.indexOf(a)
if (answer < 0) {
    console.log('None')
} else {
    console.log(answer)
}