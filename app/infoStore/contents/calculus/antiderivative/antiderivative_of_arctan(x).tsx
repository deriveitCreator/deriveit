export const title="Antiderivative of arctan(x)";
const content = [
  ['h1', 'Antiderivative Of arctan(x)'],
  ['pmain', 'What we are trying to find is:'],
  ['displayFormula', '\\[ \\int \\arctan(x) \\ dx \\]'],
  ['pmain', 'We are going to use integration by parts:'],
  ['displayFormula', '\\[ \\int u \\ dv = uv - \\int v \\ du\\]'],
  ['pmain', 'Let\'s define \\(u\\) and \\(v\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = \\arctan(x), du= \\frac{dx}{x^2 +1} \\\\ v = x , dv = dx \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\int \\arctan(x) \\ dx = x(\\arctan(x)) - \\int \\frac{x}{x^2 +1} \\ dx\\]'],
  ['pmain', 'The derivative of \\(\\ln(x^2 +1)\\) is \\(\\frac{1}{x^2 +1} *2x\\), this means:'],
  ['displayFormula', '\\[ \\int \\arctan(x) \\ dx = x(\\arctan(x)) - \\left( \\frac{1}{2} \\ln(x^2 +1) \\right) + C\\]'],
];
export default content;