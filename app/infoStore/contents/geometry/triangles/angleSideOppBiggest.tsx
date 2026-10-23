export const title="Proof That The Angle Opposite The Greater Side Is Greater And The Side Opposite The Greater Angle Is Greater";
const content = [
  ['h1', 'Proof That The Angle Opposite The Greater Side Is Greater And The Side Opposite The Greater Angle Is Greater'], 
  ['pmain', 'Suppose that in a triangle, \\(ABC\\), the line \\(AC\\) is bigger than the line \\(AB\\). The angles opposite these two sides are \\(\\angle ABC\\) and \\(\\angle ACB\\):'], 
  ['displayimg', 'angleSideOppBiggest1.png'], 
  ['pmain', 'If the only thing we know about this triangle is that \\(AC > AB\\), then what can we say about \\(\\angle ABC\\) and \\(\\angle ACB\\)? Firstly, place a compass at point \\(A\\) and set it to a radius of \\(AB\\), then draw an arc which goes to line \\(AC\\). Mark the intersection as point \\(D\\):'], 
  ['displayimg', 'angleSideOppBiggest2.png'], 
  ['pmain', 'Make a line \\(BD\\):'], 
  ['displayimg', 'angleSideOppBiggest3.png'], 
  ['pmain', 'According to the <a href="./Isosceles_Triangle_Theorem">Isosceles Triangle Theorem</a>, \\(\\angle ABD = \\angle ADB\\):'], 
  ['pmain', 'Now how do we prove the opposite, that the side opposite the greater angle is greater? Suppose that \\(\\angle ABC \\gt \\angle ACB\\). The sides opposite these two angles are \\(AC\\) and \\(AB\\):'], 
  // COMPLETE THIS
  ['displayimg', 'angleSideOppBiggest1.png'], 
  ['pmain', 'We need to prove that \\(AC > AB\\). Assume that \\(AC \\le AB\\). If \\(AC = AB\\), then according to the <a href="./Isosceles_Triangle_Theorem">Isosceles Triangle Theorem</a> \\(\\angle ABC = \\angle ACB\\), but we know that this is not the case.'], 
  ['pmain', 'If \\(AB \\gt AC\\), then according to the proof above, the angle opposite \\(AB\\) should be greater than the angle opposite \\(AC\\).'], 
  ['pmain', 'Therefore, \\(AC > AB\\).'], 
];
export default content;