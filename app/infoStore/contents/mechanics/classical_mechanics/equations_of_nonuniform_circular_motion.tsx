export const title="Deriving the equations of nonuniform circular motion";
const content = [
  ['h1', 'Deriving The Equations Of Nonuniform Circular Motion'],
  ['pmain', 'Suppose a particle moves counterclockwise in time \\(\\Delta t\\) on a circular path. The particle goes from \\(\\vec{\\textbf{r}}(t)\\) to \\(\\vec{\\textbf{r}}(t + \\Delta t)\\). Assume that from \\(t\\) to \\(t + \\Delta t\\), the speed is constant.'], 
  ['pmain', 'The velocity changes from \\(\\vec{\\textbf{v}}(t)\\) to \\(\\vec{\\textbf{v}}(t + \\Delta t)\\). The velocity vector has a constant magnitude and is tangent to the path (i.e. it\'s perpendicular to \\(\\vec{\\textbf{r}}(t)\\)). This means the triangles formed by \\(\\Delta \\vec{\\textbf{r}}\\) and \\(\\Delta \\vec{\\textbf{v}}\\) are similar:'], 
  ['figure', ['uniform_circular_1.webp',"Image from OpenStax.org","400px"]], 
  ['pmain', 'Since \\(\\Vert \\vec{\\textbf{r}}(t) \\Vert= \\Vert\\vec{\\textbf{r}}(t + \\Delta t) \\Vert\\) and \\(\\Vert \\vec{\\textbf{v}}(t) \\Vert= \\Vert\\vec{\\textbf{v}}(t + \\Delta t) \\Vert\\), the two triangles are isosceles. Let \\(r = \\Vert \\vec{\\textbf{r}}(t)\\Vert\\) and let \\(v = \\Vert \\vec{\\textbf{v}}(t)\\Vert\\). Similarly, \\(\\Delta r = \\Vert \\Delta \\vec{\\textbf{r}}(t)\\Vert\\) and let \\(\\Delta v = \\Delta \\Vert \\vec{\\textbf{v}}(t)\\Vert\\). All of these scalar values are constant. Therefore:'], 
  ['displayFormula', '\\[\\begin{gather} \\frac{\\Delta v}{v} = \\frac{\\Delta r}{r} \\\\ \\Delta v = \\frac{v}{r} \\Delta r \\end{gather}\\]'],
  ['pmain', 'We can find the magnitude of the acceleration as well, which is also constant:'], 
  ['displayFormula', '\\[\\begin{gather} a = \\lim_{\\Delta t \\to 0} \\frac{\\Delta v}{\\Delta t} = \\frac{v}{r} \\lim_{\\Delta t \\to 0} \\frac{\\Delta r}{\\Delta t} \\\\ a = \\frac{v^2}{r}\\end{gather}\\]'],
  ['pmain', 'The acceleration vector is tangent to the velocity vector, so it either points inside or outside the circle. Since velocity in both \\(x\\) and \\(y\\) directions are changing to go nearer the center, then the acceleration points inside the circle. This acceleration is called <b>centripetal acceleration</b> (\\(a_c\\)).'], 
  ['pmain', 'We derived the magnitude of centripetal acceleration as:'], 
  ['displayFormula', '\\[a_c = \\frac{v^2}{r}\\]'],
  ['pmain', 'However at the start, we assume the speed from \\(t\\) to \\(t + \\Delta t\\) was constant. What if the speed is not a constant? In this case, \\(\\vec{\\textbf{v}}(t)\\) and \\(\\vec{\\textbf{v}}(t + \\Delta t)\\) is, in fact, different. Which mean the one of the triangles are no longer isosceles. However, if \\(\\Delta t \\to 0\\), then \\(\\vec{\\textbf{v}}(t + \\Delta t) \\to \\vec{\\textbf{v}}(t)\\). This means for very small \\(\\Delta t\\), then triangle would now be an isoscele, so the above equation for the magnitude of the centripetal acceleration is valid.'], 
  ['pmain', 'Also, if the speed is changing, and the centripetal acceleration vector is perpendicular to the velocity vector,  then there must be some tangential acceleration vector, \\(\\vec{\\textbf{a}}_t\\), causing the change in velocity. It\'s scalar value would be:'], 
  ['displayFormula', '\\[a_T = \\frac{d}{dt} \\Vert \\vec{\\textbf{v}} \\Vert\\]'],
];
export default content;