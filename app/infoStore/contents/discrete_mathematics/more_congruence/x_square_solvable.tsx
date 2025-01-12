export const title="Solution to x^2 ≡ -1 mod p if p = 2 or p ≡ 1 mod 4";
const content = [
  ['h1', 'Solution To x<sup>2</sup> ≡ -1 mod p If p = 2 or p ≡ 1 mod 4'],
  ['pmain', 'Suppose we have a prime \\(p\\) and \\(x^2 ≡ -1 \\bmod p\\). If \\(p=2\\), then the solution would be trivial \\((x = 1)\\). Now let \\(p ≡ 1 \\bmod 4\\). By Wilson\'s Theorem:'],
  ['displayFormula', '$$ (p - 1)! ≡ -1 \\mod p $$'],
  ['pmain', 'If we expand:'],
  ['displayFormula', '$$ (1)(2) \\ldots \\left( \\frac{p-1}{2} \\right) \\left( \\frac{p+1}{2} \\right) \\ldots(p-2)(p - 1) ≡ -1 \\mod p $$'],
  ['pmain', 'Since \\(p - x ≡ -x \\mod p\\):'],
  ['displayFormula', '$$ (1)(2) \\ldots \\left( \\frac{p-1}{2} \\right) \\left( \\frac{p+1}{2} \\right) \\ldots(-2)(-1) ≡ -1 \\mod p $$'],
  ['pmain', 'Let\'s take the negative sign out:'],
  ['displayFormula', '$$ (1)(2) \\ldots \\left( \\frac{p-1}{2} \\right) \\left( \\frac{p-1}{2} \\right) \\ldots(2)(1) \\times \\left( (-1)^{\\frac{p-1}{2}} \\right) ≡ -1 \\mod p $$'],
  ['pmain', 'The second half is the same size as the first. If \\(p=4k+1\\), then \\(\\frac{p-1}{2} = 2k\\), which means:'],
  ['displayFormula', '$$ \\left ( (1)(2) \\ldots \\left( \\frac{p-1}{2} \\right) \\right)^2 \\times (1) ≡ -1 \\mod p $$'],
  ['pmain', 'Which means:'],
  ['displayFormula', '$$ \\left ( \\left( \\frac{p-1}{2} \\right) ! \\right)^2 ≡ -1 \\mod p $$'],
  ['pmain', 'Thus, \\(x^2 ≡ -1 \\bmod p\\) has the solution \\(x = ((p - 1)/2)!\\) when \\(p ≡ 1 \\bmod 4\\).'],
];
export default content;
