export const title="Lateral surface area of a right circular cone";
const content = [
  ['h1', 'Lateral Surface Area Of A Right Circular Cone'],
  ['pmain', 'Here is a right circular cone (laying down) with height \\(h\\) and the radius of it\'s circular base \\(r\\) that rolled from point \\(A\\) to \\(B\\):'],
  ['displayimg', '2.png'],
  ['pmain', 'Point \\(P\\) is the apex of the cone. The cone did one full roll from point \\(A\\) to \\(B\\). The gray area represents the region the cone covered during that full roll. This means the arc length of the gray area from \\(A\\) to \\(B\\) is the same of the circumference of the cone\'s circular base. It also means that the surface area of the gray area is the same as the lateral surface area of the cone, so to calculate the lateral surface area, you just have to calculate the area of the gray region.'],
  ['pmain', 'Since every point on the arc length is equidistant from point \\(P\\), that means the gray region is a sector of a circle:'],
  ['displayimg', '1.png'],
  ['pmain', 'Let \\(\\theta\\) be the central angle in radians, and let \\(s\\) be the radius of the sector. This means that \\(s\\) is also the slant height of the cone:'],
  ['displayimg', '3.png'],
  ['pmain','The arc length can be calculated in two ways, one by using the cone\'s base, and the other by using the gray sector:'],
  ['displayFormula', '\\[AL = 2 \\pi r = \\theta s\\]'],
  ['pmain', 'The surface area of the gray region is:'],
  ['displayFormula', '\\[\\begin{align} SA = \\frac{1}{2} s^2 \\theta &= \\frac{1}{2} s (2 \\pi r) \\\\ &= \\pi s r \\end{align}\\]'],
  ['pmain', 'Therefore, the lateral surface area of the cone is \\(\\pi s r\\) where \\(r\\) is the radius of the base and \\(s\\) is the slant height.'],
];
export default content;