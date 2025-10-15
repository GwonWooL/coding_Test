const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])

let arr = []
let sum = 0
for(let i = 1; i<=n; i++) {
    sum+= Number(input[i])
    arr.push(Number(input[i]))
}
if(Math.round(sum/n)==-0) {
    console.log(0)
}
else {
console.log(Math.round(sum/n))
}

arr.sort((a, b) => a-b)
let num = Math.floor(n/2)
console.log(arr[num])

let object = {}
for(let i = 0; i<arr.length; i++) {
    if(object[arr[i]]) {
        object[arr[i]]++
    }
    else {
        object[arr[i]] = 1
    }
}

let value = Object.values(object)
value.sort((a, b) => b-a)
let max = value[0]
let count = 0
for(let i = 1; i<value.length; i++) {
    if(max == value[i]) {
        count++
    }
}
if(count==0) {
    for(let key in object) {
        if(object[key]==max) {
            console.log(key)
        }
    }
}
else {
    let many = []
    for(let key in object) {
        if(object[key]==max) {
            many.push(Number(key))
        }
    }
    many.sort((a, b) => a - b)
    console.log(many[1])
}

console.log(arr[arr.length-1]-arr[0])
