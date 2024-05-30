export const title="For every positive integer n, there are n consecutive composite integers";
const content = [
  ['h1', 'For Every Positive Integer n, There Are n Consecutive Composite Integers'],
  ['pmain', 'Given a positive integer \\(n\\), consider the sequences of integers of the form \\((n+1)!+i\\) where \\(i\\) is an integer and \\(2 \\le i \\le n+1\\):'],
  ['displayFormula', '$$ (n+1)!+2, \\ (n+1)!+3, \\ \\ldots, \\ (n+1)! + (n+1) $$'],
  ['pmain', 'The integer \\(i\\) (where \\(2 \\le i \\le n+1\\)) will have a duplicate inside \\((n+1)!\\), this means \\(i \\mid (n+1)! \\).'],
  ['pmain', 'If \\(i \\mid (n+1)! \\) and \\(i \\mid i \\), then \\([ i \\mid (n+1)! + i ]\\) for all \\(i \\ge 2\\) and \\( i \\le n+1\\).'],
  ['pmain', 'So each term in the sequence is divisible by \\(i\\), making them composite. In other words, there are \\(n\\) consecutive composite integers for a given \\(n\\).']
];
export default content;



