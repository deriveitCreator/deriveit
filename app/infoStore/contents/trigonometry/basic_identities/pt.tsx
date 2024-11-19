export const title="(Trigonometry) Pythagorean identities";
const content = [
  ['h1', 'Pythagorean identities'], ['pmain', 'First lets start with a triangle with sides <span style="color:red">a</span>, <span style="color:blue">b</span> and <span style="color:green">c</span>. Using the pythagorean theorem, we know\nthat <span style="color:red">a<sup>2</sup></span>, <span style="color:blue">b<sup>2</sup></span> and <span style="color:green">c<sup>2</sup></span>:'], ['displayimg', 'pt1.png'], ['pmain', 'Lets say that there is an angle x; between <span style="color:blue">line b</span>\nand <span style="color:green">line c</span>. In that case, <span style="color:red">line a</span> would be the\nopposite side, <span style="color:blue">line b</span> would be the adjacent side and <span style="color:green">line c</span> would be the hypotenuse:'], ['displayimg', 'pt2.png'], ['pmain', 'If we divide both sides by hypotenuse<sup>2</sup>, then:'], ['displayimg', 'pt3.png'], ['pmain', 'Since cos(x) = adj/hyp and sin(x) = opp/hyp, then we can say that:'], ['displayimg', 'pt4.png'],
  ['pmain', 'Let\'s go back to the Pythagorean theorem:'],
  ['displayFormula', '\\[ \\text{opp}^2 + \\text{adj}^2 = \\text{hyp}^2 \\]'],
  ['pmain', 'If we divide both side by \\(\\text{adj}^2\\)'],
  ['displayFormula', '\\[ \\frac{\\text{opp}^2}{\\text{adj}^2} + \\frac{\\text{adj}^2}{\\text{adj}^2} = \\frac{\\text{hyp}^2}{\\text{adj}^2} \\]'],
  ['pmain', 'Simplify:'],
  ['displayFormula', '\\[ \\left( \\frac{\\text{opp}}{\\text{adj}} \\right) ^2 + 1 = \\left( \\frac{\\text{hyp}}{\\text{adj}} \\right) ^2 \\]'],
  ['pmain', 'By using the trig definitions:'],
  ['displayFormula', '\\[ \\tan^2 (x) + 1 = \\sec^2 (x) \\]'],
  ['pmain', 'Let\'s go back to the Pythagorean theorem again:'],
  ['displayFormula', '\\[ \\text{opp}^2 + \\text{adj}^2 = \\text{hyp}^2 \\]'],
  ['pmain', 'If we divide both side by \\(\\text{opp}^2\\)'],
  ['displayFormula', '\\[ \\frac{\\text{opp}^2}{\\text{opp}^2} + \\frac{\\text{adj}^2}{\\text{opp}^2} = \\frac{\\text{hyp}^2}{\\text{opp}^2} \\]'],
  ['pmain', 'Simplify:'],
  ['displayFormula', '\\[ 1 + \\left( \\frac{\\text{adj}}{\\text{opp}} \\right) ^2 = \\left( \\frac{\\text{hyp}}{\\text{opp}} \\right) ^2 \\]'],
  ['pmain', 'By using the trig definitions:'],
  ['displayFormula', '\\[ 1 + \\cot^2 (x) = \\csc^2 (x) \\]'],
  ['pmain', 'The three Pythagorean identities we learnt is:'],
  ['displayFormula', '\\[\\begin{align} \\sin^2(x) + \\cos^2(x) &= 1 \\\\ \\sec^2 (x) - \\tan^2 (x) &= 1 \\\\ \\csc^2 (x) - \\cot^2 (x)&= 1 \\end{align}\\]'],
];
export default content;