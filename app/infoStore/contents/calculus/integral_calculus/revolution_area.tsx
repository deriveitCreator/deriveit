export const title="(Integration) Finding the area of a surface of revolution";
const content = [
  ['h1', 'Finding The Area Of A Surface Of Revolution'],
  ['pmain', 'Let \\(f(x)\\) be a nonnegative smooth function over the interval \\([a,b]\\). We wish to find the surface area of the surface of revolution created by revolving the graph of \\(y=f(x)\\) around the x-axis:'],
  ['figure', ['9.png','Image from openstax.org (Calculus Volume 1)']],
  ['pmain', 'We are going to partition the interval \\([a,b]\\) and approximate the surface area by calculating the surface area of simpler shapes. We start by using line segments to approximate the curve. For  \\(i=1,2,…,n\\), construct a line segment from the point \\((x_{i-1},f(x_{i-1}))\\) to the point \\((x_i,f(x_i))\\). Now, revolve these line segments around the x-axis to generate an approximation of the surface of revolution:'],
  ['figure', ['8.png','Image from openstax.org (Calculus Volume 1)']],
  ['pmain', 'The shape of each band is a frustrum of a right circular cone. The lateral surface area of a right circular conical frustrum is.:'],
  ['displayFormula', '\\[SA_{frustrum} = \\pi (r_1 + r_2) l\\]'],
  ['pmain', 'Where \\(r_1\\) is the radius of the top circle, \\(r_2\\) is the radius of the bottom circle and \\(l\\) is the slant height. The proof of this can be found <a href="../../geometry/other_shapes/conical_frustum_lateral_surface_area">here</a>. The lateral surface area of one of these bands is:'],
  ['displayFormula', '\\[SA_{frustrum} = \\pi ( f(x_{i-1}) + f(x_i)) \\sqrt{\\Delta x ^2 + \\Delta y_i ^2} = \\pi ( f(x_{i-1}) + f(x_i)) \\left( \\sqrt{1 + \\left[ \\frac{\\Delta y_i}{\\Delta x} \\right]^2} \\Delta x \\right)\\]'],
  ['pmain', 'According to the Mean Value theorem, there exists \\(x_i^* \\in [x_{i-1}, x_i]\\) such that \\(f\'(x_i^*) = \\frac{\\Delta y_i}{\\Delta x}\\):'],
  ['displayFormula', '\\[ SA_{frustrum}  = \\pi ( f(x_{i-1}) + f(x_i)) \\left( \\sqrt{1 + \\left[ f\'(x_i^*) \\right]^2} \\Delta x \\right) \\]'],
  ['pmain', 'According to the Intermediate Value theorem, there exists \\(x_i^{**} \\in [x_{i-1}, x_i]\\) such that \\(f(x_i^{**}) = \\frac{f(x_{i-1}) + f(x_i)}{2}\\):'],
  ['displayFormula', '\\[ SA_{frustrum} = \\pi (2f(x_i^{**})) \\left( \\sqrt{1 + \\left[ f\'(x_i^*) \\right]^2} \\Delta x \\right) = 2\\pi \\left( f(x_i^{**}) \\sqrt{1 + \\left[ f\'(x_i^*) \\right]^2} \\Delta x \\right) \\]'],
  ['pmain', 'The approximate surface area of the whole surface of revolution is:'],
  ['displayFormula', '\\[SA \\approx \\sum^n_{i=1} 2\\pi \\left( f(x_i^{**}) \\sqrt{1 + \\left[ f\'(x_i^*) \\right]^2} \\Delta x \\right) \\]'],
  ['pmain', 'Taking the limit as \\(n→∞\\):'],
  ['displayFormula', '\\[SA = \\int^b_a 2\\pi f(x) \\sqrt{1 + \\left[ f\'(x) \\right]^2} \\ dx \\]'],
];
export default content;