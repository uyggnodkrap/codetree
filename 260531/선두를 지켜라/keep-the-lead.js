const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.

const move = (arr) => {
    const pos = []
    let value = 0
    for (let i = 0; i < arr.length; i++){
        const [v, t] = arr[i]
        for (let j = 0; j < t; j++) {
            value +=  v
            pos.push(value)
        }
    }
    return pos
}


const moveA = move(aData)
const moveB = move(bData)
const size = moveA.length

const flag = []
answer = 0
for (let i = 0; i < size; i++) {

    flag.push(moveA[i]  < moveB[i])
    if (i !== 0 && (flag[i] !== flag[i-1])) {
        answer += 1
    }
}

console.log(answer)