export const title="Deriving The Equations Of Linear Motion With Constant Acceleration";
const content = [
  ['h1', 'Deriving The Equations Of Linear Motion With Constant Acceleration'],
  ['pmain', 'Here is an example of a <span style="color:blue">velocity</span> (<span style="color:blue">v</span>) vs <span style="color:#666666">time</span> (<span style="color:#666666">t</span>) graph with constant <span style="color:red">acceleration</span> (<span style="color:red">a</span>):'], 
  ['displayimg', 'c1.png'], 
  ['pmain', 'The formula for <span style="color:red">a</span> is:'], 
  ['displayFormula', '$$ {\\color{red} a} = \\frac{{\\color{blue} v_f} - {\\color{blue} v_i}}{{\\color{gray} t}} $$'],
  ['pmain', '<span style="color:blue">Final velocity</span> is represented as <span style="color:blue">v<sub>f</sub></span> while <span style="color:blue">initial velocity</span> is represented as <span style="color:blue">v<sub>i</sub></span>. Our first equation of motion is:'],
  ['displayFormula', '$$ \\begin{gather} {\\color{gray} t}{\\color{red} a} = {\\color{blue} v_f} - {\\color{blue} v_i} \\\\ {\\color{blue} v_f} = {\\color{blue} v_i} + {\\color{gray} t}{\\color{red} a}\\end{gather}$$'],
  ['pmain', 'The <span style="color:blue">average velocity</span> (<span style="color:blue">v<sub>avg</sub></span>) can be represented in two ways:'],
  ['displayFormula', '$$ \\begin{gather} {\\color{blue} v_{avg}} = \\frac{{\\color{blue} v_f} + {\\color{blue} v_i}}{2} \\\\ {\\color{blue} v_{avg}} = \\frac{\\color{green} s}{\\color{gray} t}\\end{gather}$$'],
  ['pmain', 'If we equate them, we get our second equation:'],
  ['displayFormula', '$$ \\begin{gather} \\frac{{\\color{blue} v_f} + {\\color{blue} v_i}}{2} = \\frac{\\color{green} s}{\\color{gray} t} \\\\ {\\color{green} s} = \\frac{({\\color{blue} v_f} + {\\color{blue} v_i}) {\\color{gray} t}}{2 } \\end{gather}$$'],
  ['pmain', 'Suppose we substitute the first equation into the second one, we can get this:'],
  ['displayFormula', '$$  {\\color{green} s} = \\frac{(( {\\color{blue} v_i} + {\\color{gray} t}{\\color{red} a}) + {\\color{blue} v_i}) {\\color{gray} t}}{2 } $$'],
  ['pmain', 'Or this:'],
  ['displayFormula', '$${\\color{green} s} = \\frac{({\\color{blue} v_f} + ( {\\color{blue} v_f} - {\\color{gray} t}{\\color{red} a})) {\\color{gray} t}}{2} $$'],
  ['pmain', 'If we simplify, we get our third and fourth equation:'],
  ['displayFormula', '$$\\begin{align}  {\\color{green} s} &= \\frac{(( {\\color{blue} v_i} + {\\color{gray} t}{\\color{red} a}) + {\\color{blue} v_i}) {\\color{gray} t}}{2} = \\frac{ 2{\\color{blue} v_i}{\\color{gray} t} + {\\color{gray} t^2}{\\color{red} a}}{2} =  {\\color{blue} v_i}{\\color{gray} t} + \\frac{1}{2}{\\color{gray} t^2}{\\color{red} a} \\\\ {\\color{green} s} &= \\frac{({\\color{blue} v_f} + ( {\\color{blue} v_f} - {\\color{gray} t}{\\color{red} a})) {\\color{gray} t}}{2} = \\frac{2{\\color{blue} v_f}{\\color{gray} t} - {\\color{gray} t^2}{\\color{red} a}}{2} = {\\color{blue} v_f}{\\color{gray} t} - \\frac{1}{2} {\\color{gray} t^2}{\\color{red} a}  \\end{align}$$'],
  ['pmain', 'If we make <span style="color:#666666">t</span> the subject in the first equation and <span style="color:green">s</span> the subject in the second equation, then:'],
  ['displayFormula', '$$\\begin{align} \
    {\\color{gray} t}  &= \\frac{({\\color{blue} v_f} - {\\color{blue} v_i})}{\\color{red} a} \\\\ \
    {\\color{green} s} &= \\frac{({\\color{blue} v_f} + {\\color{blue} v_i}){\\color{gray} t}}{2} \
  \\end{align}$$'],
  ['pmain', 'If we substitute <span style="color:#666666">t</span> in the second equation, then:'],
  ['displayFormula', '$$ {\\color{green} s} = \\frac{({\\color{blue} v_f} + {\\color{blue} v_i})({\\color{blue} v_f} - {\\color{blue} v_i})}{2 {\\color{red} a}} $$'],
  ['pmain', 'If we simplify, we get our fifth equation:'],
  ['displayFormula', '$$\\begin{align} 2 {\\color{red} a} {\\color{green} s} = {\\color{blue} v_f^2} - {\\color{blue} v_i^2} \\\\ {\\color{blue} v_f^2} = {\\color{blue} v_i^2} + 2 {\\color{red} a} {\\color{green} s} \\end{align}$$'],
];
export default content;