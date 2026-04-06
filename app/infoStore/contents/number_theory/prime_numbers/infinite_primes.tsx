export const title="There are infinite number of primes";
const content = [
  ['h1', 'There are infinite number of primes'],
  ['pmain', 'Suppose there are finitely many primes \\(\\{p_1,p_2, \\ldots, p_n \\}\\), with \\(n ≥ 1\\). Consider \\(N\\):'],
  ['displayFormula','$$N = (p_1p_2 \\ldots p_n) + 1$$'],
  ['pmain','\\(N\\) is either a prime or not. If it\'s a prime, then there is a contradiction, if not, then by the Fundamental Theorem of Arithmetic there must be a prime \\(p\\) dividing N. If this \\(p\\) exists in \\( (p_1p_2 \\ldots p_n) \\), then \\(p\\) divides both \\( (p_1p_2 \\ldots p_n) \\) and \\(N\\). If \\(p\\) divides both, then it would also divide the difference (which is 1):'],
  ['displayFormula','$$\\begin{gather} p | (p_1p_2 \\ldots p_n) \\wedge p | N \\implies \\\\ p | (p_1p_2 \\ldots p_n) - N \\\\ p | 1 \\end{gather} $$'],
  ['pmain','Since \\(p\\) dividing 1 is not possible, \\(p\\) is a different prime not in \\((p_1p_2 \\ldots p_n)\\), which is also a contradiction. Therefore, there are not finitely many primes.'],
];
export default content;