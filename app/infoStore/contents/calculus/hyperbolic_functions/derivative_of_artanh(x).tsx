export const title="Proof of the derivative of artanh(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of artanh(x)'],
  ['pmain', 'Let \\(y= \\tanh (x)\\):'],
  ['displayFormula', '\\[\\begin{gathered} y = \\tanh(x) \\\\ \\operatorname{artanh}(y) = x \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{gathered} \\frac{dy}{dx} = \\operatorname{sech}^2(x) \\\\ \\frac{d}{dy} \\operatorname{artanh}(y) = \\frac{dx}{dy} = \\frac{1}{\\operatorname{sech}^2(x)} \\end{gathered}\\]'],
  ['pmain', 'Since \\(\\operatorname{sech}^2(x) = 1 - \\tanh^2(x)\\):'],
  ['displayFormula', '\\[\\begin{align} \\frac{dx}{dy} &= \\frac{1}{1 - \\tanh^2(x)} \\\\ &= \\frac{1}{1-y^2} \\end{align}\\]'],
];
export default content;