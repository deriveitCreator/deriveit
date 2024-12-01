export const title = 'Proof that a^m ÷ a^n = a^(m-n) (where m and n are integers)';

const content = [
  ['h1', 'Proof That a^m ÷ a^n = a^(m-n) (Where m And n Are Integers)'],
  ['pmain', 'First let\s assume \\(m \\ge n\\). For example, if \\(m=5\\) and \\(n=2\\), then:'],
  ['displayFormula', '\\[ \\frac{a*a*a*a*a}{a*a} = a*a*a\\]'],
  ['pmain', 'The 2 \\(a\\)\'s in the denominator cancelled out the 2 \\(a\\)\'s in the numerator. We can generalize this:'],
  ['displayFormula', '\\[ \\frac{\\overbrace{a*a*\\ldots}^{m}}{\\overbrace{a*a*\\ldots}^{n}} = \\overbrace{a*a*\\ldots}^{m-n}= a^{m-n} \\]'],
  ['pmain', 'What if \\(m\\) is less than \\(n\\)? For example if \\(a^2/a^5\\):'],
  ['displayFormula', '\\[ \\frac{a*a}{a*a*a*a*a} = \\frac{1}{a*a*a}\\]'],
  ['pmain', 'All the \\(a\\)\'s in the numerator cancelled outs ome of \\(a\\)\'s in the denominator. We can generalize this:'],
  ['displayFormula', '\\[ \\frac{\\overbrace{a*a*\\ldots}^{m}}{\\overbrace{a*a*\\ldots}^{n}} = \\frac{1}{\\overbrace{a*a*\\ldots}^{n-m}}\\]'],
  ['pmain', 'Since \\(1/a^k =  a^{-k}\\). Then:'],
  ['displayFormula', '\\[ \\frac{\\overbrace{a*a*\\ldots}^{m}}{\\overbrace{a*a*\\ldots}^{n}} = \\frac{1}{\\overbrace{a*a*\\ldots}^{n-m}} = a^{m-n}\\]'],
  ['pmain', 'we have proven that regardless of whether \\(m\\) or \\(n\\) is bigger, \\(a^m ÷ a^n = a^(m-n)\\). Keep in mind this proof only works when \\(m\\) and \\(n\\) are integers.'],
];
export default content;