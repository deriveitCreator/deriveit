export const title="Deriving the formula for arsinh(x)";
const content = [
  ['h1', 'Deriving The Formula For arsinh(x)'],
  ['pmain', 'Let \\(y= \\sinh(x)\\):'],
  ['displayFormula', '\\[ y = \\frac{e^x - e^{-x}}{2}\\]'],
  ['pmain', 'In order to find the formula for the inverse of \\(\\sinh\\) we need to make \\(x\\) the subject of the above formula.'],
  ['displayFormula', '\\[ 2y = e^x - e^{-x}\\]'],
  ['pmain', 'If we multiply both sides by \\(e^x\\):'],
  ['displayFormula', '\\[\\begin{gathered} 2ye^x = (e^x)^2 - 1 \\\\ - (e^x)^2 + 2ye^x + 1 = 0 \\end{gathered}\\]'],
  ['pmain', 'Let \\(v = e^x\\):'],
  ['displayFormula', '\\[- v^2 + 2yv + 1 = 0 \\]'],
  ['pmain', 'We can use the quadratic formula here:'],
  ['displayFormula', '\\[v=\\frac{-(2y) ± \\sqrt{(2y)^2 - 4(-1)(1)}}{2(-1)} = \\frac{-2y ± \\sqrt{4y^2 + 4}}{-2} \\]'],
  ['pmain', 'Simplifying:'],
  ['displayFormula', '\\[v = \\frac{-2y ± 2\\sqrt{y^2 + 1}}{-2} = y ∓ \\sqrt{y^2 + 1} \\]'],
  ['pmain', 'Since \\(v=e^x\\):'],
  ['displayFormula', '\\[x = \\ln(y ∓ \\sqrt{y^2 + 1}) \\]'],
  ['pmain', 'The domain of \\(\\ln(a)\\) is \\(a \\in (0,\\infty)\\). This means \\(y ∓ \\sqrt{y^2 + 1}\\) cannot be negative. Since \\(y - |\\sqrt{y^2 + 1}|\\) is negative for all \\(y>0\\) and \\(y + |\\sqrt{y^2 + 1}|\\) is positive for all \\(y>0\\), then the input for \\(\\ln\\) can only be \\(y+|\\sqrt{y^2 + 1}|\\):'],
  ['displayFormula', '\\[x = \\ln(y + | \\sqrt{y^2 + 1}|) \\]'],
];
export default content;