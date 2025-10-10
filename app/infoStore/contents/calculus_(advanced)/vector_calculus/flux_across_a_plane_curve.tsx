export const title="Flux across a plane curve";

const content = [
  ['h1', 'Flux Across A Plane Curve'],

  ['pmain', 'Let \\(\\textbf{F}(x,y)= \\langle P(x,y), Q(x,y) \\rangle\\) be a two dimensional vector field. In <a href="vector_line_integrals">this article</a>, we talked about finding the work done by force \\(F\\) on a particle moving along curve \\(C\\):'],

  ['displayFormula', '$$W = \\int_C \\textbf{F} \\cdot \\textbf{T} ds $$'],
  
  ['pmain', 'In the work done formula we use the tangent vector \\(\\textbf{T}\\). If we replace \\(\\textbf{T}\\) by the unit normal vector \\(N\\), we get the <b>flux</b> across the curve \\(C\\):'],  
  ['displayFormula', '$$\\text{flux across } C = \\int_C \\textbf{F} \\cdot \\textbf{N} ds $$'],

  ['pmain', 'Let \\(\\textbf{n}(t) = \\langle y\'(t), -x\'(t) \\rangle\\). The definition of unit normal vector is:'],
  ['displayFormula', '$$\\textbf{N}(t) = \\frac{\\textbf{n}(t)}{\\Vert \\textbf{n}(t) \\Vert} $$'],

  ['pmain', 'Let \\(C\\) be a smooth curve with parameterization \\(\\textbf{r}(t) = \\langle x(t), y(t) \\rangle\\), where \\(a \\le t \\le b\\). Using the definition of unit normal vector, we can say:'],
  ['displayFormula', '$$ \\int_C \\textbf{F} \\cdot \\textbf{N} ds = \\int_c \\textbf{F} \\cdot \\frac{\\textbf{n}(t)}{\\Vert \\textbf{n}(t) \\Vert} ds = \\int^a_b \\textbf{F} \\cdot \\frac{\\textbf{n}(t)}{\\Vert \\textbf{n}(t) \\Vert} \\Vert \\textbf{r}\'(t) \\Vert dt$$'], 

  ['pmain', 'Since \\(\\Vert \\textbf{n}(t) \\Vert = \\Vert \\textbf{r}\'(t) \\Vert\\):'],
  ['displayFormula', '$$ \\int_C \\textbf{F} \\cdot \\textbf{N} ds = \\int^a_b \\textbf{F}(\\textbf{r}(t)) \\cdot \\textbf{n}(t) dt$$'], 
  
  ['pmain', 'Since \\([\\textbf{n}(t) = \\langle y\'(t), -x\'(t) \\rangle]\\) or \\([\\textbf{n}(t) = \\langle dy(t)/dt, - dx(t)/dt \\rangle]\\), then \\([\\textbf{n}(t) dt = \\langle dy(t), - dx(t) \\rangle ]\\). This means:'],
  ['displayFormula', '$$ \\int_C \\textbf{F} \\cdot \\textbf{n}(t) dt = \\int_C \\textbf{F} \\cdot \\langle dy, - dx \\rangle = \\int_C Pdy -Qdx$$'], 
];
export default content;