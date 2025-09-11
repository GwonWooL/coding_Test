const fs = require("fs")
let num = fs.readFileSync(0).toString().trim()
let arr = ['0']
arr.push(...num.split(""))

let odd = true
let sum = 0
for(let i = 1; i<arr.length; i++) {
    if(i%2!=0) {
        if(arr[i]==='*') {
            continue
        }
        sum += Number(arr[i])
    }
    else {
        if(arr[i]==='*') {
            odd = false
            continue
        }
        sum += 3*Number(arr[i])
    }
}

let x = 1
if(sum%10==0) {
    x = 0
}
else {
    if(odd) {
    x = (10 - (sum % 10)) % 10
    }
    else {
    x = ((10 - (sum % 10)) * 7) % 10
    }
}
console.log(x)