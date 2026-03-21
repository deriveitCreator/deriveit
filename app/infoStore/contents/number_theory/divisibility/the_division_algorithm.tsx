export const title="The division algorithm proof";
const content = [
  ['h1', 'The Division Algorithm Proof'],
  ["pmain","The division algorithm states that if \\(a\\) and \\(b\\) are integers such that \\(b \\ge 0\\), then there are unique integers \\(q\\) and \\(r\\) such that \\(a = bq + r\\) with \\(0 \\le r \\lt b\\)."],
  ["pmain","Consider the set \\(S\\) of all integers of the form \\(a-bk\\) where \\(k\\) is an integer. Let \\(T\\) be the set of all nonnegative integers in \\(S\\). \\(T\\) will never be empty because there will always be some value for \\(k\\) such that \\(a-bk \\ge 0\\). By the well-ordering property, \\(T\\) has a least element. Let's call the \\(k\\) in that element \\(q\\), so \\(a-bq\\) is the smallest element."],
  ["pmain","We set \\(r=a-bq\\), and these are the values for \\(q\\) and \\(r\\) specified in the theorem. We know that \\(r \\ge 0\\) because \\(a-bq\\) exists in \\(T\\), which only contains nonnegative integers."],
  ["pmain","Is \\(r \\lt b\\)? Assume \\(r \\ge b\\), then:"],
  ['displayFormula', '$$\\begin{gather} r-b\\ge 0 \\\\ a-bq-b \\ge 0 \\\\ a-b(q+1) \\ge 0 \\end{gather}$$'],
  ["pmain","However:"],
  ['displayFormula', '$$\\begin{gather} q+1 \\gt q \\\\ b(q+1) \\gt bq \\\\ -b(q+1) \\lt -bq \\\\ a-b(q+1) \\lt a-bq \\end{gather}$$'],
  ["pmain","We have shown that \\([a-b(q+1)]\\) is nonnegative and greater than \\([a-bq]\\), which is a contradiction. Therefore, \\(r \\lt b\\)."],
  ["pmain","We know that \\(q\\) is unique because we chose \\(k\\) where \\(a-bk\\) is the smallest. Since \\(r=a-bq\\), then \\(r\\) too would be unique."],
];
export default content;