export const title="Definition of double integrals";
const content = [
  ['h1', 'Definition Of Double Integrals'],

  ['pmain', 'Consider a continuous function \\(f(x,y)≥0\\) of two variables defined on the closed rectangle \\(R\\):'],
  ['displayFormula', '$$R = [a, b] \\times [c, d] = \\{ (x,y) \\in \\mathbb{R}^2 | a \\le x \\le b, c \\le y \\le d \\} $$'],

  ['pmain', 'Let \\(S\\) be the solid that lies above \\(R\\) and under the graph of \\(f\\):'],
  ['figure', ['1.webp', 'Image from OpenStax.org.','300px']],

  ['pmain', 'We divide the region \\(R\\) into small rectangles \\(R_{ij}\\), each with area \\(\\Delta A\\) and with sides \\(\\Delta x\\) and \\(\\Delta y\\). We do this by dividing the interval \\([a,b]\\) into \\(m\\) subintervals and dividing the interval \\([c,d]\\) into \\(n\\) subintervals. Hence  \\(\\Delta x= \\frac{b-a}{m}\\), \\(\\Delta y= \\frac{d-c}{n}\\), and \\(\\Delta A=\\Delta x \\Delta y\\). Let \\((x^*_{ij},y^*_{ij})\\) be an arbitrary sample point in each \\(R_{ij}\\).'],
  ['figure', ['2.webp', 'Image from OpenStax.org.','350px']],

  ['pmain', 'The volume of a thin rectangular box above \\(R_{ij}\\) is approximately \\(f(x^*{ij},y^*_{ij}) \\Delta A\\):'],
  ['figure', ['3.webp', 'Image from OpenStax.org.','300px']],

  ['pmain', 'An approximate volume of the solid \\(S\\) is \\(V ≈ \\sum_{i=1}^m \\sum_{j=1}^n f(x^*_{ij},y^*_{ij}) \\Delta A\\). This sum is known as a <b>double Riemann sum</b>. We obtain a better approximation to the actual volume if \\(m\\) and \\(n\\) become larger.'],
  ['displayFormula', '$$\\begin{gather} V = \\lim_{m,n \\to \\infty} \\sum_{i=1}^m \\sum_{j=1}^n f(x^*_{ij},y^*_{ij}) \\Delta A \\\\ V = \\lim_{\\Delta x, \\Delta y \\to 0} \\sum_{i=1}^m \\sum_{j=1}^n f(x^*_{ij},y^*_{ij}) \\Delta A \\end{gather}$$'],

  ['pmain', 'We use this to define the double integral:'],
  ['displayFormula', '$$\\iint\\limits_R f(x,y) dA = \\lim_{m, n \\to \\infty} \\sum_{i=1}^m \\sum_{j=1}^n f(x^*_{ij},y^*_{ij}) \\Delta A $$'],
];
export default content;