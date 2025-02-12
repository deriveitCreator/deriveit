export const title="Deriving the directrix of an ellipse";
const content = [
  ['h1', 'Deriving The Directrix Of An Ellipse'],
  ['pmain', 'The definition of an <b>ellipse</b> is the set of all points for which the sum of their distances from two fixed points (the foci) is constant. Consider an ellipse where the centre is at the origin:'],
  ['figure', ['e1.jfif','Image from openstax.org (Calculus Volume 2)']],
  ['pmain', 'The points \\(P\\) and \\(P\'\\) are located at the ends of the <b>major axis</b> of the ellipse, and have coordinates \\((a,0)\\) and \\((-a,0)\\), respectively. The major axis is always the longest distance across the ellipse, and can be horizontal or vertical. Thus, the length of the major axis in this ellipse is \\(2a\\). The points \\(Q\\) and \\(Q\'\\) are located at the ends of the <b>minor axis</b> of the ellipse, and have coordinates \\((0,b)\\) and \\((0,-b)\\), respectively. The minor axis is the shortest distance across the ellipse. The minor axis is perpendicular to the major axis.'],
  ['pmain', 'Assume that the distance from any point \\(A\\) to a focus \\(F\\) divided by the distance from \\(A\\) to a fixed line \\(L\\) (called the <b>directrix</b>) is contant. Let the directrix be at \\(x=x_d\\).'],
  ['pmain', 'Let \\(F=(c,0)\\) and let \\(A\\) be a point of our choice. If \\(A=P\\) (i.e. \\(y=0\\) and \\(x=a\\)), then the distance from \\(F\\) to \\(A\\) would be \\(a-c\\), and the distance from \\(A\\) to the directrix is \\(x_d-a\\). If \\(A\\) were to lie on the \\(y\\)-axis, then the distance from \\(A\\) to \\(F\\) would be \\(\\sqrt{b^2+c^2}\\) and the distance from \\(A\\) to the directrix would be \\(x_d\\). If their ratios are constant:'],
  ["displayFormula","\\[\\frac{a-c}{x_d-a} = \\frac{\\sqrt{b^2+c^2}}{x_d}\\]"],
  ['pmain', 'Consider again the case where \\(A=P\\), then the sum of the distances from \\(A\\) to the two foci is \\((a+c) + (a-c)\\) or \\(2a\\):'],
  ['displayimg', 'e2.png'],
  ['pmain', 'If \\(A\\) is anywhere on the ellipse, then by definition of an ellipse, the sum of the distances from the foci to \\(A\\) is constant. If \\(A=Q\\), then point \\(A\\) would be equidistant from the two foci, and so the distance from \\(A\\) to \\(F\\) would be exactly half of \\(2a\\), or just \\(a\\). Using the Pythogorean theorem:'],
  ["displayFormula","\\[a^2 = b^2 + c^2\\]"],
  ['pmain', 'This means:'],
  ["displayFormula","\\[\\begin{gather} \\frac{a-c}{x_d-a} = \\frac{\\sqrt{b^2+c^2}}{x_d} \\implies \\frac{a-c}{x_d-a} = \\frac{a}{x_d}\\\\ (a-c)x_d = a(x_d-a) \\end{gather}\\]"],
  ['pmain', 'Rearraning:'],
  ["displayFormula","\\[\\begin{gather} (a-c)x_d = ax_d-a^2 \\\\ ((a-c)-a)x_d = -a^2 \\\\ x_d = \\frac{a^2}{c} \\end{gather}\\]"],
  ['pmain', 'This means the directrix lies at \\(\\frac{a^2}{c}\\).'],
  ['displayimg', 'e3.png'],
  ['pmain', 'Since this ellipse is symmetric along the \\(y\\)-axis, then there would also be another directrix at \\(-\\frac{a^2}{c}\\). If the ellipse were to be shifted \\(h\\) units to the right, then the directrix would be \\(h ± \\frac{a^2}{c}\\).'],
];
export default content;