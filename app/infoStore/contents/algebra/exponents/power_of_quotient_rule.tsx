export const title = 'Proof that (a/b)^m = (a^m)/(b^m) (where m is an integer)';

const content = [
  ['h1', 'Proof That (a/b)^m = (a^m)/(b^m)'],
  ['pmain', '\\((a/b)^m\\) basically means:'],
  ['displayFormula', '\\[ \\overbrace{\\frac{a}{b} * \\frac{a}{b} * \\frac{a}{b} * \\ldots}^{m}\\]'],
  ['pmain', 'If we multiply all the fractions:'],
  ['displayFormula', '\\[ \\frac{\\overbrace{a*a*\\ldots}^{m}}{\\overbrace{b*b*\\ldots}^{m}} = \\frac{a^m}{b^m}\\]'],
  ['pmain', 'This proves that \\( (a/b)^m = (a^m)/(b^m)\\). This proof only works when \\(m\\) is an integer.'],
];
export default content;