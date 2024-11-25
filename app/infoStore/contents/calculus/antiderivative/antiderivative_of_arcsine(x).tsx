export const title="Antiderivative of arcsine(x)";
const content = [
  ['h1', 'Antiderivative Of arcsine(x)'],
  ['pmain', 'What we are trying to find is:'],
  ['displayFormula', '\\[ \\int \\arcsin(x) \\ dx \\]'],
  ['pmain', 'We are going to use integration by parts:'],
  ['displayFormula', '\\[ \\int u \\ dv = uv - \\int v \\ du\\]'],
  ['pmain', 'Let\'s define \\(u\\) and \\(v\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = \\arcsin(x), du= \\frac{dx}{\\sqrt{1-x^2}} \\\\ v = x , dv = dx \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\int \\arcsin(x) \\ dx = x(\\arcsin(x)) - \\int \\frac{x}{\\sqrt{1-x^2}} \\ dx\\]'],
  ['pmain', 'Derivating \\(\\sqrt{1-x^2}\\) gives \\(-\\frac{x}{\\sqrt{1-x^2}}\\), this means:'],
  ['displayFormula', '\\[ \\int \\arcsin(x) \\ dx = x(\\arcsin(x)) - \\left( - \\sqrt{1-x^2} \\right) = x(\\arcsin(x)) + \\sqrt{1-x^2} +C\\]'],
];
export default content;