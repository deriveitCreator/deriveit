export const title="Proof for the divergence test";
const content = [
  ['h1', 'Proof For The Divergence Test'],
  ['pmain', 'Let \\(\\sum a_n\\) be convergent series and let \\(s_n = a_1 + a_2 + a_3 + \\cdots + a_n\\). This means \\(a_n = s_n - s_{n-1}\\). If \\(\\sum a_n\\) is convergent, then the sequence \\(\\{s_n\\}\\) is convergent. Let \\(\\lim_{n \\to \\infty} s_n = s\\). If \\(n-1 \\to \\infty\\) when \\(n \\to \\infty\\), then \\(\\lim_{n \\to \\infty} s_{n-1} = s\\). Therefore:'],
  ["displayFormula","\\[\\begin{align} \\lim_{n \\to \\infty} a_n &= \\lim_{n \\to \\infty} (s_n - s_{n-1}) \\\\ &= \\lim_{n \\to \\infty} s_n - \\lim_{n \\to \\infty} s_{n-1} = s - s = 0\\end{align}\\]"],
  ['pmain', 'This shows if \\(\\sum a_n\\) is convergent, then \\(\\lim_{n \\to \\infty} a_n = 0\\). The contrapositive of this is "If \\(\\lim_{n \\to \\infty} a_n \\ne 0\\) or \\(\\lim_{n \\to \\infty} a_n\\) does not exist, then \\(\\sum a_n\\) is divergent".'],
];
export default content;