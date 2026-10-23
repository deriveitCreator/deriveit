export const title="Multiplying the probabilities in tree diagrams";

const content = [
  ['h1', 'Multiplying The Probabilities In Tree Diagrams'],

  ['pmain', 'A tree diagram represents a probability space, where the sibling nodes represent mutually exclusive events. Suppose on a specific time, the probability that Bob goes to the library (event \\(L\\)) is 0.3, and the probability that Bob stays in his house (event \\(H\\)) is 0.7. We can represent it like so:'],
  ['displayimg', '3.jpeg'],

  ['pmain', 'If Bob stays in his house, the probability that Bob uses his phone (event \\(N\\)) is 0.6 and the probability that Bob reads a book (event \\(B\\)) is 0.4. We can represent this like so:'], 
  ['displayimg', '4.jpeg'],

  ['pmain', 'If Bob goes to the library, the probability that Bob uses his phone (event \\(N\\)) is 0.1 and the probability that Bob reads a book (event \\(B\\)) is 0.9. We can represent this like so:'], 
  ['displayimg', '5.jpeg'],

  ['pmain', 'The probability of an event like \\(H\\) is represented like this: \\(P(H)\\). The probability of an event like \\(B\\) given another even like \\(H\\) is represented like this: \\(P(B|H)\\). This means:'],
  ['displayFormula', '$$\\begin{align} P(H) = 0.7 \\quad P(N|H) = 0.6 \\quad P(B|H) = 0.4 \\\\ P(L) = 0.3 \\quad P(N|L) = 0.1 \\quad P(B|L) = 0.9 \\end{align}$$'],
  
  ['pmain', 'In our tree diagram, the probability notation is used like this:'],
  ['displayimg', '6.jpeg'],
  
  ['pmain', 'Consider the branch going from event \\(H\\) to event \\(N\\). The associated probability is \\(P(N|H)\\). Consider the branch going from root to event \\(H\\). The associated probability is \\(P(H)\\). What if we want the associated probability going from root to that \\(N\\)? In other words the probability of both \\(H\\) and \\(N\\).'],
  ['pmain', 'The probability of both \\(H\\) and \\(N\\) is represented like this: \\(P(H \\cap N)\\). The conditional probability, \\(P(N|H)\\), gives the probability of \\(N\\) after \\(H\\) already happens (i.e. we are already on event \\(H\\) in our tree diagram, and we want to go to event \\(N\\)). Meanwhile, \\(P(H \\cap N)\\) is about when \\(H\\) hasn\'t happened yet and we want to find the probability of both \\(H\\) and \\(N\\) happening (i.e. we are on the root node of our tree, and we want the likehood of going to \\(H\\), then \\(N\\)):'],
  ['displayimg', '7.jpeg'],

  ['pmain', 'Suppose we want to break the number 5 into two parts: 70% and 30%. Seventy percent of 5 is \\(5 * 0.7 = 3.5\\), and thirty percent of 5 is \\(5 * 0.3 = 1.5\\). This means \\(5 = 3.5 + 1.5\\), and now we have broken 5 into 70-30 parts.'],
  ['pmain', 'Now look at this tree diagram:'],
  ['displayimg', '8.jpeg'],
  ['pmain', 'We already know \\(P(L)=0.3\\), and we want to find \\(P(N \\cap H)\\). We know the probability of the two branches will add to 0.7:'],
  ['displayimg', '9.jpeg'],

  ['pmain', 'There is a 0.7 chance of going to either of the first two branches. What about the probability of an individual branch? We just need to break this 0.7 into the two parts: 60% (for \\(N\\)) and 40% (for \\(B\\)). We do this like we did for 5: \\(0.7*0.6 = 0.42\\) and \\(0.7*0.4 = 0.28\\). So the probability of the two branches broken down into two is: \\(0.7 = 0.42 + 0.28\\):'],
  ['displayimg', '10.jpeg'],
  ['pmain', 'This means \\(P(N \\cap H)=P(H)P(N|H)\\), and \\(P(B \\cap H) = P(H)P(B|H)\\).'],
  ['pmain', 'In general, if after some event \\(Z\\), there are one of two mutually exclusive events, \\(X\\) and \\(Y\\), that can take place, then the probability of \\(Z\\) can be broken like so: \\(P(Z) = P(C)P(X|Z) + P(C)P(Y|Z)\\). This is because \\(X\\) and \\(Y\\) are mutually exclusive and their probabilities add to 1.'],
  ['pmain', 'Similarly, if there are three mutually exclusive events, \\(W\\), \\(X\\) and \\(Y\\), that can take place after \\(Z\\), then: \\(P(Z) = P(Z)P(W|Z) + P(Z)P(X|Z) + P(Z)P(Y|Z)\\). This is because, again, \\(W\\), \\(X\\) and \\(Y\\) are mutually exclusive and their probabilities add to 1.'],
];
export default content;