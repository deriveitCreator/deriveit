export const title="Proving Euler's Theorem";
const content = [
  ['h1', 'Proving Euler\'s Theorem'],
  ['pmain', 'Let \\((a, m) = 1\\) and let the set \\(\\{r_1 , \\ldots , r_k \\}\\) be a reduced residue system mod \\(m\\) where \\(k = \\phi(m)\\). According to <a href="multiplying_reduced_residue_system">this lemma</a>, \\(\\{ar_1 , \\ldots , ar_k \\}\\) would also be a reduced residue system. Since \\(\\{r_1 , \\ldots , r_k \\}\\) and \\(\\{ar_1 , \\ldots , ar_k \\}\\) both contain the same residue (modulo \\(m\\)):'],
  ['displayFormula', '$$\\begin{align} (ar_1 \\ldots ar_k) &≡ (r_1\\ldots r_k) \\mod m \\\\ a^{\\phi(m)}(r_1r_2 \\ldots r_k) &≡ (r_1r_2 \\ldots r_k) \\end{align}$$'],
  ['pmain', 'If \\((a, m) = 1\\), then \\((a^k, m) = 1\\). If \\((a^{\\phi(m)}, m) = 1\\) and \\((r_1r_2 \\ldots r_k) (a^{\\phi(m)}) ≡ (r_1r_2 \\ldots r_k) (1)\\), then, according to <a href="modLemma4">this</a>:'],
  ['displayFormula', '$$a^{\\phi(m)} ≡ 1 \\mod \\left( \\frac{m}{(r_1r_2 \\ldots r_k, m)} \\right) $$'],
  ['pmain', 'If \\((r_i, m) = 1\\) and \\((r_j, m) = 1\\), then, according to <a href="../more_gcd/gcdLemma18">this</a>, \\((r_ir_j, m) = 1\\). Using this line of reasoning repeatedly, we can say \\((r_1r_2 \\ldots r_k,m) = 1\\):'],
  ['displayFormula', '$$a^{\\phi(m)} ≡ 1 \\mod \\left( \\frac{m}{(r_1r_2 \\ldots r_k, m)} \\right) \\implies a^{\\phi(m)} ≡ 1 \\mod m $$'],
];
export default content;
