export const title="Finding the volume of a parallelepiped formed by the three vectors";
const content = [
  ['h1', 'Finding The Volume Of A Parallelepiped Formed By Three vectors'],
  ['pmain', 'The area of a parallelogram formed by two vectors \\(\\textbf{v}\\) and \\(\\textbf{w}\\) is:'],
  ['displayFormula', '$$ \\text{Area}= \\Vert \\textbf{v} \\times \\textbf{w} \\Vert$$'],
  ['pmain', 'The volume of a parallelepiped is the area of the base times the height, and the height can be found as the projection of the three vector onto the cross product of the other two:'],
  ['figure', ['p2.jpeg','Image from openstax.org (Calculus 3)']],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ \\text{Volume}= \\Vert \\operatorname{proj}_{\\textbf{w} \\times \\textbf{v}} (\\textbf{u})\\Vert \\ \\Vert \\textbf{w} \\times \\textbf{v} \\Vert$$'],
  ['pmain', 'According to the <a href="../dot_product/projection_of_a_vector_onto_another">formula of the magnitude projection</a>:'],
  ['displayFormula', '$$ \\Vert \\operatorname{proj}_{\\textbf{w} \\times \\textbf{v}} \\Vert= \\frac{| \\textbf{u} \\cdot (\\textbf{w} \\times \\textbf{v}) |}{\\Vert \\textbf{w} \\times \\textbf{v} \\Vert}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ \\begin{align} \\text{Volume} &= \\left( \\frac{| \\textbf{u} \\cdot (\\textbf{w} \\times \\textbf{v}) |}{\\Vert \\textbf{w} \\times \\textbf{v} \\Vert} \\right) \\Vert \\textbf{w} \\times \\textbf{v} \\Vert \\\\ &= | \\textbf{u} \\cdot (\\textbf{w} \\times \\textbf{v}) | \\end{align}$$'],
];
export default content;