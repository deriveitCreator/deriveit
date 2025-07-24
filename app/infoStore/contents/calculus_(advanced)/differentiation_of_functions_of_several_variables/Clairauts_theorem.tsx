export const title="Proof of Clairaut's theorem";
const content = [
  ['h1', 'Proof Of Clairaut\'s Theorem'],

  ['pmain', 'Suppose \\(f\\) is defined on a disk \\(D\\) that contains the point \\((a,b)\\), and suppose the functions \\(f_{xy}\\) and \\(f_{yx}\\) are both continuous on \\(D\\). The parial derivatives are defiend as:'],
  ['displayFormula', '$$\\begin{align} f_x(x,y) &= \\frac{\\partial}{\\partial x}f(x,y) = \\lim_{h \\to 0} \\frac{f(x+h,y) - f(x,y)}{h} \\\\ f_y(x,y) &= \\frac{\\partial}{\\partial y}f(x,y) = \\lim_{h \\to 0} \\frac{f(x,y+h) - f(x,y)}{h} \\end{align}$$'],

  ['pmain', 'The second partial derivative is defined as:'],
  ['displayFormula', '$$\\begin{align} f_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{\\partial f}{\\partial x} \\right) \\qquad f_{xy} = \\frac{\\partial}{\\partial y} \\left( \\frac{\\partial f}{\\partial x} \\right) \\\\ f_{yx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{\\partial f}{\\partial y} \\right) \\qquad f_{yy} = \\frac{\\partial}{\\partial y} \\left( \\frac{\\partial f}{\\partial y} \\right) \\end{align}$$'],

  ['pmain', 'For small positive values of \\(h\\), consider the difference:'],
  ['displayFormula', '$$\\Delta h = [f(a+h,b+h) - f(a+h,b)] - [f(a,b+h)- f(a,b)]$$'],
  ['displayimg', 'c1.jpeg'],

  ['pmain', 'Let \\(g(x) = f(x, b+h) - f(x, b)\\):'],
  ['displayFormula', '$$\\Delta h = g(a+h) - g(a)$$'],
  ['displayimg', 'c2.jpeg'],

  ['pmain', 'According to the Mean Value Theorem, there is a number \\(c\\) between \\(a\\) and \\(a+h\\) such that:'],
  ['displayFormula', '$$ g(a+h) - g(a) = g\'(c)h $$'],
  ['pmain', 'Since \\(g(x) = f(x, b+h) - f(x, b)\\):'],
  ['displayFormula', '$$h \\left[ \\left. \\frac{d}{dx} \\right|_{x=c}g(x) \\right] = h[f_x(c,b+h) - f_x(c,b)] $$'],
  
  ['pmain', 'By the Mean Value Theorem to \\(f_x\\), we get a number \\(d\\) between \\(b\\) and \\(b+h\\) such that:'],
  ['displayFormula', '$$[f_x(c,b+h) - f_x(c,b)] = f_{xy}(c,d)h$$'],

  ['pmain', 'Combining these equations:'],
  ['displayFormula', '$$ \\Delta h = h^2 f_{xy}(c,d)$$'],
  ['pmain', 'If \\(h \\to 0\\), then \\((c,d) \\to (a,b)\\):'],
  ['displayFormula', '$$ \\lim_{h \\to 0} \\frac{\\Delta h}{h^2} = \\lim_{(c,d) \\to (a,b)} f_{xy}(c,d) = f_{xy}(a,b)$$'],

  ['pmain', 'Similarly, by writing:'],
  ['displayFormula', '$$\\Delta h = [f(a+h,b+h) - f(a+h,b)] - [f(a,b+h)- f(a,b)]$$'],
  ['pmain', 'By using the Mean Value Theorem twice and the continuity of \\(f_{yx}\\) at \\((a,b)\\), we obtain:'],
  ['displayFormula', '$$ \\lim_{h \\to 0} \\frac{\\Delta h}{h^2} = f_{yx}(a,b)$$'],
  ['pmain', 'It follows that \\(f_{yx}(a,b)=f_{xy}(a,b)\\).'],

];
export default content;