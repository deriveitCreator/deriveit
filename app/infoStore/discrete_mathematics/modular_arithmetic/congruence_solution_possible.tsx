export const title="ax ≡ b mod m has a solution if and only if (a, m)|b";
const content = [
  ['h1', 'ax ≡ b mod m Has A Solution If And Only If (a, m)|b'],
  ['pmain', 'Let \\(g=(a,m)\\). If \\(ax ≡ b \\mod m\\), then:'],
  ['displayFormula', '$$ ax = b + mk \\text{ where } k \\in \\mathbb{Z} $$$$ ax - mk = b $$'],
  ['pmain', 'If \\(g\\) is the greatest common divisor of \\(a\\) and \\(m\\), then \\(g\\) can divide any linear combination of \\(a\\) and \\(m\\) (<a href="https://www.deriveit.net/discrete_mathematics/divisibility/every_linear_combination">proof</a>). However, if \\(g \\nmid b\\), then \\(b\\) is not a linear combination of \\(a\\) and \\(m\\), so no valid value of \\(x\\) and \\(k\\) can exist.'],
];
export default content;
