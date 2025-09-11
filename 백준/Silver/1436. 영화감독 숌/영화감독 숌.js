const fs= require("fs")
let input = Number(fs.readFileSync(0).toString().trim())

let count = 0
let num = 666
while (true) {
    if(String(num).includes("666")) {
        count++
        if(count == input) {
            console.log(num)
            break
        }
    }
    num++
}