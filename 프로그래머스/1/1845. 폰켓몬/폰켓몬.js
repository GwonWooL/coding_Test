function solution(num) {
  const set = new Set(num);

  const max = Math.ceil(num.length / 2);

  const answer = set.size >= max ? max : set.size;

  return answer;
}
