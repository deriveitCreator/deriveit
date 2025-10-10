export const title="Vector line integrals";

const content = [
  ['h1', 'Vector Line Integrals'],

  ['pmain', 'If an object feels a constant force \\(\\textbf{F}\\) while moving along a displacement \\(\\textbf{s}\\), then the <b>work</b> done, \\(W\\), by \\(\\textbf{F}\\) is:'],
  ['displayFormula', '$$W = \\textbf{F} \\cdot \\textbf{s}$$'], 

  ['pmain', 'What about if the force and the path is not constant? Suppose a particle moves in a three dimensional space along a curve \\(C\\) defined by \\(\\textbf{r}(t)\\) from \\(t=a\\) to \\(t=b\\):'],
  ['displayimg', '6.jpeg'],

  ['pmain', 'Suppose the particle feels a force while moving along \\(C\\), where the force is defined by the vector field:'],
  ['displayFormula', '$$\\textbf{F}(x,y,z) = P(x,y,z)\\textbf{i} +Q(x,y,z)\\textbf{j} +R(x,y,z)\\textbf{k}$$'], 
  ['pmain', 'Partition the parameter interval \\([a,b]\\) into \\(n\\) subintervals \\([t_{ i-1 },t_i]\\), where \\(t_0=a\\) and \\(t_n=b\\). Let \\(t^*_i\\) be a value in the \\(i\\)th interval \\([t_{i-1}, t_i]\\).'], 
  ['pmain', 'Denote the endpoints of \\(\\textbf{r}(t_0), \\textbf{r}(t_1), \\ldots , \\textbf{r}(t_n)\\) by \\(P_0, \\ldots,P_n\\). Points \\(P_i\\) divide curve \\(C\\) into \\(n\\) pieces \\(C_1,C_2, \\ldots,C_n\\), with lengths \\(\\Delta s_1, \\Delta s_2, \\ldots, \\Delta s_n\\), respectively. Let \\(P^*_i\\) denote the endpoint of \\(\\textbf{r}(t^*_i)\\) for \\(1≤i≤n\\). The endpoint of \\(\\textbf{r}(t^*_i)\\) lies between \\(\\textbf{r}(t_{i-1})\\) and \\(\\textbf{r}(t_i)\\).'],

  ['pmain', 'Suppose \\(n\\) is very large such that the individual pieces of the curve look almost like straight lines, and such that \\(\\textbf{F}\\) doesn\'t change much. The approximate work done by \\(\\textbf{F}\\) between \\(t_{i-1}\\) and \\(t_i\\) is:'],
  ['displayFormula', '$$ \\textbf{F}(P^*_i) \\cdot (\\textbf{T}(P^*_i) \\ \\Delta s_i) $$'], 
  ['pmain', '\\(\\textbf{T}(P^*_i)\\) gives the unit tangent vector at point \\(P^*_i\\), and the force \\(\\textbf{F}(P^*_i)\\) can be treated as constant within the interval \\([t_{i-1},t_i]\\) since the curve piece is very small. The value of \\((\\textbf{T}(P^*_i) \\ \\Delta s_i)\\) gives the displacement from \\(t_{i-1}\\) to \\(t_i\\), since \\(\\textbf{T}\\) gives the direction and \\(\\Delta s_i\\) scales the unit tangent vector to the distance between \\(P_{i-1}^*\\) and \\(P_i^*\\).'],
  ['displayimg', '7.jpeg','300px'],
  ['pmain', 'To find total work done from \\(t=a\\) to \\(t=b\\), we need to sum the individual approximation of the work done on every piece:'],
  ['displayFormula', '$$ \\begin{align} W &= \\sum_{i=1}^n \\textbf{F}(P^*_i) \\cdot (\\textbf{T}(P^*_i) \\ \\Delta s_i) \\\\ &= \\sum_{i=1}^n \\textbf{F}(P^*_i) \\cdot \\textbf{T}(P^*_i) \\ \\Delta  s_i \\end{align} $$'], 
  ['pmain', 'If \\(n\\) goes to infinity, then the above is represented like so:'],
  ['displayFormula', '$$ \\int_C \\textbf{F} \\cdot \\textbf{T} ds = \\lim_{n \\to \\infty} \\sum_{i=1}^n \\textbf{F}(P^*_i) \\cdot \\textbf{T}(P^*_i) \\ \\Delta s_i$$'], 
  ['pmain', 'We are summing infinitely many \\(\\textbf{F} \\cdot \\textbf{T} \\Delta s_i\\). Since \\(\\textbf{T}(P^*_i) = \\frac{\\textbf{r}\'(t^*_i)}{\\Vert \\textbf{r}\'(t^*_i) \\Vert}\\):'],
  ['displayFormula', '$$ \\textbf{F}(P^*_i) \\cdot \\textbf{T}(P^*_i) \\Delta s_i = \\textbf{F}(P^*_i) \\cdot \\left(\\frac{\\textbf{r}\'(t^*_i)}{\\Vert \\textbf{r}\'(t^*_i) \\Vert}\\right) \\Delta s_i $$'],

  ['pmain', 'Suppose there are many intervals (i.e. \\(n\\) is very large), and that \\(\\Delta s_i\\) is so small such that \\(\\textbf{r}\'(t)\\) barely changes between \\(t_{i-1}\\) and \\(t_{i}\\):'],
  ['displayFormula', '$$\\Delta s_i = \\int_{t_{i-1}}^{t_i} \\Vert \\textbf{r}\'(t) \\Vert dt \\approx \\Vert \\textbf{r}\'(t_i^*) \\Vert \\Delta t$$'], 
  ['pmain', 'This means:'],

  ['displayFormula', '$$\\begin{align} \\textbf{F}(P^*_i) \\cdot \\textbf{T}(P^*_i) \\Delta s_i &\\approx \\textbf{F}(P^*_i) \\cdot \\left(\\frac{\\textbf{r}\'(t^*_i)}{\\Vert \\textbf{r}\'(t^*_i) \\Vert}\\right) (\\Vert \\textbf{r}\'(t_i^*) \\Vert \\Delta t) \\\\ &\\approx \\textbf{F}(P^*_i) \\cdot \\textbf{r}\'(t^*_i) \\Delta t\\end{align} $$'], 
  
  ['pmain', 'Summing infinite of these:'],
  ['displayFormula', '$$W \\text{ or } \\int_C \\textbf{F} \\cdot \\textbf{T} ds =\\int_a^b \\textbf{F}(\\textbf{r}(t)) \\cdot \\textbf{r}\'(t) d t$$'], 

  ['pmain', 'Since \\(s\'(t) = \\Vert \\textbf{r}\'(t) \\Vert\\) and since \\( \\textbf{T} = \\frac{\\textbf{r}\'(t)}{ \\Vert \\textbf{r}\'(t) \\Vert} \\):'],
  ['displayFormula', '$$\\begin{gather} \\textbf{T}(t) = \\frac{\\textbf{r}\'(t)}{ s\'(t) } = \\frac{d \\textbf{r}(t) / dt}{ d s(t) /dt } = \\frac{d \\textbf{r}(t)}{ d s(t) } \\\\ \\therefore \\textbf{T}(t) ds = d \\textbf{r}(t) \\end{gather}$$'],

  ['pmain', 'This means:'],
  ['displayFormula', '$$\\int_C \\textbf{F} \\cdot \\textbf{T} ds = \\int_C \\textbf{F} \\cdot d\\textbf{r}$$'], 

  ['pmain', 'There is another notation we can derive. Since \\(F = \\langle P,Q,R\\rangle\\) and since \\(d\\textbf{r} = \\langle dx, dy, dz \\rangle \\):'],
  ['displayFormula', '$$\\int_C \\langle P,Q,R\\rangle \\cdot \\langle dx, dy, dz \\rangle = \\int_C P dx + Qdy + Rdz $$'], 

];
export default content;