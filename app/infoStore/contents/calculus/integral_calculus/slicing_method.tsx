export const title="(Integration) Using the slicing method to find the volume";
const content = [
  ['h1', '(Integration) Using The Slicing Method To Find The Volume'],
  ['pmain', 'Consider the solid \\(S\\) extending along the x-axis:'],
  ['figure', ['12.png','Image from openstax.org (Calculus Volume 1)']],
  ['pmain', 'To find the volume of this solid, we will start by dividing \\(S\\) into slices perpendicular to the  x-axis and finding the cross sectional area of those slices:'],
  ['figure', ['13.png','Image from openstax.org (Calculus Volume 1)']],
  ['pmain', 'Let \\(S_i\\) represent the slice of \\(S\\) stretching from \\(x_{i-1}\\) to \\(x_i\\). For \\(i=1,2, …, n\\), let \\(x^*_i\\) be an arbitrary point in \\([x_{i-1},x_i]\\). Then the volume of slice \\(S_i\\)can be estimated by \\(V(S_i)≈A(x^*_i)Δx\\). The approximate volume will be more accurate if \\(n\\) is large.'],
  ['pmain','Adding these approximations together, we see the volume of the entire solid \\(S\\) can be approximated by:'],
  ['displayFormula', '\\[V(S)≈ \\sum^n_{i=1} A(x^*_i)Δx\\]'],
  ['pmain', 'Our next step is to take the limit as \\(n→∞\\):'],
  ['displayFormula', '\\[V(S)≈ \\lim_{n \\to \\infty} \\sum^n_{i=1} A(x^*_i)Δx = \\int^b_a A(x) \\ dx \\]'],
];
export default content;