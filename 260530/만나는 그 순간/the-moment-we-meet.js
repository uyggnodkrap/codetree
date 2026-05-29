const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.
const arrA = []
const arrB = []

let idxA = 0
let idxB = 0

for (let i = 0; i < n; i++) {
    const [d, t] = movesA[i]
    for (let j = 0; j < t; j++) {
        d === 'R' ? arrA.push(++idxA) : arrA.push(--idxA) 
    }
}

for (let i = 0; i < m; i++) {
    const [d, t] = movesB[i]
    for (let j = 0; j < t; j++) {
        d === 'R' ? arrB.push(++idxB) : arrB.push(--idxB) 
    }
}

const t = arrA.length
let answer = -1
for (let i = 0; i < t; i++) {
    if (arrA[i] === arrB[i]) {
        answer = i + 1
        break
    }   
}
console.log(answer)