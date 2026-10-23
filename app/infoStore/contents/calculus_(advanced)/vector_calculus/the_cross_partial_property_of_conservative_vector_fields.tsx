export const title="The cross partial property of conservative vector fields";

const content = [
  ['h1', 'The Cross Partial Property Of Conservative Vector Fields'],
  ['pmain', 'Let \\(\\textbf{F}\\) be a vector field in three dimensions such that the component functions of \\(\\textbf{F}\\) have continuous first-order partial derivatives on the domain of \\(\\textbf{F}\\). Suppose \\(\\textbf{F}\\) is a conservative vector field in \\(\\mathbb{R}^3\\):'],
  ['displayFormula', '$$ \\textbf{F}(x,y) = \\langle P(x,y,z), Q(x,y,z), R(x,y,z) \\rangle $$'],

  ['pmain', 'Since \\(\\textbf{F}\\) is conservative, there is a function \\(f(x,y,z)\\) such that \\(∇f=\\textbf{F}\\). Therefore, by the definition of the gradient, \\(f_x=P\\), \\(f_y=Q\\) and \\(f_z=R\\). By Clairaut\'s theorem, \\(f_{xy}=f_{yx}\\), \\(f_{xz}=f_{zx}\\) and \\(f_{yz}=f_{zy}\\). This means, \\(f_{xy}=P_y\\) and \\(f_{yx}=Q_x\\), and thus \\(P_y=Q_x\\).'], 
  ['pmain', 'This means, \\(f_{xy}=P_y\\) and \\(f_{yx}=Q_x\\), and thus \\(P_y=Q_x\\).'], 
  ['pmain', 'This also means \\(f_{xz}=P_z\\) and \\(f_{zx}=R_x\\), and thus \\(P_z=R_x\\).'], 
  ['pmain', 'Similarly, \\(f_{yz}= Q_z\\) and \\(f_{zy}=R_y\\), and thus \\(Q_z=R_y\\).'], 
];
export default content;