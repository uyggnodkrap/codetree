const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

const x = a.split(' ').map(m => Number(m))


if (x[0] > x[1]) {
    console.log(x[0] * x[1])
} else {
    console.log(Math.floor(x[1] / x[0]))
}