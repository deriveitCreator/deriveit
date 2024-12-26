export const title="Deriving the integral of arsinh(x) and arcosh(x)";
const content = [
  ['h1', 'Deriving the integral of arsinh(x) and arcosh(x)'],
  ['pmain', 'We will use integration by parts to evaluate \\(\\int \\operatorname{arsinh}(x) \\ dx\\). Let \\(u = \\operatorname{arsinh}(x)\\) and \\(v=x\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = \\operatorname{arsinh}(x) \\implies du = \\frac{1}{\\sqrt{x^2+1}} \\ dx \\\\ v = x \\implies dv = dx \\end{gathered}\\]'],
  ['pmain', 'Keep in mind \\(\\sqrt{x^2+1}\\) is positive. Now let\'s use integration by parts:'],
  ['displayFormula', '\\[ \\int \\operatorname{arsinh}(x) \\ dx = x \\operatorname{arsinh}(x) - \\int \\frac{x}{\\sqrt{x^2+1}} \\ dx \\]'],
  ['pmain', 'Since \\(\\frac{d}{dx} \\sqrt{x^2+1} = \\frac{x}{\\sqrt{x^2+1}}\\):'],
  ['displayFormula', '\\[ \\int \\operatorname{arsinh}(x) \\ dx = x \\operatorname{arsinh}(x) - \\sqrt{x^2+1} + C \\]'],
  ['pmain', 'We will use integration by parts again to evaluate \\(\\int \\operatorname{arcosh}(x) \\ dx\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = \\operatorname{arcosh}(x) \\implies du = \\frac{1}{\\sqrt{x^2 - 1}} \\ dx \\\\ v = x \\implies dv = dx \\end{gathered}\\]'],
  ['pmain', 'Keep in mind \\(\\sqrt{x^2-1}\\) is positive. Now let\'s use integration by parts:'],
  ['displayFormula', '\\[ \\int \\operatorname{arcosh}(x) \\ dx = x \\operatorname{arcosh}(x) - \\int \\frac{x}{\\sqrt{x^2-1}} \\ dx \\]'],
  ['pmain', 'Since \\(\\frac{d}{dx} \\sqrt{x^2-1} = \\frac{x}{\\sqrt{x^2 -1}}\\):'],
  ['displayFormula', '\\[ \\int \\operatorname{arcosh}(x) \\ dx = x \\operatorname{arcosh}(x) - \\sqrt{x^2-1} + C \\]'],
];
export default content;