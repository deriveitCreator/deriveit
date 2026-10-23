export const title="Understanding the AND and OR rule for discrete single variables";

const content = [
  ['h1', 'Understanding the AND and OR rule for discrete single variables'],

  ['pmain', 'The things we can assign probabilities to are called <b>random experiments</b>. The (finite) set of possible outcomes to a random experiment is called the <b>sample space</b> (we will usually denote this set as \\(S\\)). Examples:'],
  ['displayFormula', '$$\\begin{align} \\text{Sample space for a fair six-sided dice: } &S = \\{1,2,3,4,5,6\\} \\\\ \\text{Sample space for a fair coin: } &S = \\{H, T\\} \\\\ \\text{Sample space for a fair twelve-sided dice: } &S = \\{1,2,3,4,5,6,7,8,9,10,11,12\\}\\end{align}$$'],

  ['pmain', 'An <b>event</b> is any subset of the sample space. For example, when rolling a fair six sided dice, we can define event \\(A\\) as the event when getting an even number, and event \\(B\\) as the event when getting a number less than or equal to \\(3\\):'], 
  ['displayFormula', '$$\\begin{align} A &= \\{2,4,6\\}\\\\ B &= \\{1,2,3\\}\\end{align}$$'],
  ['pmain', 'We can portray this in a Venn diagram:'], 
  ['displayimg', '1.jpeg'],

  ['pmain', 'The <b>intersection</b>, \\(A \\cap B\\), is \\(\\{2\\}\\), and the <b>union</b>, \\(A \\cup B\\), is \\(\\{1,2,3,4,6\\}\\).'], 
  ['pmain', 'The <b>cardinality</b> of some set \\(E\\), denoted as \\(|E|\\), defines the number of elements in a set. For example, \\(|B| = 3\\) and \\(|A \\cup B| = 5\\).'], 
  ['pmain', 'The <b>probability</b> of an event is the number of outcomes in that event divided by the total number of outcomes. Examples:'], 
  ['displayFormula', '$$\\begin{align} P(A) &= \\frac{|A|}{|S|} = \\frac{3}{6} = 0.5 \\\\ P(A \\cap B) &= \\frac{|A \\cap B|}{|S|} = \\frac{1}{6} \\end{align}$$'],

  ['pmain', 'If I roll a dice and I told you that event \\(B\\) definitely happened (i.e. the outcome is less than or equal to 3), but I don\'t tell you what the outcome actually is. What is the likelihood that \\(A\\) actually happens?'], 
  ['pmain', 'If we know event \\(B\\) definitely happened, then for event \\(A\\) to happen, the outcome has to be 2. <b>Conditional probability</b> is the probability of a event given another event already took place. The conditional probability of \\(A\\) given \\(B\\) is denoted as \\(P(A|B)\\), and since \\(B\\) has three elements and since only one of them belongs in \\(A\\), then:'],
  ['displayFormula', '$$P(A|B) = \\frac{1}{3}$$'],
  ['pmain', 'The definition of a conditional probability: The probability of \\(X\\) given \\(Y\\) is:'],
  ['displayFormula', '$$P(X|Y) = \\frac{| X \\cap Y |}{| Y|}$$'],
  ['pmain', 'This can be written another way:'],
  ['displayFormula', '$$P(X|Y) = \\frac{\\frac{| X \\cap Y |}{|S|}}{\\frac{| Y|}{|S|}} = \\frac{P(X \\cap Y)}{P(Y)}$$'],

  ['pmain', 'Consider another scenario:'],
  ['displayimg', '2.jpeg'],
  ['pmain', 'Here, \\(P(E) = 5/10 = 1/2 = 0.5\\), and \\(P(E|F) = \\frac{3}{6} = 0.5\\). This means \\(P(E|F)=P(E)\\). Similarly, since \\(P(F) = 6/10 = 0.6\\) and \\(P(F|E) = 3/5 = 0.6 \\), then \\(P(F)=P(F|E)\\). If the probability of an events, like \\(E\\), doesn\'t change when the another event, like \\(F\\), happens, then the events are <b>independent</b>.'],
  ['pmain', 'Claim: If \\(P(X|Y)=P(X)\\), then \\(P(Y|X)=P(Y)\\). Based on our definition of conditional probability, we know:'],
  ['displayFormula', '$$\\left[ P(X|Y) = \\frac{P( X \\cap Y)}{P(Y)} \\text{ and } P(Y|X) = \\frac{P(X \\cap Y )}{P(X)} \\right] \\implies P(X|Y)P(Y) = P(X \\cap Y) = P(Y|X)P(X)$$'],
  ['pmain', 'If \\(P(X|Y)=P(X)\\), then \\(P(X|Y)P(Y) = P(Y|X)P(Y)\\) impplies \\(P(X)P(Y) = P(Y|X)P(X)\\). For the LHS and RHS to match, \\(P(Y|X)\\) would have to be \\(P(Y)\\). This also means that if \\(X\\) and \\(Y\\) are independent, then \\(P(X)P(Y) = P(X \\cap Y)\\).'],

  ['pmain', 'Now let\'s focus on union. The probability of \\(P(E \\cup F)\\) is \\(\\frac{|E \\cup F|}{|S|} = \\frac{8}{10} = 0.8\\). Let\'s try to get the value of the formula for the union \\((|E \\cup F|)\\). If we individually add the number of elements in each set, we get \\(|E| + |F| = 5 + 6 = 11\\), but this is not the number of elements in \\(E \\cup F\\) (which is 8). This is because the intersection we counted twice, so we should subtract it once:'],
  ['displayFormula', '$$|E \\cup F| = |E| + |F| - |E \\cap F|$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$P(E \\cup F) = \\frac{|E \\cup F|}{|S|} = \\frac{|E| + |F| - |E \\cap F|}{|S|} = \\frac{|E|}{|S|} + \\frac{|F|}{|S|} - \\frac{|E \\cap F|}{|S|} = P(E) + P(F) - P(E \\cap F)$$'],

  ['pmain', 'If \\(|X \\cap Y|=0\\), then the events \\(X\\) and \\(Y\\) are <b>mutually exclusive</b>. Consider the example of rolling the dice we had above, with \\(A=\\{2,4,6\\}\\), and let \\(C = \\{5\\}\\). This means events \\(A\\) and \\(C\\) are mutually exclusive because \\(|A \\cap C| = 0\\). This also means \\(P(A \\cap C) = P(A) + P(C)\\).'],
  ['pmain', 'In summary, to find the probability of \\(X\\) and \\(Y\\):'],
  ['displayFormula', '$$\\begin{gather} P(X \\cap Y) = P(X|Y)P(Y) \\quad \\text{ or } \\quad P(X \\cap Y) =P(Y|X)P(X) \\\\ \\text{if they are independant: } P(X \\cap Y) = P(X)P(Y)\\end{gather}$$'],
  ['pmain', 'To find the probability of \\(X\\) or \\(Y\\):'],
  ['displayFormula', '$$\\begin{gather} P(X \\cup Y) = P(X) + P(Y) - P(X \\cap Y) \\\\ \\text{if they are mutually exclusive: } P(X \\cup Y) = P(X) + P(Y)\\end{gather}$$'],

];
export default content;