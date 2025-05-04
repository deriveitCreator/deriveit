export const title="Proof that φ(p^a) = p^a - p^(a-1)";
const content = [
  ['h1', 'Proof that φ(p<sup>a</sup>) = p<sup>a</sup> - p<sup>a-1</sup>'],
  ['pmain', 'The Euler phi function \\(φ(n)\\) counts the number of integers in \\( \\{1,2,\\ldots,n\\}\\) that are coprime to \\(n\\). For example \\(φ(9)=6\\) because in the set \\(\\{1,2,3,4,5,6,7,8,9\\}\\), there are 6 integers that are coprime to 9. Those integers being \\(1\\), \\(2\\), \\(4\\), \\(5\\), \\(7\\) and \\(8\\).'],
  ['pmain', 'Let \\(a\\) be some positive integer and let \\(p\\) be a prime. We need to find a formula for \\(\\phi (p^a)\\). Thats means we need to find a formula for the number of integers in the set \\(\\{1,2,\\ldots,p^a\\}\\) that are coprime to \\(p^a\\).'],
  ['pmain', 'For \\(\\phi(p)\\), the formula is simple, it\'s \\(\\phi(p)=p-1\\), because every integer in \\(\\{ 1,2,\\ldots,p \\} \\) other than \\(p\\) itself is coprime to \\(p\\). Now consider the set below, where \\(n\\) is some positive integer:'],
  ['displayFormula', '\\[ \\{ 1,2, \\ldots, p ,\\ldots,2p,\\ldots,3p,\\ldots,np \\}\\]'],
  ['pmain', 'How many integers are coprime to \\(p\\)? According to <a href="../more_gcd/gcdLemma1">this lemma</a>, if \\((p,i)=1\\), then \\((p,kp+i)=1\\), where \\(i\\) and \\(k\\) are any positive integers. This means if \\((p,2)=1\\), then \\((p,p+2)=1\\) and \\((p,2p+2)=1\\). This means every integer between \\(p\\) and \\(2p\\), like \\(p+1\\), \\(p+2\\), \\(p+3\\), and so on, are coprime to \\(p\\). The same argument can be applied to every integer between \\(2p\\) and \\(3p\\). Every integer below, other than the ones in the last row, are coprime to \\(p\\):'],
  ['displayFormula', '\\[ \\begin{align} &1 &&p+1 &&2p+1 &&\\cdots &&(n-1)p+1 \\\\ &2 &&p+2 &&2p+2 &&\\cdots &&(n-1)p+2 \\\\ &\\vdots &&\\vdots &&\\vdots &&\\cdots &&\\vdots \\\\ &p &&2p &&3p &&\\cdots &&np\\end{align} \\]'],
  ['pmain', 'Now let \\(n=p^{a-1}\\):'],
  ['displayFormula', '\\[ \\begin{align} &1 &&p+1 &&2p+1 &&\\cdots &&(p^{a-1}-1)p+1 \\\\ &2 &&p+2 &&2p+2 &&\\cdots &&(p^{a-1}-1)p+2 \\\\ &\\vdots &&\\vdots &&\\vdots &&\\cdots &&\\vdots \\\\ &p &&2p &&3p &&\\cdots &&p^a\\end{align} \\]'],
  ['pmain', 'All of the integers above, except for the ones in the last row are coprime to \\(p\\). According to <a href="../more_gcd/gcdLemma18">this lemma</a>, if \\((p,i)=1\\), then \\((p^a,i)=1\\). This means all of the integers above, except for the ones in the last row are also coprime to \\(p^a\\). As for the last row, since all the integers are divisible by \\(p\\), and since \\(p^a\\) is divisible by \\(p\\) as well, then \\(p^a\\) is not coprime to any of them.'],
  ['pmain', 'So how many integers are coprime to \\(p^a\\). Consider the table of numbers above. There are \\(p-1\\) integers in every column if you exclude the last row. Since \\(n=p^{a-1}\\), there are \\(p^{a-1}\\) columns in total. This means the total number of integers that are coprime to \\(p^a\\) is \\([(p-1) * p^{a-1}]\\). Therefore:'],
  ['displayFormula', '\\[ \\begin{align} \\phi(p^a) &= (p-1) * p^{a-1} \\\\ &= p^a - p^{a-1}\\end{align} \\]'],
];

export default content;