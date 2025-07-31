export const title="Deriving an integration formula over polar rectangles";
const content = [
  ['h1', 'Deriving An Integration Formula Over Polar Rectangles'],

  ['pmain', 'We can describe a polar rectangle as in the figure below, with \\(R= \\{(r,θ)|a \\le r \\le b, \\alpha \\le \\theta \\le β \\}\\).'],
  ['pmain', 'Consider a function \\(f(r,θ)\\) over a polar rectangle  \\(R\\). We divide the interval \\([a,b]\\) into  m subintervals \\([r_{i-1},r_i]\\) of length \\(\\Delta r=(b-a)/m\\) and divide the interval \\([α,β]\\) into \\(n\\) subintervals \\([θ_{j-1},θ_j]\\) of width \\(\\Delta θ=(β−α)/n\\).'],
  ['figure', ['4.webp', '(a) A polar rectangle \\(R\\). (b) divided into subrectangles \\(Rij\\). (c) Close-up of a subrectangle. Image from OpenStax.org.']],

  ['pmain', 'The area \\(\\Delta A\\) of the polar subrectangle \\(R_{ij}\\) is: approximately:'],
  ['displayFormula', '$$\\Delta A = \\frac{1}{2} \\Delta r (r_{i-1} \\Delta \\theta + r_i \\theta)$$'],
  ['pmain', 'This is because the subrectangle looks like a trapezoid.The smaller arc length is \\(r_{i-1} \\Delta \\theta\\), the larger arc length is \\(r_i \\Delta \\theta\\), and both of these arc length are separated by a distance of \\(\\Delta r\\). Let \\(r^*_{ij} = \\frac{1}{2} (r_{i-1} + r_i)\\), we have \\(\\Delta A = r^*_{ij} \\Delta r \\Delta \\theta\\).'],

  ['pmain', 'Going back to \\(f(r, \\theta)\\). The function \\(f\\) is defined over the region \\(R\\). The polar volume of the thin box above \\(R_{ij}\\) is:'],
  ['displayFormula', '$$f(r^*_{ij}, \\theta^*_{ij}) \\Delta A = f(r^*_{ij}, \\theta^*_{ij}) r^*_{ij} \\Delta r \\Delta \\theta $$'],

  ['pmain', 'Using the same idea for all the subrectangles and summing the volumes of the rectangular boxes, we obtain a double Riemann sum as:'],
  ['displayFormula', '$$\\sum^m_{i=1} \\sum^n_{j=1} f(r^*_{ij}, \\theta^*_{ij}) r^*_{ij} \\Delta r \\Delta \\theta $$'],
  
  ['pmain', 'Now we can define the polar volume as the limit of double Riemann sum:'],
  ['displayFormula', '$$V = \\lim_{m,n \\to \\infty} \\sum^m_{i=1} \\sum^n_{j=1} f(r^*_{ij}, \\theta^*_{ij}) r^*_{ij} \\Delta r \\Delta \\theta $$'],
  
  ['pmain', 'This becomes the expression for the double integral:'],
  ['displayFormula', '$$\\iint\\limits_R f(r,\\theta) dA = \\lim_{m,n \\to \\infty} \\sum^m_{i=1} \\sum^n_{j=1} f(r^*_{ij}, \\theta^*_{ij}) r^*_{ij} \\Delta r \\Delta \\theta $$'],
  
  ['pmain', 'The double integral over a polar rectangular region can be expressed as an iterated integral in polar coordinates:'],
  ['displayFormula', '$$\\iint\\limits_R f(r,\\theta) dA = \\iint\\limits_R f(r,\\theta) r \\ dr d\\theta = \\int_{\\theta = \\alpha}^{\\theta = \\beta} \\int_{r=a}^{r=b} f(r,\\theta) r \\ dr d\\theta$$'],

  ['pmain', 'If \\(f\\) is given in terms of \\(x\\) and \\(y\\), then:'],
  ['displayFormula', '$$\\iint\\limits_R f(x,y) dA = \\iint\\limits_R f(r \\cos \\theta, r \\sin \\theta) r \\ dr d\\theta $$'],
];
export default content;