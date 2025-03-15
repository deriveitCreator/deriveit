export const title="Distributive property of the dot product";
const content = [
  ['h1', 'Distributive Property Of The Dot Product'],
  ['pmain', 'Let vectors \\(\\textbf{v}\\), \\(\\textbf{u}\\) and \\(\\textbf{w}\\) be defined as follows:'], 
  ['displayFormula', '$$ \\textbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{bmatrix} \\quad \\textbf{u} = \\begin{bmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{bmatrix} \\quad \\textbf{w} = \\begin{bmatrix} w_1 \\\\ w_2 \\\\ w_3 \\end{bmatrix} $$'],
  ['pmain', 'The addition \\(\\textbf{v} \\cdot \\textbf{w}\\) is defined as follows:'], 
  ['displayFormula', '$$ \\textbf{v} + \\textbf{w} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{bmatrix} + \\begin{bmatrix} w_1 \\\\ w_2 \\\\ w_3 \\end{bmatrix} = \\begin{bmatrix} v_1 +w_1 \\\\ v_2+w_2 \\\\ v_3+w_3 \\end{bmatrix}$$'],
  ['pmain', 'The dot product \\(\\textbf{u} \\cdot (\\textbf{v} + \\textbf{w})\\) is defined as follows:'], 
  ['displayFormula', '$$ \\textbf{u} \\cdot (\\textbf{v} + \\textbf{w}) = u_1 (v_1 +w_1) + u_2 (v_2+w_2) + u_3 (v_3+w_3) $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ \\begin{align} \\textbf{u} \\cdot (\\textbf{v} + \\textbf{w}) &= u_1v_1 + u_1w_1 + u_2v_2+u_2w_2 + u_3v_3+u_3w_3 \\\\ &=( u_1v_1 + u_2v_2 + u_3v_3)+ (u_1w_1 +u_2w_2 +u_3w_3) \\end{align} $$'],
  ['pmain', 'By definition of the dot product:'],
  ['displayFormula', '$$ (u_1v_1 + u_2v_2 + u_3v_3)+ (u_1w_1 +u_2w_2 +u_3w_3 )= (\\textbf{u} \\cdot \\textbf{v}) + (\\textbf{u} \\cdot \\textbf{w}) $$'],
  ['pmain', 'Therefore, \\(\\textbf{u} \\cdot (\\textbf{v} + \\textbf{w})=(\\textbf{u} \\cdot \\textbf{v}) + (\\textbf{u} \\cdot \\textbf{w}) \\). A similar proof can be used for other dimensions.'],
];
export default content;