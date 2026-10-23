export const title="Proof that (a, b) = (a + b, [a, b]) where a and b are positive integers";
const content = [
  ['h1', 'Proof That (a, b) = (a + b, [a, b]) Where a And b Are Positive Integers'],
  ['pmain', 'According to the fundamental theorem of arithmetic:'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} {p_2}^{x_2} {p_3}^{x_3} \\cdots {p_n}^{x_n} \\\\ b &= {p_1}^{y_1} {p_2}^{y_2} {p_3}^{y_3} \\cdots {p_n}^{y_n} \\\\ (a,b) &= {p_1}^{\\min(x_1,y_1)} {p_2}^{\\min(x_2,y_2)} {p_3}^{\\min(x_3,y_3)}* \\cdots{p_n}^{\\min(x_n,y_n)} \\\\ [a,b] &= {p_1}^{\\max(x_1,y_1)} {p_2}^{\\max(x_2,y_2)} {p_3}^{\\max(x_3,y_3)}* \\cdots{p_n}^{\\max(x_n,y_n)} \\end{align} $$'],
  ['pmain', 'Let \\(p\\) be a prime. Define \\(s\\) and \\(t\\) by \\(p^s ∥ a\\) and \\(p^t ∥ b\\). Suppose \\(s \\le t\\). Since \\(p\\) divides \\(p^s ∥ a\\) and \\(p^s | b\\), then \\(p^s | a + b\\). If \\(p\\) divides \\(a\\) exactly \\(s\\) times, then it can\'t divide \\(a+b\\) more than \\(s\\) times, so \\(p^s ∥ a+b\\).'],
  ['pmain', 'We know that \\(p^{\\max(s,t)} ∥[a,b]\\) and \\(p^{\\min(s,t)} ∥ (a,b)\\). If \\(\\max(s,t)=t\\), then \\(p^t ∥[a,b]\\). If \\(p^s ∥ a+b\\) and \\(p^t ∥[a,b]\\), then \\(p^{\\min(s,t)}∥(a+b,[a,b])\\).'],
];
export default content;