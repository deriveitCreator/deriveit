export const title="Proof of the balanced ternary expansion";
const content = [
  ['h1', 'Proof of the balanced ternary expansion'],
  ["pmain","Understanding this proof would be easier of you read the <a href='./Basis_Representation_Theorem'>Basis Representation Theorem</a> proof. Let \\(n\\) be the positive integer we are trying to expand. According to the division algorithm, if we divide \\(n\\) by 3:"],
  ["displayFormula","$$ n = q_0 3 + r_0 $$"],
  ["pmain","where \\(r_0\\) and \\(q_0\\) are unique integers and \\(r_0\\) is less than \\(3\\), so \\(r_0\\) can be 0, 1 or 2. Instead of \\(q_0\\) and \\(r_0\\), we will use \\(c_0\\) and \\(a_0\\), where \\(c_0 = q_0\\) and \\(a_0 = r_0\\) when \\(a_0\\) is 0 or 1. In the case where \\(r_0 = 2\\), \\(c_0 = q_0 + 3\\), and therefore \\(a_0 = -1\\). This means \\(a_0\\) is either -1, 0 or 1:"],
  ["displayFormula","$$ n = c_0 3 + a_0 $$"],
  ["pmain","Similarly:"],
  ["displayFormula","$$ c_0 = c_1 3 + a_1 $$"],
  ["pmain","where \\(a_1\\) is -1, 0 or 1, and \\(c_1\\) is either the qoutient or the sum of 3 and the qoutient. Repeating this process until \\(c_k\\), where \\(c_k = 0\\):"],
  ["displayFormula","$$\\begin{gather} c_1 = c_2 3 + a_2 \\\\ c_2 = c_3 3 + a_3 \\\\ \\vdots \\\\ c_{k-1} = 0 * 3 + a_k \\end{gather}$$"],
  ["pmain","Replacing \\(c_0\\) in the first equation we get:"],
  ["displayFormula","$$\\begin{gather} n = (c_1 3 + a_1) 3 + a_0 \\\\ n = c_1 3^2 + a_1 3 + a_0\\end{gather}$$"],
  ["pmain","Replacing \\(c_1\\) we get:"],
  ["displayFormula","$$\\begin{gather} n = (c_2 3 + a_2)3^2 + a_1 3 + a_0 \\\\ n = c_2 3^3 + a_2 3^2 + a_1 3 + a_0 \\end{gather}$$"],
  ["pmain","Doing this repeatedly:"],
  ["displayFormula","$$ n = a_k 3^k + a_{k-1} 3^{k-1} + \\cdots + a_2 3^2 + a_1 3 + a_0 $$"],
  ["pmain","In every \\(a_j\\) for \\(j=0,1,\\ldots,k\\), the value for \\(a_j\\) is either -1, 0, 1."],
];
export default content;