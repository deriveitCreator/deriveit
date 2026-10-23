export const title="Using x^2 as a product calculator";
const content = [
  ['h1', 'Using x<sup>2</sup> As A Product Calculator'], 
  ['pmain', 'Here is a graph of \\(f(x)=x^2\\):'], 
  ['displayimg', 'calculator1.png'], 
  ['pmain', 'Let there be a straight line that goes through the parabola at two points. One at \\(x=a\\) and \\(x=b\\), where \\(a\\) is a negative number and \\(b\\) is positive:'], 
  ['displayimg', 'calculator2.png'], 
  ['pmain', 'Let\'s think about where this line crosses the y-intercept (in terms of \\(a\\) and \\(b\\)). Since this is a straight line, let\'s define it like this:'], 
  ['displayFormula', '\\[g(x)=mx+c\\]'],
  ['pmain', 'The line \\(g(x)\\) crosses the parabola at two points: \\((a, f(a))\\) and \\((b, f(b))\\). This means we can express the gradient as:'], 
  ['displayFormula', '\\[m=\\frac{f(b)-f(a)}{b-a}\\]'],
  ['pmain', 'Since \\(f(x)=x^2\\):'], 
  ['displayFormula', '\\[\\begin{align} m&=\\frac{b^2 - a^2}{b-a}=\\frac{(b - a)(b+a)}{b-a} \\\\ &= b+a \\end{align}\\]'],
  ['pmain', 'This means:'], 
  ['displayFormula', '\\[g(x)=(b+a) x+c\\]'],
  ['pmain', 'Since \\(f(x)\\) and \\(g(x)\\) intersect at \\(x=a\\), then \\(g(a)=f(a)\\):'], 
  ['displayFormula', '\\[\\begin{gather} g(a)=(b+a) a+c=f(a) \\\\ ba+a^2+c=a^2 \\\\ c=-ab \\end{gather}\\]'],
  ['pmain', 'This means if you draw any straight line goes through the parabola at \\(x=a\\) and \\(x=b\\), then we can use the y-intercept to find the product \\(-ab\\). Remeber, \\(a\\) is negative, so \\(-ab\\) would be positive.'], 
  ['displayimg', 'calculator3.gif'], 
];
export default content;