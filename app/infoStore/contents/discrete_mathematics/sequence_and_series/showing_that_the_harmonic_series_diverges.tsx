export const title="Showing That The Harmonic Series Diverges";
const content = [
  ['h1', 'Showing That The Harmonic Series Diverges'], ['pmain', 'Suppose the series converges to \\(H\\):'], ['displayFormula', '\\[H = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8} + \\frac{1}{9} + \\frac{1}{10} + ...\\]'], ['pmain', 'Then:'], ['displayFormula', '\\[H \\geq 1 + \\frac{1}{2} + \\textcolor{red}{\\frac{1}{4}} + \\frac{1}{4} + \\textcolor{red}{\\frac{1}{6}} + \\frac{1}{6} + \\textcolor{red}{\\frac{1}{8}} + \\frac{1}{8} + \\textcolor{red}{\\frac{1}{10}} + \\frac{1}{10} + ...\\]'], ['pmain', 'The terms in <span style="color:red">red</span> is smaller than the corresponding term of \\(H\\). Let\'s group the like terms together:'], ['displayFormula', '\\[H \\geq 1 + \\frac{1}{2} + \\left(\\textcolor{red}{\\frac{1}{4}} + \\frac{1}{4}\\right) + \\left(\\textcolor{red}{\\frac{1}{6}} + \\frac{1}{6}\\right) + \\left(\\textcolor{red}{\\frac{1}{8}} + \\frac{1}{8}\\right) + \\left(\\textcolor{red}{\\frac{1}{10}} + \\frac{1}{10}\\right) + ...\\]'], 
  ['pmain', 'Adding the like terms:'],
  ['displayFormula', '\\[H \\geq 1 + \\frac{1}{2} + \\left(\\textcolor{dimgray}{\\frac{1}{2}}\\right) + \\left(\\textcolor{dimgray}{\\frac{1}{3}}\\right) + \\left(\\textcolor{dimgray}{\\frac{1}{4}}\\right) + \\left(\\textcolor{dimgray}{\\frac{1}{5}}\\right) + ...\\]'],
  ['pmain', 'Simplify:'],
  ['displayFormula', '\\[\\begin{aligned} H &\\geq 1 + \\frac{1}{2} + \\textcolor{dimgray}{H - 1} \\\\ H &\\ge \\frac{1}{2} + \\textcolor{dimgray}H \\end{aligned}\\]'],
  ['pmain', "This contradiction shows that the harmonic series doesn't converge."]
];
export default content;