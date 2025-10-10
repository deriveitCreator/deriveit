export const title="C(n, 0) + C(n, 1) + ... + C(n, n) = 2^n";
const content = [
  ['h1', 'C(n, 0) + C(n, 1) + ... + C(n, n) = 2^n'], 

  ['pmain', 'The <a href="binomial_theorem" target="_blank">binomial theorem</a> states:'], 
  ['displayFormula', '\\[\\begin{align} (x+y)^n &= \\binom n 0 x^n + \\binom n 1 x^{n-1} y^1 + \\binom n 2 x^{n-2} y^2 + \\cdots \\\\ &= \\sum^n_{i=0} \\binom n i x^{n-i} y^i \\end{align}\\]'],
  ['pmain', 'Let \\(x=1\\) and \\(y=1\\):'], 
  ['displayFormula', '\\[\\begin{align} 2^n &= \\sum^n_{i=0} \\binom n i 1^{n-i} 1^i = \\sum^n_{i=0} \\binom n i \\\\ &= \\binom n 0 + \\binom n 1 \\cdots + \\binom n {n-1} + \\binom n n \\end{align} \\]'],

];
export default content;