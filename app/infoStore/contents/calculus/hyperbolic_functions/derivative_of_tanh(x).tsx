export const title="Proof of the derivative of tanh(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of tanh(x)'],
  ['pmain', 'We need to find the derivative of \\(\\tanh(x)\\):'],
  ['displayFormula', '\\[\\frac{d}{dx}\\tanh(x) = \\frac{d}{dx}\\frac{\\sinh(x)}{\\cosh(x)}\\]'],
  ['pmain', 'We can use the qoutient rule:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\tanh(x) = \\frac{\\cosh(x) \\frac{d}{dx} \\sinh(x) - \\sinh(x) \\frac{d}{dx} \\cosh(x)}{\\cosh^2(x)}\\]'],
  ['pmain', 'After the derivation:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\tanh(x) = \\frac{\\cosh^2(x) - \\sinh^2(x)}{\\cosh^2(x)}\\]'],
  ['pmain', 'Since \\(\\cosh^2(x) - \\sinh^2(x) = 1\\):'],
  ['displayFormula', '\\[\\frac{d}{dx}\\tanh(x) = \\frac{1}{\\cosh^2(x)} = \\operatorname{sech}^2(x) \\]'],
];
export default content;