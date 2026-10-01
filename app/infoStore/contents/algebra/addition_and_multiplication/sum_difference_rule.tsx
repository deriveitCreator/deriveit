export const title="Proof That ∑(a±b) = ∑a ± ∑b (sum rule)";
const content = [
  ['h1', 'Proof That ∑(a<sub>i</sub>±b<sub>i</sub>) = ∑a<sub>i</sub> ± ∑b<sub>i</sub> (Sum Rule)'], 
  ['pmain', 'Consider the summation:'], 
  ['displayFormula', '\\[ \\sum_{i=1}^n (a_i+b_i) = a_1 + b_1 + a_2 + b_2 + \\cdots + a_{n-1} + b_{n-1} + a_n + b_n \\]'], 
  ['pmain', 'Grouping all the \\(a_i\\)\'s together and the \\(b_i\\)\'s together:'], 
  ['displayFormula', '\\[\\begin{align} \\sum_{i=1}^n (a_i+b_i) &= (a_1 + a_2 + \\cdots + a_{n-1} + a_n) + (b_1 + b_2 + \\cdots + b_{n-1} + b_n) \\\\ &= \\sum_{i=1}^n a_i+ \\sum_{i=1}^n b_i \\end{align}\\]'], 
  ['pmain', 'Similar reasoning can be used to show that \\(\\sum_{i=1}^n (a_i - b_i) = \\sum_{i=1}^n a_i - \\sum_{i=1}^n b_i \\).'], 
];
export default content;