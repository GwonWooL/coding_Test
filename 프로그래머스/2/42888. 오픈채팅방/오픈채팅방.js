function solution(record) {
  const answer = [];
  const user = {};

  for (const r of record) {
    const [pre, id, nick] = r.split(' ');
    if (pre !== 'Leave') user[id] = nick;
  }

  for (const r of record) {
    const [pre, id] = r.split(' ');

    if (pre === 'Enter') {
      answer.push(`${user[id]}님이 들어왔습니다.`);
    } else if (pre === 'Leave') {
      answer.push(`${user[id]}님이 나갔습니다.`);
    }
  }

  return answer;
}
