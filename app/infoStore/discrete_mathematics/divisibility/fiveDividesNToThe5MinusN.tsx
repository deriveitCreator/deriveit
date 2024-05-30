export const title="5 | n^5 - n";
const content = [
  ['h1', 'Proof that 5| n<sup>5</sup> - n'],
  ['pmain', 'I will prove this by using induction. You can manually check that the statement (\\(5|n^5-n\\)) is true when \\(n=1\\), \\(n=2\\) and \\(n=3\\). Now let \\(n = k + 1\\), and let\'s expand \\((k+1)^5 - (k+1)\\):'], 
  ['displayFormula', '$$ (k+1)^5 - (k+1) $$$$ (k^5 + 5k^4 + 10k^3 + 10 k^2 + 5k + 1) - (k + 1) $$'],
  ['pmain', 'Simplify:'],
  ['displayFormula', '$$ (k^5 - k) + 5k^4 + 10k^3 + 10k^2 + 5k $$'],
  ['pmain', 'If \\(n = 4\\), then \\(k=3\\), and since all the terms above are divisible by 5 when \\(k=3\\), then \\(5|(k+1)^5 - (k+1)\\), or in other words \\(5|(4)^5-4\\). Now if \\(n=5\\), then \\(k = 4\\), and since all the terms above are divisible by 5 when \\(k=4\\), then \\(5|(4+1)^5-(4+1)\\) or \\(5|5^5-5\\). We can keep doing this for every number.'],
];
export default content;