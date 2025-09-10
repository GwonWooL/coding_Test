const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let up = input[0], down = input[1], top = input[2]

let days = Math.ceil((top - up) / (up - down)) + 1;
console.log(days)