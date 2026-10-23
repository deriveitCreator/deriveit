export const title="If n is a positve integer and (n ≡ 3 mod 4), then n cannot be written as a sum of two square integers";
const content = [
  ['h1', 'If n Is A Positve Integer And (n ≡ 3 mod 4), Then n Cannot Be Written As A Sum Of Two Square Integers'],
  ['pmain', 'If \\(n\\) were to be a sum of two integers, then there are three cases we need to consider: If both the integers are even, if both of them are odd and if one of them is odd while the other is even.:'],
  ['displayFormula', '$$n = a^2 + b^2 = \\begin{cases} n = (2x)^2 + (2y)^2 \\\\ n = (2x+1)^2 + (2y+1)^2 \\\\ n = (2x)^2 + (2y+1)^2 \\end{cases}$$'],
  ['pmain', 'If \\(n\\) were to be a sum of two even square integers, then \\(n = 4x^2 + 4y^2\\), so \\(n\\) wold have been a multiple of 4 and \\(n \\not \\equiv 3 \\bmod 4\\).'],
  ['pmain', 'If \\(n\\) were to be a sum of two odd square integers, then \\(n = 4x^2 + 4x + 4y^2 + 4y + 2\\), so \\(n\\) wold have been a multiple of 2 and \\(n \\not \\equiv 3 \\bmod 4\\).'],
  ['pmain', 'If \\(n\\) were to be a sum of one odd square integer and one even square integer, then:'],
  ['displayFormula', '$$\\begin{align} n &= 4x^2 + 4y^2 + 4y + 1 \\\\ n &= 4(x^2 + y^2 + y) + 1 \\\\ n - 1 &= 4k \\end{align}$$'],
  ['pmain', 'This means \\(n ≡ 1 \\bmod 4\\), and therefore \\(n \\not \\equiv 3 \\bmod 4\\). We concluded:'],
  ['displayFormula', '$$n = a^2 + b^2 \\implies n \\not \\equiv 3 \\bmod 4 $$'],
  ['pmain', 'Using the contrapositive:'],
  ['displayFormula', '$$n \\equiv 3 \\bmod 4 \\implies n \\not = a^2 + b^2$$'],
];
export default content;