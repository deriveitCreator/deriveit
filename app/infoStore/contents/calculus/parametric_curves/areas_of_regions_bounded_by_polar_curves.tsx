export const title="Areas of regions bounded by polar curves";
const content = [
  ['h1', 'Areas Of Regions Bounded By Polar Curves'],
  ['pmain', 'Consider a curve defined by the function \\(r=f(θ)\\), where \\(θ\\) is in radians and \\(α≤θ≤β\\). Our first step to find the area is to partition the interval  \\([α,β]\\) into \\(n\\) equal-width subintervals. The width of each subinterval is given by the formula  \\(Δθ=(β−α)/n\\), and the ith partition point \\(θ_i\\) is given by the formula \\(θ_i=α+ i Δθ \\). Each partition point \\(θ=θ_i\\) defines a line with slope \\(\\tan(θ_i)\\) passing through the pole as shown in the following graph.'],
  ['figure', ['1.png','Image from openstax.org (Calculus Volume 2)']],
  ['pmain', 'The area of a part of a circle is:'],
  ["displayFormula","\\[\\frac{θ r^2}{2}\\]"],
  ['pmain', 'This means the area of a partition would be:'],
  ["displayFormula","\\[\\frac{(f(θ))^2}{2} Δ θ\\]"],
  ['pmain', 'This means the total area between \\(α\\) and \\(β\\):'],
  ["displayFormula","\\[A \\approx \\sum_{i=1}^n \\frac{(f(θ_i^*))^2}{2} Δθ\\]"],
  ['pmain', 'The angle \\(θ_i^*\\) is an angle in the interval \\([θ_{i-1},θ_i]\\). If we let \\(n\\) go to infinity:'],
  ["displayFormula","\\[A = \\lim_{n \\to \\infty} \\sum_{i=1}^n \\frac{(f(θ_i^*))^2}{2} Δθ = \\int^β_α \\frac{1}{2} [f(θ)]^2 dθ \\]"],
];
export default content;