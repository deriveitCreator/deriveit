export const title="Proving The Reflective Property Of A Parabola";
const content = [
  ['h1', 'Proving The Reflective Property Of A Parabola'], 
  ['pmain', 'For proving the reflective property of a parabola, only the shape of the parabola would matter, the position would not matter. The vertex equation of a parabola is \\(f(x) = \\frac{(x - h)^2}{4p} + k\\), but for proving the reflective property, \\(f(x) = \\frac{x^2}{4p}\\) would suffice.'], 
  ['pmain', 'Let \\((0, 0)\\) be the vertex, \\((0, p)\\) be the focus and \\((a, b)\\) be a random point in the parabola. We will call these points \\(V\\), \\(F\\) and \\(R\\):'], 
  ['displayimg', 'r1.JPG'], 
  ['pmain', "The tangent to \\(f(x)\\) at \\(x\\) has the gradient \\(f'(x) = \\frac{2x}{4p}\\) or \\(f'(x) = \\frac{x}{2p}\\), we will call this \\(t(x)\\). For example, \\(t(a)\\) is the gradient of the tangent at \\(a\\), which is \\(\\frac{a}{2p}\\):"],
  ['displayimg', 'r2.JPG'], 
  ['pmain', 'The directrix would be at \\(y = -p\\). Let \\(D\\) be a point at \\((a, -p)\\), and let \\(E\\) be a point at \\((a, 0)\\):'], 
  ['displayimg', 'r3.JPG'], 
  ['pmain', 'Let point \\(M\\) be the intersection between \\(\\overline{FD}\\) and the \\(x\\)-axis.:'], 
  ['displayimg', 'r4.JPG'], 
  ['pmain', 'Since \\(\\overline{FV}\\) and \\(\\overline{ED}\\) are of the same length, then \\(M\\) is the midpoint of \\(\\overline{VE}\\) and \\(\\overline{FD}\\), which means \\(M\\) is at \\((\\frac{a}{2}, 0)\\). Now lets try to find the gradient of line \\(\\overline{MR}\\):'], 
  ['displayimg', 'r5.JPG'], 
  ['pmain', 'The gradient of \\(\\overline{MR}\\) is the length of \\(\\overline{RE}\\) divided by the length of \\(\\overline{ME}\\), which is \\(\\frac{b}{a/2}\\), or \\(\\frac{2b}{a}\\). The value of \\(b\\) is \\(f(a)\\), or \\(\\frac{2a^2}{p}\\), which means the gradient of \\(\\overline{MR}\\) is \\(\\frac{2(a^2/4p)}{a}\\):'],
  ['displayimg', 'r6.JPG'], 
  ['pmain', 'Does the above seem familiar? This is equal to \\(t(a)\\), so the line segment \\(\\overline{MR}\\) is the tangent to the parabola.'], ['pmain', 'Let the angle &theta; be the angle between the \\(t(a)\\) and the line \\(x = a\\):'], 
  ['displayimg', 'r7.JPG'], 
  ['pmain', 'This means angle \\(MRE\\) is &theta;:'], 
  ['displayimg', 'r8.JPG'], 
  ['pmain', 'Lets call the angle \\(FRM\\) &alpha;:'], 
  ['displayimg', 'r10.JPG'], 
  ['pmain', 'The reflection property states that any ray perpendicular to the directrix will bounce off the parabola and pass through the focus:'], 
  ['displayimg', 'r9.JPG'], 
  ['pmain', 'In order to prove the reflective property, we need to show that the angles &alpha; and &theta; are equal:'], ['displayimg', 'r11.JPG'],
  ['pmain', 'By definition of a parabola, the lines \\(\\overline{FR}\\) and \\(\\overline{RD}\\) are equal, which makes the triangle \\(FRD\\) an isosceles triangle. Since \\(M\\) is the midpoint of line \\(\\overline{FD}\\), then the line \\(\\overline{MR}\\) cuts the isosceles triangle \\(FRD\\) by half, meaning that \\(\\overline{MR}\\) is an angle bisector of \\(FRD\\), which would mean &alpha; and &theta; are equal.']
];
export default content;