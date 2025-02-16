export const title="Proof that every triangle can be circumscribed by a circle";
const content = [
  ['h1', 'Proof That Every Triangle Can Be Circumscribed By A Circle'], 
  ['pmain', 'All triangles are made of three points (called <b>vertices</b>), and the lines connecting them. Now image three random non-collinear points (non-collinear means that all three points are not in a straight line). Call these three points \\(P_1\\), \\(P_2\\) and \\(P_3\\):'], 
  ['displayimg', 't1.png'], 
  ['pmain', 'Let the line \\({\\color{blue} L_1}\\) be a line going from \\(P_1\\) to \\(P_2\\). This is one side of the triangle:'], 
  ['displayimg', 't2.png'], 
  ['pmain', 'Let the line \\({\\color{green}B_1}\\) be the locus of points equidistant from \\(P_1\\) and \\(P_2\\):'], 
  ['displayimg', 't3.png'], 
  ['pmain', 'Line \\({\\color{green}B_1}\\) is the perpendicular bisector of \\({\\color{blue} L_1}\\), and all points in \\({\\color{green}B_1}\\) are equidistant from \\(P_1\\) and \\(P_2\\). Now let the line \\({\\color{blue} L_2}\\) be a line going from \\(P_2\\) to \\(P_3\\). This is another side of the triangle:'],
  ['displayimg', 't4.png'], 
  ['pmain', 'Let the line \\({\\color{green}B_2}\\) be the locus of points equidistant from \\(P_2\\) and \\(P_3\\):'], 
  ['displayimg', 't5.png'], 
  ['pmain', 'Line \\({\\color{green}B_2}\\) is the perpendicular bisector of \\({\\color{blue} L_2}\\), and all points in \\({\\color{green}B_1}\\) are equidistant from \\(P_2\\) and \\(P_3\\). By the definition of a triangle, the angle between \\({\\color{blue} L_1}\\) and \\({\\color{blue} L_2}\\) cannot be 180°. That means the bisectors \\({\\color{green}B_1}\\) and \\({\\color{green}B_2}\\) are definitely not parallel, which also means they must intersect at one point. Let\'s call this intersection point \\(C\\):'],
  ['displayimg', 't6.png'], 
  ['pmain', 'All points in \\({\\color{green}B_1}\\) are equidistant from \\(P_1\\) and \\(P_2\\), and all points in \\({\\color{green}B_2}\\) are equidistant from \\(P_2\\) and \\(P_3\\). This means the intersection \\(C\\) is equidistant from \\(P_1\\), \\(P_2\\) and \\(P_3\\):'],
  ['displayimg', 't7.png'], 
  ['pmain', 'If the distance between \\(P_1\\) and \\(C\\) is \\(r\\), then the distance between \\(P_2\\) and \\(C\\), and the distance between \\(P_3\\) and \\(C\\) would also be \\(r\\). This means if you make a circle around \\(C\\) with radius \\(r\\), it would pass through the points \\(P_1\\), \\(P_2\\) and \\(P_3\\):'],
  ['displayimg', 't8.png'], 
  ['pmain', 'Since you can do this with any three points, this proves that every triangle can be circumscribed by a circle.'],
   
];
export default content;