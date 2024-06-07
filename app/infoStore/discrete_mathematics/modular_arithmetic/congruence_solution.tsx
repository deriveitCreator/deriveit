export const title="solution of ax ≡ b mod m (if gcd(a, m)|b)";
const content = [
  ['h1', 'solution of ax ≡ b mod m (if gcd(a, m)|b)'],
  ['pmain', 'If \\(g | b\\) then \\(b = gc\\). Also:'],
  ['displayFormula', '$$ g = ap + mq $$$$ b = c(ap + mq) $$'],
  ['pmain', 'If \\(b = a(cp) + m(cq)\\), then \\( b ≡ a(cp) \\mod m\\). Therefore, \\(x = cp\\). However, there may be more solutions. Let \\(m = zg\\) and \\(a = wg\\). We know that \\(cp\\) is one solution, let \\(x_i\\) be another:'],
  ['displayFormula', '$$\\begin{align} a(cp) &≡ b \\mod m \\\\ a(x_i) &≡ b \\mod m \\end{align}$$'],
  ['pmain', 'Which means:'],
  ['displayFormula', '$$ a(cp - x_i) ≡ 0 \\mod m $$$$ a(cp - x_i) = mf $$'],
  ['pmain', 'Since \\(m = zg\\) and \\(a = wg\\):'],
  ['displayFormula', '$$\\begin{align} wg(cp - x_i) = zgf \\\\ w(cp - x_i) = zf \\end{align}$$'],
  ['pmain', 'This tells us that \\(z | w(cp - x_i)\\), which means \\(z | (cp - x_i)\\), because \\((z, w) = 1\\) (since \\( (m/g,a/g) = 1 \\) as you shouldn\'t be able to divide both \\(m\\) and \\(a\\) any further after dividing them by the gcd). Since \\(z | (cp - x_i)\\):'],
  ['displayFormula', '$$ x_i ≡ cp \\mod z $$'],
  ['pmain', 'This means all the solutions are \\(x_i = cp + zh\\) where \\(h \\in \\mathbb{Z}\\). As an example, let\'s try to solve \\(8x ≡ 6 \\mod 14\\), where \\(a=8, b=6\\) and \\(m=14\\), so \\(g\\) is:'],
  ['displayFormula', '$$ (8, 14) = 2 $$'],
  ['pmain', 'Since \\( g | b\\), solutions exist. If \\(b=gc, a=gw\\) and \\(m=gz\\), then \\(c=3, w=4\\) and \\(z=7\\). Since \\(g = a*2 + m*-1\\), then \\(x = cp = 3*2 = 6\\). There are other solutions where:'],
  ['displayFormula', '$$ x_i ≡ 6 \\mod 7 $$'],
  ['pmain', 'This means \\(x_i = 6 + 7h\\), so \\(x_i\\) could be 6, 13, 20, 27 and so on.'],
];
export default content;
