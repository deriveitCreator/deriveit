export const title="If (n^2)+1 is prime, then n^2 = 4k";
const content = [
  ['h1', 'If (n^2)+1 Is Prime, Then n^2 = 4k'],
  ['pmain', 'You can manually check that the statement holds true for \\(n=2\\), so for the rest of the proof, let\'s assume \\(n \\gt 2\\). The integer \\(n\\) can have four forms:'],
  ['displayFormula', '$$ n = 4m, n = 4m+1, n = 4m+2, n = 4m+3 $$'],
  ['pmain', 'How many forms can \\(n^2\\) have? For \\(n = 4m\\) and \\(n = 4m+1\\):'],
  ['displayFormula', '$$ n = 4m \\implies n^2 = (4m)^2 \\implies n^2 = 4k $$$$ n = 4m + 1 \\implies n^2 = (4m+1)^2 \\implies n^2 = 16m^2 + 8m +1 = 4k +1 $$'],
  ['pmain', 'For \\(n = 4m + 2\\) and \\(n = 4m+3\\):'],
  ['displayFormula', '$$ n = 4m + 2 \\implies n^2 = (4m+2)^2 = 16m^2 + 16m +4 = 4k $$$$ n = 4m + 1 \\implies n^2 = (4m+3)^2 = 16m^2 + 24m + 9 = (16m^2 + 24m + 8) + 1 = 4k $$'],
  ['pmain', 'This shows that \\(n^2\\) has the form \\(4k\\) or \\(4k+1\\). If it\'s \\(4k+1\\):'],
  ['displayFormula', '$$ n^2 = 4k+1 \\implies n^2 + 1 = 4k+2 \\notin \\mathbb{P} $$'],
  ['pmain', 'The contrapositive of this is that if \\(n^2+1\\) is prime, then \\(n^2 = 4k\\).'],
];
export default content;



