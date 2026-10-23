export const title="If (a ≡ b mod m), (c ≡ d mod m), c|a and d|b, then (a/c ≡ b/d mod m)";
const content = [
  ['h1', 'If (a ≡ b mod m), (c ≡ d mod m), c|a And d|b, Then (a/c ≡ b/d mod m)'],
  ['pmain', 'Since \\(a ≡ b \\bmod m\\) and \\(c ≡ d \\bmod m\\):'],
  ['displayFormula', '$$\\begin{gather} mk = b - d \\\\ ml = d - c \\end{gather}$$'],
  ['pmain', 'Since \\(c|a\\) and \\(d|b\\):'],
  ['displayFormula', '$$\\begin{gather} cx = a \\implies x = a/c \\\\ dy=b \\implies y=b/d \\end{gather}$$'],
  ['pmain', 'We can multiply \\(xy\\) to both sides of \\( ml = d - c\\):'],
  ['displayFormula', '$$\\begin{align} mlxy = dxy - cxy \\implies &mu = vx - zy \\\\ &mu = v(a/c) - z(b/d) \\end{align}$$'],
  ['pmain', 'This means \\(\\frac{a}{c} ≡ \\frac{b}{d} \\bmod m\\).'],
];
export default content;