export const title="If [1^3 + 2^3 + 3^3 + ... + (n-1)^3 ≡ 0 mod n], then n is not congruent to 2 mod 4";
const content = [
  ['h1', 'If 1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup> + ... + (n-1)<sup>3</sup> ≡ 0 mod n, Then n Is Not Congruent To 2 mod 4'],
  ['pmain', 'The sum of the cubes of the first \\(n\\) integers can be written as:'],
  ['displayFormula', '$$ 1^3 + 2^3 + 3^3 + ... + (n-1)^3 + n^3 = \\frac{(n)^2(n+1)^2}{4} $$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '\\begin{align} 1^3 + 2^3 + 3^3 + ... + (n-1)^3 &= \\frac{(n)^2(n+1)^2}{4} - n^3 = \\frac{(n)^2(n+1)^2 - 4n^3}{4} \\\\ &= \\frac{(n)^2(n+1)^2 - n^2(4n)}{4} = \\frac{(n)^2((n+1)^2 - 4n)}{4} \\end{align}'],
  ['pmain', 'If \\([1^3 + 2^3 + 3^3 + ... + (n-1)^3 ≡ 0 \\bmod n]\\), then:'],
  ['displayFormula', '\\begin{gather} \\frac{(n)^2((n+1)^2 - 4n)}{4} ≡ 0 \\bmod n \\\\  \\frac{(n)^2((n+1)^2 - 4n)}{4} = nk \\implies (n)((n+1)^2 - 4n) = 4k\\end{gather}'],
  ['pmain', 'This means \\((n)((n+1)^2 - 4n)\\) should be a multiple of 4, or \\([(n)((n+1)^2 - 4n) ≡ 0 \\bmod 4]\\). There are four possible values for \\(n\\) modulo 4:'],
  ['displayFormula', '\\begin{align} n &≡ 0 \\bmod 4 \\\\ n &≡ 1 \\\\ n &≡ 2 \\\\ n &≡ 3 \\end{align}'],
  ['pmain', 'If \\(n ≡ 1\\):'],
  ['displayFormula', '\\begin{gather} n+1 ≡ 2 ∧ 4n ≡ 0 \\\\ ((n)((n+1)^2 - 4n) ≡ (1)(2^2 - 0) ≡ 4 ≡ 0 \\end{gather}'],
  ['pmain', 'If \\(n ≡ 2\\):'],
  ['displayFormula', '\\begin{gather} n+1 ≡ 3 ∧ 4n ≡ 0 \\\\ ((n)((n+1)^2 - 4n) ≡ (1)(3^2 - 0) ≡ 9 ≡ 1 \\end{gather}'],
  ['pmain', 'If \\(n ≡ 3\\):'],
  ['displayFormula', '\\begin{gather} n+1 ≡ 0 ∧ 4n ≡ 0 \\\\ ((n)((n+1)^2 - 4n) ≡ (1)(0^2 - 0) ≡ 0 \\end{gather}'],
  ['pmain', 'This shows that only if \\(n ≡ 2\\), then \\([(n)((n+1)^2 - 4n)]\\) wouldn\'t be a multiple of 4. This means if \\([1^3 + 2^3 + 3^3 + ... + (n-1)^3 ≡ 0 \\bmod n]\\), then \\((n)((n+1)^2 - 4n)\\) would be a multiple of 4, and so \\(n \\not ≡ 2\\).'],
];
export default content;
