export const title="[x + n] = [x] + n where n ∈ Z";
const content = [
  ['h1', '[x + n] = [x] + n where n ∈ Z'],
  ["pmain","By definition, \\([x+n]\\) is the greatest integer less than or equal to \\(x+n\\):"],
  ["displayFormula","$$ [x+n] \\le x+n \\lt [x+n]+1 $$"],
  ["pmain","By definition, we also know:"],
  ["displayFormula","$$ [x] \\le x \\lt [x]+1 $$"],
  ["pmain","We can add \\(n\\):"],
  ["displayFormula","$$ [x] + n \\le x + n \\lt [x]+n+1 $$"],
  ["pmain","This shows that \\([x]+n\\) is also the greatest integer less than or equal to \\(x+n\\)."],
  ["pmain","If both \\([x]+n\\) and \\([x+n]\\) are the greatest integers below \\(x+n\\), then \\([x]+n = [x+n]\\)."],
];
export default content;