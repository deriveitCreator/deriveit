export const title = 'Proof that (ab)^m = (a^m * b^m) (where m is an integer)';

const content = [
  ['h1', 'Proof That (ab)^m = (a^m * b^m)'],
  ['pmain', '\\((ab)^m\\) basically means:'],
  ['displayFormula', '\\[ \\overbrace{(ab) * (ab) * (ab) * \\ldots}^{m} = \\overbrace{a * b * a * b * a * b * \\ldots}^{m}\\]'],
  ['pmain', 'We can group all the \\(a\\) together and all the \\(b\\) together. Each of them appear \\(m\\) times:'],
  ['displayFormula', '\\[ \\overbrace{a*a*a*\\ldots}^{m} * \\overbrace{b*b*b*\\ldots}^{m} \\]'],
  ['pmain', 'This proves that \\( (ab)^m = a^m * b^m\\). This proof only works when \\(m\\) is an integer.'],
];
export default content;