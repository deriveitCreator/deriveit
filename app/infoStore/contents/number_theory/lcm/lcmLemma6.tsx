export const title="Proof that [(a, b), c] = ([a, c], [b, c]) where a, b, c are positive integers";
const content = [
  ['h1', 'Proof That [(a, b), c] = ([a, c], [b, c]) Where a, b, c are positive integers'],
  ['pmain', 'According to the fundamental theorem of arithmetic:'],
  ['displayFormula', '$$ \\begin{align} a &= {p_1}^{x_1} {p_2}^{x_2} {p_3}^{x_3} \\cdots {p_n}^{x_n} \\\\ b &= {p_1}^{y_1} {p_2}^{y_2} {p_3}^{y_3} \\cdots {p_n}^{y_n}  \\\\ (a,b) &= {p_1}^{\\min(x_1,y_1)} {p_2}^{\\min(x_2,y_2)} {p_3}^{\\min(x_3,y_3)} \\cdots{p_n}^{\\min(x_n,y_n)} \\\\ [a,b] &= {p_1}^{\\max(x_1,y_1)} {p_2}^{\\max(x_2,y_2)} {p_3}^{\\max(x_3,y_3)} \\cdots{p_n}^{\\max(x_n,y_n)} \\\\ c &= {p_1}^{z_1} {p_2}^{z_2} {p_3}^{z_3} \\cdots {p_n}^{z_n} \\end{align} $$'],
  ['pmain', 'One of the properties of the \\(\\min\\) and \\(\\max\\) is \\(\\max(\\min(m,n), k) = \\min(\\max(m,k), \\max(n, k))\\). For example:'],
  ['displayFormula', '$$\\begin{gather} \\max(\\min(1,3), 5) = \\min(\\max(1,5), \\max(3, 5)) = 5 \\\\ \\max(\\min(8,9), 5) = \\min(\\max(8,5), \\max(9, 5)) = 8 \\\\ \\max(\\min(4,6), 5) = \\min(\\max(4,5), \\max(6, 5)) = 5 \\end{gather}$$'],
  ['pmain', 'By definition of \\(\\operatorname{lcm}\\), we can write \\([(a,b),c]\\) as:'],
  ['displayFormula', '$$\\begin{align} [(a,b), c] &= p_1^{\\max(\\min(x_1,y_1), z_1)} p_2^{\\max(\\min(x_2,y_2), z_2)} \\cdots p_n^{\\max(\\min(x_n,y_n),z_n)} \\\\ &= p_1^{\\min(\\max(x_1,z_1), \\max(y_1,z_1))} p_2^{\\min(\\max(x_2,z_2), \\max(y_2,z_2))} \\cdots p_n^{\\min(\\max(x_n,z_n), \\max(y_n,z_n))} \\end{align}$$'],
  ['pmain', 'However:'],
  ['displayFormula', '$$ \\begin{align} [a,c] &= p_1^{\\max(x_1,z_1)} p_2^{\\max(x_2,z_2)} p_3^{\\max(x_3,z_3)} \\cdots p_n^{\\max(x_n,z_n)} \\\\ [b,c] &= p_1^{\\max(y_1,z_1)} p_2^{\\max(y_2,z_2)} p_3^{\\max(y_3,z_3)} \\cdots p_n^{\\max(y_n,z_n)} \\end{align} $$'],
  ['pmain', 'By definition of \\(\\gcd\\):'],
  ['displayFormula', '$$ ([a,c], [b,c]) = p_1^{\\min(\\max(x_1,z_1), \\max(y_1,z_1))} p_2^{\\min(\\max(x_2,z_2), \\max(y_2,z_2))} \\cdots p_n^{\\min(\\max(x_n,z_n), \\max(y_n,z_n))} $$'],
  ['pmain', 'This shows that \\([(a, b), c] = ([a, c], [b, c])\\). A similar proof can be made to show that \\(([a, b], c) = [(a, c), (b, c)]\\).'],
];
export default content;