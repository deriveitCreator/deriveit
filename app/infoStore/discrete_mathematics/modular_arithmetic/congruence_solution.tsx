export const title="ax ≡ b mod m has a solution if and only if (a, m)|b";
const content = [
  ['h1', 'ax ≡ b mod m Has A Solution If And Only If (a, m)|b'],
  ['pmain', 'Let \\(g=(a,m)\\). If \\(g \\nmid b\\), then:'],
  ['displayFormula', '$$ ax = b + mk \\text{ where } k \\in \\mathbb{Z} $$$$ ax - mk = b $$'],
  ['pmain', 'If \\(g | a\\), and \\( g | m \\), then \\(g | ax-mk\\) or \\(g | b\\). This is a contradiction. Now if \\(g | b\\) then \\(b = gc\\). Also:'],
  ['displayFormula', '$$ g = ap + mq $$$$ b = c(ap + mq) $$'],
  ['pmain', 'If \\(b = a(cp) + m(cq))\\), then \\( b ≡ a(cp) \\mod m\\). Therefore, \\(x = cp\\). However, there many be more solutions. Let \\(m = zg\\) and \\(a = wg\\). We know that \\(cp\\) is one solution, let \\(x_i\\) be another:'],
  ['displayFormula', '$$\\begin{align} a(cp) &≡ b \\mod m \\\\ a(x_i) &≡ b \\mod m \\end{align}$$'],
  ['pmain', 'Which means:'],
  ['displayFormula', '$$ a(cp - x_i) ≡ 0 \\mod m $$$$ a(cp - x_i) = mf $$'],
  ['pmain', 'Since \\(m = zg\\) and \\(a = wg\\):'],
  ['displayFormula', '$$\\begin{align} wg(cp - x_i) = zgf \\\\ w(cp - x_i) = zf \\end{align}$$'],
  ['pmain', 'This tells us that \\z | w(cp - x_i)\\), or \\(z | (cp - x_i)\\), because \\((z, w) = 1\\) (since (\\( (\\frac{m}{g},\\frac{a}{g}) = 1) \\) as you shouldn\'t be able to divide further after dividing by gcd).'],
];
export default content;
