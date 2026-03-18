const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const students = input.slice(1, n+1).map(v => v.split(' ').map(Number))
// Please write your code here.

for (let i = 0; i < n; i++) {
    students[i].push(i+1)
}

const sortFunc = (a, b) => {
    const [ax, ay, az] = a
    const [bx, by, bz] = b

    return bx - ax || by - ay || az - bz

}

students.sort((x, y) => sortFunc(x, y))

for (let i = 0; i < n; i++){
    console.log(students[i].join(' '))
}

