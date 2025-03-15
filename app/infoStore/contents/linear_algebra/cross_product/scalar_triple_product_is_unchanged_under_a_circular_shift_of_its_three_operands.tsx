export const title="Scalar triple product is unchanged under a circular shift of its three operands";
const content = [
  ['h1', 'Scalar Triple Product Is Unchanged Under A Circular Shift Of Its Three Operands'],
  ['pmain', 'Let vectors \\(\\textbf{a}\\), \\(\\textbf{b}\\) and \\(\\textbf{u}\\) be defined as follows:'], 
  ['displayFormula', '$$ \\textbf{a} = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{bmatrix} \\quad \\textbf{b} = \\begin{bmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{bmatrix} \\textbf{u} = \\begin{bmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{bmatrix}$$'],
  ['pmain', 'The cross product of \\(\\textbf{a} \\times \\textbf{b}\\) is:'], 
  ['displayFormula', '$$\\textbf{a} \\times \\textbf{b} = \\langle a_2b_3 - a_3b_2, -(a_1b_3 - a_3b_1), a_1b_2 - a_2b_1 \\rangle$$'],
  ['pmain', 'That means \\(\\textbf{u} \\cdot (\\textbf{a} \\times \\textbf{b})\\):'],
  ['displayFormula', '$$\\textbf{u} \\cdot(\\textbf{a} \\times \\textbf{b}) = u_1a_2b_3 - u_1a_3b_2 -u_2a_1b_3 + u_2a_3b_1 + u_3a_1b_2 - u_3a_2b_1 $$'],
  ['pmain', 'We can factor out \\(b_i\\) from each of them:'],
  ['displayFormula', '$$\\textbf{u} \\cdot(\\textbf{a} \\times \\textbf{b}) = (u_1a_2-u_2a_1)b_3 + (- u_1a_3 + u_3a_1)b_2 + (u_2a_3 - u_3a_2)b_1 $$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '$$\\begin{align}\\textbf{u} \\cdot(\\textbf{a} \\times \\textbf{b}) &= (u_2a_3 - u_3a_2)b_1 - (u_1a_3 - u_3a_1)b_2 +(u_1a_2-u_2a_1)b_3 \\\\ &= \\langle u_2a_3 - u_3a_2, - (u_1a_3 - u_3a_1), u_1a_2-u_2a_1 \\rangle \\textbf{b} \\\\ &= (\\textbf{u} \\times \\textbf{a}) \\cdot \\textbf{b} \\end{align}$$'],
  ['pmain', 'Using the <a href="../doct_product/commutative_property_of_the_dot_product">commutative property of the dot product</a>, we can claim that \\(\\textbf{b} \\cdot (\\textbf{u} \\times \\textbf{a})\\).'],
  ['pmain', 'Had we factored out \\(a_i\\) from each of them:'],
  ['displayFormula', '$$\\textbf{u} \\cdot(\\textbf{a} \\times \\textbf{b}) = (u_1b_3 - u_3b_1)a_2 + (- u_1b_2 + u_2b_1)a_3 +(-u_2b_3 + u_3b_2)a_1 $$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '$$\\begin{align} \\textbf{u} \\cdot(\\textbf{a} \\times \\textbf{b}) &= (b_2u_3-b_3u_2)a_1 - (- b_1u_3 + b_3u_1)a_2 + (b_1u_2- b_2u_1)a_3 \\\\ &= (\\textbf{b} \\times \\textbf{u}) \\cdot \\textbf{a}\\end{align}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\textbf{u} \\cdot(\\textbf{a} \\times \\textbf{b})= \\textbf{b} \\cdot (\\textbf{u} \\times \\textbf{a}) = \\textbf{a} \\cdot (\\textbf{b} \\times \\textbf{u}) $$'],
];
export default content;