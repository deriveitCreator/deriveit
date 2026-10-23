export const title="Swapping the order of finite summation";
const content = [
  ['h1', 'Swapping The Order Of Finite Summation'], 
  ['pmain', 'Consider the summation:'], 
  ['displayFormula', '\\begin{align} \\sum_{i=1}^n \\sum_{j=1}^k a_ib_j = \\ & a_1 b_1 + a_1 b_2 + \\cdots + a_1 b_k + \\\\ & a_2 b_1 + a_2 b_2 +\\cdots + a_2 b_k + \\\\ & \\quad \\vdots \\\\ & a_n b_1 + a_n b_2 + \\cdots + a_n b_k \\end{align}'], 
  ['pmain', 'Since addition is commutative, we can group terms that share the same \\(b_j\\):'], 
  ['displayFormula', '\\begin{align} \\sum_{i=1}^n \\sum_{j=1}^k a_ib_j = \\ & a_1 b_1 + a_2 b_1 + \\cdots + a_n b_1 + \\\\ & a_1 b_2 + a_2 b_2 + \\cdots + a_n b_2 + \\\\ & \\quad \\vdots \\\\ & a_1 b_k + a_2 b_k + \\cdots + a_n b_k \\\\ = & \\sum_{j=1}^k\\sum_{i=1}^n a_ib_j\\end{align}'], 
];
export default content;