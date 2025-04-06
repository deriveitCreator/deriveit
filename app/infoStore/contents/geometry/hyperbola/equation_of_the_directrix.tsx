export const title="Deriving the directrix of a hyperbola";
const content = [
  ['h1', 'Deriving The Directrix Of A Hyperbola'],
  ['pmain', 'The definition of an <b>hyperbola</b> is the set of all points for which the absolute difference of their distances from two fixed points (the foci) is constant. Consider a hyperbola where the centre is at the origin:'],
  ['figure', ['h1.png','Image from openstax.org (Calculus Volume 2)']],
  ['pmain', 'Choose any point \\(P=(x_p, y_p)\\) on right side of the hyperbola. \\(x_p\\) and \\(y_p\\) satisfies:'],
  ["displayFormula","\\[\\frac{x_p^2}{a^2} - \\frac{y_p^2}{(c^2 - a^2)} = 1\\]"],
  ['pmain', 'Assume that the distance from any point \\(P\\) to a focus \\(F\\) divided by the distance from \\(P\\) to a fixed line \\(L\\) (called the <b>directrix</b>) is contant. Let the directrix be at \\(x=x_d\\) for some \\(x_d < a\\).'],
  ['pmain', '\\(F=(c,0)\\), and \\(P\\) is a point of our choice. If \\(P\\) is on the \\(x\\)-axis (i.e. \\(y_p=0\\) and \\(x_p=a\\)), then the distance from \\(F\\) to \\(P\\) would be \\(c-a\\), and the distance from \\(P\\) to the directrix is \\(a-x_d\\). We already know that the eccentricity is \\(\\frac{c}{a}\\). Therefore:'],
  ["displayFormula","\\[\\begin{gather} \\frac{c-a}{a-x_d} = \\frac{c}{a} \\\\ ac-a^2 = ca-c x_d \\\\ a^2 = c x_d \\end{gather}\\]"],
  ['pmain', 'This means the directrix is at \\(x_d = \\frac{a^2}{c}\\):'],
  ['figure', ['6.png','Image from openstax.org (Calculus Volume 2)']],
  ['pmain', 'Since this hyperbola is symmetric along the \\(y\\)-axis, then there is another directrix at \\(x_d = -\\frac{a^2}{c}\\). Also, if you shift the hyperbola \\(h\\) units to the right, then the directrix would be \\(x_d = h±\\frac{a^2}{c}\\).'],
];
export default content;