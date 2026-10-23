export const title="Antiderivative Of tan(x) And cot(x)";
const content = [
  ['h1', 'Antiderivative Of tan(x) And cot(x)'], ['pmain', 'For tan(x), we will use the identity:'], ['displayimg', 't1.png'], ['pmain', 'Lets say [u = cos(x)], which means [du/dx = -sin(x)]:'], ['displayimg', 't2.PNG'], ['pmain', 'Evaluating the integral:'], ['displayimg', 't3.PNG'], ['pmain', 'And we know what u is:'], ['displayimg', 't4.PNG'], ['pmain', 'If we use the logarithmic rule:'], ['displayimg', 't5.PNG'],
  ['pmain', 'Therefore:'],
  ['displayFormula', '\\[\\int \\tan (x) \\ dx = - \\ln | \\cos (x)| +C = \\ln | \\sec(x)| +C \\]'],
  ['pmain', 'For \\( \\cot(x)\\), We will use the cotangent identity:'],
  ['displayFormula', '\\[ \\cot(x) = \\frac{ \\cos(x)}{\\sin(x)}\\]'],
  ['pmain', "Since \\(( \\sin(x))' = \\cos(x)\\), it would make sense to use the substitution rule with \\(u = sin(x)\\):"], ['displayFormula', '\\[\\int \\frac{ \\cos(x)}{ \\sin(x )} dx = \\int \\frac{du}{u}\\]'], ['pmain', 'Evaluating the integral:'], ['displayFormula', '\\[\\int \\cot (x) \\ dx = \\ln |u| +C = \\ln | \\sin(x)| +C \\]']
];
export default content;