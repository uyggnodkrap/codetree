const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.
r-=1
c-=1

const dx =[0, 1, 0, -1]
const dy =[1, 0, -1, 0]

const direct = {'R': 0, 'D': 1, 'L': 2, 'U': 3 }

let dir = direct[d]
const enable = (p) => (0 <= p && p < n)

for (let i = 0; i < t; i ++) {
    let x = r + dx[dir]
    let y = c + dy[dir]
    r = x, c = y

    if (!enable(x) || !enable(y)) {
        if (!enable(x)) {
            x === n ? r = n -1 : r = 0
        } else {
            y == n ? c = n - 1 : c = 0
        }
        dir = (dir + 2) % 4      
    }
}

console.log(r + 1, c + 1)