const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.


const getDate = (m, d) => {
    const month = [0,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return month.slice(1, m).reduce((acc, cur) => acc + cur, d) 
}

const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

console.log(day[(getDate(m2, d2) - getDate(m1, d1)) % 7 + 7])
