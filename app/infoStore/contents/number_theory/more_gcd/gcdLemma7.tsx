export const title="gcd(a1, a2, a3, ..., an) ⇒ gcd(gcd(a1, a2), a3, ..., an)";
const content = [
  ['h1', 'gcd(a1, a2, a3, ..., an) ⇒ gcd(gcd(a1, a2), a3, ..., an)'],
  ['pmain', 'Let\'s define \\(d_1\\) and \\(d_2\\):'], 
  ['displayFormula', '$$ (a_1, a_2, a_3 \\ldots, a_n) = d_1 $$$$ ((a_1, a_2), a_3, \\ldots, a_n) = d_2 $$'],
  ['pmain', 'If \\(d_1\\) divides \\(a_1\\) and \\(a_2\\), then it also divides \\((a_1, a_2)\\):'], 
  ['displayFormula', '\\[\\displaylines{ d_1 | (a_1, a_2) \\\\ d_1|a_3, \\ d_1|a_4, \\ \\ldots , \\ d_1|a_n \\\\ \\therefore d_1|d_2} \\]'],
  ['pmain', 'If \\(d_2\\) divides \\((a_1, a_2)\\), then:'],
  ['displayFormula', '\\[\\displaylines{d_2|a_1 \\text{ and } d_2|a_2 \\\\ d_2|a_3, \\ \\ldots , \\ d_2|a_n \\\\ \\therefore d_2 | d_1 } \\]'],
  ['pmain', 'If \\(d_1 | d_2\\) and \\(d_2 | d_1\\), then \\(d_1 = d_2\\).'],
];
export default content;