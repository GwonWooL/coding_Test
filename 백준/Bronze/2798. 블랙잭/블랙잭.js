const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, m] = input[0].split(" ").map(Number)
let arr = input[1].split(" ").map(Number)

arr.sort((a, b) => a - b)

let num = m
let result = 0
let min = 0
for(let i = 0; i<n-2; i++) {
    for(let j = i+1; j<n-1; j++) {
        for(let k = j+1; k<n; k++) {
            result = arr[i]+arr[j]+arr[k]
            if(result > min && result <=m) {
                min = result
            }
        }
    }
}
console.log(min)