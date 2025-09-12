export const title="Proof that if m|n, then φ(m)|φ(n)";
const content = [
  ['h1', 'Proof That If m|n, Then φ(m)|φ(n)'],
  ['pmain', 'Let \\(m = p_1 ^ {b_1} p_2 ^ {b_2} \\cdots p_h ^ {b_h}\\), where \\(p_i\\) is a prime factor of \\(m\\) and \\(b_1 \\ge 1\\), and let \\(n = p_1 ^ {a_1} p_2 ^ {a_2} \\cdots p_k ^ {a_k}\\), where \\(p_i\\) is a prime factor of \\(n\\) and \\(a_1 \\ge b_i\\).'],
  ['pmain', '\\(p_i\\) are primes not in any specific order, so it\'s possible that \\(p_1 \\gt p_2\\) and it\'s possible that \\(p_2 \\gt p_1\\). The important part to note is that the prime factors of \\(m\\) (which are \\(p_i\\) where \\(i \\le h\\)) are also prime factors of \\(n\\), so \\(m|n\\).'],
  ['pmain', 'The formula for \\(\\phi(n)\\) (<a href="multiplicative4">derived here</a>) is:'],
  ['displayFormula', '\\[\\begin{align} \\phi(n) &= n \\prod_{i=1}^k \\left( 1 - \\frac{1}{p_i} \\right) \\\\ \\phi(m) &= m \\prod_{i=1}^h \\left( 1 - \\frac{1}{p_i} \\right) \\end{align}\\]'],
  ['pmain', 'All terms in \\(\\prod_{i=1}^h (1 - 1/p_i) \\) also exists in \\(\\prod_{i=1}^k (1 - 1/p_i)\\). So \\(\\prod_{i=1}^h (1 - 1/p_i) \\) divides \\(\\prod_{i=1}^k (1 - 1/p_i)\\). Since \\(m\\) divides \\(n\\) as well, then all terms in \\(\\phi(m)\\) divides the terms in \\(\\phi(n)\\). Therefore, \\(\\phi(m) | \\phi(n)\\).'],
];

export default content;
