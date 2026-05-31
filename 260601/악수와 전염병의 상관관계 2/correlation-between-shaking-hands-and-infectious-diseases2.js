const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number);

const shakes = [];
for (let i = 1; i <= t; i++) {
  const [time, person1, person2] = input[i].split(' ').map(Number);
  shakes.push({ time, person1, person2 });
}

const orderedShakes = shakes.sort((a, b) => a.time - b.time);

const arr = Array.from({ length: n + 1 }, () => [0, 0]);
arr[p][1] = 1;

const infestable = (x) => x[1] === 1 && x[0] < k;

for (let i = 0; i < orderedShakes.length; i++) {
  const p1 = orderedShakes[i].person1;
  const p2 = orderedShakes[i].person2;

  const alreadyIfestedP1 = arr[p1][1] === 1
  const alreadyIfestedP2 = arr[p2][1] === 1

  const canSpread = infestable(arr[p1]) || infestable(arr[p2]);

  if (canSpread) {
    arr[p1][1] = 1;
    arr[p2][1] = 1;
  }

  if (alreadyIfestedP1) arr[p1][0] += 1;
  if (alreadyIfestedP2) arr[p2][0] += 1;
}

const answer = arr.slice(1, n + 1).map(v => String(v[1])).join('');
console.log(answer);