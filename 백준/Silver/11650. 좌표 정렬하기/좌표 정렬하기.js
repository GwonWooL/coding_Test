const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])

let arr = []
for(let i = 1; i<=n; i++) {
    let [x, y] = input[i].split(" ").map(Number)
    arr.push([x, y])
}
arr.sort((a, b) => {
    if(a[0]==b[0]) {
        return a[1]-b[1]
    }
    return a[0]-b[0]
})

for(let i = 0; i<arr.length; i++) {
    console.log(arr[i][0]+" "+arr[i][1])
}