export const title="There are infinite number of primes";
const content = [
  ['h1', 'There are infinite number of primes'],
  ['pmain', 'Suppose there are finitely many primes \(p_1,p_2 \\ldots p_n\), with \(n ≥ 1\). Consider \(N\):'],
  ['displayFormula','$$(N = (p1p2 \\ldots pn) + 1)$$'],
  ['pmain','So by the Fundamental Theorem of Arithmetic there must be a prime \(p_i\) dividing \(N\). Using Euclidean algorithm, (p_i, (p_1p_2 \\ldots p_n) + 1) = (p_i, 1) = 1, and so \(p_i \\nmid N\). So, \(p \\ne p_i\) for any \(i\), and \(p\) is a new prime. This is a contradiction.']
];
export default content;