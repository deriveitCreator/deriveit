export const title="Proof that if ax ≡ bx (mod m) and gcd(x, m) = 1, then a ≡ b (mod m)";
const content = [
  ['h1', 'Proof that if ax ≡ bx (mod m) and gcd(x, m) = 1, then a ≡ b (mod m)'], ['pmain', 'If \\(ax ≡ bx \\bmod m\\):'],
  ['displayFormula', '$$\\begin{gathered} m \\mid (ax-bx) \\\\ m \\mid x(a-b) \\end{gathered}$$'], ['pmain', 'If \\(gcd(x, m) = 1\\):'],
  ['displayFormula', '$$1 = j(x) + k(m) \\quad (where \\ j, k \\in \\mathbb{Z}) $$$$ (a-b) = j(a-b)(x) + k(a-b)(m)$$'], ['pmain', 'Since \\(m \\mid (a-b)(x)\\) and \\(m \\mid (a-b)(m)\\), then:'],
  ['displayFormula', '$$\\begin{gathered} m \\mid j(a-b)(x) + k(a-b)(m) \\\\ m \\mid (a-b) \\end{gathered}$$'], ['pmain', 'Therefore \\(a ≡ b \\bmod m\\).']
];
export default content;