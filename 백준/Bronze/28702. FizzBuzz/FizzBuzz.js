const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split(/\r?\n/)

let arr = []
for(let i = 0; i<3; i++) {
    arr.push(input[i])
}

function whatStr(num, i) {
    let number = 3-i
    num += number
    if(num%3==0&&num%5==0) {
        return "FizzBuzz"
    }
    if(num%3==0) {
        return "Fizz"
    }
    if(num%5==0) {
        return "Buzz"
    }
    return num
    
}

for(let i = 0; i<arr.length; i++) {
    if(arr[i]!="FizzBuzz" && arr[i]!="Fizz" && arr[i]!="Buzz") {
        let num = Number(arr[i])
        let str = whatStr(num, i)
        console.log(str)
        break
    }
}