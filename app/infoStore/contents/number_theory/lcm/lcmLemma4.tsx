export const title="Proof that if a and b are positive integers then there exists c and d such that c|a, d|b, [a, b] = cd and (c, d) = 1";
const content = [
  ['h1', 'Proof That If a And b Are Positive Integers Then There Exists c And d Such That c|a, d|b, [a, b] = cd And (c, d) = 1'],
  ['pmain', 'Let \\(a\\) and \\(b\\) be positive integers. According to the fundamental theorem of arithmetic:'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} * {p_2}^{x_2} * {p_3}^{x_3}* \\cdots * {p_n}^{x_n} \\\\ b &= {p_1}^{y_1} * {p_2}^{y_2} * {p_3}^{y_3} * \\cdots * {p_n}^{y_n} \\\\ [a,b] &= {p_1}^{\\max(x_1,y_1)} * {p_2}^{\\max(x_2,y_2)} * {p_3}^{\\max(x_3,y_3)}* \\cdots *{p_n}^{\\max(x_n,y_n)} \\end{align} $$'],
  ['pmain', 'Let\'s group the prime factors into two groups:'],
  ['displayFormula', '$$ [a,b] = (m)(n) $$'],
  ['pmain', '\\(m\\) contains all the \\(p_i\\)\'s where \\(x_i \\ge y_i\\) and \\(n\\) contains all the \\(p_i\\)\'s where \\(y_i \\gt x_i\\). This means \\(m|a\\) and \\(n|b\\). Also, since \\(m\\) and \\(n\\) don\'t have any common primes, then \\((m,n)=1\\).'],
];
export default content;