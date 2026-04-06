export const title="Proof that every integer greater than 11 is the sum of two composite integers";
const content = [
  ['h1', 'Proof That Every Integer Greater Than 11 Is The Sum Of Two Composite Integers'],
  ['pmain', 'An integer \\(n\\) can be either odd or even. If it is even and greater than 11, then it can be presented as \\(4k\\) or \\(4k+2\\), where \\(k \\ge 3\\).'],
  ['pmain', 'If \\(n=4k\\), then \\(n=2k + 2k\\). The only time \\(2k\\) is prime is when \\(k=1\\), but we are only considering when \\(k \\ge 3\\), so \\(n=4k\\) is the sum of composites.</p><p>If \\(n=4k+2\\), then \\(n= 2k + 2(k+1)\\). Since \\(k \\ge 3\\), then both \\(2k\\) and \\(2(k+1)\\) are composite.'],
  ['pmain', 'What about if \\(n\\) is odd and greater than 11? Let \\(m = n - 9\\). Since \\(n \\gt 11\\), then \\(m \\gt 2\\), and since \\([\\text{odd} - \\text{odd} = \\text{even}]\\), then \\(m\\) is even. This means \\(n-9=2k\\), where \\(k \\gt 2\\). Since \\(n=2k+9\\) and since both 9 and \\(2k\\) are both composites, then \\(n\\) is the sum of composites.'],
];
export default content;
