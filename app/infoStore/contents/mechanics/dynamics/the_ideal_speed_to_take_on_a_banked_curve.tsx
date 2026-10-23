export const title="Deriving the ideal speed to take on a banked curve";
const content = [
  ['h1', 'Deriving The Ideal Speed To Take On A Banked Curve'],
  ['pmain', 'Consider a banked curve, with slope \\(\\theta\\):'], 
  ['figure', ['1.webp', 'Image from openstax.org']], 
  ['pmain', 'We are goig to assume that there is resistance force against the centripetal force. Therefore, the net external force equals the horizontal centripetal force.'],
  ['pmain', 'The only two external forces acting on the car are its weight \\(\\vec{\\textbf{w}}\\) and \\(\\vec{\\textbf{N}}\\). These two forces must add to give a net external force that is horizontal toward the center of curvature and has magnitude \\(mv^2/r\\). Therefore:'],
  ['displayFormula', '\\[ N \\sin(\\theta) = \\frac{mv^2}{r} \\]'],
  ['pmain', 'Because the car does not leave the surface of the road, the net vertical force must be zero, meaning that the vertical components of the two external forces must be equal in magnitude and opposite in direction:'],
  ['displayFormula', '\\[ N \\cos(\\theta) = mg \\]'],
  ['pmain', 'We can combine these two equations to eliminate \\(N\\):'],
  ['displayFormula', '\\[\\begin{gather} mg \\frac{\\sin(\\theta)}{\\cos(\\theta)} = m \\frac{v^2}{r} \\\\ \\tan(\\theta) = \\frac{v^2}{rg} \\end{gather}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\theta = \\arctan \\left(\\frac{v^2}{rg} \\right) \\]'],
  ['pmain', 'This expression can be understood by considering how \\(\\theta\\) depends on \\(v\\) and \\(r\\). A large \\(\\theta\\) is obtained for a large \\(v\\) and a small \\(r\\). That is, roads must be steeply banked for high speeds and sharp curves. Note that \\(\\theta\\) does not depend on the mass of the vehicle.'],
];
export default content;