export const title="If p is a prime ≥ 5, then (p^2-1)|24";
const content = [
  ['h1', 'If p Is A Prime ≥ 5, Then (p<sup>2</sup>-1)|24'],
  ['pmain','Positive integers can be represented in one of these 6 forms:'],
  ['displayFormula','$$ 6k, \\quad 6k+1, \\quad 6k+2, \\quad 6k+3, \\quad 6k+4, \\quad 6k+5 $$'],
  ['pmain','\\(k\\) here is a positive integer. Primes greater than or equal to 5 cannot be of the form \\(6k\\), \\(6k+2\\), \\(6k+3\\) and \\(6k+4\\) because they are divisible by \\(6\\), \\(2\\), \\(3\\) and \\(2\\), respectively. This means primes greater than or equal to 5 can only be of the form \\(6k + 1\\) or \\(6k + 5\\).'],
  ['pmain','Assume \\(p\\) is of the form \\(6k+1\\), then:'],
  ['displayFormula','$$\\begin{align} p^2 &= (6k+1)^2 \\\\ &= 36k^2 + 12k + 1 \\\\ p^2 - 1 &= (3k^2 + k)*12 \\end{align}$$'],
  ['pmain','If \\(k\\) is odd, then \\(3k^2\\) is also be odd, so \\([3k^2+k]\\) would be even (as the sum of two odds give an even). Let \\([3k^2 + k = 2h]\\) where \\(h\\) is some integer. Then \\([p^2 - 1 = (2h)*12]\\), or \\([p^2 - 1 = 24h]\\), so \\([p^2 - 1]\\) is a multiple of 24.'],
  ['pmain','If \\(k\\) is even, then \\([3k^2+k]\\) would also be even, so \\([p^2 - 1]\\) would again be a multiple of 24.'],
  ['pmain','Now assume \\(p\\) is of the form \\(6k+5\\), then:'],
  ['displayFormula','$$\\begin{align} p^2 &= (6k+5)^2 \\\\ &= 36k^2 + 60k + 25 \\\\ &= 36k^2 + 60k + 24 + 1 \\\\ p^2 - 1 &= (3k^2 + 5k + 2)*12 \\end{align}$$'],
  ['pmain','If \\(k\\) is odd, then \\(3k^2\\) and \\(5k\\) would also be odd, so \\([3k^2 + 5k]\\) would be even. If \\(k\\) is even, then \\([3k^2 + 5k]\\) would still be even. In both cases, \\([3k^2 + 5k + 2]\\) would be even, so it can be represented as \\(2h\\), and therefore \\([p^2 - 1 = (2h)*12]\\). This means \\([p^2-1]\\) would again be a multiple of 24.'],
];
export default content;