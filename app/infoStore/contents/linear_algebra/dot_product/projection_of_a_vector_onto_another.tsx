export const title="Projection of a vector another vector";
const content = [
  ['h1', 'Projection Of A Vector Another Vector'],
  ['pmain', 'The projection of \\(\\textbf{v}\\) onto \\(\\textbf{u}\\) represents the component of \\(\\textbf{v}\\) in the direction of \\(\\textbf{u}\\) (or the opposite direction of \\(\\textbf{u}\\)):'], 
  ['displayimg', 'p1.jpeg'],
  ['pmain', 'Let the projection be \\(\\textbf{p} = \\operatorname{proj}_{\\textbf{u}}(\\textbf{v})\\). Let \\(\\theta\\) be the angle between \\(\\textbf{v}\\) and \\(\\textbf{u}\\). The magnitude of this projection is:'], 
  ['displayFormula', '$$ \\Vert \\operatorname{proj}_{\\textbf{u}}(\\textbf{v}) \\Vert = \\Vert \\textbf{v} \\Vert \\ | \\cos(\\theta)|$$'],
  ['pmain', 'From the definition of the dot product:'], 
  ['displayFormula', '$$ \\cos(\\theta) = \\frac{\\textbf{v} \\cdot \\textbf{u}}{\\Vert\\textbf{v}\\Vert \\ \\Vert\\textbf{u}\\Vert}$$'],
  ['pmain', 'This means:'], 
  ['displayFormula', '$$ \\Vert \\operatorname{proj}_{\\textbf{u}}(\\textbf{v}) \\Vert = \\Vert \\textbf{v} \\Vert \\frac{| \\textbf{v} \\cdot \\textbf{u} |}{\\Vert\\textbf{v}\\Vert \\ \\Vert\\textbf{u}\\Vert} = \\frac{| \\textbf{v} \\cdot \\textbf{u} |}{ \\Vert\\textbf{u}\\Vert}$$'],
  ['pmain', 'If we want the vector \\(\\textbf{p}\\), we can take the unit vector of \\(\\textbf{u}\\) and scale (or shrink) it by the magnitude of \\(\\textbf{p}\\). Whether \\(\\textbf{p}\\) faces the same direction or the opposite direction of \\(\\textbf{u}\\) depends on the sign of \\(\\cos(\\theta)\\):'],
  ['displayFormula', '$$ \\operatorname{proj}_{\\textbf{u}}(\\textbf{v}) = \\frac{\\textbf{u}}{\\Vert \\textbf{u} \\Vert} \\Vert \\operatorname{proj}_{\\textbf{u}}(\\textbf{v}) \\Vert \\ \\operatorname{sign}(\\cos(\\theta))= \\textbf{u} \\ \\frac{| \\textbf{v} \\cdot \\textbf{u} |}{ \\Vert\\textbf{u}\\Vert^2} \\ \\operatorname{sign}(\\cos(\\theta))$$'],
  ['pmain', 'From the definition of the dot product:'], 
  ['displayFormula', '$$ \\operatorname{proj}_{\\textbf{u}}(\\textbf{v}) = \\textbf{u} \\ \\frac{| \\textbf{v} \\cdot \\textbf{u} |}{ \\Vert\\textbf{u}\\Vert^2} \\frac{\\textbf{v} \\cdot \\textbf{u}}{| \\textbf{v} \\cdot \\textbf{u} |} = \\textbf{u} \\ \\frac{ \\textbf{v} \\cdot \\textbf{u}}{ \\Vert\\textbf{u}\\Vert^2}$$'],
];
export default content;
