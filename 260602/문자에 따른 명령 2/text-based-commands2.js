const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.
// 상, 우, 하, 좌
const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

let dir = 0

const answer = [0, 0]
const comm =commands.split('')

for (let i = 0; i < comm.length; i++) {
    if (comm[i] === 'F')  {

        answer[0] += dx[dir % 4]
        answer[1] += dy[dir % 4]
    }
    // 좌: 270도, 우: 90도
    if (comm[i] === 'L') dir += 3
    if (comm[i] === 'R') dir += 1
    
}
console.log(answer.join(' '))