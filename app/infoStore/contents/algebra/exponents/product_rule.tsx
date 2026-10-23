export const title = 'Proof that x^m * x^n = x^(m+n) (where m and n are integers)';

const content = [
  ['h1', 'Proof that x^m * x^n = x^(m+n) (where m and n are integers)'],
  ['pmain', '\\(x^m * x^n\\) basically means:'],
  ['displayFormula', '\\[ \\overbrace{x*x*\\ldots}^{m} * \\overbrace{x*x*\\ldots}^{n} \\]'],
  ['pmain', 'Together this means:'],
  ['displayFormula', '\\[ \\overbrace{x*x*x*\\ldots}^{m+n} \\]'],
  ['pmain', 'This means \\(x^m * x^n = x^{m+n}\\). This proof only works when \\(m\\) and \\(n\\) are integers.'],
];
export default content;