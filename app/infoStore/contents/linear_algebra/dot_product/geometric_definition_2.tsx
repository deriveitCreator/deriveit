export const title="(Dot product) Deriving the component-wise definition from the geometric definition";
const content = [
  ['h1', 'Deriving The Component-Wise Definition From The Geometric Definition'],
  ['pmain', 'Let vectors \\(\\textbf{v}\\) and \\(\\textbf{u}\\) be defined as follows:'], 
  ['displayFormula', '$$\\begin{gather} \\textbf{v} = v_1 \\textbf{i} +v_2 \\textbf{j}  + v_3 \\textbf{k} \\\\ \\textbf{u} = u_1 \\textbf{i} + u_2 \\textbf{j} + u_3 \\textbf{k} \\end{gather}$$'],
  ['pmain', 'The dot product \\(\\textbf{v} \\cdot \\textbf{u}\\) is defined as follows:'], 
  ['displayFormula', '$$\\begin{gather} \\textbf{u} \\cdot \\textbf{v} = \\Vert \\textbf{v} \\Vert \\ \\Vert \\textbf{u} \\Vert \\ \\cos(\\theta) \\\\ (v_1 \\textbf{i} +v_2 \\textbf{j}  + v_3 \\textbf{k}) \\cdot (u_1 \\textbf{i} + u_2 \\textbf{j} + u_3 \\textbf{k}) = \\Vert \\textbf{v} \\Vert \\ \\Vert \\textbf{u} \\Vert \\ \\cos(\\theta) \\end{gather}$$'],
  ['pmain', 'Since dot product is <a href="distributive_property_of_the_dot_product">distributive</a>:'], 
  ['displayFormula', '$$\\begin{align} \\Vert \\textbf{v} \\Vert \\ \\Vert \\textbf{u} \\Vert \\ \\cos(\\theta) = \
    & (v_1 \\textbf{i} \\cdot u_1 \\textbf{i}) + (v_1 \\textbf{i} \\cdot u_2 \\textbf{j}) + (v_1 \\textbf{i} \\cdot u_3 \\textbf{z}) \\\\ \
    & (v_2 \\textbf{j} \\cdot u_1 \\textbf{i}) + (v_2 \\textbf{j} \\cdot u_2 \\textbf{j}) + (v_2 \\textbf{j} \\cdot u_3 \\textbf{z}) \\\\ \
    & (v_3 \\textbf{k} \\cdot u_1 \\textbf{i}) + (v_3 \\textbf{k} \\cdot u_2 \\textbf{j}) + (v_3 \\textbf{k} \\cdot u_3 \\textbf{z}) \\end{align}$$'],
  ['pmain', 'Since dot product of perpendicular vectors are 0:'], 
  ['displayFormula', '$$\\begin{align} \\Vert \\textbf{v} \\Vert \\ \\Vert \\textbf{u} \\Vert \\ \\cos(\\theta) &= (v_1 \\textbf{i} \\cdot u_1 \\textbf{i}) + (v_2 \\textbf{j} \\cdot u_2 \\textbf{j}) + (v_3 \\textbf{k} \\cdot u_3 \\textbf{z}) \\\\ &= v_1u_1 (\\textbf{i} \\cdot  \\textbf{i}) + v_2 u_2 (\\textbf{j} \\cdot \\textbf{j}) + v_3 u_3 (\\textbf{k} \\cdot \\textbf{z}) \\end{align}$$'],
  ['pmain', 'Since <a href="./dot_product_with_itself">the square of a vector\'s magnitude is the dot product of that vector with itself</a>:'], 
  ['displayFormula', '$$\\begin{align} \\Vert \\textbf{v} \\Vert \\ \\Vert \\textbf{u} \\Vert \\ \\cos(\\theta) &= v_1u_1 (1^2) + v_2 u_2 (1^2) + v_3 u_3 (1^2) \\\\ &= v_1u_1 + v_2 u_2 + v_3 u_3 \\end{align}$$'],
];
export default content;