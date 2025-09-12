export const title="ax ≡ b mod m has a solution if and only if (a, m)|b";
const content = [
  ['h1', 'ax ≡ b mod m Has A Solution If And Only If (a, m)|b'],
  ['pmain', 'Let \\(g=(a,m)\\). If \\(ax ≡ b \\bmod m\\), then:'],
  ['displayFormula', '$$\\begin{gather} ax = b + mk \\text{ where } k \\in \\mathbb{Z} \\\\ ax - mk = b \\end{gather}$$'],
  ['pmain', 'If \\(g\\) is the greatest common divisor of \\(a\\) and \\(m\\), then \\(g\\) can divide any linear combination of \\(a\\) and \\(m\\) (including \\(b\\)) (<a href="https://www.deriveit.net/discrete_mathematics/divisibility/every_linear_combination">proof</a>). However, if \\(g \\nmid b\\), then there is no valid value of \\(x\\) and \\(k\\), such that \\(ax - mk = b\\).'],
];
export default content;
