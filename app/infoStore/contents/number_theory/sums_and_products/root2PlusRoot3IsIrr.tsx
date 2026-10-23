export const title="Proof that √2 + √3 is irrational";
const content = [
  ['h1', 'Proof That √2 + √3 Is Irrational'],
  ['pmain', 'We will need <a href="../prime_numbers/rootIsIntOrIrrational">this lemma</a> in our proof.'], 
  ['pmain', 'Let \\(x = \\sqrt{2} + \\sqrt{3}\\). Firstly, \\(x\\) cannot be an integer because \\(3 \\lt x \\lt 4\\). Secondly:'], 
  ['displayFormula', '$$\\begin{gather} x^2 = 2 + 2 \\sqrt{2}\\sqrt{3} + 3 \\\\ x^2 = 5 + 2 \\sqrt{6} \\\\ x^2 - 5 = 2\\sqrt{6} \\\\ x^4 - 10x^2 + 25 = 24 \\\\ x^4 - 10x^2 +1=0 \\end{gather}$$'],
  ['pmain', '<a href="../prime_numbers/rootIsIntOrIrrational">This lemma</a> tells us that \\(√2 + √3\\) is irrational.'], 
];
export default content;
