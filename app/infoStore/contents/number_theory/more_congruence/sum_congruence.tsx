export const title="1 + 2 + 3 + ... + (n-1) ≡ 0 mod n if and only if n is odd";
const content = [
  ['h1', '1 + 2 + 3 + ... + (n-1) ≡ 0 mod n If And Only If n Is Odd'],
  ['pmain', 'The sum of the first \\(n\\) integers can be written as:'],
  ['displayFormula', '$$ 1 + 2 + 3 + ... + (n-1) + n = \\frac{(n)(n+1)}{2} $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\begin{align} 1 + 2 + 3 + ... + (n-1) &= \\frac{(n)(n+1)}{2} - n \\\\ &= \\frac{(n)(n-1)}{2} \\end{align}$$'],
  ['pmain', 'Either \\(n\\) is even or \\(n-1\\) is even. If \\(\\frac{n-1}{2}\\) is an integer, then \\([(n)\\frac{(n-1)}{2} ≡ 0 \\bmod n]\\).'],
  ['pmain', 'If \\((n/2)\\) is an integer, then \\([(n-1)(n/2) ≡ -(n/2) \\bmod n]\\), as \\([(n-1) ≡ -1 \\bmod n]\\). Since \\((n/2)\\) and \\(-(n/2)\\) have a difference of \\(n\\), then \\([(n-1)(n/2) ≡ (n/2) \\bmod n]\\).'],
  ['pmain', 'This means if \\(n\\) is a positive integer, then \\([\\frac{(n)(n-1)}{2} ≡ 0 \\bmod n]\\) if and only if \\(n\\) is odd, otherwise \\([\\frac{(n)(n-1)}{2} ≡ \\frac{n}{2} \\bmod n]\\).'],
];
export default content;
