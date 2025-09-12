export const title="If gcd(a, b) = 1, Then gcd(ab, m) = gcd(a, m) * gcd(b, m)";
const content = [
  ['h1', 'If gcd(a, b) = 1, Then gcd(ab, c) = gcd(a, c) * gcd(b, c)'],
  ['pmain', 'We can represent \\(c\\) with prime factorization:'],
  ['displayFormula', '$$ c = {p_1}^{z_1} * {p_2}^{z_2} * {p_3}^{z_3} * {p_4}^{z_4} * {p_5}^{z_5}* \\ldots * {p_n}^{z_n}  $$'],
  ['pmain', '\\(p_i\\) is the \\(i\\)th prime integer and \\(p_n\\) is the largest prime integer before \\(\\max \\{ a,b,c \\} \\). It\'s also possible for \\(z_i\\) to be 0. Since \\(\\gcd (a, b) = 1\\), then the prime factorizations of \\(a\\) and \\(b\\) won\'t have any common prime integers. Let\'s give an example of the prime factorization of \\(a\\), \\(b\\) and \\(ab\\):'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} * {p_4}^{x_4} * {p_6}^{x_6}* \\ldots * {p_{n-1}}^{x_{n-1}} \\\\ b &= {p_2}^{y_2} * {p_3}^{y_3} * {p_5}^{y_5} * \\ldots * {p_n}^{y_n} \\\\ ab &= {p_1}^{x_1} * {p_2}^{y_2} * {p_3}^{y_3} * {p_4}^{x_4} *  {p_5}^{y_5} * {p_6}^{x_6}* \\ldots *{p_n}^{y_n} \\end{align} $$'],
  ['pmain','If we take the \\(\\gcd \\) with \\(c\\):'],
  ['displayFormula', '$$ \\begin{align} \\gcd(a, c) &= {p_1}^{\\min \\{x_1,z_1\\} } {p_4}^{\\min \\{x_4,z_4\\} } {p_6}^{\\min \\{x_6,z_6\\} }\\ldots {p_{n-1}}^{\\min \\{x_{n-1},z_{n-1}\\} } \\\\ \\gcd(b, c) &= {p_2}^{\\min \\{y_2,z_2\\} } {p_3}^{\\min \\{y_3,z_3\\} } {p_5}^{\\min \\{y_5,z_5\\} } \\ldots {p_n}^{\\min \\{y_n,z_n\\} } \\\\ \\gcd(ab, c) &= {p_1}^{\\min \\{x_1,z_1\\} } {p_2}^{\\min \\{y_2,z_2\\} } {p_3}^{\\min \\{y_3,z_3\\} } {p_4}^{\\min \\{x_4,z_4\\} } {p_5}^{\\min \\{y_5,z_5\\} } {p_6}^{\\min \\{x_6,z_6\\} }\\ldots {p_n}^{\\min \\{y_n,z_n\\} } \\end{align} $$'],
  ['pmain','Looking at the prime factorizations above, it is trivial that \\(\\gcd(ab, c) = \\gcd(a, c) * \\gcd(b, c)\\).'],
];
export default content;