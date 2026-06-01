const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

// Please Write your code here.

const getDistance = (arr) => {
  const pos = [0]
  let value = 0
  for (let i = 0; i < arr.length; i++) {
    const [v, t] = arr[i]
    for (let j = 0; j < t; j++) {
      value += v
      pos.push(value)
    }
  }
  return pos

}

const arrA = getDistance(A_moves)
const arrB = getDistance(B_moves)

let win = 'x'
let answer = 0

for (let i = 1; i < arrA.length; i++) {
  if (arrA[i] > arrB[i]) {
    if (win != 'a') {
      answer+=1
    }
    win = 'a'
  } else if (arrA[i] < arrB[i]){
    if (win != 'b') {
      answer += 1
    }
    win = 'b'
  } else {
    if (win != 'x') {
      answer += 1
    }
    win = 'x'
  }
}

console.log(answer)