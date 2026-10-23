export const title="Proof that φ(n) ≤ n - √n";
const content = [
  ['h1', 'Proof That φ(n) ≤ n - √n'],
  ['pmain', 'The formula for \\(\\phi(n)\\) (<a href="multiplicative4">derived here</a>) is:'],
  ['displayFormula', '\\[ \\phi(n) = n \\prod_{i=1}^k \\left( 1 - \\frac{1}{p_i} \\right) \\]'],
  ['pmain', 'Let \\(p\\) be the smallest prime divisor of \\(n\\). Since \\(( 1 - \\frac{1}{p_i} ) < 1\\):'],
  ['displayFormula', '\\[ \\prod_{i=1}^k \\left( 1 - \\frac{1}{p_i} \\right) \\le \\left( 1 - \\frac{1}{p} \\right) \\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{align} \\phi(n) &\\le n \\left( 1 - \\frac{1}{p} \\right) \\\\ &\\le n - \\frac{n}{p} \\end{align}\\]'],
  ['pmain', 'Since \\(p\\) divides \\(n\\), then there exists integer \\(k\\) such that \\(k=\\frac{n}{p}\\):'],
  ['displayFormula', '\\[ \\phi(n) \\le n - k\\]'],
  ['pmain', 'Since \\(n=\\sqrt{n}\\sqrt{n}\\) and \\(n=pk\\):'],
  ['displayFormula', '\\[\\begin{align} \\text{either } & \\quad p \\le \\sqrt{n}, \\ k \\ge \\sqrt{n} \\\\ \\text{or } & \\quad p \\ge \\sqrt{n}, \\ k \\le \\sqrt{n} \\end{align}\\]'],
  ['pmain', 'Since \\(p\\) is the smallest prime divisor of \\(n\\) and \\(k\\) divides \\(n\\), then the prime factors of \\(k\\) may include \\(p\\) and/or primes higher than \\(p\\), but not primes lower than \\(p\\). This means \\(p \\le k\\). This must also mean \\(p \\le \\sqrt{n}\\) and \\(k \\ge \\sqrt{n}\\). Therefore:'],
  ['displayFormula', '\\[\\begin{gather} -k \\le - \\sqrt{n} \\\\ n-k \\le n-\\sqrt{n} \\\\ \\phi(n) \\le n - k \\implies \\phi(n) \\le n - \\sqrt{n} \\end{gather}\\]'],
];

export default content;
