function solution(progresses, speeds) {
  const result = [];
  const answer = [];
  for (let i = 0; i < progresses.length; i++) {
    const num = 100 - progresses[i];
    let time = Math.ceil(num / speeds[i]);
    result.push(time);
  }

  let current = result[0];
  let count = 1;
  for (let i = 1; i < result.length; i++) {
    if (current >= result[i]) {
      count++;
    } else {
      answer.push(count);
      current = result[i];
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
