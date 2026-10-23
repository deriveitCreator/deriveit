export const title="Proof That Var[X + Y] = Var[X] + Var[Y] Where X And Y Are Independent Variables";
const content = [['h1', 'Proof That Var[X + Y] = Var[X] + Var[Y] Where X And Y Are Independent Variables'],
  ['pmain', 'Var[<span style="color: maroon;">X</span>] is defined as:'],
  ['displayimg', '71.PNG'],
  ['pmain', 'Similarly, Var[<span style="color: maroon;">X</span> + <span style="color: darkblue;">Y</span>] is defined as:'],
  ['displayimg', '72.PNG'],
  ['pmain', 'Expanding:'],
  ['displayFormula', '\\[E[{\\color{maroon} X^2} + 2{\\color{maroon} X}{\\color{darkblue} Y} + {\\color{darkblue} Y^2}] - E[{\\color{maroon} X}+{\\color{darkblue} Y}]E[{\\color{maroon} X}+{\\color{darkblue} Y}] \\]'],
  ['pmain', 'Using the <a href="linearity_of_expectation">linearity of expectation</a>:'],
  ['displayFormula', '\\[\\begin{gather} E[{\\color{maroon} X^2}] + 2E[{\\color{maroon} X}{\\color{darkblue} Y}] + E[{\\color{darkblue} Y^2}] - (E[{\\color{maroon} X}]+E[{\\color{darkblue} Y}])(E[{\\color{maroon} X}]+E[{\\color{darkblue} Y}]) \\\\ E[{\\color{maroon} X^2}] + 2E[{\\color{maroon} X}{\\color{darkblue} Y}] + E[{\\color{darkblue} Y^2}] - (E[{\\color{maroon} X}]^2 + 2E[{\\color{maroon} X}]E[{\\color{darkblue} Y}] + E[{\\color{darkblue} Y}]^2)\\\\ E[{\\color{maroon} X^2}] + 2E[{\\color{maroon} X}{\\color{darkblue} Y}] + E[{\\color{darkblue} Y^2}] - E[{\\color{maroon} X}]^2 - 2E[{\\color{maroon} X}]E[{\\color{darkblue} Y}] - E[{\\color{darkblue} Y}]^2 \\\\ (E[{\\color{maroon} X^2}] - E[{\\color{maroon} X}]^2) + (E[{\\color{darkblue} Y^2}] - E[{\\color{darkblue} Y}]^2) + (2E[{\\color{maroon} X}{\\color{darkblue} Y}] - 2E[{\\color{maroon} X}]E[{\\color{darkblue} Y}]) \\end{gather} \\]'],
  ['pmain', 'Since <span style="color: maroon;">X</span> and <span style="color: darkblue;">Y</span> <a href="exMul">are independent</a>:'],
  ['displayFormula', '\\[\\begin{gather} (E[{\\color{maroon} X^2}] - E[{\\color{maroon} X}]^2) + (E[{\\color{darkblue} Y^2}] - E[{\\color{darkblue} Y}]^2) + (2E[{\\color{maroon} X}]E[{\\color{darkblue} Y}] - 2E[{\\color{maroon} X}]E[{\\color{darkblue} Y}]) \\\\ (E[{\\color{maroon} X^2}] - E[{\\color{maroon} X}]^2) + (E[{\\color{darkblue} Y^2}] - E[{\\color{darkblue} Y}]^2) \\end{gather} \\]'],
  ['pmain', 'Since Var[<span style="color: maroon;">X</span>] = E[<span style="color: maroon;">X</span><sup>2</sup>]-E[<span style="color: maroon;">X</span>]<sup>2</sup>:'],
  ['displayimg', '76.PNG']
];
export default content;