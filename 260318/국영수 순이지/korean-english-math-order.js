const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' ').slice(0, 4));
}
// Please Write your code here.

const sortDescFunc = (a, b) => {
    const [ax, ay, az] = a.slice(1, 4).map(Number)
    const [bx, by, bz] = b.slice(1, 4).map(Number)

    if (ax === bx) {
        if (ay === by) {
            return bz - az
        }
        return by - ay
    }
    return bx - ax
}

studentsInput.sort((x, y) => sortDescFunc(x, y))

for (let i = 0; i < n; i++) {
    console.log(studentsInput[i].join(' '))
} 