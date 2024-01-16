export const title="ax ≡ b mod m has a solution if and only if (a, m)|b";
const content = [
  ['h1', 'ax ≡ b mod m Has A Solution If And Only If (a, m)|b'],
  ['pmain', 'Let \\(g=(a,m)\\). If \\(g \\nmid b\\), then:'],
  ['displayFormula', '$$ ax = b + mk \\text{ where } k \\in \\mathbb{Z} $$$$ ax - mk = b $$'],
  ['pmain', 'If \\(g | a\\), and \\( g | m \\), then \\(g | ax-mk\\) or \\(g | b\\). This is a contradiction. Now if \\(g | b\\) then \\(b = gc\\). Also:'],
  ['displayFormula', '$$ g = ap + mq $$$$ b = c(ap + mq) $$'],
  ['pmain', 'If \\(b = a(cp) + m(cq))\\), then \\( b ≡ a(cp) \\mod m\\). Therefore, \\(x = cp\\)']
];
export default content;
