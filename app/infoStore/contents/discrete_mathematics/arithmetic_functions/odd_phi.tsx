export const title="Proof that if n is odd, then φ(2n) = φ(n)";
const content = [
  ['h1', 'Proof That If n Is Odd, Then φ(2n) = φ(n)'],
  ['pmain', 'The formula for \\(\\phi(n)\\) (<a href="multiplicative4">derived here</a>) is:'],
  ['displayFormula', '\\[\\begin{align} \\phi(n) &= n \\prod_{i=1}^k \\left( 1 - \\frac{1}{p_i} \\right) \\\\ &= \\prod_{i=1}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\end{align}\\]'],
  ['pmain', 'If \\(n\\) is odd, then 2 is a not prime factor. This means if we multiply \\(n\\) by 2, then \\(2n\\) will have an extra prime factor:'],
  ['displayFormula', '\\[\\phi(2n) = 2^{1} \\left( 1 - \\frac{1}{2} \\right) \\prod_{i=1}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\]'],
  ['pmain', 'Since \\(2(1-\\frac{1}{2}) = 1\\):'],
  ['displayFormula', '\\[\\begin{align} \\phi(2n) &= \\prod_{i=1}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\\\ \\phi(2n) &= \\phi(n) \\end{align}\\]'],
];

export default content;
