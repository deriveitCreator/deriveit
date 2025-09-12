export const title="Proof that φ(n^j) = n^{j-1} φ(n)";
const content = [
  ['h1', 'Proof That φ(n<sup>j</sup>) = n<sup>j-1</sup> φ(n)'],
  ['pmain', 'Let \\(n = p_1 ^ {a_1} p_2 ^ {a_2} \\cdots p_k ^ {a_k}\\), where \\(p_i\\) is a prime factor of \\(n\\) and \\(a_1 \\ge 1\\). The formula for \\(\\phi(n)\\) (<a href="multiplicative4">derived here</a>) is:'],
  ['displayFormula', '\\[\\begin{align} \\phi(n) &= n \\prod_{i=1}^k \\left( 1 - \\frac{1}{p_i} \\right) \\\\ &= \\prod_{i=1}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\end{align}\\]'],
  ['pmain', 'If we raise \\(n\\) to the power of \\(j\\):'],
  ['displayFormula', '\\[\\begin{align} n^j &= (p_1 ^ {a_1} p_2 ^ {a_2} \\cdots p_k ^ {a_k})^j \\\\ &= p_1 ^ {ja_1} p_2 ^ {ja_2} \\cdots p_k ^ {ja_k} \\end{align}\\]'],
  ['pmain', 'If we use the Euler phi function with \\(n^j\\):'],
  ['displayFormula', '\\[\\phi(n^j) = \\prod_{i=1}^k p_i^{ja_i} \\left( 1 - \\frac{1}{p_i} \\right) \\]'],
  ['pmain', 'Multiplying with \\(p_i^{a_i} / p_i^{a_i}\\):'],
  ['displayFormula', '\\[\\begin{align} \\phi(n^j) &= \\prod_{i=1}^k \\frac{p_i^{a_i}}{p_i^{a_i}} p_i^{ja_i} \\left( 1 - \\frac{1}{p_i} \\right) \\\\ \\phi(n^j) &= \\prod_{i=1}^k p_i^{a_i} \\frac{p_i^{ja_i}}{p_i^{a_i}} \\left( 1 - \\frac{1}{p_i} \\right) \\end{align}\\]'],
  ['pmain', 'Taking \\(p_i^{ja_i} / p_i^{a_i}\\) out:'],
  ['displayFormula', '\\[\\begin{align} \\phi(n^j) &= \\frac{p_1^{ja_1}p_2^{ja_2} \\cdots p_k^{ja_k}}{p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}} \\prod_{i=1}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\\\ &= \\frac{n^j}{n} \\prod_{i=1}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\end{align}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\phi(n^j) = n^{j-1} \\phi(n)\\]'],
];

export default content;
