export const title="Flux across a plane curve";

const content = [
  ['h1', 'Flux Across A Plane Curve'],

  ['pmain', 'In <a href="vector_line_integrals">this article</a>, we talked about finding the work done by force \\(F\\) on a particle moving along curve \\(C\\):'],

  ['displayFormula', '$$W = \\int_C \\textbf{F} \\cdot \\textbf{T} ds $$'],
  
  ['pmain', 'In the work done formula we use the tangent vector \\(\\textbf{T}\\). If we replace \\(\\textbf{T}\\) by the normal vector \\(N\\), we get the <b>flux</b> across the curve \\(C\\):'],
  
  ['displayFormula', '$$\\text{flux across } C = \\int_C \\textbf{F} \\cdot \\textbf{N} ds $$'],

  ['pmain', 'Suppose the curve \\(C\\) is defined by \\(\\textbf{r}(t)\\) where the path starts from \\(t=a\\) and ends at \\(t=b\\). The curve is cut into \\(n\\) pieces, where the interval \\([a,b]\\) is divided into \\(n\\) pieces and where \\(t_0 =a\\) and \\(t_n=b\\). Each piece of the curve (between \\(t_{i-1}\\) and \\(t_i\\)) is of length \\(\\Delta s_i\\), and the cut is at point \\(P_i\\). Let \\(P^*_i\\) be a point between \\(P_{i-1}\\) and \\(P_i\\), then:'],
  ['displayFormula', '$$ W = \\sum_{i=1}^n \\textbf{F}(P^*_i) \\cdot \\textbf{T}(P^*_i) \\ \\Delta s_i $$'], 

  ['pmain', 'Similarly:'],
  ['displayFormula', '$$ \\text{flux across } C = \\sum_{i=1}^n \\textbf{F}(P^*_i) \\cdot \\textbf{N}(P^*_i) \\ \\Delta s_i $$'], 


];
export default content;