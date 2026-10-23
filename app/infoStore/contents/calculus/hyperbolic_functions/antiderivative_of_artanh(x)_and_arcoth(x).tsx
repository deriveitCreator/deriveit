export const title="Deriving the integral of artanh(x) and arcoth(x)";
const content = [
  ['h1', 'Deriving the integral of artanh(x) and arcoth(x)'],
  ['pmain', 'We will use integration by parts to evaluate \\(\\int \\operatorname{artanh}(x) \\ dx\\). Let \\(u = \\operatorname{artanh}(x)\\) and \\(v=x\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = \\operatorname{artanh}(x) \\implies du = \\frac{1}{1-x^2} \\ dx, \\text{ where } |x| \\lt 1 \\\\ v = x \\implies dv = dx \\end{gathered}\\]'],
  ['pmain', 'Now let\'s use integration by parts:'],
  ['displayFormula', '\\[ \\int \\operatorname{artanh}(x) \\ dx = x \\operatorname{artanh}(x) - \\int \\frac{x}{1-x^2} \\ dx \\]'],
  ['pmain', 'Since \\(\\frac{d}{dx} \\ln(1-x^2) = \\frac{1}{1-x^2} * -2x\\):'],
  ['displayFormula', '\\[ \\int \\operatorname{artanh}(x) \\ dx = x \\operatorname{artanh}(x) - \\left( \\frac{1}{-2} \\ln |1-x^2| \\right) + C \\]'],
  ['pmain', 'And this leads to our answer:'],
  ['displayFormula', '\\[ \\int \\operatorname{artanh}(x) \\ dx = x \\operatorname{artanh}(x) + \\frac{1}{2} \\ln |1-x^2| + C\\]'],
  ['pmain', 'Keep in mind that in the integral of \\(\\operatorname{artanh}(x)\\), \\(|x| \\lt 1\\). Now we will use integration by parts again to evaluate \\(\\int \\operatorname{arcoth}(x) \\ dx\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = \\operatorname{arcoth}(x) \\implies du = \\frac{1}{1 - x^2} \\ dx, \\text{ where } |x| \\gt 1 \\\\ v = x \\implies dv = dx \\end{gathered}\\]'],
  ['pmain', 'Now let\'s use integration by parts:'],
  ['displayFormula', '\\[ \\int \\operatorname{arcoth}(x) \\ dx = x \\operatorname{arcoth}(x) - \\int \\frac{x}{x^2-1} \\ dx \\]'],
  ['pmain', 'And this leads to our final answer:'],
  ['displayFormula', '\\[ \\int \\operatorname{arcoth}(x) \\ dx = x \\operatorname{arcoth}(x) + \\frac{1}{2} \\ln |1-x^2| + C\\]'],
  ['pmain', 'Keep in mind that in the integral of \\(\\operatorname{arcoth}(x)\\), \\(|x| \\gt 1\\).'],
];
export default content;