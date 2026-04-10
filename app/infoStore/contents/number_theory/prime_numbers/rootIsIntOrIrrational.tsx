export const title="Root of x^n + c_(n-1) x^(n-1) + ... + c_1 x + c_0 is either an integer or an irrational where all c_i's are integers";
const content = [
  ['h1', 'Root Of x<sup>n</sup>+c<sub>n-1</sub>x<sup>n-1</sup>+...+c<sub>1</sub>x+c<sub>0</sub> Is Either An Integer Or An Irrational Where All c<sub>i</sub>\'s are integers'], 
  ['pmain', 'Let \\(r\\) be the root of the polynomial \\(x^n + c_{n-1}x^{n-1} + \\cdots + c_1 x + c_0\\), where \\(c_0, c_1, \\ldots, c_{n-1}\\) are integers, and let \\(r = a/b\\), where \\(a/b\\) is a fraction in it\'s smallest form (where \\(a\\) and \\(b\\) are relatively prime integers), and where \\(|b| \\gt 1\\).'],
  ['pmain', 'If \\(r\\) is the root:'],
  ['displayFormula', '$$\\begin{gather} (a/b)^n + c_{n-1}(a/b)^{n-1} + \\cdots + c_1 (a/b) + c_0 = 0 \\\\ a^n + c_{n-1}a^{n-1}b + \\cdots + c_1 ab^{n-1} + c_0 b^n = 0 \\\\ a^n = b * -(c_{n-1}a^{n-1} + \\cdots + c_1 ab^{n-2} + c_0 b^{n-1}) \\\\ a^n = bm \\end{gather}$$'],
  ['pmain', 'We see that \\(b|a^n\\). Since \\(|b| \\gt 1\\), then \\(b\\) has at least one prime divisor \\(p\\). If \\(p|b\\), then \\(p|a^n\\). All integers, including \\(a\\), has a unique prime factorization:'],
  ['displayFormula', '$$\\begin{gather} a = p_1^{e_1}p_2^{e_2} \\ldots p_n^{e_n} \\\\ a^n = p_1^{ne_1}p_2^{ne_2} \\ldots p_n^{ne_n} \\end{gather}$$'],
  ['pmain', 'If \\(p|a^n\\), then \\(p\\) has to be one of \\(p_1,p_2,\\ldots,p_n\\) which means \\(p|a\\). If \\(p|b\\) and \\(p|a\\), then \\((a,b)\\gt 1\\), which is a contradiction. Therefore, \\(r\\) cannot be of the form \\(a/b\\) where \\(|b| \\gt 1\\). Either \\(r\\) is irrational or an integer \\((|b|=1)\\).'],
];

export default content;