const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

function checkPalen(num) {
    let str = num.split("")
    let reverse = str.reverse().join("")
    if(num === reverse) {
        console.log("yes")
    }
    else {
        console.log('no')
    }
}
let i = 0
while(true) {
    let num = input[i].trim()
    if(num==='0') {
        break
    }
    checkPalen(num)
    i++
}