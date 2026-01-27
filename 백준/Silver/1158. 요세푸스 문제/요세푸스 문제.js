const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

// n 입력값
const n = Number(input[0]);
// k 입력값
const k = Number(input[1]);

const que = [];
// 1~n이 적혀있는 배열 생성
for (let i = 1; i <= n; i++) {
  que.push(i);
}

const result = [];
let count = 1;
while (que.length) {
  if (count === k) {
    result.push(que.shift());
    count = 1;
  } else {
    que.push(que.shift());
    count++;
  }
}

console.log(`<${result.join(', ')}>`);
