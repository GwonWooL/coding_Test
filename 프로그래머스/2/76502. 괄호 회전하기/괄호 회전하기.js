function isValid(s) {
  let check = [];
  for (let i = 0; i < s.length; i++) {
    check.push(s[i]);

    let num = check.length;

    if (check[num - 2] === '[' && check[num - 1] === ']')
      check.splice(num - 2, 2);
    if (check[num - 2] === '{' && check[num - 1] === '}')
      check.splice(num - 2, 2);
    if (check[num - 2] === '(' && check[num - 1] === ')')
      check.splice(num - 2, 2);
  }
  if (check.length == 0) {
    return true;
  }
}

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (isValid(s)) {
      count++;
    }
    s = s.slice(1) + s[0];
  }
  return count;
}
