export const title="Cross product definition";
const content = [
  ['h1', 'Cross Product Definition'],
  ['pmain', 'Let vectors \\(\\textbf{a}\\) and \\(\\textbf{b}\\) be defined as follows:'], 
  ['displayFormula', '$$ \\textbf{a} = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{bmatrix} \\quad \\textbf{b} = \\begin{bmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{bmatrix} $$'],
  ['pmain', 'We want to find a vector \\(\\textbf{w} \\) that is perpendicular to both \\(\\textbf{a} \\) and \\( \\textbf{b}\\). In other words:'], 
  ['displayFormula', '$$\\begin{align} \\textbf{a} \\cdot \\textbf{w} &= 0 \\\\ \\textbf{b} \\cdot \\textbf{w} &= 0\\end{align} $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ \\begin{align} a_1w_1 + a_2w_2 + a_3w_3 &= 0 \\\\ b_1w_1 + b_2w_2 + b_3w_3 &=0 \\end{align} $$'],
  ['pmain', 'If we multiply the top with \\(b_3\\), and the bottom with \\(a_3\\), we can substract them to get rid of \\(w_3\\):'],
  ['displayFormula', '$$ \\begin{align} a_1 b_3 w_1 + a_2 b_3 w_2 + a_3 b_3 w_3 &= 0 \\\\ b_1 a_3 w_1 + b_2 a_3 w_2 + b_3 a_3 w_3 &=0 \\end{align} $$'],
  ['pmain', 'If we subtract one from the other:'],
  ['displayFormula', '$$ (a_1 b_3 - b_1 a_3) w_1 + (a_2 b_3 -b_2 a_3)w_2 = 0 $$'],
  ['pmain', 'We can select an expression for \\(w_1\\) and \\(w_2\\) such that the two terms would cancel out. This gives us two possible solutions:'],
  ['displayFormula', '$$\\begin{align} w_1 &= a_2 b_3 -b_2 a_3 \\qquad && w_1 = b_2 a_3 - a_2 b_3  \\\\ w_2 &= -(a_1 b_3 - b_1 a_3) &&w_2 = -(b_1 a_3 - a_1 b_3) \\end{align}$$'],
  ['pmain', 'For now, let\'s go with the first one. We can substitute the expression for \\(w_1\\) and \\(w_2\\), back into the original equation:'],
  ['displayFormula', '$$ \\begin{align} a_1(a_2 b_3 -b_2 a_3) - a_2(a_1 b_3 - b_1 a_3) + a_3w_3 &= 0 \\\\ b_1(a_2 b_3 -b_2 a_3) - b_2(a_1 b_3 - b_1 a_3) + b_3w_3 &=0 \\end{align} $$'],
  ['pmain', 'Subtracting one equation from the other:'],
  ['displayFormula', '$$ (a_1-b_1)(a_2 b_3 -b_2 a_3) + (b_2-a_2)(a_1 b_3 - b_1 a_3) + (a_3-b_3)w_3 = 0 $$'],
  ['pmain', 'Expanding:'],
  ['displayFormula', '$$\\begin{gather} a_1(a_2 b_3 -b_2 a_3)-b_1(a_2 b_3 -b_2 a_3) + b_2(a_1 b_3 - b_1 a_3) - a_2(a_1 b_3 - b_1 a_3) + (a_3-b_3)w_3 = 0 \\\\ a_1a_2 b_3 - a_1b_2 a_3 - b_1a_2 b_3 + b_1b_2 a_3 + b_2a_1 b_3 - b_2b_1 a_3 - a_2a_1 b_3 + a_2b_1 a_3 + (a_3-b_3)w_3 = 0 \\end{gather}$$'],
  ['pmain', 'Cancelling out the like terms and simplifying:'],
  ['displayFormula', '$$\\begin{gather} a_2b_1 a_3 - a_1b_2 a_3 + b_2a_1 b_3 - b_1a_2 b_3 + (a_3-b_3)w_3 = 0 \\\\ ( a_2b_1 - a_1b_2) a_3 + (b_2a_1 - b_1a_2) b_3 + (a_3-b_3)w_3 = 0 \\\\ ( a_2b_1 - a_1b_2) a_3 - (b_1a_2-b_2a_1) b_3 + (a_3-b_3)w_3 = 0 \\end{gather}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\begin{gather} ( a_2b_1 - a_1b_2) (a_3 - b_3) + (a_3-b_3)w_3 = 0 \\\\ w_3 = a_2b_1 - a_1b_2 \\end{gather}$$'],
  ['pmain', 'Now we have an expression for all three components:'],
  ['displayFormula', '$$\\begin{align} w_1 &= a_2 b_3 -a_3b_2 \\\\ w_2 &= -(a_1 b_3 - a_3 b_1 ) \\\\ w_3 &= a_2b_1 - a_1b_2 \\end{align}$$'],
  ['pmain', 'The orthogonal vector of this form is called the <b>cross product</b> and is represented as \\(\\textbf{a} \\times \\textbf{b}\\). If we used the second set of \\(w_1\\) and \\(w_2\\) instead, our expressions would be:'],
  ['displayFormula', '$$\\begin{align} w_1 &=  b_2 a_3 - b_3a_2\\\\ w_2 &= -(b_1 a_3 - b_3a_1) \\\\ w_3 &=b_1a_2 - b_2a_1 \\end{align}$$'],
  ['pmain', 'This vector is the orthogonal vector in the other direction, or \\(-(\\textbf{a} \\times \\textbf{b})\\):'],
  ['displayimg', 'cross1.jpeg'],
  ['pmain', 'You can use the right-hand rule to remember this orientation.'],
];
export default content;