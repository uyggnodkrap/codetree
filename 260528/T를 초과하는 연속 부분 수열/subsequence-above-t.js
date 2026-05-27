const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let answer = 0, cnt = 1
if (Math.max(...arr) <= t)  {
    console.log(0)
} else {
    for (let i = 0; i < n; i++) {
        if (arr[i] <= t) {
            cnt = 1
        } else {
            if (arr[i-1] > t) {
                cnt++
            } else {
                cnt = 1
            }
        }
        answer = Math.max(answer, cnt)
    }
    console.log(answer)

}
