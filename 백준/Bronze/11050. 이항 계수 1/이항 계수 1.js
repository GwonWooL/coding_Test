const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let n = input[0], k = input[1]
let m = n-k
let min = Math.min(k, m)
let max = Math.max(k, m)

let result = 1
for(let i = n; i>=max+1; i--) {
    result *= i
}
let bottom = 1
for(let i = 2; i<=min; i++) {
    bottom *= i
}
console.log(result/bottom)