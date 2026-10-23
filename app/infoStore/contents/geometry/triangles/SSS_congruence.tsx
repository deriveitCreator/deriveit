export const title="SSS Congruence Proof";
const content = [
  ['h1', 'Proof Of SSS Congruence'], 
  ['pmain', 'Suppose we have two triangles \\(ABC\\) and \\(DEF\\), such that lines \\(AB\\) and \\(DE\\) are of equal length, lines \\(BC\\) and \\(EF\\) are of equal length and lines \\(AC\\) and \\(DF\\) are of equal length:'], 
  ['displayimg', 'sss1.png'],
  ['pmain', 'Now let\'s say we put the line \\(AC\\) on top of line \\(DF\\), and let point \\(B\\) be on the same side of \\(AC\\) (or \\(DF\\)) as point \\(E\\). Our intuition tells us that point \\(B\\) should be at point \\(E\\), but let\'s say the internal angles of the two triangles are different so that point \\(B\\) is at a different point, \\(G\\). Assume, without loss of generality, that \\(G\\) is to the right on \\(E\\):'], 
  ['displayimg', 'sss2.png'],
  ['pmain', 'So this means lines \\(GF\\) and \\(EF\\) have equal length and lines \\(DG\\) and \\(DE\\) have equal length, but points \\(G\\) and \\(E\\) are not in the same position. Now let\'s make line \\(EG\\):'], 
  ['displayimg', 'sss3.png'],
  ['pmain', 'Since lines \\(DG\\) and \\(DE\\) have equal length, then \\(\\triangle DGE\\) is an isosceles triangle, which means \\(\\angle DEG = \\angle DGE\\). Since the line \\(FE\\) cuts the angle \\(DEG\\), then \\(\\angle FEG < \\angle DEG\\):'], 
  ['displayFormula', '$$\\begin{gather} \\angle FEG < \\angle DEG \\\\ \\angle DEG = \\angle DGE \\\\ \\therefore \\angle FEG < \\angle DGE \\end{gather}$$'],
  ['pmain', 'Since lines \\(FE\\) and \\(FG\\) have equal length, then \\(\\triangle FEG\\) is an isosceles triangle, which means \\(\\angle FGE = \\angle FEG\\). Since the line \\(DG\\) cuts the angle \\(FGE\\), then \\(\\angle DGE < \\angle FGE\\):'], 
  ['displayFormula', '$$\\begin{gather} \\angle DGE < \\angle FGE \\\\ \\angle FGE = \\angle FEG \\\\ \\therefore \\angle DGE < \\angle FEG \\end{gather}$$'],
  ['pmain', 'Thus, we end up with a contradiction. Therefore, if \\(AC\\) were to be on top of \\(DF\\), then point \\(B\\) would have to lie exactly on point \\(E\\), and not some other point \\(G\\) (unless \\(B\\) gets placed on the other side of \\(AC\\)).'], 
];
export default content;