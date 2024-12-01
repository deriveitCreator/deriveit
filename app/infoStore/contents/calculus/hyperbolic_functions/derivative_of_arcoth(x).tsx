export const title="Proof of the derivative of arcoth(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of arcoth(x)'],
  ['pmain', 'Let \\(y= \\coth (x)\\):'],
  ['displayFormula', '\\[\\begin{gathered} y = \\coth(x) \\\\ \\operatorname{arcoth}(y) = x \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{gathered} \\frac{dy}{dx} = - \\operatorname{csch}^2(x) \\\\ \\frac{d}{dy} \\operatorname{arcoth}(y) = \\frac{dx}{dy} = \\frac{-1}{\\operatorname{csch}^2(x)} \\end{gathered}\\]'],
  ['pmain', 'Since \\(\\operatorname{csch}^2(x) = \\coth^2(x) - 1\\):'],
  ['displayFormula', '\\[\\begin{align} \\frac{dx}{dy} &= \\frac{-1}{\\coth^2(x)-1} \\\\ &= \\frac{1}{1-y^2} \\end{align}\\]'],
];
export default content;