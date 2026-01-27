function solution(s) {
  const stack = [];
  for (let chr of s) {
    if (stack.length && stack[stack.length - 1] === chr) {
      stack.pop();
    } else {
      stack.push(chr);
    }
  }
  return stack.length === 0 ? 1 : 0;
}