export const title="Understanding differentiability for functions with two variables";
const content = [
  ['h1', 'Understanding Differentiability For Functions With Two Variables'],

  ['pmain', 'Before thinking about functions with two variables, let\'s first think about functions with one variable. A function \\(f(x)\\) is <b>differentiable</b> at point \\(a\\) if \\(f\'(a)\\) exists, or in other words, this limit needs to exist:'], 
  ['displayFormula', '$$ \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} $$'], 

  ['pmain', 'Another way to think about this is that "differentiable at \\(a\\) means that the function at point \\(a\\) is smooth". What do we mean by "smooth"? Firstly, for smoothness, the function shouldn\'t have any discontinuities:'], 
  ['displayimg', 'd1.jpeg'],

  ['pmain', 'Secondly, the limit from the right side and the left side should reach the same value. If \\(h\\) is some variable that doesn\'t go to 0, then the expression \\((f(a+h) - f(a)) / h\\) represents the slope of the secant line that intersects \\(f(x)\\) at \\(x=a\\) and \\(x=a+h\\).'], 
  ['pmain', 'Consider these two limits:'], 
  ['displayFormula', '$$ \\begin{gather} \\lim_{h \\to 0^+} \\frac{f(a+h) - f(a)}{h} \\\\ \\lim_{h \\to 0^-} \\frac{f(a+h) - f(a)}{h} \\end{gather} $$'], 
  ['pmain', 'Both of these limits represent a secant line approaching some limit, but from different sides.'], 
  ['displayimg', 'd2.gif'],
  ['pmain', 'If the function is "smooth", these secant lines will reach the same line, which is the tangent line. If not, then the line at that point would be "pointy". In such cases, the function at that point would not be not differentiable:'], 
  ['displayimg', 'd3.jpeg'],

  ['pmain', 'Now let\'s focus on functions with two variables. A function \\(f(x,y)\\) is differentiable at point \\((x_0, y_0)\\) if it is "smooth" at that point (i.e. the surface has no jumps and is not "pointy").'], 

  ['pmain', 'Suppose for a function \\(f(x,y)\\), a partial derivative with respect to \\(x\\) and with respect to \\(y\\) at point \\(P(x_0,y_0)\\) exist.'], 
  ['pmain', 'For a surface to be differentiable, there cannot be any "jumps". This means there should be a disk around \\(P\\), such that for all points \\((x,y)\\) in that disk:'], 
  ['displayFormula', '$$ \\begin{align} &\\lim_{(x,y) \\to (x_0,y_0)} f(x,y)=f(x_0, y_0) \\\\ \\text{or } &\\lim_{(x,y) \\to (x_0,y_0)} f(x,y) - f(x_0, y_0)= 0 \\end{align} $$'], 

  ['pmain', 'For a function \\(f(x,y)\\) to be differentiable, it also should be "pointy". This means the surface is suppose to be "flat" and look identical to the tangent plane when zoomed in. Let the tangent plane of \\(f(x,y)\\) at \\(P\\) as:'], 
  ['displayFormula', '$$ T(x,y)=  f(x_0 ,y_0) + f_x(x_0 ,y_0) (x-x_0) + f_y(x_0 ,y_0) (y - y_0) $$'], 
  ['pmain', 'Define the error term \\(E(x,y)\\) as:'], 
  ['displayFormula', '$$ E(x,y) = f(x,y) - T(x,y) $$'], 
  ['pmain', 'For a function to look identical to the tangent plane when zoomed in, the error term should go to 0 faster than the distance between \\((x,y)\\) and \\((x_0,y_0)\\):'], 
  ['displayFormula', '$$ \\lim_{(x,y) \\to (x_0,y_0)} \\frac{E(x,y)}{\\sqrt{(x-x_0)^2 + (y-y_0)^2}} =0 $$'], 
  ['pmain', 'If \\(E(x,y)\\) and the distance between \\((x,y)\\) and \\((x_0,y_0)\\) have the same ratio as we bring \\((x,y)\\) to \\((x_0,y_0)\\), then the above limit would be some real number other than 0, but in this scenario, the surface would be pointy.'], 
  ['displayimg', 'd4.png'],

];
export default content;