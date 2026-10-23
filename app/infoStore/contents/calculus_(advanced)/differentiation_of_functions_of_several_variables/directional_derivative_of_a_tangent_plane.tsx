export const title="Directional derivative of a tangent plane";
const content = [
  ['h1', 'Directional Derivative Of A Tangent Plane'],

  ['pmain', 'A tangent plane is defined like this:'],
  ['displayFormula', '$$ z = D_x (x-a) + D_y (y-b) + c $$'],
  ['pmain', 'where the tangent plane crosses the point \\((a,b,c)\\), and has derivative \\(D_x\\) in the \\(x\\) direction and \\(D_y\\) in the \\(y\\) direction. '],

  ['pmain', 'Let \\(\\textbf{u}\\) be a unit vector in the \\(xy\\) plane. We need to find the derivative at \\((a,b)\\) in the direction of \\(\\textbf{u}\\) (let\'s call it \\(D_{\\textbf{u}}\\)). Let components of \\(\\textbf{u}\\) be \\(\\langle \\cos(\\theta) \\textbf{i} + \\sin(\\theta)\\textbf{j} \\rangle\\), where \\(\\theta\\) is the angle from the \\(x\\)-axis in the \\(xy\\) plane.'],
  ['pmain', 'When going from \\((a,b)\\) to \\((a + \\cos(\\theta),b + \\sin(\\theta))\\), what happens to the \\(z\\) value? Initially it\'s \\(c\\), but it changes to:'],
  ['displayFormula', '$$\\begin{gather} z_{new} = D_x ((a+\\cos(\\theta))-a) + D_y ((b+\\sin(\\theta))-b) + c \\\\ z_{new} = D_x (\\cos(\\theta)) + D_y (\\sin(\\theta)) + c \\end{gather}$$'],

  ['pmain', 'This means the change in \\(z\\) is:'],

  ['displayFormula', '$$\\Delta z = z_{new} - c = D_x (\\cos(\\theta)) + D_y (\\sin(\\theta))$$'],

  ['pmain', 'This means, going one unit to the direction of our interest which is at angle \\(\\theta\\), the increase is \\(D_x (\\cos(\\theta)) + D_y (\\sin(\\theta))\\). Since this is a tangent plane, the the derivative in a specific direction is constant; this means the directional derivative at direction \\(\\textbf{u}\\) is:'],
  ['displayFormula', '$$D_x (\\cos(\\theta)) + D_y (\\sin(\\theta))$$'],

];
export default content;