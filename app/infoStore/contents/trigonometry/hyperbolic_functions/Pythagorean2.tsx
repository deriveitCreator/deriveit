export const title="Proof that csch^2(x) = coth^2(x) - 1";
const content = [
  ['h1', 'Proof That csch^2(x) =  coth^2(x) -1'],
['pmain', '\\(\\operatorname{csch}(x)\\) is defined as:'],
["displayFormula","\\[\\operatorname{csch}(x) = \\frac{2}{e^x - e^{-x}} \\]"],
['pmain', 'If we square this:'],
["displayFormula","\\[\\operatorname{csch}^2(x) = \\frac{4}{e^{2x} - 2 + e^{-2x}} \\]"],
['pmain', '\\(\\coth(x)\\) is defiend as:'],
["displayFormula","\\[\\coth(x) = \\frac{e^x + e^{-x}}{e^x - e^{-x}} \\]"],
['pmain', 'If we square this:'],
["displayFormula","\\[ \\coth^2(x) = \\frac{e^{2x} +2+ e^{-2x}}{e^{2x} -2+ e^{-2x}} \\]"],
['pmain', 'If we do \\(\\coth^2(x) - \\operatorname{csch}^2(x)\\):'],
["displayFormula","\\[ \\frac{e^{2x} +2+ e^{-2x}}{e^{2x} -2+ e^{-2x}} - \\frac{4}{e^{2x} - 2 + e^{-2x}} = \\frac{e^{2x} -2+ e^{-2x}}{e^{2x} -2+ e^{-2x}} = 1 \\]"],
['pmain', 'This means \\(\\operatorname{csch}^2(x) = \\coth^2(x) - 1 \\)'],
];
export default content;