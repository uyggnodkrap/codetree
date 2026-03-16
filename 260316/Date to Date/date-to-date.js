const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.



const getMonth = (x) => {

    const month1 = 31
    const month2 = 28 + month1
    const month3 = 31 + month2
    const month4 = 30 + month3
    const month5 = 31 + month4
    const month6 = 30 + month5
    const month7 = 31 + month6
    const month8 = 31 + month7
    const month9 = 30 + month8
    const month10 = 31 + month9
    const month11 = 30 + month10
    const month12 = 31 + month11

    if (x === 1) return month1
    if (x === 2) return month2
    if (x === 3) return month3
    if (x === 4) return month4
    if (x === 5) return month5
    if (x === 6) return month6
    if (x === 7) return month7
    if (x === 8) return month8
    if (x === 9) return month9
    if (x === 10) return month10
    if (x === 11) return month11
    if (x === 12) return month12
}


console.log(getMonth(m2) - getMonth(m1) + (d2 - d1))