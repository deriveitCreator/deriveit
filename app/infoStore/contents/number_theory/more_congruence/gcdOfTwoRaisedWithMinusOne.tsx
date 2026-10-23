export const title="Proof that ((2^a)-1, (2^b)-1) = (2^(a,b))-1";
const content = [
  ['h1', 'Proof that (2<sup>a</sup>-1, 2<sup>b</sup>-1) = 2<sup>(a,b)</sup>-1'],
  ['pmain', 'Let \\(a=r_0\\), \\(b=r_1\\) and \\(r_{i+2}\\) be the remainder after dividing \\(r_i\\) by \\(r_{i+1}\\):'],
  ['displayFormula', '\\begin{align} r_0 =& r_1 q_1 + r_2 \\\\ r_1 =& r_2 q_2 + r_3 \\\\ &\\vdots \\\\ r_{n-2} =& r_{n-1}q_{n-1} \\end{align}'],
  ['pmain', 'where \\(r_{n-1} = (r_0,r_1)\\). According to <a href="./leastPositiveResidueTwoRaisedMinusOne">this lemma</a>, if \\( r_{i+2}\\) is the remainder after dividing \\(r_i\\) by \\(r_{i+1}\\), then \\(2^{r_{i+2}} - 1\\) is the remainder after dividing \\(2^{r_i} - 1\\) by \\(2^{r_{i+1}}-1\\). This means:'],
  ['displayFormula', '\\begin{align} 2^{r_0}-1 =& (2^{r_1}-1) h_1 + 2^{r_2}-1 \\\\ 2^{r_1}-1 =& (2^{r_2}-1) h_2 + 2^{r_3}-1 \\\\ &\\vdots \\\\ 2^{r_{n-1}}-1 =& (2^{r_{n-2}}-1) h_{n-2} \\end{align}'],
  ['pmain', 'This shows that \\(2^{r_{n-2}}-1 = (2^{r_0}-1,2^{r_1}-1)\\), where \\(r_{n-2} = (r_0,r_1)\\).'],
];
export default content;
