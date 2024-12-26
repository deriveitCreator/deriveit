export const title="Proof of the derivative of arcsch(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of arcsch(x)'],
  ['pmain', 'Let \\(y= \\operatorname{csch} (x)\\):'],
  ['displayFormula', '\\[\\begin{gathered} y = \\operatorname{csch}(x) \\\\ \\operatorname{arcsch}(y) = x \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\begin{gathered} \\frac{dy}{dx} = - \\operatorname{csch}(x) \\coth(x) \\\\ \\frac{d}{dy} \\operatorname{arcsch}(y) = \\frac{dx}{dy} = \\frac{1}{- \\operatorname{csch}(x) \\coth(x) }\\end{gathered} \\]'],
  ['pmain', 'Since \\(\\operatorname{csch}^2(x) = \\coth^2(x) -1\\):'],
  ['displayFormula', '\\[ \\frac{dx}{dy} = \\frac{-1}{\\operatorname{csch}(x) \\left( ±\\sqrt{\\operatorname{csch}^2(x)+1} \\right)} \\]'],
  ['pmain', 'Keep in mind the sign of \\(\\operatorname{csch}\\) and \\(\\coth(x)\\) are the same. If \\(\\coth(x)\\) is negative then \\(\\operatorname{csch}(x)\\) is negative, and vice versa. If \\(\\coth(x)\\) is positive then \\(\\operatorname{csch}(x)\\) is positive, and vice versa.'],
  ['displayFormula', '\\[\\begin{align} \\frac{dx}{dy} &= \\frac{-1}{\\operatorname{csch}(x) \\frac{|\\operatorname{csch}(x)|}{\\operatorname{csch}(x)} |\\sqrt{\\operatorname{csch}^2(x)+1}| } \\\\ &= \\frac{-1}{y \\frac{|y|}{y} \\sqrt{y^2+1}} = \\frac{-1}{|y| |\\sqrt{y^2+1}|} \\end{align}\\]'],
];
export default content;