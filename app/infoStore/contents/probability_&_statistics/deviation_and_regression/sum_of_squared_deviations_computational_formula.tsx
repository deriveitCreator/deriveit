export const title="Sum Of Squared Deviations Computational Formula";
const content = [
  ['h1', 'Sum of squared deviations computational formula'], 
  ['pmain', 'The sum of squared deviations formula is:'], 
  ['displayFormula', '\\[ \\sum (x_i - \\overline{x})^2 \\]'], 
  ['pmain', 'Expanding:'], 
  ['displayFormula', '\\[ \\sum (x_i^2 - 2 x_i \\overline{x} + \\overline{x}^2) \\]'], 
  ['pmain', 'Using the distributive property:'], 
  ['displayFormula', '\\[ \\begin{gather} \\sum (x_i^2) - \\left( \\sum 2 x_i \\overline{x} \\right) + \\sum (\\overline{x}^2) \\\\ \\sum (x_i^2) - 2\\overline{x} \\left( \\sum x_i \\right) + \\sum (\\overline{x}^2) \\end{gather}\\]'], 
  ['pmain', 'Assume there are \\(n\\) terms:'], 
  ['displayFormula', '\\[ \\sum (x_i^2) - 2\\overline{x} \\left( \\sum x_i \\right) + n(\\overline{x}^2) \\]'], 
  ['pmain', 'Since \\( (\\sum x_i) / n = \\overline{x}\\):'], 
  ['displayFormula', '\\[ \\begin{gather} \\sum (x_i^2) - 2\\overline{x} \\left( n \\overline{x} \\right) + n(\\overline{x}^2) \\\\ \\sum (x_i^2)- n (\\overline{x}^2 ) \\\\ \\sum (x_i^2)- n \\left(\\frac{\\sum x_i}{n}\\right)^2 \\\\  \\sum (x_i^2)- \\frac{(\\sum x_i) ^2}{n} \\end{gather}\\]'], 
];
export default content;