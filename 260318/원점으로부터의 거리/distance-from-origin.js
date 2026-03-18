const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
const sortFunc = (a, b) => {
    const [ax, ay, az] = a.slice(0,2)
    const [bx, by, bz] = b.slice(0,2)

    const da = Math.abs(ax - 0) + Math.abs(ay - 0)
    const db = Math.abs(bx - 0) + Math.abs(by - 0)

    return da - db || az - bz
}

for (let i = 0; i < n; i++) {
    points[i].push(i+1)
}

points.sort((x, y) => sortFunc(x, y))

for (let i = 0; i < n; i++) {
    console.log(points[i][2])
}