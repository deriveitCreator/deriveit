export const title="Scalar line integrals";

const content = [
  ['h1', 'Scalar Line Integrals'],

  ['pmain', 'Suppose you have a function \\(f(x,y)\\), and you want to integrate with respect to the \\(x\\) on some interval \\([a,b]\\):'],
  ['displayimg', '1.jpeg'],
  ['pmain', 'You would have to do an integration like so:'], 
  ['displayFormula', '$$ \\int_a^b f(x,0) \\ dx $$'],

  ['pmain', 'You should already know how to do this. Similarly, if you want to integrate with respect to \\(y\\) on some interval \\([c,d]\\):'], 
  ['displayimg', '2.jpeg'],
  ['pmain', 'You would have to do an integration like so:'], 
  ['displayFormula', '$$ \\int_c^d f(0,y) \\ dy $$'],

  ['pmain', 'What if you don\'t want to integrate over just the axis alone? What if you want to integrate over some curve \\(C\\) on the \\(xy\\)-plane:'], 
  ['figure', ['3.webp', 'Image from OpenStax.org.']],

  ['pmain', '<b>Scalar line integrals</b> are integrals of a scalar function over a curve in a plane or in space.'], 
  ['pmain', 'Let \\(C\\) be a smooth curve in the \\(xy\\) plane given by the parameterization \\(\\textbf{r}(t)=⟨x(t),y(t)⟩\\), \\(a≤t≤b\\). To define the line integral of the function \\(f\\) over \\(C\\), we start by chopping the curve into small pieces.'], 
  ['pmain', 'Partition the parameter interval \\([a,b]\\) into \\(n\\) subintervals \\([t_{ i-1 },t_i]\\), where \\(t_0=a\\) and \\(t_n=b\\). Let \\(t^*_i\\) be a value in the \\(i\\)th interval \\([t_{i-1}, t_i]\\).'], 
  ['pmain', 'Denote the endpoints of \\(\\textbf{r}(t_0), \\textbf{r}(t_1), \\ldots , \\textbf{r}(t_n)\\) by \\(P_0, \\ldots,P_n\\). Points \\(P_i\\) divide curve \\(C\\) into \\(n\\) pieces \\(C_1,C_2, \\ldots,C_n\\), with lengths \\(\\Delta s_1, \\Delta s_2, \\ldots, \\Delta s_n\\), respectively. Let \\(P^*_i\\) denote the endpoint of \\(\\textbf{r}(t^*_i)\\) for \\(1≤i≤n\\). The endpoint of \\(\\textbf{r}(t^*_i)\\) lies between \\(\\textbf{r}(t_{i-1})\\) and \\(\\textbf{r}(t_i)\\).'],
  ['figure', ['4.webp', 'Image from OpenStax.org.']], 
  ['pmain', 'Now, we evaluate the function \\(f\\) at point \\(P^*_i\\) for \\(1≤i≤n\\). Multiply \\(f(P^*_i)\\) by the length \\(\\Delta s_i\\) of \\(C_i\\), which gives the area of the "sheet" with base \\(C_i\\), and height \\(f(P^*_i)\\).'], 
  ['displayimg', '5.webp'],

  ['pmain', 'The scalar line integral of \\(f\\) along \\(C\\) is:'],
  ['displayFormula', '$$\\int_C f(x,y) \\ ds = \\lim_{n \\to \\infty} \\sum^n_{i=1} f(P^*_i) \\Delta s_i$$'], 

  ['pmain', 'We can use the <a href="/calculus_(advanced)/vector-valued_functions/arc_length_function_and_its_derivative">arc length formula</a> for \\(\\Delta s_i\\). Since \\(\\Delta s_i\\) is the length between \\(t_{i-1}\\) and \\(t_{i}\\):'],
  ['displayFormula', '$$\\Delta s_i = \\int_{t_{i-1}}^{t_i} \\Vert \\textbf{r}\'(t) \\Vert dt$$'], 

  ['pmain', 'Suppose there are many intervals (i.e. \\(n\\) is very large), and that \\(\\Delta s_i\\) is so small such that \\(\\textbf{r}\'(t)\\) barely changes between \\(t_{i-1}\\) and \\(t_{i}\\):'],
  ['displayFormula', '$$\\Delta s_i = \\int_{t_{i-1}}^{t_i} \\Vert \\textbf{r}\'(t) \\Vert dt \\approx \\Vert \\textbf{r}\'(t_i^*) \\Vert \\Delta t$$'], 

  ['pmain', 'Remember that \\(\\textbf{r}(t_i^*)\\) is some value within \\([t_{i-1},t_{i}]\\), and that \\(\\Delta t\\) is constant. From the above formula, we can say:'],
  ['displayFormula', '$$\\int_C f(x,y) \\ ds = \\lim_{n \\to \\infty} \\sum^n_{i=1} f(\\textbf{r}(t_i^*)) \\ \\Vert \\textbf{r}\'(t_i^*) \\Vert \\Delta t = \\int_a^b f(\\textbf{r}(t)) \\ \\Vert \\textbf{r}\'(t) \\Vert dt $$'], 
  ['pmain', 'Since \\(\\Vert \\textbf{r}\'(t) \\Vert = \\sqrt{x\'(t) + y\'(t)}\\):'],
  ['displayFormula', '$$\\int_C f(x,y) \\ ds = \\int_a^b f(\\textbf{r}(t)) \\ \\sqrt{x\'(t) + y\'(t)} dt $$'], 
  ['pmain', 'If \\(f\\) and \\(\\textbf{r}\\) were functions that use three dimensions, then we can use a similar argument as above to state:'],
  ['displayFormula', '$$\\int_C f(x,y,z) \\ ds = \\int_a^b f(\\textbf{r}(t)) \\ \\sqrt{x\'(t) + y\'(t) + z\'(t)} dt $$'], 

];
export default content;