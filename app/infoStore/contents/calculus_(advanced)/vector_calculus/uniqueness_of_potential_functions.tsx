export const title="Uniqueness Of Potential Functions";

const content = [
  ['h1', 'Uniqueness Of Potential Functions'],
  ['pmain', 'Let \\(F\\) be a conservative vector field on an open and connected domain and let \\(f\\) and \\(g\\) be functions such that \\(∇f=F\\) and \\(∇g=F\\).'],

  ['pmain', 'Since \\(f\\) and \\(g\\) are both potential functions for \\(\\textbf{F}\\), then:'], 
  ['displayFormula', '$$ ∇(f-g)=∇f-∇g=\\textbf{F}-\\textbf{F}=0 $$'],
  ['pmain', 'Let \\(h=f-g\\), then we have \\(∇h=0\\):'],

  ['pmain', 'Assume \\(h\\) is a function of \\(x\\) and \\(y\\). Since \\(∇h=0\\), we have \\(h_x=0\\) and \\(h_y=0\\). The expression \\(h_x=0\\) implies that \\(h\\) is a constant function with respect to \\(x\\). Similarly, \\(h\\) is a constant function with respect to \\(y\\). Thus, \\(h(x,y)=C\\) for some constant C on the connected domain of \\(\\textbf{F}\\).'], 
];
export default content;