export const title="Deriving the formula for arcoth(x)";
const content = [
  ['h1', 'Deriving The Formula For arcoth(x)'],
  ['pmain', 'Let \\(y= \\coth(x)\\):'],
  ['displayFormula', '\\[ y = \\frac{e^x + e^{-x}}{e^x - e^{-x}}\\]'],
  ['pmain', 'In order to find the formula for the inverse of \\(\\coth\\) we need to make \\(x\\) the subject of the above formula.'],
  ['displayFormula', '\\[\\begin{gathered} ye^x - ye^{-x} = e^x + e^{-x} \\\\ ye^x - e^{x} = e^{-x} + ye^{-x} \\end{gathered}\\]'],
  ['pmain', 'If we multiply both sides by \\(e^x\\):'],
  ['displayFormula', '\\[\\begin{gathered} y(e^x)^2 - (e^{x})^2 = 1 + y\\\\ (e^x)^2(y-1) = 1 + y \\end{gathered}\\]'],
  ['pmain', 'Now we can make \\(x\\) the subject:'],
  ['displayFormula', '\\[\\begin{gathered} (e^x)^2 = \\frac{1 + y}{y-1} \\\\ x = \\ln \\left( \\sqrt{ \\left( \\frac{1 + y}{y-1} \\right) } \\right) \\end{gathered}\\]'],
  ['pmain', 'We can simplify this:'],
  ['displayFormula', '\\[x = \\ln \\left( \\left( \\frac{1 + y}{y-1} \\right) ^{(1/2)} \\right) = \\frac{1}{2} \\ln \\left( \\frac{y + 1}{y-1} \\right) \\]'],
  ['pmain', 'Since \\(\\ln(a)\\) is not defined when \\(a\\) is negative, then \\((y+1)/(y-1)\\) cannot be negative as well. Therefore, \\(\\operatorname{arcoth}(y)\\) is only defined when \\(|y|>1\\).'],
];
export default content;