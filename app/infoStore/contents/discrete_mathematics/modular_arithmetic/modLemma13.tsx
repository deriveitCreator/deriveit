export const title="If (m, n) = 1, then {i, m+i, 2m+i, ..., (n-1)m+i} form a complete system of residues modulo n";
const content = [
  ['h1', 'If (m, n) = 1, Then {i, m+i, 2m+i, ..., (n-1)m+i} Form A Complete System Of Residues Modulo n'],
  ['pmain', 'Let \\(m\\), \\(i\\) and \\(n\\) be positive integers, and let \\((m, n) = 1\\). We have the following integers:'], 
  ['displayFormula', '$$ \\{i, m+i, 2m+i, \\ldots, (n-1)m+i \\} $$'],
  ['pmain', 'Let\'s say there are two positive integers \\(k_1\\) and \\(k_1\\) such that \\(k_1 k_2 \\lt n\\) and \\(k_1 m +i ≡ k_2m + i \\bmod n\\). This means:'], 
  ['displayFormula', '$$\\begin{gather} k_1 m +i ≡ k_2m + i \\bmod n \\\\ \\implies k_1 m ≡ k_2m \\bmod n \\end{gather}$$'],
  ['pmain', 'According to <a href="./modLemma4">this lemma</a>:'], 
  ['displayFormula', '$$ k_1 ≡ k_2 \\bmod \\frac{n}{(m,n)} $$'],
  ['pmain', 'Since \\((m,n)=1\\):'], 
  ['displayFormula', '$$ k_1 ≡ k_2 \\bmod n $$'],
  ['pmain', 'Since \\(k_1\\) and \\(k_2\\) and less than \\(n\\), then \\(k_1 = k_2\\). A similar argument can be made to show that if \\(k_1 m +i \\not ≡ k_2m + i \\bmod n\\), then \\(k_1 \\ne k_2\\). This means no two integers from \\( \\{ i, m+i, 2m+i, \\ldots, (n-1)m+i \\} \\) would be conguent (modulo \\(n\\)) with one integer from \\( \\{ 1,2, \\ldots, n-1 \\} \\). This means \\( \\{ i, m+i, 2m+i, ..., (n-1)m+i \\} \\) forms a complete residue system modulo \\(n\\).'], 
];
export default content;