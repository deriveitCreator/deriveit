export const title="Proof that ax + by = c has infinitely many integral solutions if and only if (a, b)|c";
const content = [
  ['h1', 'Proof That ax + by = c Has Infinitely Many Integral Solutions If And Only If (a, b)|c'],
  ['pmain', 'Let \\(d = (a,b)\\). If \\(d\\) divides \\(a\\) and \\(b\\), then <a href="./every_linear_combination">it can divide any linear combination</a>. If \\(x\\) and \\(y\\) are integers, then \\(ax+by\\) is a linear combination of \\(a\\) and \\(b\\), which means \\(d\\) can divide it. In other words, \\(d|c\\). The contrapositive of this is that if \\(d \\nmid c\\), then \\(x\\) and \\(y\\) cannot be integers.'], 
  ['pmain', 'Now suppose \\(d|c\\). Let \\(e\\) be an integer such that \\(de=c\\). Since \\(d = (a,b)\\), then \\(d\\) is the <a href="./linear_combination_smallest_gcd">smallest positive linear combination</a>. Let there be integers \\(s\\) and \\(t\\) such that \\(d=as+bt\\). If we multiply both sides by \\(e\\), then:'], 
  ['displayFormula', '$$\\begin{gather} d = as + bt \\\\ de = ase + bte \\\\ c = a(se) + b(te) \\end{gather}$$'],
  ['pmain', 'This means we have one solution for \\(x\\) and \\(y\\). Let\'s call them \\(x_0\\) and \\(y_0\\): \\(x_0=se\\) and \\(y_0=te\\). This means:'], 
  ['displayFormula', '$$\\begin{gather} ax_0 + by_0 = c \\end{gather}$$'],
  ['pmain', 'However, we can get infinite solutions: \\(x=x_0+bm\\) and \\(y=y_0-am\\), where \\(m\\) is an integer. This works because:'], 
  ['displayFormula', '$$\\begin{align} ax + by &= \\\\ a(x_0+bm) + b(y_0-am) &= \\\\ ax_0 + abm + by_0 - abm &= \\\\ ax_0 + by_0 &= c \\end{align}$$'],
  ['pmain', 'Since \\(b/d\\) and \\(a/d\\) are integers and smaller than \\(b\\) and \\(a\\) respectively, then we can let \\(x=x_0+\\frac{b}{d}m\\) and \\(y=y_0-\\frac{a}{d}m\\) to get more solutions.'], 
  ['displayFormula', '$$\\begin{align} ax + by &= \\\\ a \\left( x_0+\\frac{b}{d}m \\right) + b \\left( y_0-\\frac{a}{d}m \\right) &= \\\\ ax_0 + \\frac{ab}{d}m + by_0 - \\frac{ab}{d}m &= \\\\ ax_0 + by_0 &= c \\end{align}$$'],
  ['pmain', 'We have shown that there are either no solutions (when \\(d \\nmid c\\)) or there are infinite solutions (when \\(d | c\\)). Now we are going to prove that if there are infinite solutions, then they are all of the form \\(x=x_0+\\frac{b}{d}m\\) and \\(y=y_0-\\frac{a}{d}m\\).'], 
  ['pmain', 'Let \\(x=x_0\\) and \\(y=y_0\\) be one of our solutions. This means:'], 
  ['displayFormula', '$$\\begin{gather} (ax + by)-(ax_0 + by_0) = 0 \\\\ a(x-x_0) + b(y-y_0) = 0 \\\\ a(x-x_0) = b(y_0-y) \\end{gather}$$'],
  ['pmain', 'Divding both sides by \\(d\\):'], 
  ['displayFormula', '$$\\begin{gather} (a/d)(x-x_0) = (b/d)(y_0-y) \\\\ (a/d)| (b/d)(y_0-y) \\end{gather}$$'],
  ['pmain', 'Since \\((a/d,b/d)=1\\), then \\((a/d)|(y_0-y)\\), which means there exists an integer \\(n\\) such that \\((a/d)n =(y_0-y)\\). This means:'], 
  ['displayFormula', '$$\\begin{gather} (a/d)n = (y_0 - y) \\\\ y = y_0  - (a/d)n \\end{gather}$$'],
  ['pmain', 'Now putting this in \\(a(x-x_0) = b(y_0-y)\\):'], 
  ['displayFormula', '$$\\begin{gather} a(x-x_0) = b(a/d)n \\\\ x-x_0 = (b/d)n \\\\ x = x_0 + (b/d)n \\end{gather}$$'],
  ['pmain', 'This shows that if \\(x=x_0\\) and \\(y=y_0\\), then the other solutions are of the form \\(x = x_0 + \\frac{b}{d}n\\) and \\(y=y_0-\\frac{a}{d}m\\).'], 
];
export default content;