export const title="Antiderivative of arccosine(x)";
const content = [
  ['h1', 'Antiderivative Of arccosine(x)'],
  ['pmain', 'What we are trying to find is:'],
  ['displayFormula', '\\[ \\int \\arccos(x) \\ dx \\]'],
  ['pmain', 'We are going to use integration by parts:'],
  ['displayFormula', '\\[ \\int u \\ dv = uv - \\int v \\ du\\]'],
  ['pmain', 'Let\'s define \\(u\\) and \\(v\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = \\arccos(x), du= -\\frac{dx}{\\sqrt{1-x^2}} \\\\ v = x , dv = dx \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\int \\arccos(x) \\ dx = x(\\arccos(x)) - \\int - \\frac{x}{\\sqrt{1-x^2}} \\ dx\\]'],
  ['pmain', 'Derivating \\(\\sqrt{1-x^2}\\) gives \\(-\\frac{x}{\\sqrt{1-x^2}}\\), this means:'],
  ['displayFormula', '\\[ \\int \\arccos(x) \\ dx = x(\\arccos(x)) - \\sqrt{1-x^2} +C\\]'],
];
export default content;