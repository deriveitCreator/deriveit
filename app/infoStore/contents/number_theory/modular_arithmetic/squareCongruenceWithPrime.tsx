export const title="The solution of a^2 ≡ b^2 mod p is a ≡ ±b mod p";
const content = [
  ['h1', 'The solution of a<sup>2</sup> ≡ b<sup>2</sup> mod p is a ≡ ±b mod p'],
  ['pmain', 'If \\(a^2 ≡ b^2 \\bmod p\\) (where \\(p\\) is prime), then:'],
  ['displayFormula', '$$ p|(a^2- b^2) $$$$ p|(a-b)(a+b) $$'],
  ['pmain', 'Using <a href="../prime_numbers/primeLemma1">this lemma</a>, p|(a-b) or p|(a+b):'],
  ['displayFormula', '$$\\begin{gather} p|(a±b) \\\\ a ≡ ±b \\mod p \\end{gather}$$']
];
export default content;
