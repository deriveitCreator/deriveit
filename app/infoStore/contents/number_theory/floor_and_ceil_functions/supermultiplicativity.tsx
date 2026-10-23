export const title="Proof that [xy] ≥ [x][y]";
const content = [
  ['h1', 'Proof that [xy] ≥ [x][y]'],
  ["pmain","Since \\([x] \\le x\\) and \\([y]  \\le y\\). Adding these two:"],
  ['displayFormula', '$$\\begin{gather} x = [x] + \\{x\\} \\\\ y = [y] + \\{y\\} \\\\ xy = [x][y] + \\{x\\}[y] + [x]\\{y\\} + \\{x\\}\\{y\\} \\end{gather} $$'],
  ["pmain","Taking the floor of both sides:"],
  ['displayFormula', '$$ [xy] = [[x][y] + \\{x\\}[y] + [x]\\{y\\} + \\{x\\}\\{y\\}] $$'],
  ["pmain","Since \\([x][y]\\) is an integer:"],
  ['displayFormula', '$$\\begin{align} [xy] &= [x][y] + [\\{x\\}[y] + [x]\\{y\\} + \\{x\\}\\{y\\}] \\\\ [xy] &\\ge [x][y]  \\end{align}$$'],
];
export default content;