export const title="Proof of the double angle and half angle formulas for tan(x)";
const content = [
  ['h1', 'Proof Of The Double Angle And Half Angle Formulas For tan(x)'],
  ['pmain', 'First let\'s start with \\(\\sin(2x)\\) and \\(\\cos(2x)\\):'],
  ['displayFormula', '\\[ \\begin{align} \\sin(2x) &= 2\\sin(x)\\cos(x) \\\\ \\cos(2x) &= 2\\cos^2(x) - 1\\end{align} \\]'],
  ['pmain', 'One definition of \\(\\tan(x)\\) is:'],
  ['displayFormula', '\\[\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\tan(2x) = \\frac{\\sin(2x)}{\\cos(2x)} = \\frac{2\\sin(x)\\cos(x)}{2\\cos^2(x) - 1}\\]'],
  ['pmain', 'Since \\(\\cos(x) = 1/\\sec(x)\\):'],
  ['displayFormula', '\\[\\tan(2x) = \\frac{2\\sin(x)\\left( \\frac{1}{\\sec(x)}\\right)}{\\frac{2}{\\sec^2(x)} - 1} = \\frac{2\\sin(x)\\left( \\frac{1}{\\sec(x)}\\right)}{\\frac{2 - \\sec^2(x)}{\\sec^2(x)}}\\]'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '\\[\\tan(2x) = \\frac{2\\sin(x)\\left( \\frac{1}{\\sec(x)}\\right) (\\sec^2(x))}{2 - \\sec^2(x)} = \\frac{2 \\sin(x)\\sec(x)}{2 - \\sec^2(x)}\\]'],
  ['pmain', 'Since \\(\\sec^2(x) = 1 + \\tan^2(x)\\):'],
  ['displayFormula', '\\[\\tan(2x) = \\frac{2 \\sin(x)\\sec(x)}{2 - (1 + \\tan^2(x))} = \\frac{2 \\sin(x)\\sec(x)}{1 - \\tan^2(x)}\\]'],
  ['pmain', 'Since \\(\\sec(x) = 1/\\cos(x)\\):'],
  ['displayFormula', '\\[\\tan(2x) = \\frac{2 \\sin(x)\\sec(x)}{1 - \\tan^2(x)} = \\frac{2 \\tan(x)}{1 - \\tan^2(x)}\\]'],
  ['pmain', 'This is the double angle formula for \\(\\tan(x)\\). As for the half angle formula, let\'s start with:'],
  ['displayFormula', '\\[\\begin{align} \\sin^2(x) &= \\frac{1-\\cos(2x)}{2} \\\\ \\cos^2(x) &= \\frac{1+\\cos(2x)}{2} \\end{align}\\]'],
  ['pmain', 'By definition of \\(\\tan(x)\\):'],
  ['displayFormula', '\\[\\tan^2(x) = \\frac{\\sin^2(x)}{\\cos^2(x)} = \\frac{1-\\cos(2x)}{1+\\cos(2x)} \\]'],
];
export default content;