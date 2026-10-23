export const title="Proof that sech^2(x) = 1 - tanh^2(x)";
const content = [
  ['h1', 'Proof That sech^2(x) = 1 - tanh^2(x)'],
['pmain', '\\(\\operatorname{sech}(x)\\) is defined as:'],
["displayFormula","\\[\\operatorname{sech}(x) = \\frac{2}{e^x + e^{-x}} \\]"],
['pmain', 'If we square this:'],
["displayFormula","\\[\\operatorname{sech}^2(x) = \\frac{4}{e^{2x} + 2 + e^{-2x}} \\]"],
['pmain', '\\(\\tanh(x)\\) is defiend as:'],
["displayFormula","\\[\\tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}} \\]"],
['pmain', 'If we square this:'],
["displayFormula","\\[ \\tanh^2(x) = \\frac{e^{2x} -2+ e^{-2x}}{e^{2x} +2+ e^{-2x}} \\]"],
['pmain', 'If we add \\(\\tanh^2(x)\\) and \\(\\operatorname{sech}^2(x)\\):'],
["displayFormula","\\[ \\tanh^2(x) + \\operatorname{sech}^2(x) = \\frac{e^{2x} -2+ e^{-2x}}{e^{2x} +2+ e^{-2x}} + \\frac{4}{e^{2x} + 2 + e^{-2x}} = \\frac{e^{2x} +2+ e^{-2x}}{e^{2x} +2+ e^{-2x}} = 1 \\]"],
['pmain', 'This means \\(\\operatorname{sech}^2(x) = 1 - \\tanh^2(x)\\)'],
];
export default content;