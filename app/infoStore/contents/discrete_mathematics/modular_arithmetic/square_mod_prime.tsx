export const title="If (a^p ≡ b^p mod p), then a^p ≡ b^p mod p^2";
const content = [
  ['h1', 'If p Is Prime, (a<sup>p</sup> ≡ b<sup>p</sup> mod p), (p ∤ a), (p ∤ b), Then a<sup>p</sup> ≡ b<sup>p</sup> mod p<sup>2</sup>'],
  ['pmain', 'If \\(p \\nmid a\\) and \\(p \\nmid b\\), then:'],
  ['displayFormula', '$$\\begin{gather} a^{p-1} ≡ 1 \\bmod p \\implies a^p ≡ a \\bmod p \\\\ b^{p-1} ≡ 1 \\bmod p \\implies b^p ≡ b \\bmod p\\end{gather}$$'],
  ['pmain', 'If \\(a^p ≡ b^p \\bmod p\\), then \\(a ≡ b \\bmod p\\):'],
  ['displayFormula', '$$ a = b + mp $$'],
  ['pmain', 'If we raise both sides to the power of \\(p\\):'],
  ['displayFormula', '$$ a^p = (b + mp)^p $$'],
  ['pmain', 'Using the binomial theorem:'],
  ['displayFormula', '$$ a^p = {p \\choose 0} b^p (mp)^0 + {p \\choose 1} b^{p-1} (mp)^1 + {p \\choose 2} b^{p-2} (mp)^2 + \\cdots + {p \\choose {p-1}} b^1 (mp)^{p-1} + {p \\choose p} b^0 (mp)^p $$'],
  ['pmain', 'Since \\({p \\choose 1} = p\\):'],
  ['displayFormula', '$$ a^p = {p \\choose 0} b^p (mp)^0 + b^{p-1} m(p^2) + {p \\choose 2} b^{p-2} (mp)^2 + \\cdots + {p \\choose {p-1}} b^1 (mp)^{p-1} + {p \\choose p} b^0 (mp)^p $$'],
  ['pmain', 'Every term other than the first one has a factor of \\(p^2\\):'],
  ['displayFormula', '$$\\begin{align} a^p &= {p \\choose 0} b^p (mp)^0 + kp^2 \\\\  a^p &= b^p + kp^2 \\end{align}$$'],
  ['pmain', 'This means \\(a^p ≡ b^p \\bmod p^2\\).'],
];
export default content;
