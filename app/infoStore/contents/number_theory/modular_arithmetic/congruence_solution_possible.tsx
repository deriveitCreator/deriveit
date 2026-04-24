export const title="ax ≡ b mod m has a solution if and only if (a, m)|b";
const content = [
  ['h1', 'ax ≡ b mod m Has A Solution If And Only If (a, m)|b'],
  ['pmain', 'Let \\(g=(a,m)\\). If \\(ax ≡ b \\bmod m\\), then:'],
  ['displayFormula', '$$\\begin{gather} ax = b + mk \\text{ where } k \\in \\mathbb{Z} \\\\ ax - mk = b \\end{gather}$$'],
  ['pmain', 'If \\(g\\) divides \\(a\\) and \\(m\\), then <a href="./every_linear_combination">it can divide any linear combination</a>. If \\(x\\) and \\(k\\) are integers, then \\(ax-mk\\) is a linear combination of \\(a\\) and \\(m\\), which means \\(g\\) can divide it. In other words, \\(g|b\\). The contrapositive of this is that if \\(g \\nmid b\\), then \\(x\\) and \\(k\\) cannot be integers.'],
];
export default content;
