const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n =5;
const students = input.map(v => v.split(' '));

// Please Write your code here.

const sortByNameFunc = (a, b) => {
    return a[0].localeCompare(b[0])
}

const sortByHeightFunc = (a, b) => {
    return Number(b[1]) - Number(a[1])
}

console.log('name')
students.sort((a, b) => sortByNameFunc(a, b))
for (let i = 0; i < n; i++) {
    console.log(students[i].join(' '))
}

console.log()

console.log('height')
students.sort((a, b) => sortByHeightFunc(a, b))
for (let i = 0; i < n; i++) {
    console.log(students[i].join(' '))
}