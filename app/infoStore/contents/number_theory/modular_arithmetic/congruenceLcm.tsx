export const title="If (a ≡ b mod m) and (a ≡ b mod n) then (a ≡ b mod [m, n])";
const content = [
  ['h1', 'If (a ≡ b mod m) And (a ≡ b mod n) Then (a ≡ b mod [m, n])'],
  ['pmain', 'If \\((a ≡ b \\bmod m)\\) and \\((a ≡ b \\bmod n)\\), then we can use <a href="../lcm/lcmLemma1">this lemma</a>:'],
  ['displayFormula', '$$\\begin{gather} m|(b-a), \\quad n|(b-a) \\\\ \\therefore [m, n]|(b-a) \\end{gather}$$'],
];
export default content;
