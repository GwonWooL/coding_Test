const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])
let arr = input[1].split("")

let alpha = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


for(let i = 0; i<n; i++) {
    for(let j = 1; j<27; j++) {
        if(arr[i] == alpha[j]) {
            arr[i] = j
            break
        }
    }
}

let result = 0
for(let i = 0; i<n; i++) {
    result += arr[i]*31**i
}
console.log(result)