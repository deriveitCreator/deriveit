export const title="If (a ≡ b mod m, d|a, d|b and d|m), then a/d ≡ b/d mod m/d";
const content = [
  ['h1', 'If (a ≡ b mod m, d|a, d|b and d|m), then a/d ≡ b/d mod m/d'],
  ['pmain', 'If \\(a ≡ b mod m\\), then there is an integer \\(k\\) such that:'],
  ['displayFormula', '$$ mk = b - a $$'],
  ['pmain', 'We can divide both sides with integer \\(d\\):'],
  ['displayFormula', '$$ \\begin{gathered} (mk)/d = (b - a)/d = (b/d) - (a/d) \\\\ \\implies \\frac{a}{d} ≡ \\frac{b}{d} \\bmod \\frac{m}{d} \\end{gathered}$$'],
];
export default content;