export const title="If {r1,..., rk} is a reduced residue system then so is {ar1,..., ark}";
const content = [
  ['h1', 'If {r1,..., rk} is a reduced residue system then so is {ar1,..., ark}'],
  ['pmain', 'Let \\((a, m) = 1\\) and let the set \\(\\{r_1 , \\ldots , r_k \\}\\) be a reduced residue system mod \\(m\\) where \\(k = \\phi(m)\\). If \\((r_i, m) = 1\\) and \\((a, m) = 1\\) then \\((ar_i, m) = 1\\), this shows that \\(ar_i\\) is coprime to \\(m\\) (according to <a href="../more_gcd/gcdLemma18">this lemma</a>). Also, if we had \\(ar_i ≡ ar_j \\mod m\\), then:'],
  ['displayFormula', '$$ m|ar_i - ar_j = a(r_i - r_j ) $$'],
  ['pmain', 'If (a, m) = 1 then \\(m|r_i - r_j\\) (according to <a href="../divisibility/gcdLemma13">this lemma</a>):'],
  ['displayFormula', '$$ m|r_i - r_j ⇒ r_i ≡ r_j \\mod m $$'],
  ['pmain', 'which cannot happen unless i = j. This shows all \\(ar_i\\) are distinct, therefore \\(\\{ar_1 \\ldots ar_k \\}\\) is also a reduced residue system.'],
];
export default content;
