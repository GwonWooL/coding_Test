function solution(numer1, denom1, numer2, denom2) {
  let a = numer1 * denom2 + numer2 * denom1;
  let b = denom1 * denom2;

  let min = Math.min(a, b);

  for (let i = 2; i <= min; i++) {
    while (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
    }
  }

  return [a, b];
}
