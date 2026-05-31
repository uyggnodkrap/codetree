const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.

const getPos = (arr, maxTime) => {
    
    let distance = 0
    let idx = 0

    const pos = [0]

    for (let i = 0; i < arr.length; i++) {
        const [times, direct] = arr[i].split(' ')
        const t = Number(times)
        
        for (let j = 0; j < t; j++) {
            direct == 'R' ? distance += 1 : distance -= 1
            pos.push(distance)
        }
    }

    while (pos.length <= maxTime) {
        pos.push(pos[pos.length-1])
    }
    return pos

}

const tA = movesA.map(v => Number(v.split(' ')[0])).reduce((acc, cur) => acc + cur, 0)
const tB = movesB.map(v => Number(v.split(' ')[0])).reduce((acc, cur) => acc + cur, 0)

const time = Math.max(tA, tB)

const arrA = getPos(movesA, time)
const arrB = getPos(movesB, time) 

let answer = 0

for (let i = 1; i < time; i++) {

    if (arrA[i] === arrB[i]) {
        if (arrA[i-1] !== arrB[i-1]) {
            answer += 1
        }
    }
}

console.log(answer)