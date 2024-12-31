export const title="If [1^2 + 2^2 + 3^2 + ... + (n-1)^2 ≡ 0 mod n], then n ≡ ±1 mod 6";
const content = [
  ['h1', 'If 1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + (n-1)<sup>2</sup> ≡ 0 mod n, Then n ≡ ±1 mod 6'],
  ['pmain', 'The sum of the squares of the first \\(n\\) integers can be written as:'],
  ['displayFormula', '$$ 1^2 + 2^2 + 3^2 + ... + (n-1)^2 + n^2 = \\frac{(n)(n+1)(2n+1)}{6} $$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '\\begin{align} 1^2 + 2^2 + 3^2 + ... + (n-1)^2 &= \\frac{(n)(n+1)(2n+1)}{6} - n^2 \\\\ &= \\frac{(n)(n-1)(2n-1)}{6} \\end{align}'],
  ['pmain', 'If \\([1^2 + 2^2 + 3^2 + ... + (n-1)^2 ≡ 0 \\bmod n]\\), then:'],
  ['displayFormula', '\\begin{gather} \\frac{(n)(n-1)(2n-1)}{6} ≡ 0 \\bmod n \\\\ \\frac{(n)(n-1)(2n-1)}{6} = nk \\implies (n-1)(2n-1) = 6k \\end{gather}'],
  ['pmain', 'This means \\([6|(n-1)(2n-1)]\\). For this to be true, \\((n-1)(2n-1)\\) needs to be divisible by 2 as well. Since \\((2n-1)\\) is odd for all values of \\(n\\), then \\((n-1)\\) would have to be even for \\((n-1)(2n-1)\\) to be divisible by 2. In other words, \\(n\\) would have to be odd:'],
  ['displayFormula', '\\begin{gather} n \\not \\equiv 0 \\mod 6 \\\\ n \\not \\equiv 2 \\mod 6 \\\\ n \\not \\equiv 4 \\mod 6 \\end{gather}'],
  ['pmain', 'Now let\'s say that \\(n\\) is a multiple of 3:'],
  ['displayFormula', '$$ (n-1)(2n-1) = 6k = (3q-1)(6q-1) $$'],
  ['pmain', 'This will lead to a contradiction:'],
  ['displayFormula', '\\begin{gather} 3q ≡ 0 \\bmod 3 \\implies 3q -1 ≡ -1 \\bmod 3 \\\\ 6q ≡ 0 \\bmod 3 \\implies 6q-1 ≡ -1 \\bmod 3 \\\\ (3q-1)(6q-1) ≡ (-1)(-1) \\bmod 3 \\\\ 6k ≡ 1 \\bmod 3 \\end{gather}'],
  ['pmain', 'So \\(n\\) cannot be a multiple of 3:'],
  ['displayFormula', '\\begin{gather} n \\not \\equiv 0 \\mod 6 \\\\ n \\not \\equiv 3 \\mod 6 \\end{gather}'],
  ['pmain', 'This means \\([n ≡ 1 \\bmod 6]\\) or \\([n ≡ 5 \\bmod 6]\\). In other words \\([n ≡ ±1 \\bmod 6]\\).'],
];
export default content;
