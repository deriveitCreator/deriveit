export const title="Proof that [x ≡ ±1 mod p where p is prime] ⟺ [x is its own inverse] (assume x is positive)";
const content = [
  ['h1', 'Proof That [x ≡ ±1 mod p Where p Is Prime] ⟺ [x Is Its Own Inverse] (Assume x Is Positive)'],
  ['pmain', 'If \\(x ≡ 1 \\bmod p\\) or \\(x ≡ -1 \\bmod p\\), then \\(x^2 ≡ 1 \\bmod p \\), proving that \\(x\\) is its own inverse.'],
  ['pmain', 'Conversely, if \\(x\\) is its own inverse modulo \\(p\\), then \\(x^2 ≡ 1 \\bmod p \\), which means:'],
  ['displayFormula', '$$\\begin{gather} p | x^2 - 1 \\\\ p|(x+1)(x-1)\\end{gather}$$'],
  ['pmain', 'According to <a href="../prime_numbers/primeLemma1">this lemma</a>, \\(p\\) should be able to divide \\(x+1\\) or \\(x-1\\), so \\(x ≡ 1 \\bmod p\\) or \\(x ≡ -1 \\bmod p\\).'],
];
export default content;
