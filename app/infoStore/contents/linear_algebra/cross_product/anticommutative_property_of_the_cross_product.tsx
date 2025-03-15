export const title="Anticommutative property of the cross product";
const content = [
  ['h1', 'Anticommutative Property Of The Cross Product'],
  ['pmain', 'Let vectors \\(\\textbf{a}\\) and \\(\\textbf{b}\\) be defined as follows:'], 
  ['displayFormula', '$$ \\textbf{a} = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{bmatrix} \\quad \\textbf{b} = \\begin{bmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{bmatrix} $$'],
  ['pmain', 'Let \\(\\textbf{w}\\) be the cross product of \\(\\textbf{a} \\times \\textbf{b}\\):'], 
  ['displayFormula', '$$\\begin{align} w_1 &= a_2 b_3 - a_3b_2 \\\\ w_2 &= -(a_1 b_3 - a_3b_1) \\\\ w_3 &= a_2b_1 - a_1b_2 \\end{align}$$'],
  ['pmain', 'You can use the right-hand rule to remember the orientation.'],
  ['displayimg', 'cross2.jpeg'],
  ['pmain', 'Multiplying a vector by -1 gives the vector of the same magnitude but in the opposite direction:'],
  ['displayimg', 'cross3.jpeg'],
  ['pmain', 'If you want an algebraic proof, we can define a vector \\(\\textbf{v}\\) that is the cross product \\(\\textbf{b} \\times \\textbf{a} \\):'],
  ['displayFormula', '$$\\begin{align} v_1 &= b_2 a_3 - b_3a_2 \\\\ v_2 &= -(b_1 a_3 - b_3a_1) \\\\ v_3 &= b_2a_1-b_1a_2 \\end{align}$$'],
  ['pmain', 'If we multiply by -1:'],
  ['displayFormula', '$$\\begin{align} -v_1 &= b_3a_2 - b_2 a_3  \\\\ -v_2 &= -(b_3a_1 - b_1 a_3) \\\\ -v_3 &= b_1a_2-b_2a_1 \\end{align}$$'],
  ['pmain', 'The components of \\(-\\textbf{v}\\) is the same as \\(\\textbf{w}\\).'],
];
export default content;