const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const x = Number(input)
if (x >=  113) {
    console.log(1)
} else {
    console.log(0)
}