export const title="Proof that ([a, b], [a, c], [b, c]) = [(a, b), (a, c), (b, c)] where a, b, c are positive integers";
const content = [
  ['h1', 'Proof That ([a, b], [a, c], [b, c]) = [(a, b), (a, c), (b, c)] Where a, b, c are positive integers'],
  ['pmain', 'According to the fundamental theorem of arithmetic:'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} {p_2}^{x_2} {p_3}^{x_3} \\cdots {p_n}^{x_n} \\\\ b &= {p_1}^{y_1} {p_2}^{y_2} {p_3}^{y_3} \\cdots {p_n}^{y_n} \\\\ c &= {p_1}^{z_1} {p_2}^{z_2} {p_3}^{z_3} \\cdots {p_n}^{z_n} \\\\ (a,b) &= {p_1}^{\\min(x_1,y_1)} {p_2}^{\\min(x_2,y_2)} {p_3}^{\\min(x_3,y_3)} \\cdots {p_n}^{\\min(x_n,y_n)} \\\\ [a,b] &= {p_1}^{\\max(x_1,y_1)} {p_2}^{\\max(x_2,y_2)} {p_3}^{\\max(x_3,y_3)} \\cdots {p_n}^{\\max(x_n,y_n)} \\end{align} $$'],
  ['pmain', 'Let \\(p\\) be prime, and let, \\(x\\), \\(y\\) and \\(z\\) such that \\(p^x ∥ a\\), \\(p^y ∥ b\\) and \\(p^z ∥ c\\). This means:'],
  ['displayFormula', '$$\\begin{gather} p^{\\max(x,y)} ∥ [a,b], \\quad p^{\\max(x,z)} ∥ [a,c], \\quad p^{\\max(y,z)} ∥ [b,c] \\\\ p^{\\min(x,y)} ∥ (a,b), \\quad p^{\\min(x,z)} ∥ (a,c), \\quad p^{\\min(y,z)} ∥ (b,c) \\end{gather}$$'],
  ['pmain', 'Since \\((p^s,p^r,p^t) = \\min(p^s,p^r,p^t)\\) and \\([p^s,p^r,p^t] = \\max(p^s,p^r,p^t)\\):'],
  ['displayFormula', '$$\\begin{gather} p^{\\min(\\max(x,y), \\max(x,z), \\max(y,z))} ∥ ([a, b], [a, c], [b, c]) \\\\ p^{\\max(\\min(x,y), \\min(x,z),\\min(y,z))} ∥ [(a, b), (a, c), (b, c)] \\end{gather}$$'],
  ['pmain', 'Let\'s focus on the expression \\(\\min(\\max(x,y), \\max(x,z), \\max(y,z))\\). Out of the three integers \\(\\max(x,y)\\), \\(\\max(x,z)\\) and \\(\\max(y,z)\\), none of them is the minimum of \\(x\\), \\(y\\) and \\(z\\), and the maximum appears twice. If we then take the minimum of these three, we get the middle value. A similar argument can be made to show that \\(\\max(\\min(x,y), \\min(x,z),\\min(y,z))\\) also gives the median of \\(x\\), \\(y\\) and \\(z\\). This means:'],
  ['displayFormula', '$$ p^{\\min(\\max(x,y), \\max(x,z), \\max(y,z))} = p^{\\max(\\min(x,y), \\min(x,z),\\min(y,z))} $$'],
  ['pmain', 'We can do this with all primes that divide \\(a\\), \\(b\\) or \\(c\\) to show \\(([a, b], [a, c], [b, c]) = [(a, b), (a, c), (b, c)]\\).'],
];
export default content;