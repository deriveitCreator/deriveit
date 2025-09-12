export const title="lcm(a, b, c) = lcm(lcm(a, b), c)";
const content = [
  ['h1', 'lcm(a, b, c) = lcm(lcm(a, b), c)'],
  ['pmain', 'We can represent the prime factorization of \\(a\\), \\(b\\) and \\(c\\) like this:'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} * {p_2}^{x_2} * {p_3}^{x_3}* \\ldots * {p_n}^{x_n} \\\\ b &= {p_1}^{y_1} * {p_2}^{y_2} * {p_3}^{y_3} * \\ldots * {p_n}^{y_n} \\\\ c &= {p_1}^{z_1} * {p_2}^{z_2} * {p_3}^{x_3}* \\ldots *{p_n}^{z_n} \\end{align} $$'],
  ['pmain','If we take the \\(\\operatorname{lcm} \\) of \\(a\\) and \\(b\\):'],
  ['displayFormula', '$$ \\operatorname{lcm} (a, b) = {p_1}^{\\max \\{x_1, y_1\\} } {p_2}^{\\max \\{x_2,y_2\\} } {p_3}^{\\max \\{x_3,y_3\\} } \\ldots {p_n}^{\\max \\{x_n, y_n\\} } $$'],
  ['pmain','If we take the \\(\\operatorname{lcm} \\) of \\(\\operatorname{lcm} (a, b)\\) and \\(c\\):'],
  ['displayFormula', '$$ \\operatorname{lcm} (\\operatorname{lcm} (a, b), c) = {p_1}^{\\max \\{\\max \\{x_1, y_1\\}, z_1\\} } {p_2}^{\\max \\{ \\max \\{x_2, y_2\\}, z_2\\} } {p_3}^{\\max \\{ \\max \\{x_3, y_3\\}, z_3\\} } \\ldots {p_n}^{\\max \\{ \\max \\{x_n, y_n\\}, z_n\\} } $$'],
  ['pmain', 'It is trivial that:'],
  ['displayFormula', '$$ \\max \\{ \\max \\{ m, n \\}, k \\} = \\max \\{k, m, n\\} $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ \\begin{align} \\operatorname{lcm} (\\operatorname{lcm} (a, b), c) &= {p_1}^{\\max \\{x_1, y_1, z_1\\} } {p_2}^{\\max \\{x_2,y_2, z_2\\} } {p_3}^{\\max \\{x_3,y_3, z_3\\} } \\ldots {p_n}^{\\max \\{x_n, y_n, z_n\\} } \\\\ &= \\operatorname{lcm} (a, b, c) \\end{align}$$'],
];
export default content;