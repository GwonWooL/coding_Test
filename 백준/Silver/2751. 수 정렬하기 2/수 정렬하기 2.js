const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let n = input[0]

let arr = []
for(let i = 1; i<=n; i++) {
    arr.push(input[i])
}
arr.sort((a, b) => a-b) 

console.log(arr.join("\n"))