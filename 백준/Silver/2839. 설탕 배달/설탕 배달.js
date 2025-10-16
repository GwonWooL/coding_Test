const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())

let count = 0
while(n>0) {
    if (n % 5 == 0) {
        count = n / 5;
        console.log(count)
        break;
    }
    let arr = []
    for(let i = 0; i<=Math.floor(n/5); i++) {
        let result = 0
        let num = n-(5*i)
        if(num%3==0) {
            result = Math.floor(num/3)
            result+=i
            arr.push(result)
        }
    }
    arr.sort((a, b) => a-b)
    if(arr.length==0) {
        console.log("-1")
        break
    }
    else {
        console.log(arr[0])
        break
    }
}