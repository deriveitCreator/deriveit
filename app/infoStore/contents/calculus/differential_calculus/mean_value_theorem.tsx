export const title="Proof of the Mean Value Theorem";
const content = [
  ['h1', 'Proof Of The Mean Value Theorem'],
  ['pmain', 'The Mean Value Theorem states that if function \\(f\\) is continuous over the closed interval \\([a,b]\\) and differentiable over the open interval \\((a,b)\\). Then, there exists at least one point \\(c∈(a,b)\\) such that:'], 
  ["displayFormula","\\[f'(c) = \\frac{f(b)-f(a)}{b-a} \\]"],
  ['pmain', 'Consider the line connecting \\((a,f(a))\\) and \\((b,f(b))\\). The gradient of this line is:'], 
  ["displayFormula","\\[\\frac{f(b)-f(a)}{b-a} \\]"],
  ['pmain', 'The equation of this line is:'], 
  ["displayFormula","\\[y = \\frac{f(b)-f(a)}{b-a} (x-a) + f(a)\\]"],
  ['pmain', 'Let \\(g(x)\\) be the vertical difference between the point \\((x,f(x))\\) and the point \\((x,y)\\) on that line:'], 
  ["displayFormula","\\[g(x) = f(x) - \\left[ \\frac{f(b)-f(a)}{b-a} (x-a) + f(a) \\right]\\]"],
  ['pmain', 'Example:'], 
  ["figure",["mvt1.png","This image is from openstax.org"]],
  ['pmain', 'Since the two lines intersect at \\(x=a\\) and \\(x=b\\), then \\(g(a) = 0 = g(b)\\). According to Rolle\'s Theorem, there should be a point \\(c\\) between \\(a\\) and \\(b\\) where \\(g\'(c)=0\\). The derivative of \\(g\'(x)\\) is:'], 
  ["displayFormula","\\[g'(x) = f'(x) - \\frac{f(b)-f(a)}{b-a}\\]"],
  ['pmain', 'At \\(c\\), this would be:'], 
  ["displayFormula","\\[0 = f'(c) - \\frac{f(b)-f(a)}{b-a}\\]"],
  ['pmain', 'So:'], 
  ["displayFormula","\\[f'(c) = \\frac{f(b)-f(a)}{b-a}\\]"],
];
export default content;