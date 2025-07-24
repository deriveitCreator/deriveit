export const title="Deriving the equations of uniform circular motion";
const content = [
  ['h1', 'Deriving The Equations Of Uniform Circular Motion'],
  ['pmain', 'Suppose a particle moves counterclockwise in time \\(\\Delta t\\) on a circular path at constant speed. The particle goes from \\(\\vec{\\textbf{r}}(t)\\) to \\(\\vec{\\textbf{r}}(t + \\Delta t)\\).'], 
  ['pmain', 'The velocity changes from \\(\\vec{\\textbf{v}}(t)\\) to \\(\\vec{\\textbf{v}}(t + \\Delta t)\\). The velocity vector has a constant magnitude and is tangent to the path (i.e. it\'s perpendicular to \\(\\vec{\\textbf{r}}(t)\\)). This means the triangles formed by \\(\\Delta \\vec{\\textbf{r}}\\) and \\(\\Delta \\vec{\\textbf{v}}\\) are similar:'], 
  ['figure', ['uniform_circular_1.webp',"Image from OpenStax.org","400px"]], 
  ['pmain', 'Since \\(\\Vert \\vec{\\textbf{r}}(t) \\Vert= \\Vert\\vec{\\textbf{r}}(t + \\Delta t) \\Vert\\) and \\(\\Vert \\vec{\\textbf{v}}(t) \\Vert= \\Vert\\vec{\\textbf{v}}(t + \\Delta t) \\Vert\\), the two triangles are isosceles. Let \\(r = \\Vert \\vec{\\textbf{r}}(t)\\Vert\\) and let \\(v = \\Vert \\vec{\\textbf{v}}(t)\\Vert\\). Similarly, \\(\\Delta r = \\Vert \\Delta \\vec{\\textbf{r}}(t)\\Vert\\) and let \\(\\Delta v = \\Delta \\Vert \\vec{\\textbf{v}}(t)\\Vert\\). All of these scalar values are constant. Therefore:'], 
  ['displayFormula', '\\[\\begin{gather} \\frac{\\Delta v}{v} = \\frac{\\Delta r}{r} \\\\ \\Delta v = \\frac{v}{r} \\Delta r \\end{gather}\\]'],
  ['pmain', 'We can find the magnitude of the acceleration as well, which is also constant:'], 
  ['displayFormula', '\\[\\begin{gather} a = \\lim_{\\Delta t \\to 0} \\frac{\\Delta v}{\\Delta t} = \\frac{v}{r} \\lim_{\\Delta t \\to 0} \\frac{\\Delta r}{\\Delta t} \\\\ a = \\frac{v^2}{r}\\end{gather}\\]'],
  ['pmain', 'The acceleration vector is tangent to the velocity vector, so it either points inside or outside the circle. Since velocity in both \\(x\\) and \\(y\\) directions are changing to go nearer the center, then the acceleration points inside the circle. This acceleration is called <b>centripetal acceleration</b>.'], 
  ['displayFormula', '\\[a_c = \\frac{v^2}{r}\\]'],
  ['pmain', 'Let the circle be on an \\(xy\\) plane with the center at the origin. Let \\(\\theta\\) be the angle (in radians) the particle sweeps out with the \\(x\\)-axis as it moves counter clockwise. This means:'], 
  ['displayFormula', '\\[ \\vec{\\textbf{r}}(t) = r \\cos(\\theta) \\hat{\\textbf{i}} + r \\sin(\\theta) \\hat{\\textbf{j}} \\]'],
  ['pmain', 'Assume \\(\\theta = 0^c\\) when \\(t=0\\). Let:'], 
  ['displayFormula', '\\[ \\omega = \\frac{\\theta}{t} \\]'],
  ['pmain', '\\(\\omega\\) is a constant called the angular frequency. We can use this in the above equation, so it contains \\(t\\) instead of \\(\\theta\\):'], 
  ['displayFormula', '\\[ \\vec{\\textbf{r}}(t) = r \\cos(\\omega t) \\hat{\\textbf{i}} + r \\sin(\\omega t) \\hat{\\textbf{j}} \\]'],
  ['pmain', 'If we derivate the above:'], 
  ['displayFormula', '\\[ \\vec{\\textbf{v}}(t) = \\frac{d}{dt} \\vec{\\textbf{r}}(t) = - r \\omega \\sin(\\omega t) \\hat{\\textbf{i}} + r \\omega \\cos(\\omega t) \\hat{\\textbf{j}} \\]'],
  ['pmain', 'If we derivate again:'], 
  ['displayFormula', '\\[ \\vec{\\textbf{a}}(t) = \\frac{d}{dt} \\vec{\\textbf{v}}(t) = - r \\omega^2 \\cos(\\omega t) \\hat{\\textbf{i}} - r \\omega^2 \\sin(\\omega t) \\hat{\\textbf{j}} \\]'],
];
export default content;