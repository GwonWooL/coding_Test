const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])
let arr = input[1].split(" ").map(Number)

let max = Math.max(...arr)
let result = 0
for(let i = 0; i<n; i++) {
    result += arr[i]/max*100
}
console.log(result/n)