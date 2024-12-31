export const title="If (a ≡ b mod m), (a ≡ b mod n) And gcd(m, n) = 1, Then (a ≡ b mod mn)";
const content = [
  ['h1', 'If (a ≡ b mod m), (a ≡ b mod n) And gcd(m, n) = 1, Then (a ≡ b mod mn)'],
  ['pmain', 'If \\((a ≡ b \\bmod m)\\) and \\((a ≡ b \\bmod n)\\):'],
  ['displayFormula', '$$\\begin{gather} m|(b-a) \\\\ n|(b-a) \\end{gather}$$'],
  ['pmain', 'Since \\(\\gcd(m, n) = 1\\), we can use <a href="../divisibility/gcdLemma14">this lemma</a> here:'],
  ['displayFormula', '$$ mn|(b-a) $$'],
  ['pmain', 'This means \\((a ≡ b \\bmod mn)\\).'],
];
export default content;
