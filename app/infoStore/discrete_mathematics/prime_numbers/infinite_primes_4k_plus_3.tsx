export const title="There are infinite primes of the form 4k + 3";
const content = [
  ['h1', 'There Are Infinite Primes Of The Form 4k + 3'],
  ['pmain', 'Let \\(p_0=3\\). Suppose there are finitely many primes of the form \\(4k+3\\): \\(\\{p_1,p_2, \\ldots, p_n \\}\\). Consider \\(N\\):'],
  ['displayFormula','$$N = 4(p_1p_2 \\ldots p_n)^2 + 3$$'],
  ['pmain','\\(N\\) is either a prime or not, if it\'s a prime, then there is a contradiction (since \\(N\\) is also of the form \\(4k+3\\)), and if \\(N\\) is composite, then by the Fundamental Theorem of Arithmetic there must be a prime \\(p\\) that can divide N. If this \\(p\\) exists in \\( (p_1p_2 \\ldots p_n) \\), then \\(p\\) divides both \\( 4(p_1p_2 \\ldots p_n)^2 \\) and \\(N\\). If \\(p\\) divides both, then it would also divide the difference (which is 3). Since this is not possible, then \\(p\\) is a different prime not in \\((p_1p_2 \\ldots p_n)\\), this is also a contradiction. Therefore, there are not finitely many primes of the form \\(4k+3\\).']
];
export default content;