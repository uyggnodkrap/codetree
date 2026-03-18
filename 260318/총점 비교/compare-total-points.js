const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1).map(v => v.split(' ').slice(0, 4));

// Please Write your code here.

const sortSumAscFunc = (a, b) => {
    const sumA = a.slice(1, 4).map(Number).reduce((acc, cur) => acc + cur, 0)
    const sumB = b.slice(1, 4).map(Number).reduce((acc, cur) => acc + cur, 0)

    return sumA - sumB
}

rawStudentData.sort((a, b) => sortSumAscFunc(a, b))

for (let i = 0; i < n; i++) {
    console.log(rawStudentData[i].join(' '))
}