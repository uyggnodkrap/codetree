const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.

const getDate = (m, d) => {
    const month = [0,31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return month.slice(1, m).reduce((acc, cur) => acc + cur, d) 
}

const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const idx = getDate(m1, d1) % 7

const stt_date = getDate(m1, d1) + 7 - idx
const end_date = getDate(m2, d2) + 7 - idx
const find_day = (day.indexOf(A) + 7 - idx) % 7

let answer = 0
for (let i = stt_date; i <= end_date; i++) {
    if (i % 7 === find_day)  answer += 1 
}
console.log(answer)