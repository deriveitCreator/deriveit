export const title="Proof of the derivative of arccotan(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of Arccotan(x)'],
  ['pmain', 'What we are trying to find is:'],
  ['displayFormula', '\\[ \\int \\operatorname{arccot}(x) \\ dx \\]'],
  ['pmain', 'We are going to use integration by parts:'],
  ['displayFormula', '\\[ \\int u \\ dv = uv - \\int v \\ du\\]'],
  ['pmain', 'Let\'s define \\(u\\) and \\(v\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = \\operatorname{arccot}(x), du= - \\frac{dx}{x^2 +1} \\\\ v = x , dv = dx \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\int \\operatorname{arccot}(x) \\ dx = x(\\operatorname{arccot}(x)) - \\int - \\frac{x}{x^2 +1} \\ dx\\]'],
  ['pmain', 'The derivative of \\(\\ln(x^2 +1)\\) is \\(\\frac{1}{x^2 +1} *2x\\), this means:'],
  ['displayFormula', '\\[ \\int \\operatorname{arccot}(x) \\ dx = x(\\operatorname{arccot}(x)) + \\frac{\\ln(x^2 +1)}{2} + C\\]'],
];
export default content;