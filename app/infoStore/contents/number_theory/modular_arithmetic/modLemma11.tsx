export const title="If (m, n) = 1, then (a ≡ b mod mn) iff (a ≡ b mod m) and (a ≡ b mod n)";
const content = [
  ['h1', 'If gcd(m, n) = 1, Then (a ≡ b mod mn) If And Only If (a ≡ b mod m) And (a ≡ b mod n)'],
  ['pmain', 'If \\((a ≡ b \\bmod m)\\) and \\((a ≡ b \\bmod n)\\):'],
  ['displayFormula', '$$\\begin{gather} m|(b-a) \\\\ n|(b-a) \\end{gather}$$'],
  ['pmain', 'Since \\(\\gcd(m, n) = 1\\), we can use <a href="../divisibility/gcdLemma14">this lemma</a> here:'],
  ['displayFormula', '$$ mn|(b-a) $$'],
  ['pmain', 'This means \\((a ≡ b \\bmod mn)\\).'],
  ['pmain', 'Conversely, if \\([a ≡ b \\bmod mn]\\), then \\(mn|b-a\\), but if \\(mn|b-a\\), then \\(m|b-a\\). Therefore, \\([a ≡ b \\bmod m]\\). A similar argument can be made to show that \\([a ≡ b \\bmod n]\\).'],
];
export default content;
