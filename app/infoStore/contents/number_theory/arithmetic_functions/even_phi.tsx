export const title="Proof that if n is even, then φ(2n) = 2φ(n)";
const content = [
  ['h1', 'Proof That If n Is Even, Then φ(2n) = 2φ(n)'],
  ['pmain', 'The formula for \\(\\phi(n)\\) (<a href="multiplicative4">derived here</a>) is:'],
  ['displayFormula', '\\[\\begin{align} \\phi(n) &= n \\prod_{i=1}^k \\left( 1 - \\frac{1}{p_i} \\right) \\\\ &= \\prod_{i=1}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\end{align}\\]'],
  ['pmain', 'If \\(n\\) is even, then 2 is a prime factor. Assume \\(p_1 = 2\\):'],
  ['displayFormula', '\\[\\begin{align} \\phi(n) &= p_1^{a_1} \\left( 1 - \\frac{1}{p_1} \\right) \\prod_{i=2}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\\\ &= 2^{a_1} \\left( 1 - \\frac{1}{2} \\right) \\prod_{i=2}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\end{align}\\]'],
  ['pmain', 'This means if we multiply \\(n\\) by 2:'],
  ['displayFormula', '\\[\\phi(2n) = 2^{a_1+1} \\left( 1 - \\frac{1}{2} \\right) \\prod_{i=2}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{align} \\phi(2n) &= 2 * 2^{a_1} \\left( 1 - \\frac{1}{2} \\right) \\prod_{i=2}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) \\\\ &= 2 \\prod_{i=1}^k p_i^{a_i} \\left( 1 - \\frac{1}{p_i} \\right) = 2 \\phi(n) \\end{align}\\]'],
];

export default content;
