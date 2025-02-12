export const title="Proof of the Lagrange form of the remainder in the Taylor series";
const content = [
  ['h1', 'Proof Of The Lagrange Form Of The Remainder'],
  ['pmain', 'Let \\(f\\) be a function that can be differentiated \\(n+1\\) times on an interval \\(I\\) containing the real number \\(a\\). Let \\(p_n\\) be the \\(n\\)th Taylor polynomial of \\(f\\) at \\(a\\) and let \\(R_n\\) be the \\(n\\)th remainder:'],
  ["displayFormula","\\[ R_n(x) = f(x) - p_n (x) \\]"],
  ['pmain', 'Fix a point \\(x∈I\\) and introduce the function \\(g\\) such that:'],
  ["displayFormula","\\[ g(t)=f(x) - f(t) - f'(t)(x-t) - f''(t)\\frac{2!}{(x-t)^2}- \\cdots -f^{(n)}(t)\\frac{n!}{(x-t)^n} -R_n(x)\\frac{(x-t)^{n+1}}{(x-a)^{n+1}} \\]"],
  ['pmain', 'This means:'],
  ["displayFormula","\\[\\begin{align} g(a) &= f(x) - f(a) - f'(t)(x-a) - f''(t)\\frac{2!}{(x-a)^2}- \\cdots -f^{(n)}(a)\\frac{n!}{(x-a)^n} -R_n(x)\\frac{(x-a)^{n+1}}{(x-a)^{n+1}} \\\\ &= f(x) - p_n(x) - R_n(x) = 0 \\\\ g(x) &= f(x) - f(x) -0 - 0 - \\cdots - 0 = 0 \\end{align}\\]"],
  ['pmain', 'Since, \\(g(x) =0\\) and \\(g(a) = 0\\), then according to Rolle\'s theorem, there must be a point \\(c\\) between \\(x\\) and \\(a\\) such that \\(g\'(c)=0\\).'],
  ['pmain', 'Now let\'s try to figure out \\(g\'(t)\\). Using the product rule, we note that:'],
  ["displayFormula","\\[\\begin{align} \\frac{d}{dt} \\left[ \\frac{f^{(n)}(t)}{n!} (x-t)^n \\right] = \\frac{f^{(n+1)}(t)}{n!}(x-t)^n - \\frac{f^{(n)}(t)}{(n-1)!} (x-t)^{n-1}\\end{align}\\]"],
  ['pmain', 'This means:'],
  ["displayFormula","\\[\\begin{gather} g'(t)=-f'(t)+ [f'(t) - f''(t)(x-t)]+ \\left[f''(t)(x-t)-\\frac{f'''(t)}{2!}(x-t)^2 \\right]+ \\cdots \\\\+ \\left[\\frac{f^{(n)}(t)}{(n-1)!}(x-t)^{n-1} - \\frac{f^{(n+1)}(t)}{n!}(x-t)^n \\right]+ (n+1)R_n(x) \\frac{(x-t)^n}{(x-a)^{n+1}} \\end{gather}\\]"],
  ['pmain', 'Since there is a telescoping effect. Therefore,:'],
  ["displayFormula","\\[g'(t)=- \\frac{f^{(n+1)}(t)}{n!}(x-t)^n + (n+1)R_n(x) \\frac{(x-t)^n}{(x-a)^{n+1}} \\]"],
  ['pmain', 'Since there is a point \\(c\\) such that \\(g\'(c)=0\\):'],
  ["displayFormula","\\[\\begin{gather} g'(c) = - \\frac{f^{(n+1)}(c)}{n!}(x-c)^n + (n+1)R_n(x) \\frac{(x-c)^n}{(x-a)^{n+1}} \\\\ 0 = - \\frac{f^{(n+1)}(c)}{n!}(x-c)^n + (n+1)R_n(x) \\frac{(x-c)^n}{(x-a)^{n+1}} \\end{gather}\\]"],
  ['pmain', 'Rearranging'],
  ["displayFormula","\\[ \\frac{f^{(n+1)}(c)}{(n+1)!} (x-a)^{n+1}= R_n(x)\\]"],
];
export default content;

