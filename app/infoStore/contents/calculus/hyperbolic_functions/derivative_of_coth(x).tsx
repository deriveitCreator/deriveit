export const title="Proof of the derivative of coth(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of coth(x)'],
  ['pmain', 'We need to find the derivative of \\(\\coth(x)\\):'],
  ['displayFormula', '\\[\\frac{d}{dx}\\coth(x) = \\frac{d}{dx}\\frac{\\cosh(x)}{\\sinh(x)}\\]'],
  ['pmain', 'We can use the qoutient rule:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\coth(x) = \\frac{\\sinh(x) \\frac{d}{dx} \\cosh(x) - \\cosh(x) \\frac{d}{dx} \\sinh(x)}{\\cosh^2(x)}\\]'],
  ['pmain', 'After the derivation:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\coth(x) = \\frac{\\sinh^2(x) - \\cosh^2(x)}{\\sinh^2(x)}\\]'],
  ['pmain', 'Since \\(\\cosh^2(x) - \\sinh^2(x) = 1\\):'],
  ['displayFormula', '\\[\\frac{d}{dx}\\coth(x) = \\frac{-1}{\\sinh^2(x)} = -\\operatorname{csch}^2(x) \\]'],
];
export default content;