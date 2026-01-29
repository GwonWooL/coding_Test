function solution(want, number, discount) {
  let answer = 0;
  const obj = {}; // 객체로 구성
  for (let i = 0; i < want.length; i++) {
    {
      obj[want[i]] = number[i];
    }
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const temp = { ...obj };
    for (let j = i; j < 10 + i; j++) {
      if (temp[discount[j]]) {
        temp[discount[j]]--;
      }
    }
    let result = true;
    for (let key in temp) {
      if (temp[key] > 0) {
        result = false;
      }
    }
    if (result) answer++;
  }
  return answer;
}
