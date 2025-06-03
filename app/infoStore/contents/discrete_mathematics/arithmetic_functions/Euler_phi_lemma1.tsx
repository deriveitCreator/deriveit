export const title="Proof that if m|n, then φ(mn) = m * φ(n)";
const content = [
  ['h1', 'Proof That If m|n, Then φ(mn) = m * φ(n)'],
  ['pmain', 'The formula for \\(\\phi(n)\\) (<a href="multiplicative4">derived here</a>) is:'],
  ['displayFormula', '\\[\\phi(n) = n \\prod_{i=1}^k \\left( 1 - \\frac{1}{p_i} \\right)\\]'],
  ['pmain', 'If \\(m|n\\), then all prime factors that exist in \\(m\\) also exist in \\(n\\). This means:'],
  ['displayFormula', '\\[\\begin{align} \\phi(mn) &= mn \\prod_{i=1}^k \\left( 1 - \\frac{1}{p_i} \\right) \\\\ &= m \\ \\phi(n) \\end{align}\\]'],
];

export default content;
