export const title="Bisecting an angle";
const content = [
  ['h1', 'Bisecting An Angle'], 
  ['pmain', 'Suppose we want to bisect \\(\\angle BAC\\):'], 
  ['displayimg', 'bisectAngle1.png'], 
  ['pmain', 'Select a random point \\(D\\) on the line \\(BA\\). Place a compass on point \\(A\\), set the radius to \\(AD\\), then make an arc towards line \\(AC\\). Call the intersection point \\(E\\).'], 
  ['displayimg', 'bisectAngle2.png'], 
  ['pmain', '\\(AD = AE\\) in length because they are a radius to the same arc. Using two circles on points \\(D\\) and \\(E\\), construct an equilateral triangle with a third point \\(F\\) facing opposite \\(A\\):'], 
  ['displayimg', 'bisectAngle3.png'], 
  ['pmain', 'Connect \\(AF\\):'], 
  ['displayimg', 'bisectAngle4.png'], 
  ['pmain', 'Since the triangle we constructed is an equilateral triangle, then \\(DF\\), \\(EF\\) and \\(DE\\) are the same length. We also know that \\(AE\\) and \\(AD\\) have the same length, and the triangles \\(DAF\\) and \\(EAF\\) share a common side, \\(AF\\). Since three sides have the same length, then according to <a href="../triangles/SSS_congruence">SSS congruence</a>, the two triangles are congruent. This means their corresponding angles are equal, which means \\(\\angle DAF = \\angle EAF\\).'], 
];
export default content;