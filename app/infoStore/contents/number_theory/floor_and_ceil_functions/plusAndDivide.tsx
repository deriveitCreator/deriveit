export const title="Proof that [(x + n)/m] = [([x] + n)/m]";
const content = [
  ['h1', 'Proof That [(x + n)/m] = [([x] + n)/m]'],

  ["pmain","We can represent \\(\\frac{x+n}{m}\\) as:"],
  ['displayFormula', '$$ \\frac{x+n}{m} = \\left\\lfloor \\frac{x+n}{m} \\right\\rfloor + \\left\\{ \\frac{x+n}{m} \\right\\} $$'],
  ["pmain","We can represent \\(x\\) as:"],
  ['displayFormula', '$$ x = \\left\\lfloor x \\right\\rfloor + \\left\\{ x \\right\\}$$'],
  ["pmain","Adding \\(n\\) and dividing by \\(m\\):"],
  ['displayFormula', '$$\\begin{gather} x + n = \\lfloor x \\rfloor + \\left\\{ x \\right\\} + n \\\\ \\frac{x + n}{m} = \\frac{\\lfloor x \\rfloor + \\left\\{ x \\right\\} + n}{m} \\end{gather}$$'],
  ["pmain","Using the floor function:"],
  ['displayFormula', '$$\\begin{gather} \\left\\lfloor \\frac{x + n}{m} \\right\\rfloor = \\left\\lfloor \\frac{\\lfloor x \\rfloor + \\left\\{ x \\right\\} + n}{m} \\right\\rfloor \\\\ \\left\\lfloor \\frac{x + n}{m} \\right\\rfloor = \\left\\lfloor \\frac{\\lfloor x \\rfloor + n}{m} + \\frac{\\left\\{ x \\right\\}}{m} \\right\\rfloor \\end{gather}$$'],
  ["pmain","Separating \\( \\frac{\\lfloor x \\rfloor + n}{m} \\) into it's integer and fractinoal components:"],
  ['displayFormula', '$$ \\left\\lfloor \\frac{x + n}{m} \\right\\rfloor = \\left\\lfloor \\left\\lfloor \\frac{\\lfloor x \\rfloor + n}{m} \\right\\rfloor + \\left\\{ \\frac{\\lfloor x \\rfloor + n}{m} \\right\\} + \\frac{\\left\\{ x \\right\\}}{m} \\right\\rfloor $$'],
  ["pmain","Since \\( \\left\\lfloor \\frac{\\lfloor x \\rfloor + n}{m} \\right\\rfloor \\) is an integer:"],
  ['displayFormula', '$$ \\left\\lfloor \\frac{x + n}{m} \\right\\rfloor = \\left\\lfloor \\frac{\\lfloor x \\rfloor + n}{m} \\right\\rfloor + \\left\\lfloor \\left\\{ \\frac{\\lfloor x \\rfloor + n}{m} \\right\\} + \\frac{\\left\\{ x \\right\\}}{m} \\right\\rfloor $$'],
  ["pmain","Since \\(\\lfloor x \\rfloor + n\\) is an integer, then the highest value for \\(\\left\\{ \\frac{\\lfloor x \\rfloor + n}{m} \\right\\}\\) is \\(\\frac{m-1}{m}\\). Since \\(\\{x\\} \\lt 1\\), then \\(\\{x\\}/m \\lt 1/m\\). This means:"],
  ['displayFormula', '$$\\begin{gather} \\left\\{ \\frac{\\lfloor x \\rfloor + n}{m} \\right\\} + \\frac{\\left\\{ x \\right\\}}{m} \\lt \\left( \\frac{m-1}{m} \\right) + \\frac{1}{m} \\\\ \\left\\{ \\frac{\\lfloor x \\rfloor + n}{m} \\right\\} + \\frac{\\left\\{ x \\right\\}}{m} \\lt 1 \\end{gather} $$'],
  ["pmain","Which means:"],
  ['displayFormula', '$$\\begin{align} \\left\\lfloor \\frac{x + n}{m} \\right\\rfloor &= \\left\\lfloor \\frac{\\lfloor x \\rfloor + n}{m} \\right\\rfloor + \\left\\lfloor \\left\\{ \\frac{\\lfloor x \\rfloor + n}{m} \\right\\} + \\frac{\\left\\{ x \\right\\}}{m} \\right\\rfloor \\\\ &= \\left\\lfloor \\frac{\\lfloor x \\rfloor + n}{m} \\right\\rfloor + 0  \\end{align}$$'],
  ["pmain","Therefore \\(\\lfloor (x + n)/m \\rfloor = \\lfloor (\\lfloor x \\rfloor + n)/m \\rfloor\\)."],
];
export default content;