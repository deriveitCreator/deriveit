export const title="Proving Euler's Theorem";
const content = [
  ['h1', 'Proving Euler\'s Theorem'],
  ['pmain', 'Let \\((a, m) = 1\\) and let the set \\(\\{ar_1 \\ldots ar_k}\\) be a reduced residue system mod \\(m\\) where \\(k = \\phi(m)\\). To prove Euler\'s theorem, we first need to show that that \\(ar_i\\) are all coprime to \\(m\\) and distinct mod \\(m\\). If \\((r, m) = 1\\) and \\((a, m) = 1\\) then \\((ar, m) = 1\\), this shows \\(ar\\) is coprime to \\(m\\). Also, if we had \\(ar_i ≡ ar_j \\mod m\\), then:'],
  ['displayFormula', '$$m|ar_i - ar_j = a(r_i - r_j )$$'],
  ['pmain', 'If (a, m) = 1 then \\(m|r_i - r_j\\), and:'],
  ['displayFormula', '$$ m|r_i - r_j ⇒ r_i ≡ r_j \\mod m $$'],
  ['pmain', 'which cannot happen unless i = j. This shows all \\(ar\\) are distinct, therefore  \\(\\{ar_1 \\ldots ar_k}\\) is also a reduced residue system mod \\(m\\). if gcd(r_1, m) = 1 and gcd(r_2, m) = 1, then gcd(r_1r_2, m) = 1 (<a href="multiplicative">click here</a> for proof), which means:'],
  ['displayFormula', '$$ \\begin{align} r_1r_2 \\ldots r_k $≡ 1 \\mod m \\\\ ar_1ar_2 \\ldots ar_k $≡ 1 \\mod m \\\\ a^{\\phi(m)}(r_1r_2 \\ldots r_k) $≡ 1 \\mod m \\end{align}$$'],,
  ['pmain', 'If \\( (1)*(r_1r_2 \\ldots r_k) ≡ (a^{\\phi(m)}) * (r_1r_2 \\ldots r_k) \\mod m\\) and \\((r_1r_2 \\ldots r_k, m) = 1\\), then \\(a^{\\phi(m)} ≡ 1 \\mod m \\) (<a href="modLemma3">click here</a> for further explanation).'],
];
export default content;
