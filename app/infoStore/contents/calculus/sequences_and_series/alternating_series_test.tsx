export const title="Understanding the alternating series test";
const content = [
  ['h1', 'Understanding The Alternating Series Test'],
  ['pmain', 'Any series whose terms alternate between positive and negative values is called an <b>alternating series</b>:'],
  ["displayFormula","\\[ \\sum^{\\infty}_{n=1} (-1)^{n+1} b_n = b_1 - b_2 + b_3 - b_4 + b_5 - \\cdots \\]"],
  ['pmain', 'Where \\(b_n \\gt 0\\). If \\(0 \\lt b_{n+1} \\le b_n\\) for all \\(n\\) and if \\(\\lim_{n \\to \\infty} b_n = 0\\), then the series converges. This is known as the <b>alternating series test</b>. Let\'s try to understand why that\'s true.'],
  ['pmain', 'Let \\(S\\) be the value of the infinite series (if it exists), and let \\(S_k\\) be the \\(k\\)th partial sum:'],
  ["displayFormula","\\[ S_k = \\sum^{k}_{n=1} (-1)^{n+1} b_n = b_1 - b_2 + b_3 - b_4 + b_5 - \\cdots ±b_k \\]"],
  ['pmain', 'If \\(0 \\lt b_{n+1} \\le b_n\\) for all \\(n\\), then \\(S_k\\) for all \\(k \\ge 1\\) will always be below or equal to \\(b_1\\).'],
  ["displayimg","19.jpg"],
  ['pmain', 'If \\(b_{2n} \\ge b_{2n+1}\\), then \\(b_{2n+1} - b_{2n}\\) is some negative number. Therefore:'],
  ["displayFormula","\\[ \\begin{align} S_{2n+2} &= S_{2n} + b_{2n+1} - b_{2n} \\\\  S_{2n+2} &\\ge S_{2n} \\end{align} \\]"],
  ['pmain', 'This means the sequence \\(\\{ S_{2k} \\}\\) would be an increasing sequence. Since \\(\\{S_{2k} \\}\\) will always be below or equal to \\(b_1\\), then \\(\\{S_{2k}\\}\\) would also be a bounded sequence, and by the monotone convergence theorem, it converges to some real number, let\'s call it \\(L\\):'],
  ["displayFormula","\\[\\lim_{k \\to \\infty} S_{2k} = L \\]"],
  ['pmain', 'Since \\( S_{2k+1} = S_{2k} + b_{2k+1} \\):'],
  ["displayFormula","\\[\\begin{align} \\lim_{k \\to \\infty} S_{2k+1} &= \\lim_{k \\to \\infty} (S_{2k} + b_{2k+1}) \\\\ &= \\lim_{k \\to \\infty} S_{2k} + \\lim_{k \\to \\infty}  b_{2k+1} \\\\ &= L + \\lim_{k \\to \\infty}  b_{2k+1} \\end{align}\\]"],
  ['pmain', 'If \\(\\lim_{n \\to \\infty} b_n = 0\\), then \\(\\lim_{k \\to \\infty} b_{2k+1} = 0\\). Therefore:'],
  ["displayFormula","\\[\\lim_{k \\to \\infty} S_{2k+1} = L \\]"],
  ['pmain', 'This shows that both the odd and even partial sums are converges to \\(L\\). Since the infinite series \\(S\\) will always be less than the odd partials sums and more than the even partial sums, then, by the squeeze theorem, \\(\\lim_{n \\to \\infty} S_n = L\\).'],
];
export default content;
/*
How does one know that the even part and the odd part converge to what the series converges?
*/