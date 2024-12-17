export const title="Proof of the derivative of arsech(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of arsech(x)'],
  ['pmain', 'Let \\(y= \\operatorname{sech} (x)\\):'],
  ['displayFormula', '\\[\\begin{gathered} y = \\operatorname{sech}(x) \\\\ \\operatorname{arsech}(y) = x \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{gathered} \\frac{dy}{dx} = - \\operatorname{sech}(x) \\tanh(x) \\\\ \\frac{d}{dy} \\operatorname{arsech}(y) = \\frac{dx}{dy} = \\frac{1}{- \\operatorname{sech}(x) \\tanh(x) }\\end{gathered}\\]'],
  ['pmain', 'Since \\(\\operatorname{sech}^2(x) = 1-\\tanh^2(x)\\):'],
  ['displayFormula', '\\[\\begin{align} \\frac{dx}{dy} &= \\frac{-1}{\\operatorname{sech}(x) \\sqrt{1- \\operatorname{sech}^2(x)}} \\\\ &= \\frac{-1}{y \\sqrt{1-y^2}} \\end{align}\\]'],
  ['pmain', 'Since \\(y \\in (0,1]\\), then \\(\\sqrt{1-y^2}\\) will always be positive. Also, the derivative is not defined at \\(y=1\\).'],
];
export default content;