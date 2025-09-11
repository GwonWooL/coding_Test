const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])

let arr = []
for(let i = 1; i<=n; i++) {
    arr.push(input[i].trim())
}

function arrSort(a, b) {
    if(a.length==b.length) {
        return a.localeCompare(b)
    }
    return a.length - b.length
}
arr.sort(arrSort)
for(let i = 0; i<arr.length-1; i++) {
    if(arr[i] == arr[i+1]) {
        arr.splice(i+1, 1)
        i--
    }
}
for(let i = 0; i<arr.length; i++) {
    console.log(arr[i])
}