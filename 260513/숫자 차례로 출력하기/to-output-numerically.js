const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

const arr1 = []
const arr2 = []
const func1 = (x) => {
    if (x === 0) return
    arr1.push(n - x + 1)
    func1(x-1)
}

const func2 = (x) => {
    if (x === 0) return
    arr2.push(x)
    func2(x-1)
}

func1(n)
func2(n)

console.log(arr1.join(' '))
console.log(arr2.join(' '))