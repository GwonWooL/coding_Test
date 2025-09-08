const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])
let arr = input[1].split("")

let alpha = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let m = 1234567891
let r = 31

for(let i = 0; i<n; i++) {
    for(let j = 1; j<27; j++) {
        if(arr[i] == alpha[j]) {
            arr[i] = j
            break
        }
    }
}

let result = 0
let power = 1   // r^i 값을 직접 관리
for (let i = 0; i < n; i++) {
    result = (result + arr[i] * power) % m
    power = (power * r) % m   // r^i -> r^(i+1) 로 갱신
}
console.log(result)