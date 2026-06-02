const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.

const answer = [0, 0]
// 좌, 우, 상, 하

for (let i = 0; i < n; i++) {
    const move = moves[i].split(' ')
    const direct = move[0]
    const distance = Number(move[1])

    if (direct === 'N') answer[1] += distance
    if (direct === 'S') answer[1] -= distance
    if (direct === 'E') answer[0] += distance
    if (direct === 'W') answer[0] -= distance
}

console.log(answer.join(' '))