const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])

let arr = []
for(let i = 1; i<=n; i++) {
    let [age, name] = input[i].split(" ")
    arr.push([Number(age), name, i])
}


arr.sort((a, b) => {
    if(a[0] != b[0]) {
        return a[0] - b[0]
    }
    return a[2] - b[2]
})

for(let i = 0; i<arr.length; i++) {
    console.log(arr[i][0], arr[i][1])
}