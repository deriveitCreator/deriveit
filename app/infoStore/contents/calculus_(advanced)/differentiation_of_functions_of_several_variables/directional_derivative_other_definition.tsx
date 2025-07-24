export const title="Proof of the second definition of directional derivatives";
const content = [
  ['h1', 'Proof Of The Second Definition Of Directional Derivatives'],

  ['pmain', 'Suppose \\(z=f(x,y)\\) is a function of two variables with a domain of \\(D\\). Given a point \\((a,b)\\) in the domain of \\(f\\), we choose a direction to travel from that point.'],
  ['pmain', 'We measure the direction using an angle \\(θ\\), which is measured counterclockwise in the \\(x\\), \\(y\\)-plane, starting at zero from the positive \\(x\\)-axis. The distance we travel is \\(h\\) (where \\(h\\) is parallel to the \\(x\\), \\(y\\)-plane) and the direction we travel is given by the unit vector \\(\\textbf{u}=(\\cos θ)\\textbf{i}+(\\sin θ)\\textbf{j}\\).'],
  ['pmain', 'The <b>directional derivative</b> of \\(f\\) in the direction of \\(\\textbf{u}\\) is given by:'],
  ['displayFormula', '$$D_\\textbf{u} f(a,b) = \\lim_{h \\to 0} \\frac{f(a+h \\cos θ,b+h \\sin θ) - f(a,b)}{h}$$'],
  ['pmain', 'Provided that the limit exist.'],

  ['pmain', 'Let \\([x = a + h \\cos θ]\\) and \\([y =b+h \\sin θ]\\), and define \\(g(h)=f(x,y)\\). Since \\(f_x\\) and \\(f_y\\) both exist, and therefore \\(f\\) is differentiable, that means:'],
  ['displayFormula', '$$\\begin{align} g\'(h) &= \\frac{∂f}{∂x}\\frac{dx}{dh} + \\frac{∂f}{∂y}\\frac{dy}{dh} \\\\ &= f_x (x,y) \\cos θ + f_y (x,y) \\sin θ \\end{align}$$'],

  ['pmain', 'If \\(h=0\\), then \\(x=a\\) and \\(y=b\\), so:'],
  ['displayFormula', '$$ g\'(0) = f_x (a,b) \\cos θ + f_y (a,b) \\sin θ $$'],

  ['pmain', 'By definition of \\(g\'(h)\\):'],
  ['displayFormula', '$$\\begin{align} g\'(0) &= \\\lim_{h \\to 0} \\frac{g(h) - g(0)}{h} \\\\ &= \\\lim_{h \\to 0} \\frac{f(a+h \\cos θ,b+h \\sin θ) - f(a,b)}{h} \\end{align}$$'],

  ['pmain', 'Putting the two together:'],
  ['displayFormula', '$$\\begin{align} \\lim_{h \\to 0} \\frac{f(a+h \\cos θ,b+h \\sin θ) - f(a,b)}{h} &= f_x (a,b) \\cos θ + f_y (a,b) \\sin θ\\\\  D_\\textbf{u} f(a,b) &= f_x (a,b) \\cos θ + f_y (a,b) \\sin θ \\end{align}$$'],

];
export default content;