export const title="Understanding the alternating series estimation theorem";
const content = [
  ['h1', 'Understanding The Alternating Series Estimation Theorem'],
  ['pmain', 'Any series whose terms alternate between positive and negative values is called an <b>alternating series</b>:'],
  ["displayFormula","\\[ \\sum^{\\infty}_{n=1} (-1)^{n+1} b_n = b_1 - b_2 + b_3 - b_4 + b_5 - \\cdots \\]"],
  ['pmain', 'Where \\(b_n \\gt 0\\). Let\'s assume that \\(0 \\lt b_{n+1} \\le b_n\\) for all \\(n\\) and \\(\\lim_{n \\to \\infty} b_n = 0\\), this means the series would converge. Let \\(S\\) be the value of the infinite series, let \\(S_k\\) be the \\(k\\)th partial sum, and let \\(R_k = S - S_k\\) (i.e. let \\(R_k\\) be the infinite series starting from \\(n=k+1\\)).'],
  ["displayFormula","\\[ S_k = \\sum^{k}_{n=1} (-1)^{n+1} b_n = b_1 - b_2 + b_3 - b_4 + b_5 - \\cdots ±b_k \\]"],
  ['pmain', 'Every partial sum \\(S_k\\) will be more any the previous even partial sums and less than any previous odd partial sums.'],
  ["displayimg","23.jpg"],
  ['pmain', 'If \\(n\\) is even:'],
  ["displayFormula","\\[ S_n \\le S \\le S_{n+1} \\]"],
  ['pmain', 'Subtracting \\(S_n\\) from both sides'],  
  ["displayFormula","\\[ 0 \\le R_n \\le S_{n+1} - S_n \\]"],
  ['pmain', 'Since \\( S_{n+1} = S_n + b_{n+1} \\) (keep in mind \\(n\\) is still even):'],
  ["displayFormula","\\[ \\begin{gather} 0 \\le R_n \\le b_{n+1} \\\\ \\therefore |R_n| \\le b_{n+1} \\text{ when } n \\text{ is even}\\end{gather} \\]"],
  ['pmain', 'If \\(n\\) is odd:'],
  ["displayFormula","\\[ S_n \\ge S \\ge S_{n+1} \\]"],
  ['pmain', 'Subtracting \\(S_n\\) from both sides'],  
  ["displayFormula","\\[ 0 \\ge R_n \\ge S_{n+1} - S_n \\]"],
  ['pmain', 'Since \\( S_{n+1} = S_n - b_{n+1} \\) (keep in mind \\(n\\) is still odd):'],
  ["displayFormula","\\[  0 \\ge R_n \\ge -b_{n+1} \\]"],
  ['pmain', 'Both \\(-b_{n+1}\\) and \\(R_n\\) are negative, so multiplying both with -1 will make them positive:'],
  ["displayFormula","\\[ \\begin{gather} 0 \\le -R_n \\le b_{n+1} \\\\ |R_n| = -R_n \\\\ \\therefore |R_n| \\le b_{n+1} \\text{ when } n \\text{ is odd}\\end{gather} \\]"],
  ['pmain', 'In either case, \\(|R_n| \\le b_{n+1}\\) is true.'],
];
export default content;

/**
  ['pmain', 'Let \\(S\\) be the sum of the entire alternating series, let \\(S_N\\) be the sum of the alternating series up to and including \\(n=N\\), and let \\(R_N = S - S_N\\) (i.e. \\(R_N\\) is the remaining sum from \\(n=N+1\\) onwards). The first term of the remaining sum is \\((±b_{N+1})\\).'],
  ['pmain', 'If this is a positive term, then the remaining sum (\\(R_N\\)) is upper bounded by that first term, or in other words, \\(R_N \\le b_{N+1}\\). If this is a negative term, then the remaining sum (\\(R_N\\)) is lower bounded by that term, or in other words, \\(R_N \\ge -b_{N+1} \\). This also means that the sum \\(S\\) lies between the partial sums \\(S_N\\) and \\(S_{N+1}\\).'],
 * 
 */