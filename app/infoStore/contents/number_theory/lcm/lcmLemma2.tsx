export const title="lcm(a, b) * c = lcm(ca, cb)";
const content = [
  ['h1', 'lcm(a, b) * c = lcm(ca, cb) (if a,b and c are positive integers)'],
  ['pmain', 'We can represent the prime factorization of \\(a\\), \\(b\\) and \\(c\\) like this:'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} * {p_2}^{x_2} * {p_3}^{x_3}* \\ldots * {p_n}^{x_n} \\\\ b &= {p_1}^{y_1} * {p_2}^{y_2} * {p_3}^{y_3} * \\ldots * {p_n}^{y_n} \\\\ c &= {p_1}^{z_1} * {p_2}^{z_2} * {p_3}^{x_3}* \\ldots *{p_n}^{z_n} \\end{align} $$'],
  ['pmain', 'The prime factorization of \\(ac\\) and \\(bc\\) would be:'],
  ['displayFormula', '$$ \\begin{align} ac &= {p_1}^{x_1 z_1} * {p_2}^{x_2 z_2} * {p_3}^{x_3 z_3}* \\ldots * {p_n}^{x_n z_n} \\\\ bc &= {p_1}^{y_1 z_1} * {p_2}^{y_2 z_2} * {p_3}^{y_3 z_3} * \\ldots * {p_n}^{y_n z_n} \\end{align} $$'],
  ['pmain','If we take the \\(\\operatorname{lcm} \\) of \\(a\\) and \\(b\\):'],
  ['displayFormula', '$$ \\begin{align} \\operatorname{lcm} (a, b) &= {p_1}^{\\max \\{x_1, y_1\\} } {p_2}^{\\max \\{x_2,y_2\\} } {p_3}^{\\max \\{x_3,y_3\\} } \\ldots {p_n}^{\\max \\{x_n, y_n\\} } \\\\ c * \\operatorname{lcm} (a, b) &= {p_1}^{z_1 \\max \\{x_1, y_1\\} } {p_2}^{z_2 \\max \\{x_2,y_2\\} } {p_3}^{z_3 \\max \\{x_3,y_3\\} } \\ldots {p_n}^{z_n \\max \\{x_n, y_n\\} } \\end{align} $$'],
  ['pmain', 'It is trivial that:'],
  ['displayFormula', '$$ k * \\max \\{ m, n \\} = \\max \\{km, kn\\} $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ \\begin{align} c * \\operatorname{lcm} (a, b) &= {p_1}^{\\max \\{z_1 x_1, \\ z_1 y_1\\} } {p_2}^{\\max \\{z_2 x_2, \\ z_2 y_2\\} } {p_3}^{\\max \\{z_3 x_3, \\  z_3 y_3\\} } \\ldots {p_n}^{\\max \\{z_n x_n, \\ z_n y_n\\} } \\\\ &= [ca,cb] \\end{align} $$'],
];
export default content;