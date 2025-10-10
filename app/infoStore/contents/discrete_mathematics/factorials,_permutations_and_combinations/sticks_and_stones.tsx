export const title="(Combinatorics) Number of ways to distribute n items into k buckets";
const content = [
  ['h1', '(Combinatorics) Number of ways to distribute n items into k buckets'], 

  ['pmain', 'Suppose you have 7 coins. How would you distribute these coins into 4 buckets? We will use a "stones and sticks" diagram to give us a visual aid. These circles (or stones) represents the coins:'], 
  ['displayFormula', '\\[ \\circ \\circ \\circ \\circ \\circ \\circ \\circ \\]'],
  ['pmain', 'We will add 3 sticks in between some of the coins:'], 
  ['displayFormula', '\\[ \\circ \\mid \\circ \\circ \\mid \\circ \\circ \\mid \\circ \\circ \\]'],
  ['pmain', 'The sticks divide the coins into groups. According to the diagram above, the first bucket contains one coin and the second, third and fourth buckets contains two coins. Let\'s consider a different diagram:'], 
  ['displayFormula', '\\[ \\mid \\circ \\circ \\circ \\circ \\circ \\mid \\circ \\circ \\mid \\]'],
  ['pmain', 'According to this diagram, the first and fourth buckets contains no coins, the second bucket contains five coins and the third bucket contains 2 coins. We can represent these diagrams as a bit strings:'], 
  ['displayFormula', '\\[\\begin{gather} \\circ \\mid \\circ \\circ \\mid \\circ \\circ \\mid \\circ \\circ \\implies 0100100100 \\\\ \\mid \\circ \\circ \\circ \\circ \\circ \\mid \\circ \\circ \\mid \\implies 1000001001 \\end{gather}\\]'],
  ['pmain', 'How many ways are there to arrange the 1\'s and 0\'s in a bit string. According to <a href="bit_strings" target="_blank">this article</a>, a bit string of length 10 and weight 3 can be arranged in \\(\\binom {10} 3\\) ways.'],
  ['pmain', 'We can generalize this and say that if we want to group \\(x\\) items into \\(y\\) buckets, then there are \\(C^{x + y-1}_{y-1}\\) ways of doing so.'], 

];
export default content;