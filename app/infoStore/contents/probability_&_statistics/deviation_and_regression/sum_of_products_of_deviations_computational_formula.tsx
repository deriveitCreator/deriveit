export const title="Sum Of Products Of Deviations Computational Formula";
const content = [
  ['h1', 'Sum of products of deviations computational formula'], 
  ['pmain', 'The sum of products of deviations formula is:'], 
  ['displayFormula', '\\[ \\sum (x_i - \\overline{x})(y_i - \\overline{y}) \\]'], 
  ['pmain', 'Expanding:'], 
  ['displayFormula', '\\[ \\sum (x_i y_i - x_i \\overline{y} - y_i \\overline{x} + \\overline{x}\\overline{y}) \\]'], 
  ['pmain', 'Using the distributive property:'], 
  ['displayFormula', '\\[\\begin{gather} \\sum (x_i y_i) - \\sum (x_i \\overline{y}) - \\sum (y_i \\overline{x}) + \\sum (\\overline{x}\\overline{y}) \\\\ \\sum (x_i y_i) - \\overline{y} \\sum x_i - \\overline{x} \\sum y_i + \\sum (\\overline{x}\\overline{y}) \\end{gather}\\]'], 
  ['pmain', 'Assume there are \\(n\\) terms:'], 
  ['displayFormula', '\\[ \\sum (x_i y_i) - \\overline{y} \\sum x_i - \\overline{x} \\sum y_i + n (\\overline{x}\\overline{y}) \\]'], 
  ['pmain', 'Since \\( (\\sum x_i) / n = \\overline{x}\\):'], 
  ['displayFormula', '\\[ \\begin{gather} \\sum (x_i y_i) - \\frac{\\sum y_i}{n} \\sum x_i - \\frac{\\sum x_i}{n} \\sum y_i + n (\\overline{x}\\overline{y}) \\\\ \\sum (x_i y_i) - 2 \\frac{\\sum y_i \\sum x_i}{n} + n (\\overline{x}\\overline{y}) \\\\ \\sum (x_i y_i) - 2 \\frac{\\sum y_i \\sum x_i}{n} + n \\left( \\frac{\\sum x_i}{n} \\frac{ \\sum y_i}{n}\\right) \\\\ \\sum (x_i y_i) - 2 \\frac{\\sum y_i \\sum x_i}{n} + \\left( \\frac{\\sum x_i \\sum y_i}{n} \\right) \\\\ \\sum (x_i y_i) - \\frac{\\sum x_i \\sum y_i}{n} \\end{gather}\\]'], 
];
export default content;