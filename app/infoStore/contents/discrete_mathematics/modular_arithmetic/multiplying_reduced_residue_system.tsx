export const title="If (a, m) = 1 and {r1,..., rk} is a reduced residue system mod m then so is {ar1,..., ark}";
const content = [
  ['h1', 'If (a, m) = 1 And {r1,..., rk} Is A Reduced Residue System Mod m Then So Is {ar1,..., ark}'],
  ['pmain', 'Let \\((a, m) = 1\\) and let the set \\(\\{r_1 , \\ldots , r_k \\}\\) be a reduced residue system mod \\(m\\) where \\(k = \\phi(m)\\). Using <a href="../more_gcd/gcdLemma18">this lemma</a>, we can say that if \\((r_i, m) = 1\\) and \\((a, m) = 1\\), then \\((ar_i, m) = 1\\), this shows that \\(ar_i\\) is coprime to \\(m\\). Also, if we had \\(ar_i ≡ ar_j \\mod m\\), then:'],
  ['displayFormula', '$$ m|ar_i - ar_j = a(r_i - r_j ) $$'],
  ['pmain', 'If \\((a, m) = 1\\) then, according to <a href="../divisibility/gcdLemma13">this lemma</a>, \\(m|r_i - r_j\\):'],
  ['displayFormula', '$$ m|r_i - r_j ⇒ r_i ≡ r_j \\mod m $$'],
  ['pmain', 'This cannot be true unless \\(i = j\\). This shows all \\(ar_i\\) are distinct modulo \\(m\\), therefore \\(\\{ar_1 \\ldots ar_k \\}\\) is also a reduced residue system.'],
];
export default content;
