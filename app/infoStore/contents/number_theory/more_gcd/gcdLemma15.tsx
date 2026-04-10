export const title="m * gcd(a1, a2, ...) = gcd(ma1, ma2, ...)";
const content = [
  ['h1', 'm * gcd(a<sub>1</sub>, a<sub>2</sub>, ...) = gcd(ma<sub>1</sub>, ma<sub>2</sub>, ...)'],
  ['pmain', 'Let \\((a_1, a_2, \\ldots) = c\\) and \\((ma_1, ma_2, ...) = d\\), so:'], 
  ['displayFormula', '\\[ \\begin{gather} c|a_1 \\wedge c|a_2 \\wedge \\cdots \\\\ \\implies mc|ma_1 \\wedge mc|ma_2 \\wedge \\cdots \\end{gather} \\]'],
  ['pmain', 'Since \\(mc\\) divides \\(ma_1, ma_2, \\ldots\\), and since \\(d\\) is the greatest common divisor of \\(ma_1, ma_2, \\ldots\\), then \\(mc\\) has to be some multiple of \\(d\\):'], 
  ['displayFormula', '$$ d = mcx $$'],
  ['pmain', 'for some integer \\(x\\), so:'], 
  ['displayFormula', '\\[ \\begin{gather} d|ma_1 \\wedge d|ma_2 \\wedge \\cdots \\implies \\\\ mcx|ma_1 \\wedge mcx|ma_2 \\wedge \\cdots \\\\ \\therefore cx|a_1 \\wedge cx|a_2 \\wedge \\cdots \\end{gather} \\]'],
  ['pmain', 'Since \\(c\\) is the greatest common divisor of \\(a_1, a_2, \\ldots\\), then \\(x=1\\), so \\(d = mc\\).']
];
export default content;