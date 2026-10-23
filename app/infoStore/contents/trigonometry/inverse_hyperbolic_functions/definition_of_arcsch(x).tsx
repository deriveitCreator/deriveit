export const title="Deriving the formula for arcsch(x)";
const content = [
  ['h1', 'Deriving The Formula For arcsch(x)'],
  ['pmain', 'Let \\(y= \\operatorname{csch}(x)\\):'],
  ['displayFormula', '\\[ y = \\frac{2}{e^x - e^{-x}}\\]'],
  ['pmain', 'In order to find the formula for the inverse of \\(\\operatorname{csch}\\) we need to make \\(x\\) the subject of the above formula.'],
  ['displayFormula', '\\[ y(e^x) - y(e^{-x}) - 2 = 0\\]'],
  ['pmain', 'If we multiply both sides by \\(e^x\\):'],
  ['displayFormula', '\\[\\begin{gathered} y(e^x)^2 - y - 2e^x = 0 \\end{gathered}\\]'],
  ['pmain', 'Let \\(v = e^x\\):'],
  ['displayFormula', '\\[ yv^2 -2v - y = 0 \\]'],
  ['pmain', 'We can use the quadratic formula here:'],
  ['displayFormula', '\\[v=\\frac{-(-2) ± \\sqrt{(-2)^2 - 4(y)(-y)}}{2(y)} = \\frac{2 ± \\sqrt{4 + 4y^2}}{2y} \\]'],
  ['pmain', 'Simplifying:'],
  ['displayFormula', '\\[v = \\frac{1}{y} ± \\sqrt{\\frac{4+4y^2}{4y^2}} = \\frac{1}{y} ± \\sqrt{\\frac{1}{y^2} + 1} \\]'],
  ['pmain', 'Since \\(v=e^x\\):'],
  ['displayFormula', '\\[x = \\ln \\left( \\frac{1}{y} ± \\sqrt{\\frac{1}{y^2} + 1} \\right) \\]'],
  ['pmain', 'Keep in mind the input for \\(\\ln\\) cannot be negative. This means:'],
  ['displayFormula', '\\[\\operatorname{arcsch(y)} = \\ln \\left( \\frac{1}{y} + \\sqrt{\\frac{1}{y^2} + 1} \\right) \\]'],
];
export default content;