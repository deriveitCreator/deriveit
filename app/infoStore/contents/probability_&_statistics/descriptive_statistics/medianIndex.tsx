export const title="(Proof) The index for the median value is (n+1)/2";
const content = [
  ['h1', 'The index for the median value is (n+1)/2'],
  ["pmain","The median is such a valuein the middle index. By \"middle index\", I mean 50% of the indices are lower than it, and the other 50% are greater than it.:"],
  ["pmain","Let \\(M_i\\) be the index for the median value. Let\'s say we have \\(n\\) values in our data set where the index of the first one is 1, and the index of the last one is \\(n\\). That means the distance between \\(n\\) and \\(M_i\\) should be same as the distance between 1 and \\(M_i\\):"],
  ["displayFormula","$$n-M_i = M_i - 1$$"],
  ["pmain","Rearranging the equation:"],
  ["displayFormula","$$\\begin{gather} n + 1= 2M_i \\\\ \\frac{n+1}{2} = M_i \\end{gather}$$"],
];
export default content;