function solution(n, words) {
  const answer = [0, 0]; // 정답 배열
  const set = new Set(); // 단어 재사용 확인
  const arr = []; // 인원 반복

  let count = 0; // 단어 인덱스
  let order = 1;
  while (count < words.length) {
    if (count === 0) {
      set.add(words[count]);
      count++;
      continue;
    } else if (set.has(words[count]) || check(words[count - 1], words[count])) {
      answer[0] = (count % n) + 1;
      answer[1] = order;
      break;
    }
    set.add(words[count]);
    count++;

    if (count % n === 0) {
      order++;
    }
  }
  return answer;
}

function check(a, b) {
  return a[a.length - 1] !== b[0] ? true : false;
}
