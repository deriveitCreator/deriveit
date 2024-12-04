export const title="Proving Euler's Theorem";
const content = [
  ['h1', 'Proving Euler\'s Theorem'],
  ['pmain', 'Let \\((a, m) = 1\\) and let the set \\(\\{r_1 , \\ldots , r_k \\}\\) be a reduced residue system mod \\(m\\) where \\(k = \\phi(m)\\). According to <a href="multiplying_reduced_residue_system">this lemma</a>, \\(\\{ar_1 , \\ldots , ar_k \\}\\) would also be a reduced residue system. If \\(\\gcd(ar_1, m) = 1\\) and \\(\\gcd(ar_2, m) = 1\\), then \\(\\gcd(ar_1 * ar_2, m) = 1\\) (according to <a href="../more_gcd/gcdLemma18">this</a>), which means:'],
  ['displayFormula', '$$\\begin{align} ar_1ar_2 \\ldots ar_k &≡ 1 \\mod m \\\\ a^{\\phi(m)}(r_1r_2 \\ldots r_k) &≡ 1 \\mod m \\end{align}$$'],
  ['pmain', 'If \\((r_1r_2 \\ldots r_k) * (a^{\\phi(m)}) ≡ (r_1r_2 \\ldots r_k) * (1)\\) and \\((r_1r_2 \\ldots r_k, m) = 1\\), then \\(a^{\\phi(m)} ≡ 1\\) (using <a href="modLemma4">this lemma</a>).']
];
export default content;
