export const title="If (a ≡ b mod m), then (a, m) = (b, m)";
const content = [
  ['h1', 'If (a ≡ b mod m), Then (a, m) = (b, m)'],
  ['pmain', 'Let \\(d = (a, m)\\) and \\(h = (b, m)\\). If \\(a ≡ b \\bmod m\\), then there is an integer \\(k\\) such that:'],
  ['displayFormula', '$$\\begin{gather} mk + a = b \\\\ \\frac{mk}{d} + \\frac{a}{d} = \\frac{b}{d} \\end{gather}$$'],
  ['pmain', 'Since \\(d|m\\), then \\(\\frac{mk}{d} \\in \\mathbb{Z} \\), and since \\(d|a\\), then \\(\\frac{a}{d} \\in \\mathbb{Z} \\). That means \\(\\frac{b}{d}\\) is also an integer. Therefore \\(d|b\\):'],
  ['displayFormula', '$$ d|a \\land d|b \\land d|m$$'],
  ['pmain', 'Since \\(h = (b, m)\\), then \\(h\\) is the smallest positive linear combination of \\(b\\) and \\(m\\). Since \\(d|b\\) and \\(d|m\\), then \\(d\\) divides any linear combination of \\(b\\) and \\(m\\). Therefore \\(d|h\\).'],
  ['pmain', 'Going back to \\(mk + a = b\\), we can rearrange it as:'],
  ['displayFormula', '$$ b - mk = a$$'],
  ['pmain', 'Dividing both sides by \\(h\\):'],
  ['displayFormula', '$$ \\frac{b}{h} - \\frac{mk}{h} = \\frac{a}{h}$$'],
  ['pmain', 'Since \\(h|m\\), then \\(\\frac{mk}{h} \\in \\mathbb{Z} \\), and since \\(h|b\\), then \\(\\frac{b}{h} \\in \\mathbb{Z} \\). That means \\(\\frac{a}{h}\\) is also an integer. Therefore \\(h|a\\):'],
  ['displayFormula', '$$ h|a \\land h|b \\land h|m$$'],
  ['pmain', 'Since \\(d = (a, m)\\), then \\(d\\) is the smallest positive linear combination of \\(a\\) and \\(m\\). Since \\(h|a\\) and \\(h|m\\), then \\(h\\) divides any linear combination of \\(a\\) and \\(m\\). Therefore \\(h|d\\).'],
  ['pmain', 'Since \\(h|d\\) and \\(d|h\\), then \\(d=h\\).'],
];
export default content;