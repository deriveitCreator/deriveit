export const title="Proof of the derivative of arsinh(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of arsinh(x)'],
  ['pmain', 'Let \\(y= \\sinh (x)\\):'],
  ['displayFormula', '\\[\\begin{gathered} y = \\sinh(x) \\\\ \\operatorname{arsinh}(y) = x \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{gathered} \\frac{dy}{dx} = \\cosh(x) \\\\ \\frac{d}{dy} \\operatorname{arsinh}(y) = \\frac{dx}{dy} = \\frac{1}{\\cosh(x)} \\end{gathered}\\]'],
  ['pmain', 'Since \\(\\cosh^2(x) - \\sinh^2(x) = 1\\):'],
  ['displayFormula', '\\[\\begin{align} \\frac{dx}{dy} &= \\frac{1}{\\sqrt{1+\\sinh^2(x)}} \\\\ &= \\frac{1}{\\sqrt{1+y^2}} \\end{align}\\]'],
  ['pmain', 'Since \\(\\cosh(x)\\) is postive for all values of \\(x\\), then \\(\\sqrt{1+y^2}\\) will always be positive as well.'],
];
export default content;