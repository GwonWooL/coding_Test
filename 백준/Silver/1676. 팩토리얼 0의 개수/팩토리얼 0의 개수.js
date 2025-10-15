const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

let count = 0
while(n > 0) {

n = Math.floor(n/5)
count += n
}
console.log(count)

