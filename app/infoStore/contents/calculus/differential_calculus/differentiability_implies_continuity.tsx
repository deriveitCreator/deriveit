export const title="Proof that if f(x) is differentiable at b, then f is continuous at b";
const content = [['h1', 'Proof That If f(x) Is Differentiable At b, Then f Is Continuous At b'],
['pmain', 'If \\(f(x)\\) is differentiable at \\(b\\), then \\(f\'(b)\\) exists:'], 
["displayFormula","\\[f'(b) = \\lim_{x→b} \\frac{f(x) - f(b)}{x - b}\\]"],
['pmain', 'We want to show that \\(f(x)\\) is continuous at \\(b\\) by showing that \\(\\lim_{x→b} f(x) = f (b)\\). We can rewrite \\(\\lim_{x→b}\\) as:'], 
["displayFormula","\\[\\lim_{x→b} f(x) = \\lim_{x→b}(f(x)-f(b)+f(b))\\]"],
['pmain', 'Multiply and divide \\(f(x) - f(b)\\) by \\(x - b\\):'], 
["displayFormula","\\[= \\lim_{x→b} \\left( \\frac{f(x)-f(b)}{x-b}(x-b) + f(b) \\right)\\]"],
['pmain', 'Using the sum law and the product law:'], 
["displayFormula","\\[= \\left(\\left(\\lim_{x→b}  \\frac{f(x)-f(b)}{x-b}\\right) (\\lim_{x→b} (x-b))\\right) + \\lim_{x→b}f(b)\\]"],
['pmain', 'If we evaluate it:'], 
["displayFormula","\\[= (f'(b) (0) ) + \\lim_{x→b}f(b) = \\lim_{x→b}f(b)\\]"],
['pmain', 'Since \\(\\lim_{x→b}f(x)=f(b)\\), we conclude that \\(f\\) is continuous at \\(b\\).'], 
];
export default content;