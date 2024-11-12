export const title="Antiderivative Of cosec(x)";
const content = [['h1', 'Antiderivative Of cosec(x)'], 
['pmain', 'Now let\'s try to find the anti-derivative of \\( \\csc(x)\\):'],
['displayFormula', '\\[\\int \\csc(x) \\ dx \\]'],
['pmain', "Let's multiply the the numerator and denominator by \\( \\csc(x) + \\cot(x)\\):"],
['displayFormula', '\\[\\int \\csc(x) \\ dx = \\int \\frac{ \\csc^2(x) + \\csc(x)\\cot(x)}{ \\csc(x) + \\cot(x)} \\ dx \\]'],
['pmain', "Let \\(u = \\csc(x)+ \\cot(x) \\), and that means \\(du = -\\csc^2(x) - \\csc(x)\\cot(x) \\ dx\\):"],
['displayFormula', '\\[\\int \\frac{-\\csc^2(x) - \\csc(x)\\cot(x)}{ \\csc(x) + \\cot(x)} \\ dx = - \\int \\frac{\\csc^2(x) + \\csc(x)\\cot(x)}{ \\csc(x) + \\cot(x)} \\ dx = - \\int \\frac{1}{u} \\ du\\]'],
['pmain', 'If we evaluate the integral:'],
['displayFormula', '\\[- \\ln|u| + C = - \\ln\\left(\\left| \\csc(x) + \\cot(x) \\right|\\right) +C\\]'],
['pmain', "We will also derive another antiderivative for \\( \\csc(x)\\). Let's multiply the the numerator and denominator by \\( \\csc(x) - \\cot(x)\\):"],
['displayFormula', '\\[\\int \\csc(x) \\ dx = \\int \\frac{ \\csc(x) (\\csc(x) - \\cot(x))}{ \\csc(x) - \\cot(x)} \\ dx \\]'],
['pmain', "Let \\(u = \\csc(x)- \\cot(x) \\), and that means \\(du = - \\csc(x)\\cot(x) + \\csc^2(x) \\ dx\\):"],
['displayFormula', '\\[\\int \\csc(x) \\ dx = \\int \\frac{ \\csc(x) (\\csc(x) - \\cot(x))}{ \\csc(x) - \\cot(x)} \\ dx = \\int \\frac{1}{u} \\ du\\]'],
['pmain', 'If we evaluate the integral:'],
['displayFormula', '\\[\\ln|u| + C = \\ln\\left(| \\csc(x) - \\cot(x) |\\right) +C\\]'],
];
export default content;