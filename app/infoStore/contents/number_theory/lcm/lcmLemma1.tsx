export const title="Proof that [a, b]|c ⟺ a|c and b|c";
const content = [
  ['h1', 'Proof That [a, b]|c ⟺ a|c And b|c'],
  ['pmain', 'First let\'s try to prove that \\([a, b]|c \\) implies \\( a|c\\) and \\(b|c\\).'],
  ['pmain', '\\([a,b]|c\\) means that  some multiple of \\(a\\) divides \\(c\\) and that some multiple of \\(b\\) divides \\(c\\):'],
  ['displayFormula', '$$ \\begin{align} [a,b]|c &\\implies am|c, bn|c \\\\ &\\implies a|c, b|c \\end{align} $$'],
  ['pmain', 'Now let\'s try to prove the converse. We can represent the prime factorization of \\(a\\), \\(b\\) and \\(c\\) like this:'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} {p_2}^{x_2} {p_3}^{x_3} \\cdots \\\\ b &= {p_1}^{y_1} {p_2}^{y_2} {p_3}^{y_3} \\cdots \\\\ c &= {p_1}^{z_1} {p_2}^{z_2} {p_3}^{x_3} \\cdots \\end{align} $$'],
  ['pmain', 'Since \\([a,b]\\) is the least common multiple:'],
  ['displayFormula', '$$ [a,b] = {p_1}^{\\max(x_1,y_1)} {p_2}^{\\max(x_2,y_2)} {p_3}^{\\max(x_3,y_3)} \\cdots $$'],
  ['pmain', 'If \\(a|c\\), then \\(x_i \\le z_i\\) for all \\(i \\ge 1\\). If \\(b|c\\), then \\(y_i \\le z_i\\) for all \\(i \\ge 1\\). If both \\(a\\) and \\(b\\) divides \\(c\\), then \\(\\max(x_i, y_i) \\le z_i\\) for all \\(i \\ge 1\\). Hence, \\([a,b]|c\\).'],
];
export default content;