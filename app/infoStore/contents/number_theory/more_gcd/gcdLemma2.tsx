export const title="If gcd(a, b) = 1 and c|(a+b), then (a, c) = 1 and (b, c) = 1";
const content = [
  ['h1', 'If gcd(a, b) = 1 And c|(a+b), Then (a, c) = 1 And (b, c) = 1'],
  ['pmain', 'Let \\(d=(a,c)\\). If \\(d|c\\), then \\(d|(a+b)\\), that means:'], 
  ['displayFormula', '$$\\begin{gather} kd=(a+b) \\wedge hd=a \\implies \\\\ (k-h)d=b \\implies d|b \\end{gather}$$'],
  ['pmain', 'If \\(d\\) divides both \\(a\\) and \\(b\\), then \\(d\\) is a multiple of \\((a, b)\\):'], 
  ['displayFormula', '$$\\begin{gather} d|(a,b) \\\\ (a, b) = 1 \\implies d=1 \\end{gather}$$'],
  ['pmain', 'This shows that \\((a, c) = 1\\). Similar proof for \\((b, c) = 1\\).'], 
];
export default content;
