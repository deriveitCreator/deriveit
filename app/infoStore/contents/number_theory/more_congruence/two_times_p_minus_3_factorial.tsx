export const title="Proving that 2(p-3)! ≡ -1 mod p";
const content = [
  ['h1', '2(p-3)! ≡ -1 mod p'],
  ['pmain', 'Wilson\'s Theorem states:'],
  ['displayFormula', '$$ p \\text{ is prime} \\implies (p - 1)! ≡ -1 \\mod p $$'],
  ['pmain', 'The reduced residue set of prime \\(p\\) is \\(\\{ 1, 2, 3, \\ldots, p-2, p-1 \\}\\). If we exclude \\(1\\) and \\(p-1\\), we get \\(\\{ 2, 3, \\ldots, p-2 \\}\\). Each integer in this set has an inverse that is also in the set.'],
  ['pmain', 'Now let \\(R_p = \\{ 1, 2, 3, \\ldots, p-3 \\}\\). This means there is only one integer in \\(R_p\\) that doesn\'t have an inverse that is also in \\(R_p\\), Let\'s call this "inverseless" integer \\(a\\). The inverse of \\(a\\) is \\(p-2\\) but that doesn\'t exist in \\(R_p\\). Since every integer in \\((p-3)!\\) has an inverse except for \\(a\\):'],
  ['displayFormula', '$$\\begin{gather} \\frac{(p-3)!}{a} ≡ 1 \\bmod p \\\\ (p-3)! ≡ a \\bmod p \\end{gather}$$'],
  ['pmain', 'Now let\'s focus on \\(a\\). It is the only integer in \\(R_p\\) that doesn\'t have an inverse, because it\'s inverse is actually \\(p-2\\):'],
  ['displayFormula', '$$\\begin{gather} a (p-2) ≡ 1 \\bmod p \\implies ap - 2a ≡ 1 \\bmod p \\\\ ap ≡ 1 +2a \\bmod p \\end{gather}$$'],
  ['pmain', 'Since \\(ap\\) is a multiple of \\(p\\):'],
  ['displayFormula', '$$\\begin{gather}  ap ≡ 0 \\bmod p \\implies 1 +2a ≡ 0 \\bmod p \\\\ 2a ≡ -1 \\bmod p \\end{gather}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\begin{gather}  (p-3)! ≡ a \\bmod p \\implies 2(p-3)! ≡ 2a \\bmod p \\\\ 2(p-3)! ≡ -1 \\bmod p \\end{gather}$$'],
];
export default content;
