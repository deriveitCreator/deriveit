export const title="Wilson's Theorem";
const content = [
  ['h1', 'Wilson\'s Theorem'],
  ['pmain', 'Wilson\'s Theorem states:'],
  ['displayFormula', '$$ p \\text{ is prime} \\implies (p - 1)! ≡ -1 \\mod p $$'],
  ['pmain', 'It\'s obvious if \\(p=2\\), so we are going to assume that \\(p\\) is odd. We start by expanding \\((p-1)!\\):'],
  ['displayFormula', '$$ (1)(2)(3)(4) \\ldots (p-3)(p-2)(p-1) $$'],
  ['pmain', 'We know that \\(1 ≡ 1 \\mod p\\) and \\((p-1) ≡ -1 \\mod p\\), so we will ignore the first and last term for now and work with \\((p-2)!\\):'],
  ['displayFormula', '$$ (2)(3)(4) \\ldots (p-4)(p-3)(p-2) $$'],
  ['pmain', 'Every term in \\(\\{ 2,3,4, \\ldots , (p-3), (p-2) \\}\\) is coprime with \\(p\\), and since \\(p\\) is odd, there is an even number of elements in \\(\\{ 2,3, \\ldots , (p-2) \\}\\), which means each number in the set has an inverse that is also in the set, so we can pair each number with their inverse:'],
  ['displayFormula', '$$ \\begin{align} (2)(3) \\ldots (p-3)(p-2) &= (a_1a_1^{-1})(a_2a_2^{-1}) \\dots (a_ka_k^{-1}) \\\\ &≡ (1)(1) \\ldots (1) \\mod p \\end{align}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ \\begin{align} (1)(2)(3)(4) \\ldots (p-3)(p-2)(p-1) &≡ (1)(1)\\ldots(1)(-1) \\mod p \\\\ &≡ -1 \\mod p \\end{align}$$'],
  ['pmain', 'Let\'s see an example with \\(p=11\\):'],
  ['displayFormula', '$$ 10! = (1)(2)(3)(4)(5)(6)(7)(8)(9)(10) ≡ ? \\mod p $$'],
  ['pmain', 'Let\'s pair the inverses:'],
  ['displayFormula', '$$ \\begin{align} 10! = (1 \\cdot 10)(2 \\cdot 6)(3 \\cdot 4) (5 \\cdot 6)(7 \\cdot 8) ≡ (-1)(1)(1)(1)(1) \\mod p \\end{align} $$'],
];
export default content;
