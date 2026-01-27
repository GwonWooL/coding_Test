function isValid(str) {
  const stack = [];
  const object = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (object[chr]) {
      stack.push(chr);
    } else {
      if (stack.length === 0 || object[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}

function solution(s) {
  let count = 0;
  // s 길이만큼 for문 반복
  for (let i = 0; i < s.length; i++) {
    // 문자열이 "올바른 괄호 문자열"인지 확인
    if (isValid(s)) {
      count++;
    }
    // s문자열 맨 앞 문자를 s문자열의 맨 뒤로 이동
    s = s.slice(1) + s[0];
  }
  return count;
}
