export const title="Antiderivative of logarithms";
const content = [
  ['h1', 'Antiderivative Of Logarithms'],
  ['pmain', 'To find the integral of logarithms, we will use integration by parts:'],
  ['displayFormula', '\\[ \\int u \\ dv = uv - \\int v \\ du \\]'],
  ['pmain', "What we are trying to find:"],
  ['displayFormula', '\\[\\int \\log_b x \\ dx\\]'],
  ['pmain', 'Let \\(u= \\log_b x\\) and \\(v = x\\):'],
  ['displayFormula', '\\[\\begin{align} \\int u \\ dv &= \\int \\log_b x \\ dx \\\\ uv - \\int v \\ du &= (\\log_b x)x - \\int x \\ du \\end{align}\\]'],
  ['pmain', 'Now let\'s try to find \\(du\\):'],
  ['displayFormula', '\\[\\begin{gathered} \\frac{d}{dx} u = (x \\ln{b})^{-1} \\\\ du = (x \\ln{b})^{-1} dx \\end{gathered}\\]'],
  ['pmain', 'Now let\'s replace \\(du\\) in our integral:'],
  ['displayFormula', '\\[\\begin{align} uv - \\int v \\ du &= (\\log_b x)x - \\int x \\ \\left( \\frac{1}{x \\ln{b}} dx \\right) \\\\ &= (\\log_b x)x - \\int (\\ln{b})^{-1} \\ dx \\end{align}\\]'],
  ['pmain', 'And this leads to our answer:'],
  ['displayFormula', '\\[ x(\\log_b x) - \\frac{x}{\\ln{b}} + C\\]'],
  ['pmain', 'We can rewrite this:'],
  ['displayFormula', '\\[ x\\frac{\\ln x}{\\ln b} - \\frac{x}{\\ln{b}} + C = \\frac{x}{\\ln b} (\\ln x -1) + C\\]'],
];
export default content;