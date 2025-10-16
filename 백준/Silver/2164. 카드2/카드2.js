const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())

let count = 1
while(count*2<=n) {
    count*=2
}
console.log((n-count)*2 || n)