export const title="Isosceles Triangle Theorem Proof";
const content = [
  ['h1', 'Isosceles Triangle Theorem Proof'], 
  ['pmain', 'Read about <a href="./SAS_congruence">SAS congruence</a> to understand this proof better.'], 
  ['pmain', 'Consider this triangle \\(ABC\\):'], 
  ['displayimg', 'itt1.png'], 
  ['pmain', 'Extend line \\(AB\\) to make line \\(AD\\), and extend line \\(AC\\) to make line \\(AE\\), \\(D\\) and \\(E\\) can be anywhere below \\(B\\) and \\(C\\), however, line \\(AD\\) has to be the same length as line \\(AE\\).'],
  ['displayimg', 'itt2.png'], 
  ['pmain', 'Now connect \\(D\\) and \\(C\\), and also connect \\(B\\) and \\(E\\).'],
  ['displayimg', 'itt3.png'], 
  ['pmain', 'According to <a href="./SAS_congruence">SAS congruence</a>, if two sides and the included angle of one triangle are equal to the corresponding two sides and included angle of another triangle, then the two triangles are congruent. Looking above, you would notice that \\(\\triangle BAE\\) and \\(\\triangle CAD\\) have one angle that is the same, namely \\(\\angle BAC\\). However, since line \\(AE\\) and \\(AD\\) have equal length and line \\(BA\\) and \\(AC\\) have equal length, then \\(\\triangle BAE\\) and \\(\\triangle CAD\\) are congruent, which means \\(\\angle ACD = \\angle ABE\\) and \\(\\angle AEB = \\angle ADC\\).'],
  ['pmain', 'Since \\(AD\\) and \\(AE\\) are of equal length, and \\(AB\\) and \\(AC\\) are of equal length, then their remainder \\(BD\\) and \\(CE\\) are also of equal length. Since \\(\\triangle ACD\\) and \\(\\triangle ABE\\) are congruent, then \\(DC\\) and \\(BE\\) are of equal length.'],
  ['pmain', 'Since \\(BE\\) and \\(DC\\) are of equal length, and \\(BD\\) and \\(CE\\) are of equal length, and \\(\\angle AEB = \\angle ADC\\), then the triangles \\(BCD\\) and \\(CBE\\) are congruent. This means \\(\\angle BCD\\) and \\(\\angle CBE\\) are equal.'],
  ['pmain', 'Since \\(\\angle ABE = \\angle ACD\\), and within these two angles \\(\\angle CBE = \\angle BCD\\), then the remainder angles should be equal as well \\((\\angle ABC = \\angle ACB)\\), and these two are at the base of the triangle \\(\\triangle ABC\\).'],
  ['pmain', 'Thus, we have proved that if two sides of a triangle are equal in length, then the angles opposite those two sides are also equal. Now let\'s try to prove the inverse, that if two angles in a triangle are congruent, then the sides opposite those angles are also congruent.'],
  ['pmain', 'Assume there exists a triangle \\(ABC\\) where \\(\\angle ABC = \\angle ACB\\), and where the length of the side \\(AB\\) is greater than side \\(AC\\). Let there be a point \\(D\\) on the line \\(AB\\) such that the length of \\(DB\\) is equal to the length of \\(AC\\).'],
  ['displayimg', 'itt4.png'], 
  ['pmain', 'Since \\(D\\) is on \\(AB\\), then \\(\\triangle DBC\\) is smaller than \\(\\triangle ABC\\). Notice that \\(\\triangle DBC\\) has two sides (\\(DB\\) and \\(BC\\)) which are of equal length as two sides of \\(\\triangle ABC\\) (which are \\(AC\\) and \\(BC\\)). They also have the same angle (\\(\\angle DBC\\) and \\(\\triangle ACB\\)). This means, according to <a href="./SAS_congruence">SAS congruence</a>, \\(\\triangle DBC\\) and \\(\\triangle ABC\\) are congruent, which is a contradiction.'],
  ['pmain', 'Therefore, if two angles in a triangle are congruent, then the sides opposite those angles are also congruent.'],
];
export default content;