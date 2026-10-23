export const title="Proof of the alternate segment theorem";
const content = [
  ['h1', 'Proof Of The Alternate Segment Theorem'], 
  ['pmain', 'Consider a circle and two tangents that meet at point \\(P\\). Let point \\(A\\) and point \\(B\\) be the points were the two tangents touch the circle. Also, let point \\(O\\) be at the center, and let point \\(C\\) be on the major arc of between \\(A\\) and \\(B\\):'], 
  ['displayimg', 's1.jpeg','300px'], 
  ['pmain', 'Points \\(A\\), \\(B\\) and \\(C\\) form a triangle. Let \\(\\angle ACB = \\theta\\). This means \\(\\angle AOB = 2 \\theta\\) (because of the <a href="inscribed_angle_theorem">inscribed angle theorem</a>):'], 
  ['displayimg', 's2.jpeg','300px'], 
  ['pmain', 'Since \\(\\overline{AO}\\) and \\(\\overline{BO}\\) are both radii, and since the angle between a radius and tangent is \\(90^\\circ\\), then \\(\\angle PAO = \\angle PBO = 90^\\circ\\):'], 
  ['displayimg', 's3.jpeg','300px'], 
  ['pmain', 'Since the interior angles of a quadrilateral add to 360. Then the interior angles of the polygon \\(PAOB\\) should sum to 360:'], 
  ["displayFormula","\\[ 2 \\theta + 90 + 90 + \\angle APB = 360 \\]"], 
  ['pmain', 'Solving for \\(\\angle APB\\):'],
  ["displayFormula","\\[\\begin{gather} \\angle APB = 360 - 2 \\theta - 90 - 90 \\\\ \\angle APB = 180 - 2 \\theta \\end{gather}\\]"], 
  ['pmain', 'According to the <a href="two_tangent_theorem">two tangent theorem</a>, \\(|\\overline{PA}|=|\\overline{PB}|\\). This means triangle \\(APB\\) is an isosceles triangle, which means \\(\\angle PAB = \\angle PBA\\):'],
  ['displayimg', 's4.jpeg','300px'], 
  ['pmain', 'Let \\(\\angle PAB = \\alpha\\). Since angles in a triangle add to 180:'],
  ["displayFormula","\\[\\begin{gather} \\angle APB + \\angle PAB + \\angle PBA = 180 \\\\ (180 - 2 \\theta) + \\alpha + \\alpha = 180 \\\\ 2\\alpha = 180 - (180 - 2 \\theta) \\\\ 2\\alpha = 2\\theta \\end{gather}\\]"], 
  ['pmain', 'This shows that \\(\\alpha = \\theta\\). This means \\(\\angle ACB\\) is the same as \\(\\angle PAB\\) and \\(\\angle PBA\\).'],
  ['displayimg', 's5.jpeg','300px'], 
];
export default content;