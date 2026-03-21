export const title="[x + 1/2] is the integer nearest to x";
const content = [
  ['h1', '[x + 1/2] is the integer nearest to x'],
  ["pmain","The integer nearest to \\(x\\) is either \\([x]\\) or \\([x]+1\\). If \\(\\{x\\} \\lt 1/2\\), then the nearest integer is \\([x]\\). This means \\(\\{x\\}+1/2 \\lt 1\\), so:"],
  ['displayFormula','$$\\begin{align} x &= [x] + \\{x\\} \\\\ [x+1/2] &= [[x] + \\{x\\} + 1/2] \\\\ [x+1/2] &= [x] + [\\{x\\} + 1/2] \\\\  [x+1/2] &= [x] \\end{align}$$'],
  ["pmain","If \\(\\{x\\} \\gt 1/2\\), then the integer nearest to \\(x\\) is \\(x+1\\). Since \\(\\{x\\}+1/2 \\gt 1\\), this means:"],
  ['displayFormula','$$\\begin{align} x &= [x] + \\{x\\} \\\\ [x+1/2] &= [[x] + \\{x\\} + 1/2] \\\\ [x+1/2] &= [x] + [\\{x\\} + 1/2] \\\\  [x+1/2] &= [x] + 1 \\end{align}$$'],
];
export default content;