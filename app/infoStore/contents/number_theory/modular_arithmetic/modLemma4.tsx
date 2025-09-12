export const title="Proof that ca ≡ cb (mod m) if and only if a ≡ b (mod m/(c, m))";
const content = [
  ['h1', 'Proof That ca ≡ cb (mod m) If And Only If a ≡ b (mod m/(c, m))'],
  ['pmain', 'Let \\(ca ≡ cb \\bmod m\\) and let \\(d = (c, m)\\):'],
  ['displayFormula', '$$\\begin{align} m | (ca - cb) &\\implies m | c(a - b) \\\\ &\\implies (m/d) | (c/d) (a - b) \\end{align}$$'],
  ['pmain', 'Since \\(d\\) is the gcd, then \\((m/d, c/d) = 1\\). So:'],
  ['displayFormula', '$$ m/d | (a - b) \\implies a ≡ b \\mod (m/d) $$'],
  ['pmain', 'Therefore, \\(ca ≡ cb \\bmod m\\) implies \\(a ≡ b \\bmod (m/d)\\). As for \\(a ≡ b \\bmod (m/d)\\) implying \\(ca ≡ cb \\bmod m\\):'],
  ['displayFormula', '$$\\begin{align} a ≡ b \\bmod (m/d) &\\implies (m/d) | (a - b) \\\\ &\\implies m | da - db \\\\ &\\implies m | (c/d)(da - db) \\\\ &\\implies m | ca - cb \\end{align}$$'],
  ['pmain', 'This means \\(ca ≡ cb \\bmod m\\).'],
];
export default content;