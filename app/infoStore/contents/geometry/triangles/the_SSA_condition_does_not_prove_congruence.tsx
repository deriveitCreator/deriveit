export const title="Proof that the SSA condition does not prove congruence";
const content = [
  ['h1', 'Proof ThatThe SSA Condition Does Not Prove Congruence'], 
  ['pmain', 'To prove that SSA condition does not prove congruence, we need one counter example. We will try to make a triangle made of three points \\(A\\), \\(B\\) and \\(C\\) such that \\(A\\) and \\(B\\) being 5 units apart, \\(A\\) and \\(C\\) being 3 units apart and \\(\\angle ABC\\) being \\(30^\\circ\\).'], 
  ['pmain', 'Consider points \\(A\\) and \\(B\\) that are 5 units apart and that lie on the \\(x\\)-axis:'], 
  ['displayimg', 'ssa1.png'], 
  ['pmain', 'Let point \\(C\\) be 3 units away from \\(A\\). The location of \\(C\\) is unknown, so it lies somewhere on this circle:'], 
  ['displayimg', 'ssa2.png'],
  ['pmain', 'Let there be a red line touching point \\(B\\) and raised \\(30^\\circ\\) above the \\(x\\)-axis:'],  
  ['displayimg', 'ssa3.png'],
  ['pmain', 'To make a triangle out of \\(A\\), \\(B\\) and \\(C\\), such that \\(A\\) and \\(B\\) are 5 units apart, \\(A\\) and \\(C\\) are 3 units apart and \\(\\angle ABC\\) is \\(30^\\circ\\), we would need point \\(C\\) to lie on one of the two intersections of the circle:'],  
  ['displayimg', 'ssa4.png'],
  ['pmain', 'This means with our given conditions, we can make two triangles:'],  
  ['displayimg', 'ssa5.png'],
  ['pmain', 'This example shows that a side-side-angle condition doesn\'t necessarily give us a unique triangle.'],  
];
export default content;