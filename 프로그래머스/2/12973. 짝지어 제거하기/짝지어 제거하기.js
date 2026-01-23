function solution(s) {
  let answer = 0;

  const stack = [];
  const arr = [...s];

  for (let chr of arr) {
    if (stack.length && stack[stack.length - 1] === chr) {
      stack.pop();
    } else {
      stack.push(chr);
    }
  }

  stack.length === 0 ? (answer = 1) : (answer = 0);

  return answer;
}
