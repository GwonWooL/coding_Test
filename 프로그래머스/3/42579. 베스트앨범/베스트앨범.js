function solution(types, plays) {
  const answer = [];

  const music = types.reduce((acc, cur, index) => {
    if (!acc[cur]) {
      acc[cur] = {
        total: 0,
        song: [],
      };
    }
    acc[cur].total += plays[index];
    acc[cur].song.push({ id: index, play: plays[index] });
    return acc;
  }, {});

  const sorted = Object.entries(music).sort((a, b) => b[1].total - a[1].total);

  sorted.map(([_, info]) => {
    info.song.sort((a, b) =>
      a.play === b.play ? a.id - b.id : b.play - a.play
    );
  });
  sorted.forEach(([_, info]) => {
    info.song.slice(0, 2).forEach((a) => answer.push(a.id));
  });

  return answer;
}
