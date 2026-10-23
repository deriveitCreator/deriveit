export const title="Proof that 6n-1, 6n+1, 6n+2, 6n+3 and 6n+5 are pairwise relatively prime";
const content = [
  ['h1', 'Proof That 6n-1, 6n+1, 6n+2, 6n+3 and 6n+5 Are Pairwise Relatively Prime'],
  ['pmain', 'All integers of the form \\(6n-1\\), \\(6n+1\\), \\(6n+3\\) and \\(6n+5\\) are odd, and their absolute differences are 2, 4 or 6.'], 
  ['pmain', 'If an integer \\(d\\) divides the numbers of the form \\(6n-1\\), \\(6n+1\\), \\(6n+3\\) and \\(6n+5\\), then it also divides their absolute differences (2, 4 or 6). However, 2, 4 and 6 are even, while the integers are odd, so no such divisor \\(d\\) other than 1 exists.'], 
  ['pmain', 'As for \\(6n+2\\), it is relatively prime with \\(6n+1\\) and \\(6n+3\\) because they are right next to \\(6n+2\\).'], 
  ['pmain', '\\(6n+2\\) also has a difference of 3 with \\(6n-1\\) and \\(6n+5\\). Since the only integer that divides 3 is 3 and 1, and 3 can\'t divide \\(6n+2\\), then \\(6n+2\\) is relatively prime with \\(6n-1\\) and \\(6n+5\\).'], 
];
export default content;
