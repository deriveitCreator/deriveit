export const title="If n is odd and (3 ∤ n), then (n^2 ≡ 1 mod 24)";
const content = [
  ['h1', 'If n Is Odd And (3 ∤ n), Then (n^2 ≡ 1 mod 24)'],
  ['pmain', 'If \\(n\\) is odd:'],
  ['displayFormula', '$$\\begin{gather} n = 2k+1 \\implies n^2 = 4k^2 + 4k + 1 \\\\ n^2 - 1 = 4k^2 + 4k \\\\ n^2 - 1 = 4(k)(k + 1) \\end{gather}$$'],
  ['pmain', 'Since one of \\((k)(k+1)\\) would be even, then:'],
  ['displayFormula', '$$\\begin{gather} n^2 - 1 = 4(2q) = 8q \\\\ n^2 ≡ 1 \\mod 8 \\end{gather}$$'],
  ['pmain', 'Now let\'s focus on the fact that \\(3 ∤ n\\), this means that at least one of these is true:'],
  ['displayFormula', '$$\\begin{gather} n ≡ 1 \\bmod 3 \\\\ n ≡ 2 \\bmod 3 \\end{gather}$$'],
  ['pmain', 'Which means there exists integers \\(x\\) and \\(y\\) such that at least one of these is true:'],
  ['displayFormula', '$$\\begin{gather} 3x = n - 1 \\\\ 3y = n - 2 \\end{gather}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\begin{align} 3x +1= n &\\implies n^2 = 9x^2 + 6x + 1 \\implies n^2 -1 = 9x^2 + 6x \\\\ 3y +2=n &\\implies n^2 = 9y^2 +12y + 4 \\implies n^2 - 1 = 9y^2 +12y + 3 \\end{align}$$'],
  ['pmain', 'The above shows that if \\((n ≡ 1 \\bmod 3)\\) or \\((n ≡ 2 \\bmod 3)\\), either way \\(n^2 - 1 \\) would be a multiple of 3:'],
  ['displayFormula', '$$n^2 ≡ 1 \\mod 3$$'],
  ['pmain', 'If \\((n^2 ≡ 1 \\bmod 3)\\), \\((n^2 ≡ 1 \\bmod 8)\\) and \\((3,8)=1\\), then, according to <a href="modLemma11">this</a>:'],
  ['displayFormula', '$$\\begin{align} n^2 &≡ 1 \\mod (8*3) \\\\ n^2 &≡ 1 \\mod 24 \\end{align}$$'],
];
export default content;
