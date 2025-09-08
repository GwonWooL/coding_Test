const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [a, b] = input.split(" ").map(Number)

function gcd(x, y) {
    while (y !== 0) {
        let r = x % y
        x = y
        y = r
    }
    return x
}

let g = gcd(a, b)
let l = (a * b) / g

console.log(g)
console.log(l)