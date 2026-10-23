export const title="Deriving the vertex form equation of a parabola from the focus and directrix definition";
const content = [
  ['h1', 'Deriving The Vertex Form Equation Of A Parabola From The focus And Directrix Definition'], 
  ['pmain', 'The <b>parabola</b> is defined as the set of all the points that are equidistant from the <b>focus</b> and <b>directrix</b>. The point halfway between the focus and the directrix is called the <b>vertex</b> of the parabola:'], 
  ['displayimg', '1.png'], 
  ['pmain', 'By definition, a line from the focus to a point in a parabola, and a line from the same point to the directrix are equal in length:'],
  ['displayimg', '2.png'], 
  ['pmain', 'For simplicity, we will work with a parabola which has a vertex at the origin. Let\'s choose a point on the parabola (black point):'],
  ['displayimg', '3.png'],
  ['pmain', 'The distance from our point to the focus is equal to the distance from our point to the directrix:'], 
  ['displayFormula', '\\[\\begin{gather} \\sqrt{(y-p)^2+x^2} = y-(-p) \\\\ (y-p)^2+x^2 = (y+p)^2 \\end{gather}\\]'], 
  ['pmain', 'Expanding and simplifying:'], 
  ['displayFormula', '\\[\\begin{gather} y^2-2yp+p^2+x^2 = y^2+2yp+p^2 \\\\ x^2 = 4yp \\end{gather}\\]'], 
  ['pmain', 'This means:'], 
  ['displayFormula', '\\[ y=\\frac{x^2}{4p} \\]'], 
  ['pmain', 'If the parabola is shifted upwards by \\(k\\) units, then the equation becomes:'], 
  ['displayFormula', '\\[ y=\\frac{x^2}{4p} + k\\]'], 
  ['pmain', 'If the parabola is shifted to the right by \\(h\\) units, then the equation becomes:'], 
  ['displayFormula', '\\[ y=\\frac{(x-h)^2}{4p} + k\\]'], 
  ['pmain', 'This is a vertex form equation of a parabola.'], 
  ['displayimg', '4.png'],
];
export default content;