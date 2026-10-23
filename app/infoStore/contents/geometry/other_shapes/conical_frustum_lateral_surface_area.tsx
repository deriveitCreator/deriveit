export const title="Lateral surface area of a right circular conical frustrum";
const content = [
  ['h1', 'Lateral Surface Area Of A Right Circular Conical Frustrum'],
  ['pmain', 'Imagine a right circular cone with two planes parallel to the cone\'s base cutting the cone. A right circular conical frustrum is the portion of a solid the lies between two parallel planes:'],
  ['displayimg', '4.png'],
  ['pmain', 'When the two planes intersect the cone, the intersection is a circle. Let \\(r_1\\) be the radius of the smaller circle, \\(r_2\\) be the radius of the larger circle and \\(d\\) be the slant height of the frustrum:'],
  ['displayimg', '5.png'],
  ['pmain', 'Let \\(s\\) be the slant height from \\(r_2\\) to the apex of the cone:'],
  ['displayimg', '6.png'],
  ['pmain', 'The lateral surface area of the frustrum is the lateral surface area of the larger cone with slant height \\(s\\) minus the lateral surface area of the smaller cone with slant height \\(s-d\\):'],
  ['displayFormula', '\\[\\begin{align} SA &= (\\pi s r_2)-(\\pi (d-s) r_1) \\\\ &= \\pi (s r_2 + s r_1 - d r_1 ) \\end{align}\\]'],
  ['pmain', 'Let\'s find a way to get rid of \\(s\\). We can start with:'],
  ['displayFormula', '\\[\\frac{s}{r_2} = \\frac{s-d}{r_1} \\implies r_1 s = r_2 s - r_2 d \\]'],
  ['pmain', 'If we make \\(s\\) the subject:'],
  ['displayFormula', '\\[s = \\frac{ r_2 d}{r_2 - r_1} \\implies SA= \\pi \\left( \\frac{r_2^2 d}{r_2 - r_1} + \\frac{r_2 r_1 d}{r_2 - r_1} - d r_1 \\right) \\]'],
  ['pmain', 'We can simplify this:'],
  ['displayFormula', '\\[SA= d \\pi \\left( \\frac{r_2^2}{r_2 - r_1} + \\frac{r_2 r_1}{r_2 - r_1} - \\frac{r_1 (r_2 - r_1)}{r_2 - r_1} \\right) = d \\pi \\left( \\frac{r_2^2}{r_2 - r_1} + \\frac{r_1^2}{r_2 - r_1} \\right) \\]'],
  ['pmain', 'Since \\((r_2^2+r_1^2) = (r_2+r_1)(r_2-r_1)\\):'],
  ['displayFormula', '\\[SA= d \\pi \\frac{(r_2+r_1)(r_2-r_1)}{r_2 - r_1} = d \\pi (r_2+r_1) \\]'],
];
export default content;