const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

// 상, 하, 좌, 우
const dy = [1, -1, 0, 0]
const dx = [0, 0, -1, 1]

const enable = (p, q) => (0 <= p && p < n) && (0 <= q && q < n)

const neighbor = (arr, a, b) => {
    let cnt = 0, x = 0, y = 0
    for (let i = 0; i < 4; i++) {
        x = a + dx[i]
        y = b + dy[i]
        enable(x, y) && arr[x][y] === 1 ? cnt += 1 : cnt += 0
    }

    return cnt >= 3 

}
let answer = 0
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        neighbor(grid, i, j) ? answer += 1 : answer += 0

    }
}

console.log(answer)