export const title="If gcd(a, m) = 1 And gcd(b, m) = 1, Then gcd(ab, m) = 1";
const content = [['h1', 'If gcd(a, m) = 1 And gcd(b, m) = 1, Then gcd(ab, m) = 1'], ['pmain', 'Since gcd(a, m) = 1 and gcd(b, m) = 1:'], ['displayFormula', '$$ax+my=1$$$$bw+mz=1$$'], ['pmain', 'Rearrange:'], ['displayFormula', '$$ax=1-my$$$$bw=1-mz$$'], ['pmain', 'Multiply them:'],
  ['displayFormula', '$$\\begin{align} (ax)(bw) & = (1-my)(1-mz) \\\\ & =(1-my-mz+m^2yz) \\end{align}$$'],
  ['pmain', 'Simplify:'],
  ['displayFormula', '$$ ab(xw)=1+m(-y-z+myz) $$$$ 1=ab(xw)+m(y+z-myz) $$'],
  ['pmain', 'Since 1 = ab(j)+m(k), then gcd(ab, m) = 1. As a corollary, we can also claim that \\((a,b)=1\\), then \\((a^c,b)=1\\), where \\(c\\) is any positive integer.']
];
export default content;