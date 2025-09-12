export const title="Proof that ∑_{d|n, d>0} φ(d) = n";
const content = [
  ['h1', 'Proof That ∑_{d|n, d>0} φ(d) = n'],
  ['pmain', 'We need to prove that \\(\\sum_{d|n, d>0} \\phi(d) = n\\). Let\'s use \\(n=24\\) as an example. We will first start by a set \\(S_d\\):'],
  ['displayFormula', '\\[ S_d = \\{ m \\ | \\ [\\gcd(m,n)=d] \\wedge [1 \\le m \\le n] \\} \\]'],
  ['pmain', 'Let\'s use \\(n=24\\) as an example:'],
  ['displayFormula', '\\[\\begin{align} \
    S_1 &= \\{1, 5, 7, 11, 13, 17, 19, 23\\} \\quad &&  S_6 = \\{6, 18\\} \\\\ \
    S_2 &= \\{2, 10, 14, 22\\} && S_8 = \\{8, 16\\}\\\\ \
    S_3 &= \\{3, 9, 15, 21\\} && S_{12} = \\{12\\}\\\\ \
    S_4 &= \\{4, 20\\}  && S_{24} = \\{24 \\} \\\\ \
  \\end{align}\\]'],
  ['pmain', 'There are two things to notice here. Firstly, the integers in all these sets are only mentioned once and not repeated. This is true because the output of \\(\\gcd(m,n)\\) cannot be two or more integers, so all the \\(\\gcd\\)\'s exist in only one set, and not multiple sets.'],
  ['pmain', 'Secondly, all integers between 1 to \\(n\\) (inclusive) are mentioned. This is true because there will always be some \\(k\\), such that \\(1\\le k \\le n\\) and \\(\\gcd(m,n)=k\\), so \\(m\\) would belong to \\(S_k\\).'],
  ['pmain', 'If all the \\(S_d\\)\'s contain integers from 1  to \\(n\\), and all the integers are only mentioned once, then the length of all these sets together should be \\(n\\):'],
  ['displayFormula', '\\[ \\sum_{d|n, d>0} | S_d | = n\\]'],
  ['pmain', 'Since \\((m,n)=d\\) implies \\((\\frac{m}{d}, \\frac{n}{d})=1\\), we can rewrite the definition of \\(S_d\\) as:'],
  ['displayFormula', '\\[ S_d = \\left\\{ m \\ | \\ \\left[ \\gcd \\left( \\frac{m}{d}, \\frac{n}{d} \\right) = 1 \\right] \\wedge [1 \\le m \\le n] \\right\\} \\]'],
  ['pmain', 'Let\'s define another set \\(K_d\\), where \\(k=\\frac{m}{d}\\):'],
  ['displayFormula', '\\[ K_d = \\left\\{ k \\ | \\ \\left[ \\gcd \\left( k, \\frac{n}{d} \\right) = 1 \\right] \\wedge \\left[ 1 \\le k \\le \\frac{n}{d} \\right] \\right\\} \\]'],
  ['pmain', 'Let\'s see examples of this will \\(n=24\\):'],
  ['displayFormula', '\\[\\begin{align} \
    K_1 &= \\{1, 5, 7, 11, 13, 17, 19, 23\\} \\quad &&  K_6 = \\{1, 3\\} \\\\ \
    K_2 &= \\{1, 5, 7, 11\\} && K_8 = \\{1, 2\\}\\\\ \
    K_3 &= \\{1, 3, 5, 7\\} && K_{12} = \\{1\\}\\\\ \
    K_4 &= \\{1, 5\\}  && K_{24} = \\{1\\} \\\\ \
  \\end{align}\\]'],
  ['pmain', 'Since \\(K_d\\) represents all the positive integers \\(\\le n\\) that are coprime with \\(\\frac{n}{d}\\), then, by definition, \\(\\phi \\left( \\frac{n}{d} \\right) = | K_d |\\).'],
  ['pmain', 'Also, \\(| K_d| = | S_d |\\). This is true because if you divide all the elements in \\(S_d\\) by \\(d\\), you get \\(K_d\\). This is more clear if you see how we defined \\(K_d\\):'],
  ['displayFormula', '\\[\\begin{align} S_d &= \\{ m \\ | \\ [\\gcd(m,n)=d] \\wedge [1 \\le m \\le n] \\} \\\\ K_d &= \\left\\{ \\frac{m}{d} \\ | \\ \\left[ \\gcd \\left( \\frac{m}{d}, \\frac{n}{d} \\right) = 1 \\right] \\wedge \\left[ 1 \\le \\frac{m}{d} \\le \\frac{n}{d} \\right] \\right\\} \\end{align}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\sum_{d|n, d>0} | K_d | = \\sum_{d|n, d>0} \\phi \\left( \\frac{n}{d} \\right) = \\sum_{d|n, d>0} | S_d | = n\\]'],
  ['pmain', 'Let \\(d_1\\) and \\(d_2\\) be two integers that multiply to give \\(n\\). This means \\(\\frac{n}{d_1} = d_2\\) and \\(\\frac{n}{d_2} = d_1\\), which means dividing \\(n\\) by a divisor gives another divisor. Therefore, listing out all the values of \\(\\frac{n}{d}\\), then you are listing out \\(d\\) in reverse:'],
  ['displayFormula', '\\[\\begin{align} \
    24/1 &= 24 && 24/6 = 4 \\\\ \
    24/2 &= 12 && 24/8 = 3 \\\\ \
    24/3 &= 8 && 24/12 = 2 \\\\ \
    24/4 &= 6 && 24/24 = 1 \\\\ \
  \\end{align}\\]'],
  ['pmain', 'Since \\(\\frac{n}{d_1}=d_2\\), then \\(\\phi \\left( \\frac{n}{d_1} \\right) = \\phi(d_2) \\). This also means:'],
  ['displayFormula', '\\[ \\sum_{d|n, d>0} \\phi \\left( \\frac{n}{d} \\right) = \\sum_{d|n, d>0} \\phi(d)\\]'],
  ['pmain', 'Therefore:'],
  ['displayFormula', '\\[\\begin{gather}\\sum_{d|n, d>0} \\phi \\left( \\frac{n}{d} \\right) = n \\implies \\\\ \\sum_{d|n, d>0} \\phi(d) = n \\end{gather}\\]'],
];

export default content;
