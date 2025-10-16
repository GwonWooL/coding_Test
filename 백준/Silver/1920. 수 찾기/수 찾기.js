const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])
let m = Number(input[2])

let arr = input[1].split(" ").map(Number)
let num = input[3].split(" ").map(Number)

let setArr = new Set(arr)

for(let i = 0; i<m; i++) {
    if(setArr.has(num[i])) {
        console.log("1")
    }
    else {
        console.log("0")
    }
}
