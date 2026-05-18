const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const offset = 1000
const arr = Array.from({length: offset * 2 + 1}, () => 0)

let idx = offset
commands.forEach(v => {
  const [a, dir] = v.split(' ')
  const move = Number(a)
  
  for (let i = 0; i < move; i++) {
    dir === 'R' ? arr[idx++] += 1 : arr[--idx] += 1
  }
  
  
})

console.log(arr.filter(v => v>=2).length)
