export const title="Deriving the integral of sech(x) and csch(x)";
const content = [
  ['h1', 'Deriving the integral of sech(x) and csch(x)'],
  ['pmain', 'By definition of \\(\\operatorname{sech}(x)\\):'],
  ['displayFormula', '\\[ \\int \\operatorname{sech}(x) \\ dx = \\int \\frac{2}{e^x + e^{-x}} \\ dx = \\int \\frac{2e^x}{e^{2x} + 1} \\ dx \\]'],
  ['pmain', 'Let \\(u = e^x\\):'],
  ['displayFormula', '\\[\\begin{gathered} du = e^x \\ dx \\\\ \\int \\operatorname{sech}(x) \\ dx = \\int \\frac{2}{u^2 + 1} \\ du \\end{gathered}\\]'],
  ['pmain', 'Since \\(\\frac{d}{dx} \\arctan(u) = \\frac{1}{u^2 + 1}\\):'],
  ['displayFormula', '\\[\\begin{aligned} \\int \\operatorname{sech}(x) \\ dx &= 2\\int \\frac{1}{u^2 + 1} \\ du = 2 \\arctan(u)+C \\\\ \\int \\operatorname{sech}(x) \\ dx &= 2 \\arctan(e^x) + C \\end{aligned}\\]'],
  ['pmain', 'That is the integral of \\(\\operatorname{sech}(x)\\). Now let\'s try to find the integral of \\(\\operatorname{csch}(x)\\):'],
  ['displayFormula', '\\[ \\int \\operatorname{csch}(x) \\ dx = \\int \\frac{2}{e^x - e^{-x}} \\ dx = \\int \\frac{2e^x}{e^{2x} - 1} \\ dx \\]'],
  ['pmain', 'Let \\(u = e^x\\):'],
  ['displayFormula', '\\[\\begin{gathered} du = e^x \\ dx \\\\ \\int \\operatorname{csch}(x) \\ dx = \\int \\frac{2}{u^2 - 1} \\ du \\end{gathered}\\]'],
  ['pmain', 'Since \\(\\frac{d}{dx} \\operatorname{artanh}(u) = \\frac{1}{1 - u^2}\\) for \\(|u| \\lt 1\\) and \\(\\frac{d}{dx} \\operatorname{arcoth}(u)  = \\frac{1}{1 - u^2}\\) for \\(|u| \\gt 1\\):'],
  ['displayFormula', '\\[ \\int \\operatorname{csch}(x) \\ dx = -2 \\int \\frac{1}{1-u^2} \\ du = \\begin{cases} -2 \\operatorname{artanh}(u) + C &\\quad \\text{when }|u| \\lt 1 \\\\ -2 \\operatorname{arcoth}(u) + C &\\quad \\text{when }|u| \\gt 1 \\end{cases}  \\]'],
  ['pmain', 'Since \\(u=e^x\\):'],
  ['displayFormula', '\\[ \\int \\operatorname{csch}(x) \\ dx = \\begin{cases} -2 \\operatorname{artanh}(e^x) + C &\\quad \\text{when }e^x<1 \\text{ or } x \\lt 0 \\\\ -2 \\operatorname{arcoth}(e^x) + C &\\quad \\text{when } e^x >1 \\text{ or } x \\gt 0 \\end{cases}  \\]'],
];
export default content;