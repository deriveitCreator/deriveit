export const title="Deriving An Equation For The Population Variance Using The Sample Mean, and The Sample Size";
const content = [['h1', 'Deriving An Equation For The Population Variance Using The Sample Mean, and The Sample Size'], ['pmain', 'For this derivation, you have to get familiar with these variables:'], ['displayimg', 's1.PNG'], ['pmain', 'For a population of size N and values X<sub>i</sub>, the population variance and the sample variance are calculated using the formula below:'], ['displayimg', 's2.PNG'], ['pmain', 'In many practical situations, the true variance of a population is not known a priori and must be computed somehow. When dealing with extremely large populations, it is not possible to count every object in the population. Lets try to derive an equation for the expected value of the population variance, E[&sigma;^2], using the sample mean rather than the population mean, and using the size of the sample n rather than the population size N. We start our derivation by the formula of variance:'], ['displayimg', 's3.PNG'], ['pmain', 'The law of large numbers states that the larger the size of the sample, the more likely it is that the sample mean will be close to the population mean, so we are going to assume that E[X&#772;] = &mu; = E[X]. Also, in statistics, it is commonly assumed that observations in a sample are effectively iid, meaning that <b>all</b> the X<sub>i</sub> variables taken from the population will have the same variance as the population (&sigma;^2). We can rewrite our variance formula like this:'], ['displayimg', 's4.PNG'], ['pmain', 'Since the observations are iid, then var[X&#772;] = (&sigma;^2)/n (click <a href="varMean.html">here</a> to learn why):'], ['displayimg', 's5.PNG'], ['pmain', 'Our next step is to find the sum of (X<sub>i</sub>-E[X&#772;])<sup>2</sup> (they are added n times):'], ['displayimg', 's6.PNG'], ['pmain', 'Since they are added n times, then X&#772; = &Sigma; X<sub>i</sub>/n:'], ['displayimg', 's7.PNG'], ['pmain', 'We can use the linearity of expectation here:'], ['displayimg', 's8.PNG'], ['pmain', 'We can substitute in the values we got ealier:'], ['displayimg', 's9.PNG'], ['pmain', 'We can simplify this further:'], ['displayimg', 's10.PNG'], ['pmain', 'Looks like we got the sum of (X<sub>i</sub>-E[X&#772;])<sup>2</sup> in very simple terms:'], ['displayimg', 's11.PNG'], ['pmain', 'Lets make the population variance the subject of this equation:'], ['displayimg', 's12.PNG'], ['pmain', 'The above equation tells us that when the sum of (X<sub>i</sub>-E[X&#772;])<sup>2</sup> is divided by (n - 1), we are expected to get the population variance. This is how we get the population variance using the sample mean and the sample size. If we multiply both sides with (n-1)/n, we get:'], ['displayimg', 's13.PNG'], ['pmain', 'Hence the sample variance gives an estimate of the population variance that is biased by a factor of (n-1)/n. For this reason, the sum of (X<sub>i</sub>-E[X&#772;])<sup>2</sup>/n is referred to as the <span data-title="In statistics, the bias of an estimator is the difference between this estimator\'s expected value and the true value of the parameter being estimated.">biased</span> sample variance. Using (n - 1) instead of n in the formula for sample variance yields the unbiased sample variance, this is called <b>Bessel\'s correction</b>.']];
export default content;