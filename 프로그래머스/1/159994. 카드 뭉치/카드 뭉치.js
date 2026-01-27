function solution(a, b, goal) {

  for (let word of goal) {
    if (word === a[0]) {
      a.shift();
    } else if (word === b[0]) {
      b.shift();
    }
    else {
        return "No"
    }
  }
  return "Yes";
}
