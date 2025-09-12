export const title="If p ≡ 3 mod 4, then ((p-1)/2)! ≡ ±1 mod p";
const content = [
  ['h1', 'If p ≡ 3 mod 4, Then ((p-1)/2)! ≡ ±1 mod p'],
  ['pmain', 'Wilson\'s Theorem states:'],
  ['displayFormula', '$$ (p - 1)! ≡ -1 \\mod p $$'],
  ['pmain', 'If we expand:'],
  ['displayFormula', '$$ (1)(2) \\ldots \\left( \\frac{p-1}{2} \\right) \\left( \\frac{p+1}{2} \\right) \\ldots(p-2)(p - 1) ≡ -1 \\mod p $$'],
  ['pmain', 'Since \\(p - x ≡ -x \\mod p\\):'],
  ['displayFormula', '$$ (1)(2) \\ldots \\left( \\frac{p-1}{2} \\right) \\left( \\frac{p+1}{2} \\right) \\ldots(-2)(-1) ≡ -1 \\mod p $$'],
  ['pmain', 'Let\'s take the negative sign out:'],
  ['displayFormula', '$$ (1)(2) \\ldots \\left( \\frac{p-1}{2} \\right) \\left( \\frac{p-1}{2} \\right) \\ldots(2)(1) \\times \\left( (-1)^{\\frac{p-1}{2}} \\right) ≡ -1 \\mod p $$'],
  ['pmain', 'The second half is the same size as the first. If \\(p=4k+3\\), then \\(\\frac{p-1}{2} = 2k+1\\), which means:'],
  ['displayFormula', '$$ \\left ( (1)(2) \\ldots \\left( \\frac{p-1}{2} \\right) \\right)^2 \\times (-1) ≡ -1 \\mod p $$'],
  ['pmain', 'If we multiply both sides by -1:'],
  ['displayFormula', '$$ \\left ( \\left( \\frac{p-1}{2} \\right) ! \\right)^2 ≡ 1 ≡ 1^2 \\mod p $$'],
  ['pmain', 'According <a href="https://www.deriveit.net/discrete_mathematics/modular_arithmetic/x_square_solution">this lemma</a>:'],
  ['displayFormula', '$$ \\left( \\frac{p-1}{2} \\right) ! ≡ ±1 \\mod p $$'],
];
export default content;
