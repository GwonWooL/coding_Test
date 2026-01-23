let result = [];
function solution(s) {
  for (let i = 0; i < s.length; i++) {
    let start = s[i];
    let count = 0;
    for (let j = i + 1; j < s.length; j++) {
      count++;
      if (s[i] > s[j]) {
        break;
      }
    }
    result.push(count);
  }
  return result;
}
