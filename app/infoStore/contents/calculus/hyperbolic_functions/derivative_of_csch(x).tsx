export const title="Proof of the derivative of csch(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of csch(x)'],
  ['pmain', 'We need to find the derivative of \\(\\operatorname{csch}(x)\\):'],
  ['displayFormula', '\\[\\frac{d}{dx}\\operatorname{csch}(x) = \\frac{d}{dx}\\frac{1}{\\sinh(x)}\\]'],
  ['pmain', 'If we derivative this:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\operatorname{csch}(x) = \\frac{d}{dx} (\\cosh(x))^{-1} = -(\\sinh(x))^{-2} (\\cosh(x)) \\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\operatorname{csch}(x) = -(\\sinh(x))^{-1}(\\coth(x)) = - \\operatorname{csch}(x)\\coth(x) \\]'],
];
export default content;