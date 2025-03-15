export const title="Distributive property of the cross product";
const content = [
  ['h1', 'Distributive Property Of The Cross Product'],
  ['pmain', 'Let vectors \\(\\textbf{a}\\), \\(\\textbf{b}\\) and \\(\\textbf{u}\\) be defined as follows:'], 
  ['displayFormula', '$$ \\textbf{a} = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{bmatrix} \\quad \\textbf{b} = \\begin{bmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{bmatrix} \\textbf{u} = \\begin{bmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{bmatrix}$$'],
  ['pmain', 'The sum \\(\\textbf{a}\\) and \\(\\textbf{b}\\) is:'], 
  ['displayFormula', '$$ \\textbf{a} + \\textbf{b} = \\begin{bmatrix} a_1 + b_1 \\\\ a_2 +b_2 \\\\ a_3 + b_3 \\end{bmatrix} $$'],
  ['pmain', 'This means:'], 
  ['displayFormula', '$$\\begin{align} \\textbf{u} \\times (\\textbf{a} + \\textbf{b}) &= \\langle u_2(a_3 + b_3) - u_3(a_2 +b_2), -(u_1(a_3 + b_3)-u_3(a_1 + b_1) ), u_1(a_2 + b_2) - u_2(a_1 + b_1) \\rangle \\\\ &= \\langle u_2a_3 + u_2b_3 - u_3a_2 - u_3b_2, -u_1a_3 - u_1b_3+u_3a_1 + u_3b_1, u_1a_2 + u_1b_2 - u_2a_1 -u_2 b_1 \\rangle \\\\ &= \\langle (u_2a_3 - u_3a_2) + (u_2b_3 - u_3b_2), -(u_1a_3 - u_3a_1) - (u_1b_3 - u_3b_1), (u_1a_2- u_2a_1) + (u_1b_2 - u_2 b_1) \\rangle\\end{align}$$'],
  ['pmain', 'According to the sum property of vector:'], 
  ['displayFormula', '$$\\begin{gather} \\textbf{u} \\times (\\textbf{a} + \\textbf{b}) = \\langle u_2a_3 - u_3a_2, -(u_1a_3 - u_3a_1), u_1a_2- u_2a_1 \\rangle +\\langle u_2b_3 - u_3b_2, - (u_1b_3 - u_3b_1), u_1b_2 - u_2 b_1 \\rangle \\\\ \\therefore \\textbf{u} \\times (\\textbf{a} + \\textbf{b}) = (\\textbf{u} \\times \\textbf{a}) + (\\textbf{u} \\times \\textbf{b}) \\end{gather}$$'],
];
export default content;