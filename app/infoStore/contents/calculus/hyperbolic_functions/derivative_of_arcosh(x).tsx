export const title="Proof of the derivative of arcosh(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of arcosh(x)'],
  ['pmain', 'Let \\(y= \\cosh (x)\\):'],
  ['displayFormula', '\\[\\begin{gathered} y = \\cosh(x) \\\\ \\operatorname{arcosh}(y) = x \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{gathered} \\frac{dy}{dx} = \\sinh(x) \\\\ \\frac{d}{dy} \\operatorname{arcosh}(y) = \\frac{dx}{dy} = \\frac{1}{\\sinh(x)} \\end{gathered}\\]'],
  ['pmain', 'Since \\(\\cosh^2(x) - \\sinh^2(x) = 1\\):'],
  ['displayFormula', '\\[\\begin{align} \\frac{dx}{dy} &= \\frac{1}{\\sqrt{\\cosh^2(x) -1}} \\\\ &= \\frac{1}{\\sqrt{y^2-1}} \\end{align}\\]'],
  ['pmain', 'Since \\(y \\in (1,\\infty) \\), then \\(\\sqrt{y^2-1}\\) will always be positive.'],
];
export default content;