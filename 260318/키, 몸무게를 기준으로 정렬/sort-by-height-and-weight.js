const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const students = input.slice(1, n + 1).map(v => v.split(' '));

// Please Write your code here.

const sortFunc = (a, b) => {
    const [ax, ay] = a.slice(1, 3).map(Number)
    const [bx, by] = b.slice(1, 3).map(Number)

    return ax - bx || by - ay
}

students.sort((x, y) => sortFunc(x, y))

for (let i = 0; i < n; i++) {
    console.log(students[i].join(' '))
}