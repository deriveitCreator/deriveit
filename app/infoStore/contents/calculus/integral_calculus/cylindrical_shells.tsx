export const title="The method of cylindrical shells";
const content = [
  ['h1', 'The Method Of Cylindrical Shells'],
  ['pmain', 'We define a region \\(R\\), bounded above by the graph of a function \\(y=f(x)\\), below by the x-axis, and on the left and right by the lines \\(x=a\\) and \\(x=b\\). We then revolve this region around the y-axis:'],
  ['figure', ['14.png','Image from openstax.org (Calculus Volume 1)']],
  ['pmain', 'We can partition the interval \\([a,b]\\) using a regular partition, \\(P={x_0,x_1,…,x_n}\\) and, for \\(i=1,2,…,n\\), let \\(x^*_i\\) be the midpoint of the interval \\([x_{i-1},x_i]\\). Then, construct a rectangle over the interval \\([x_{i-1},x_i]\\) of height \\(f(x^*_i)\\) and width \\(\\Delta x\\) (figure \\((a)\\) below). When that rectangle is revolved around the y-axis, we get a cylindrical shell:'],
  ['figure', ['15.png','Image from openstax.org (Calculus Volume 1)']],
  ['pmain', 'The volume of one shell in the interval \\([x_{i-1},x_i]\\) is the volume of the outer cylinder \\((\\pi x^2_i f(x_i))\\) minus the volume of the inner cylinder \\((\\pi x^2_{i-1} f(x_{i-1}))\\):'],
  ['displayFormula', '\\[\\begin{align} V_{shell} &≈ (\\pi x^2_i f(x^*_i)) - (\\pi x^2_{i-1} f(x^*_i)) \\\\ &≈ \\pi f(x^*_i) (x^2_i - x^2_{i-1}) \\end{align}\\]'],
  ['pmain', 'Since \\(x^2_i - x^2_{i-1} = (x_i + x_{i-1})(x_i - x_{i-1})\\):'],
  ['displayFormula', '\\[\\begin{align} V_{shell} &≈ 2 \\pi f(x^*_i) \\left( \\frac{x_i + x_{i-1}}{2} \\right) (x_i - x_{i-1}) \\\\ &≈ 2 \\pi f(x^*_i) x^*_i \\Delta x \\end{align}\\]'],
  ['pmain', 'Another way to think of this is to think of making a vertical cut in the shell and then opening it up to form a flat plate:'],
  ['figure', ['16.png','Image from openstax.org (Calculus Volume 1)']],
  ['pmain', 'To calculate the volume of the entire solid, we then add the volumes of all the shells:'],
  ['displayFormula', '\\[ V= \\sum^n_{i=1} 2 \\pi f(x^*_i) x^*_i \\Delta x \\]'],
  ['pmain', 'Taking the limit as \\(n→∞\\):'],
  ['displayFormula', '\\[ V= \\lim_{n \\to \\infty} \\sum^n_{i=1} 2 \\pi f(x^*_i) x^*_i \\Delta x = \\int^b_a 2 \\pi f(x) x \\ dx \\]'],
];
export default content;