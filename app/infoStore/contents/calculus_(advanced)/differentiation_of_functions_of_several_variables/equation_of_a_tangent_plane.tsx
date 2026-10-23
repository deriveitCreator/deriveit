export const title="Equation of a tangent plane";
const content = [
  ['h1', 'Equation of a tangent plane'],

  ['pmain', 'Let \\(f(x,y)\\) be a function differentiable at \\((a,b)\\):'], 
  ['displayimg', 't1.jpeg'],

  ['pmain', 'Let\'s focus on the intersection of this surface with the vertical trace given by \\(y=b\\):'], 
  ['displayimg', 't2.jpeg'],
  ['pmain', 'The tangent line at \\((a,b)\\) of the curve when \\(y=b\\) is:'],
  ['displayFormula', '$$ z = f(a,b) + f_x(a,b) (x - a) $$'], 
  ['pmain', 'The tangent line shown in the graph:'], 
  ['displayimg', 't3.jpeg'],
  
  ['pmain', 'Now let\'s focus on the intersection of this surface with the vertical trace given by \\(x=a\\):'], 
  ['displayimg', 't4.jpeg'],
  ['pmain', 'The tangent line at \\((a,b)\\) of the curve when \\(x=a\\) is:'],
  ['displayFormula', '$$ z = f(a,b) + f_y(a,b) (y - b) $$'], 
  ['pmain', 'The tangent line shown in the graph:'], 
  ['displayimg', 't5.jpeg'],

  ['pmain', 'The <b>tangent plane</b> to the surface of \\(f(x,y)\\) at \\(a,b\\) is the plane that contains these two tangent line:'], 
  ['displayimg', 't6.jpeg'],
  ['pmain', 'How do we defined this tangent plane? First start with a vector \\(\\textbf{v}_1\\) which is parallel to one of the tangent lines, and then defined another vector \\(\\textbf{v}_2\\) which is parallel to the other tangent line:'], 
  ['displayFormula', '$$\\begin{gather} \\textbf{v}_1 = \\textbf{i} + f_x(a,b) \\textbf{k} \\\\ \\textbf{v}_2 = \\textbf{j} + f_y(a,b) \\textbf{k} \\end{gather}$$'], 
  ['pmain', 'where \\(\\textbf{i}\\) is a unit vector on the \\(x\\)-axis, \\(\\textbf{j}\\) is a unit vector on the \\(y\\)-axis and \\(\\textbf{k}\\) is a unit vector on the \\(z\\)-axis. This means:'], 
  ['displayFormula', '$$\\textbf{v}_1 \\times \\textbf{v}_2 = f_x(a,b) \\textbf{i} + f_y(a,b) \\textbf{j}- \\textbf{k}$$'], 
  ['pmain', 'This vector is perpendicular to both lines and is therefore perpendicular to the tangent plane. Let \\(c=f(a,b)\\). The equation of a tangent plane in terms of vectors is:'], 
  ['displayFormula', '$$(\\textbf{v}_1 \\times \\textbf{v}_2) \\cdot ((x-a)\\textbf{i}+(y-b)\\textbf{j}+(z-c)\\textbf{k}) = 0 $$'], 
  ['pmain', 'Expanding:'], 
  ['displayFormula', '$$\\begin{gather} (f_x(a,b) \\textbf{i} + f_y(a,b) \\textbf{j}- \\textbf{k}) \\cdot ((x-a)\\textbf{i}+(y-b)\\textbf{j}+(z-c)\\textbf{k}) = 0 \\\\ (f_x(a,b) (x-a) + f_y(a,b) (y-b) - (z-c)) = 0 \\\\ z =f_x(a,b) (x-a) + f_y(a,b) (y-b) + c \\end{gather}$$'], 
];
export default content;