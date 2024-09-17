export const title="The solution of x^2 ≡ 1 mod p is x ≡ ±1 mod p";
const content = [
  ['h1', 'The solution of x<sup>2</sup> ≡ 1 mod p is x ≡ ±1 mod p'],
  ['pmain', 'If \\(x^2 ≡ 1 \\mod p\\), then:'],
  ['displayFormula', '$$ p|(x^2-1) $$$$ p|(x-1)(x+1) $$'],
  ['pmain', 'Using [<a href="../divisibility_and_gcd/gcdLemma7">this lemma</a>], p|(x-1) or p|(x+1):'],
  ['displayFormula', '$$ x ≡ ±1 \\mod p $$']
];
export default content;
