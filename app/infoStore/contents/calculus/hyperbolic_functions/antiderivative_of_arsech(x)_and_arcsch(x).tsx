export const title="Deriving the integral of arsech(x) and arcsch(x)";
const content = [
  ['h1', 'Deriving the integral of arsech(x) and arcsch(x)'],
  ['pmain', 'We will use integration by parts to evaluate \\(\\int \\operatorname{arsech}(x) \\ dx\\). Let \\(u = \\operatorname{arsech}(x)\\) and \\(v=x\\):'],
  ['displayFormula', '\\[\\begin{aligned} u = \\operatorname{arsech}(x) &\\implies du = \\frac{-1}{x \\sqrt{1-x^2}} \\ dx, x \\in (0,1) \\\\ v = x &\\implies dv = dx \\end{aligned}\\]'],
  ['pmain', 'Now let\'s use integration by parts:'],
  ['displayFormula', '\\[ \\int \\operatorname{arsech}(x) \\ dx = x \\operatorname{arsech}(x) - \\int \\frac{-x}{x\\sqrt{1-x^2}} = x \\operatorname{arsech}(x) + \\int \\frac{1}{\\sqrt{1-x^2}} \\ dx \\]'],
  ['pmain', 'Since \\(\\frac{d}{dx} \\arcsin(x) = \\frac{1}{\\sqrt{1-x^2}} \\):'],
  ['displayFormula', '\\[ \\int \\operatorname{arsech}(x) \\ dx = x \\operatorname{arsech}(x) + \\arcsin(x) + C \\]'],
  ['pmain', 'Now let\'s try to find \\(\\int \\operatorname{arcsch}(x) \\ dx\\). We will use integration by parts again:'],
  ['displayFormula', '\\[\\begin{aligned} u = \\operatorname{arcsch}(x) &\\implies du = \\frac{-1}{|x| \\sqrt{1+x^2}} \\ dx \\\\ v = x &\\implies dv = dx \\end{aligned}\\]'],
  ['pmain', 'Now let\'s use integration by parts:'],
  ['displayFormula', '\\[ \\int \\operatorname{arcsch}(x) \\ dx = x \\operatorname{arcsch}(x) + \\int \\frac{x}{|x| \\sqrt{1+x^2}} \\ dx \\]'],
  ['pmain', 'If \\(x > 0\\):'],
  ['displayFormula', '\\[\\begin{align} \\int \\operatorname{arcsch}(x) \\ dx &= x \\operatorname{arcsch}(x) + \\int \\frac{1}{\\sqrt{1+x^2}}  \\ dx\\\\ &= x \\operatorname{arcsch}(x) + \\operatorname{arsinh}(x) + C \\end{align}\\]'],
  ['pmain', 'If \\(x < 0\\):'],
  ['displayFormula', '\\[\\begin{align} \\int \\operatorname{arcsch}(x) \\ dx &= x \\operatorname{arcsch}(x) + \\int \\frac{-|x|}{|x|\\sqrt{1+x^2}}  \\ dx = x \\operatorname{arcsch}(x) - \\int \\frac{1}{\\sqrt{1+x^2}}  \\ dx \\\\ &= x \\operatorname{arcsch}(x) - \\operatorname{arsinh}(x) + C \\end{align}\\]'],
  ['pmain', 'If \\(x < 0\\), then \\(- \\operatorname{arsinh}(x) = |\\operatorname{arsinh}(x)|\\):'],
  ['displayFormula', '\\[\\int \\operatorname{arcsch}(x) \\ dx = x \\operatorname{arcsch}(x) + |\\operatorname{arsinh}(x)| + C \\]'],
  ['pmain', 'So for both \\(x \\lt 0\\) and \\(x \\gt 0\\):'],
  ['displayFormula', '\\[\\int \\operatorname{arcsch}(x) \\ dx = x \\operatorname{arcsch}(x) + |\\operatorname{arsinh}(x)| + C \\]'],
];
export default content;