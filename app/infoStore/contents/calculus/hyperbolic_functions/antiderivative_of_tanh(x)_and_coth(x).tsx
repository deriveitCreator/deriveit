export const title="Deriving the integral of tanh(x) and coth(x)";
const content = [
  ['h1', 'Deriving the integral of tanh(x) and coth(x)'],
  ['pmain', 'Since \\(\\tanh(x) = \\frac{\\sinh(x)}{\\cosh(x)}\\):'],
  ['displayFormula', '\\[ \\int \\tanh(x) \\ dx = \\int \\frac{\\sinh(x)}{\\cosh(x)} \\ dx \\]'],
  ['pmain', 'Let \\(u = \\cosh(x)\\):'],
  ['displayFormula', '\\[\\begin{gathered} du = \\sinh(x) \\ dx \\\\ \\int \\tanh(x) \\ dx = \\int \\frac{1}{u} \\ du \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\int \\tanh(x) \\ dx = \\ln|u| + C = \\ln|\\cosh(x)| + C\\]'],
  ['pmain', 'This is the integral of \\(\\tanh(x)\\). As for \\(\\coth(x)\\), let\'s start with:'],
  ['displayFormula', '\\[ \\int \\coth(x) \\ dx = \\int \\frac{\\cosh(x)}{\\sinh(x)} \\ dx \\]'],
  ['pmain', 'Let \\(u = \\sinh(x)\\):'],
  ['displayFormula', '\\[\\begin{gathered} du = \\cosh(x) \\ dx \\\\ \\int \\tanh(x) \\ dx = \\int \\frac{1}{u} \\ du \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\int \\coth(x) \\ dx = \\ln|u| + C = \\ln|\\sinh(x)| + C\\]'],
];
export default content;