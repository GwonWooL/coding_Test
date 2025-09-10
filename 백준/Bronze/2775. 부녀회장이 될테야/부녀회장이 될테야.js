const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let turn = Number(input[0])


function countPeople(floor, number, arr) {
    for(let i = 1; i<=floor; i++) {
        for(let j = 0; j<number; j++) {
            for(let k = 0; k<=j; k++) {
                arr[i][j] += arr[i-1][k]
            }
        }
    }
    console.log(arr[floor][number-1])
}

for(let i = 1; i<=turn*2; i+=2) {
    let a = Number(input[i])
    let b = Number(input[i+1])
    let arr = Array.from(Array(a+1), () => Array(b).fill(0));
    for(let i = 0; i<b; i++) {
        arr[0][i] = i+1
    }
    countPeople(a, b, arr)
}
