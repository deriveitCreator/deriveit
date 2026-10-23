export const title = 'Proof that x^0 = 1';

const content = [
  ['h1', 'Proof That x^0 = 1'],
  ['pmain', 'According to the product rule:'],
  ['displayFormula', '\\[ x^0 * x^n = x^{0+n} = x^n \\]'],
  ['pmain', 'This implies \\(x^0 = 1\\). Another way to prove this involves the definition of exponents:'],
  ['displayFormula', '\\[ x^{n+1} = x^n * x \\]'],
  ['pmain', 'In other words:'],
  ['displayFormula', '\\[ x^n = \\frac{x^{n+1}}{x} \\]'],
  ['pmain', 'If \\(n=0\\):'],
  ['displayFormula', '\\[ x^0 = \\frac{x^{1}}{x} = 1 \\]'],
];
export default content;