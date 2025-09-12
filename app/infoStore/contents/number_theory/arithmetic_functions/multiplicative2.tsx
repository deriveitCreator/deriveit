export const title="The Euler phi function is multiplicative";
const content = [
  ['h1', 'The Euler Phi Function Is Multiplicative'],
  ['pmain', 'The Euler phi function is multiplicative if \\((m,n)=1\\) implies \\(\\phi(mn) = \\phi(m)\\phi(n)\\). Here is a list of integer from 1 to \\(mn\\):'],
  ['displayFormula', '\\[ \\begin{align} &1 &&m+1 &&2m+1 &&\\cdots &&(n-1)m+1 \\\\ &2 &&m+2 &&2m+2 &&\\cdots &&(n-1)m+2 \\\\ &\\vdots &&\\vdots &&\\vdots &&\\cdots &&\\vdots \\\\ &i &&m+i &&2m+i &&\\cdots &&(n-1)m+i \\\\ &\\vdots &&\\vdots &&\\vdots &&\\cdots &&\\vdots \\\\ &m &&2m &&3m &&\\cdots &&mn\\end{align} \\]'],
  ['pmain', 'There are \\(\\phi(m)\\) integers in the set \\(\\{1,2,\\ldots, m\\}\\) that are coprime to \\(m\\). If \\(i\\) is coprime, then all integers in the \\(i\\)th row are also coprime. In other words:'],
  ['displayFormula', '\\[ (m,i)=1 \\implies (m,km+i)=1 \\text{ where } k \\text{ is any integer} \\]'],
  ['pmain', '<a href="../more_gcd/gcdLemma1">See this lemma</a> for the proof of this. Also, according to <a href="../modular_arithmetic/modLemma13">this lemma</a>, all rows form a complete residue system modulo \\(n\\), and in a complete residue system modulo \\(n\\), there are \\(\\phi(n)\\) integers that are coprime with \\(n\\). Therefore, if there are \\(\\phi(m)\\) rows where all integers are coprime with \\(m\\), and in each of these rows, there are \\(\\phi(n)\\) integers that are coprime with \\(n\\), then there are \\(\\phi(m)*\\phi(n)\\) integers in the entire table that are coprime with both \\(m\\) and \\(n\\).'],
  ['pmain', 'Finally, according to <a href="../more_gcd/gcdLemma18">this lemma</a>, if \\((x,m)=1\\) and \\((x,n)=1\\), then \\((x,mn)=1\\). This means all the integers coprime with both \\(m\\) and \\(n\\) are also coprime with \\(mn\\). Since there are \\(\\phi(m)*\\phi(n)\\) integers that are coprime with both \\(m\\) and \\(n\\), and hence also coprime with \\(mn\\), then \\(\\phi(mn)=\\phi(m)*\\phi(n)\\).'],
];

export default content;