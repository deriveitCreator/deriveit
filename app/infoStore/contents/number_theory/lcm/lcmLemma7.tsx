export const title="Proof that [a, b, c] = abc(a,b,c)/(a,b)(a,c)(b,c) where a, b, c are positive integers";
const content = [
  ['h1', 'Proof That [a, b, c] = abc(a,b,c)/(a,b)(a,c)(b,c) Where a, b, c are positive integers'],
  ['pmain', 'For our proof, we will use this property:'],
  ['displayFormula', '$$ \\max(a,b,c)=a+b+c-\\min(a,b)-\\min(a,c)-\\min(b,c) + \\min(a,b,c) $$'],
  ['pmain', 'According to the fundamental theorem of arithmetic:'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} {p_2}^{x_2} {p_3}^{x_3} \\cdots {p_n}^{x_n} \\\\ b &= {p_1}^{y_1} {p_2}^{y_2} {p_3}^{y_3} \\cdots {p_n}^{y_n} \\\\ c &= {p_1}^{z_1} {p_2}^{z_2} {p_3}^{z_3} \\cdots {p_n}^{z_n} \\\\ (a,b) &= {p_1}^{\\min(x_1,y_1)} {p_2}^{\\min(x_2,y_2)} {p_3}^{\\min(x_3,y_3)} \\cdots{p_n}^{\\min(x_n,y_n)} \\\\ (a,c) &= {p_1}^{\\min(x_1,z_1)} {p_2}^{\\min(x_2,z_2)} {p_3}^{\\min(x_3,z_3)} \\cdots{p_n}^{\\min(x_n,z_n)} \\\\ (b,c) &= {p_1}^{\\min(y_1,z_1)} {p_2}^{\\min(y_2,z_2)} {p_3}^{\\min(y_3,z_3)} \\cdots {p_n}^{\\min(y_n,z_n)} \\end{align} $$'],
  ['pmain', 'Also:'],
  ['displayFormula', '$$ \\begin{align} abc &= {p_1}^{x_1+y_1+z_1} {p_2}^{x_2+y_2+z_2} {p_3}^{x_3+y_3+z_3} \\cdots {p_n}^{x_n+y_n+z_n} \\\\ (a,b,c) &= {p_1}^{\\min(x_1,y_1,z_1)} {p_2}^{\\min(x_2,y_2,z_2)} {p_3}^{\\min(x_3,y_3,z_3)} \\cdots{p_n}^{\\min(x_n,y_n,z_n)} \\\\ [a,b,c] &= {p_1}^{\\max(x_1,y_1,z_1)} {p_2}^{\\max(x_2,y_2,z_2)} {p_3}^{\\max(x_3,y_3,z_3)} \\cdots{p_n}^{\\max(x_n,y_n,z_n)}  \\end{align} $$'],
  ['pmain', 'If we multiply \\(abc\\) and \\((a,b,c)\\):'],
  ['displayFormula', '$$\\begin{align} abc(a,b,c) = & \\ ({p_1}^{x_1+y_1+z_1 } {p_2}^{x_2+y_2+z_2} {p_3}^{x_3+y_3+z_3} \\cdots {p_n}^{x_n+y_n+z_n}) *\\\\ & ({p_1}^{\\min(x_1,y_1,z_1)} {p_2}^{\\min(x_2,y_2,z_2)} {p_3}^{\\min(x_3,y_3,z_3)} \\cdots{p_n}^{\\min(x_n,y_n,z_n)}) \\\\ = & \\ {p_1}^{x_1+y_1+z_1 +\\min(x_1+y_1+z_1)} {p_2}^{x_2+y_2+z_2+\\min(x_2+y_2+z_2)} \\cdots {p_n}^{x_n+y_n+z_n+\\min(x_n+y_n+z_n)} \\end{align}$$'],
  ['pmain', 'If we multiply \\((a,b)\\), \\((a,c)\\) and \\((b,c)\\):'],
  ['displayFormula', '$$(a,b)(a,c)(b,c) = {p_1}^{\\min(x_1,y_1)+\\min(x_1,z_1)+\\min(y_1,z_1)} {p_2}^{\\min(x_2,y_2)+\\min(x_2,z_2)+\\min(y_2,z_2)} \\cdots {p_n}^{\\min(x_n,y_n)+\\min(x_n,z_n)+\\min(y_n,z_n)} $$'],
  ['pmain', 'Now we do \\(abc(a,b,c)/(a,b)(a,c)(b,c)\\):'],
  ['displayFormula', '$$\\frac{abc(a,b,c)}{(a,b)(a,c)(b,c)} = \\frac{{p_1}^{x_1+y_1+z_1 +\\min(x_1+y_1+z_1)} {p_2}^{x_2+y_2+z_2+\\min(x_2+y_2+z_2)} \\cdots {p_n}^{x_n+y_n+z_n+\\min(x_n+y_n+z_n)}}{{p_1}^{\\min(x_1,y_1)+\\min(x_1,z_1)+\\min(y_1,z_1)} {p_2}^{\\min(x_2,y_2)+\\min(x_2,z_2)+\\min(y_2,z_2)} \\cdots {p_n}^{\\min(x_n,y_n)+\\min(x_n,z_n)+\\min(y_n,z_n)}} $$'],
  ['pmain', 'Simplifying:'],
  ['displayFormula', '$$\\begin{align} \\frac{abc(a,b,c)}{(a,b)(a,c)(b,c)} = & \\ {p_1}^{x_1+y_1+z_1 +\\min(x_1+y_1+z_1)-\\min(x_1,y_1)-\\min(x_1,z_1)-\\min(y_1,z_1)} * \\\\ & \\ {p_2}^{x_2+y_2+z_2 +\\min(x_2+y_2+z_2)-\\min(x_2,y_2)-\\min(x_2,z_2)-\\min(y_2,z_2)} * \\cdots * \\\\ & \\ {p_n}^{x_n+y_n+z_n +\\min(x_n+y_n+z_n)-\\min(x_n,y_n)-\\min(x_n,z_n)-\\min(y_n,z_n)} \\end{align}$$'],
  ['pmain', 'Using the property mentioned above:'],
  ['displayFormula', '$$ \\frac{abc(a,b,c)}{(a,b)(a,c)(b,c)} = {p_1}^{\\max(x_1,y_1,z_1)} * {p_2}^{\\max(x_2,y_2,z_2)} * \\cdots * {p_n}^{\\max(x_n,y_n,z_n)} $$'],
  ['pmain', 'This is the same as \\([a,b,c]\\).'],
];
export default content;