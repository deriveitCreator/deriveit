
export type colorInfoType = {
	headerBgColor: string,
	bgColor: string,
	footerColor: string,
	borderColor: string
}

const colorInfo: {[key:string]: colorInfoType} = {
	"algebra": {headerBgColor: "#B95C00", bgColor:"rgb(251, 227, 155)", footerColor:"#FBE39B", borderColor:"#663300"},
	"geometry": {headerBgColor: "#00CC00", bgColor:"#CCFF99", footerColor:"#99FF66", borderColor:"green"},
	"discrete_mathematics": {headerBgColor: "#FF9900", bgColor:"#FFEEAA", footerColor:"#FFDB91", borderColor:"#FF6600"},
	"linear_algebra":{ headerBgColor: "#777", bgColor:"#eee", footerColor:"#CCCCCC", borderColor:"#444"},
	"trigonometry":{ headerBgColor: "#3366CC", bgColor:"#99CCFF", footerColor:"#FFFFCC", borderColor:"#000099"},
	"calculus":{ headerBgColor: "teal", bgColor:"#88DFDF", footerColor:"#AACCCC", borderColor:"#005555"},
	"probability_&_statistics":{ headerBgColor: "#990099", bgColor:"#EEAADD", footerColor:"#EE77FF", borderColor:"#550055"},
	"mechanics":{ headerBgColor: "#AA0000", bgColor:"#FFEEAA", footerColor:"#FEF1B5", borderColor:"#600000"},
	"astronomy":{ headerBgColor: "#88AABB", bgColor:"black", footerColor:"#333333", borderColor:"#DD0000"},
	"chemistry":{ headerBgColor: "#CC5599", bgColor:"#FFBBFF", footerColor:"#FFAAFF", borderColor:"#993366"},
	"electricity_&_magnetism":{ headerBgColor: "#777777", bgColor:"#F4F4F4", footerColor:"white", borderColor:"#535353"},
	"biology":{ headerBgColor: "#FF9966", bgColor:"#FFEAA9", footerColor:"#FFEAA9", borderColor:"#FF6655"},
	"computer_science":{ headerBgColor: "#36e", bgColor:"#1f1f1f", footerColor:"#111", borderColor:"#AAA"},
	"error":{ headerBgColor: "#d61", bgColor:"#fc6", footerColor:"#520", borderColor:"#520"}
}

export function getTopicColorInfo(value: string): colorInfoType{
	//@ts-ignore
	return colorInfo[value];
}

export const topicsOrder = [
	"algebra",
	"geometry",
	"discrete_mathematics",
	"linear_algebra",
	"trigonometry",
	"calculus",
	"probability_&_statistics",
	"mechanics",
	"astronomy",
	"chemistry",
	"electricity_&_magnetism",
	"biology",
	"computer_science",
	"error"
]

export function getRecentlyAdded(): string[]{
	return [
		"gcd(a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ..., a<sub>n</sub>) ⇒ gcd(gcd(a<sub>1</sub>, a<sub>2</sub>), a<sub>3</sub>, ..., a<sub>n</sub>)%discrete_mathematics/more_gcd/gcdLemma7",
		"any integer greater than 6 can be represented as a sum of two relatively prime integers%discrete_mathematics/divisibility/gcdLemma9",
		"if n is odd then gcd(n, n-2) = 1%discrete_mathematics/divisibility/gcdLemma10",
		"if gcd(a, b) = 1, then gcd(a + b, ab) = 1%discrete_mathematics/divisibility/gcdLemma11",
	]
}

export function getRecentlyEdited(): string[]{
	return [
		"the inverse function theorem%calculus/differential_calculus/the_inverse_function_theorem",
		"proof That [d/dx]sin(x) = cos(x)%calculus/trigonometric_derivatives/sin",
		"proof That sin(x)/x approaches 1 as x approaches 0%calculus/limits/limit_sin",
		"if (n^2)+1 is prime, then n^2 = 4k%discrete_mathematics/prime_numbers/n_square_prime",
	]
}

export const ERROR_VALUE: Array<[string,string[]]> = [["error",[]]];

export function getTopicLinks(topic: string){
  let result: Array<[string,string[]]>;
	switch(topic){
		case "algebra":
			result = algebraLinks;
      break;
		case "geometry":
			result = geometryLinks;
      break;
		case "discrete_mathematics":
			result = discreteMathematicsLinks;
      break;
		case "linear_algebra":
			result = linearAlgebraLinks;
      break;
		case "trigonometry":
			result = trigonometryLinks;
      break;
		case "calculus":
			result = calculusLinks;
      break;
		case "probability_&_statistics":
			result = probabilityAndStatisticsLinks;
      break;
		case "mechanics":
			result = mechanicsLink;
      break;
		case "astronomy":
			result = astronomyLink;
      break;
		case "chemistry":
			result = chemistryLink;
      break;
		case "electricity_&_magnetism":
			result = electricityAndMagnetismLinks;
      break;
		case "biology":
			result = biologyLinks;
      break;
		default:
			result = ERROR_VALUE;
	}

	return result;
}

//if there is no percentage, then the link is the topic name with
//" " replaced with "_" and "'" removed

const algebraLinks: Array<[string,string[]]> = [
	["fractions", ["[a/b] + [c/b] gives [(a+c)/b]%adding_fractions","multiplying [a/b] by [c/d] gives [ac/bd]%multiplying_fractions"]],
	["exponents", [
		"a<sup>m</sup> * a<sup>n</sup> is equal to a<sup>m+n</sup> (where m and n are integers)%product_rule",
		"(ab)<sup>m</sup> is equal to a<sup>m</sup> * b<sup>m</sup> (where m is an integer)%power_of_product_rule",
		"(a<sup>m</sup>)<sup>n</sup> is equal to a<sup>m*n</sup> (where m and n are integers)%raising_exponents",
		"(a/b)<sup>m</sup> is equal to (a<sup>m</sup>)/(b<sup>m</sup>) (where m is an integer)%power_of_quotient_rule",
		"x<sup>0</sup> = 1%zero_exponential_rule",
		"x<sup>-n</sup> is equal to 1/(x<sup>n</sup>)%raising_to_negative",
		"(a<sup>m</sup>)÷(a<sup>n</sup>) is equal to (a<sup>m-n</sup>) (where m and n are integers)%quotient_rule",
		"<sup>m</sup>√a is equal to a<sup>1/m</sup>%roots_as_exponents",
		"<sup>m</sup>√(ab) is equal to (<sup>m</sup>√a) * (<sup>m</sup>√b)%square_root_multiply",
		"<sup>n</sup>√(a<sup>q</sup>) is equal to (<sup>n</sup>√a)<sup>q</sup>%roots_with_exponents",
	]],
	["logarithms", [
		"power_rule",
		"change_of_base",
		"product_and_quotient_rule"
	]],
	["quadratic_formula", ["quadratic_formula"]]
];

const geometryLinks: Array<[string,string[]]> = [
	["triangle_related_stuff", ["angles_in_a_triangle_add_to_180","area_of_a_triangle","constructing_an_equilateral_triangle","pythagoras_theorem","sides_of_30_90_60"]],
	["quadrilateral_related_stuff", ["area_of_a_parallelogram","area_of_a_trapezium","constructing_a_parallelogram_with_a_given_angle_and_with_an_area_equal_to_a_given_triangle"]],
	["circle_related_stuff", ["Thales's_theorem"]],
	["parabola", [
		"getting_the_standard_form_equation_of_a_parabola_from_the_focus-directrix_definition%getting_the_standard_form_equation_of_a_parabola_from_the_focus_and_directrix_definition",
		"axis_of_symmetry_of_a_parabola",
		"getting_the_focus,_directrix_and_vertex%getting_the_focus_directrix_and_vertex",
		"vertex_equation_of_a_parabola",
		"the_reflective_property_of_a_parabola",
		"the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola",
	]],
	["hyperbola",[
		"getting_the_standard_form_equation_from_the_geometric_definition",
		"deriving_the_asymptote_of_a_hyperbola"
	]],
	["other_shapes",[
		"lateral surface area of a right circular cone%cone_lateral_surface_area",
		"lateral surface area of a right circular conical frustrum%conical_frustum_lateral_surface_area"
	]]
];

const discreteMathematicsLinks: Array<[string,string[]]> = [
	["divisibility", [
		"if α|β and α|ε, then α|(mβ + nε)%divisibility1",
		"if α|β and ε|δ, then αε|βδ%divisibility2",
		"3|n<sup>3</sup>-n%threeDividesNCubedMinusN",
		"5|n<sup>5</sup>-n%fiveDividesNToThe5MinusN",
		"4n<sup>2</sup>+4n is divisible by 8 for all n%multipleOf8",
		"smallest positive linear combination of α and β = gcd(α, β)%linear_combination_smallest_gcd",
		"every linear combination of α and β is a multiple of gcd(α, β), and vice versa%every_linear_combination",
		"gcd(α, β) = gcd(β, α mod β); why the euclidean algorithm works%why_the_euclidean_algorithm_works",
		"if α<sub>1</sub>|b, α<sub>2</sub>|b and gcd(α<sub>1</sub>, α<sub>2</sub>) = 1 ⇒ α<sub>1</sub>α<sub>2</sub>|b%gcdLemma14",
		"if ε|αβ and gcd(ε, α) = 1, then ε|β%gcdLemma13",
		"if α is odd then gcd(α, α-2) = 1%gcdLemma10",
		"if m|n, then (a<sup>m</sup>-b<sup>m</sup>)|(a<sup>n</sup>-b<sup>n</sup>)%divisibilityLemma1"
	]],
	["prime_numbers", [
		"if ρ is prime and ρ|αβ, then ρ|α or ρ|β%primeLemma1",
		"if n is composite then there is a prime divisor ≤ √n%nCompositeSoPrimeDivisorLessThanRootN",
		"there are infinite number of primes%infinite_primes",
		"all primes are of the form 4k+1 or 4k+3%all_primes_are_of_the_form",
		"there are infinite primes of the form 4k+3%infinite_primes_4k_plus_3",
		"there are infinite primes of the form 3k+2%infinite_primes_3k_plus_2",
		"no prime can be expressed as a<sup>4</sup> - b<sup>4</sup>%differenceOfFourthPowers",
		"for any positive integer n, there are at least n consecutive composite integers%nConsecutiveCompositeInteger",
		"if 2<sup>p</sup> - 1 is prime, then p is prime%Mersenne_prime1",
		"if n > 1 and a<sup>n</sup> - 1 is prime, then a=2%Mersenne_prime2",
		"if a<sup>n</sup> + 1 is an odd prime, then a is even and n is a power of 2%a_to_the_n_plus_one_prime",
		"if n<sup>2</sup>+1 is prime, then n<sup>2</sup> = 4k%n_square_prime",
		"Legendre's formula",
		"lower bound for Legendre's formula%legendres_formula_lower_bound",
		"a powerful number is a product of a square number and a cube number%powerful_from_square_and_cube",
		"any integer greater than 6 can be represented as a sum of two relatively prime integers%primeLemma2",
		"if a<sup>k</sup>|b<sup>k</sup> then a|b%aSquare_divides_bSquare_implies_a_divides_b"
	]],
	["more_gcd", [
		"if gcd(α, ε) = 1 and gcd(β, ε) = 1, then gcd(αβ, ε) = 1%gcdLemma18",
		"if gcd(α, β) = 1, then gcd(αβ, ε) = gcd(α, ε) * gcd(β, ε)%multiplicative",
		"δ = gcd(α, β) ⇒ gcd(α/δ, β/δ) = 1%gcdLemma8",
		"gcd(α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub>, ..., α<sub>n</sub>) ⇒ gcd(gcd(α<sub>1</sub>, α<sub>2</sub>), α<sub>3</sub>, ..., α<sub>n</sub>)%gcdLemma7",
		"if gcd(x, y) divides (x + y), then there are infinite values of x and y%gcdDividesPlus",
		"m * gcd(α, β) = gcd(mα, mβ)%gcdLemma15",
		"if gcd(α, β) = 1, then gcd(α+β, α-β) is either 1 or 2%gcdLemma16",
		"if gcd(α, β) = δ and  gcd(α, ε) = δ, then  gcd(α, β, ε) = δ%gcdLemma17",
		"if gcd(α, β) = 1 then gcd(α<sup>m</sup>, β<sup>n</sup>) = 1%gcdLemma12",
		"if gcd(α, β) = 1 then gcd(α + β, αβ) = 1%gcdLemma11"
	]],
	["lcm", [
		"gcd(α, β) * lcm(α, β) = αβ%gcdTimesLcmGivesProduct",
		"[ca, cb] = c[a, b]%lcmLemma2",
		"[a, b, c] = [[a, b], c]%lcmLemma3",
	]],
	["modular_arithmetic", [
		"(α ≡ β mod M and ε ≡ δ mod M) ⇒ α + ε ≡ β + δ mod Μ%modLemma1",
		"(α ≡ β mod M and ε ≡ δ mod M) ⇒ αε ≡ βδ mod Μ%modLemma2",
		"(εα ≡ εβ mod M) ⟺ (α ≡ β mod Μ/(ε, M)) %modLemma4",
		"ax ≡ b mod m has a solution if and only if gcd(a, m)|b%congruence_solution_possible",
		"If (α, m) = 1 and if {r<sub>1</sub>, ..., r<sub>φ(m)</sub>} is a reduced residue system (modulo m), then {αr<sub>1</sub>, ..., αr<sub>φ(m)</sub>} is also a reduced residue system%multiplying_reduced_residue_system",
		"Euler's theorem",
		"Fermat's little theorem",
		"Freshman's dream",
		"existence and uniqueness of modular inverse if gcd(a, m) = 1%modular_inverse",
		"Wilson's theorem",
		"x<sup>2</sup> ≡ 1 mod p ⇒ x ≡ +1 or -1 mod p%x_square_solution",
		"x<sup>2</sup> ≡ -1 mod p is solvable if and only if p = 2 or p ≡ 1 mod 4%x_square_solvable",
		"solution of ax ≡ b mod m (if gcd(a, m)|b)%congruence_solution",
		"Chinese remainder theorem"
	]],
	["factorials,_permutations_and_combinations", [
		"0! = 1%0fac",
		"the formula of permutations%factorials_and_permutations",
		"the formula of combinations%com",
		"using_combinations_to_find_a_number_in_the_Pascal's_triangle%pascals_triangle.tsx",
		"number of ways of arranging n objects with k identical objects%binomial_theorem"
	]],
	["sequence_and_series", [
		"finding_a_term_in_an_arithmetic_sequence",
		"finding_a_term_in_a_geometric_sequence",
		"the_sum_of_an_arithmetic_series",
		"the_sum_of_a_geometric_series_with_finite_terms",
		"the_sum_to_infinity_of_a_geometric_series",
		"sum_of_the_first_n_positive_integers",
		"sum_of_the_squares_of_the_first_n_positive_integers",
		"sum_of_the_cubes_of_the_first_n_positive_integers",
		"showing_that_the_harmonic_series_diverges"
	]]
]

const linearAlgebraLinks: Array<[string,string[]]> = [
	["basics", ["two lines are perpendicular if the gradient of one line is the negative reciprocal of the other%product_of_perpendicular"]]
]

const trigonometryLinks: Array<[string,string[]]> = [
	["basic_identities", [
		"unit circle definitions%unit_circle",
		"sine_rule",
		"cosine_rule",
		"tan(x) = sin(x)/cos(x)%tan",
		"sin(x) = -sin(-x) and cos(x) = cos(-x)%basic_identity",
		"Pythagorean identities%pt",
	]],
	["advanced",[
		"addition and subtraction formulas for cos(x)%addsubcos",
		"addition and subtraction formulas for sin(x)%addsubsin",
		"addition and subtraction formulas for tan(x)%addsubtan",
		"double angle and half angle formulas for sin(x) and cos(x)%double",
		"double angle and half angle formulas for tan(x)%doubleTan",
		"the product formula for sin(x) and cos(x)%product"
	]],
	["hyperbolic_functions",[
		"how_cosh_and_sinh_form_the_right_half_of_a_hyperbola",
		"sech<sup>2</sup>(x) = 1 - tanh<sup>2</sup>(x)%Pythagorean1",
		"csch<sup>2</sup>(x) = coth<sup>2</sup>(x) - 1%Pythagorean2"
	]],
	["inverse_hyperbolic_functions",[
		"definition_of_arsinh(x)",
		"definition_of_arcosh(x)",
		"definition_of_artanh(x)",
		"definition_of_arcoth(x)",
		"definition_of_arsech(x)",
		"definition_of_arcsch(x)",
	]]
]

const calculusLinks: Array<[string,string[]]> = [
	["limits", ["the sum law%sum","the product law%product","limit<sub>x→a</sub>f(g(x)) = f(limit<sub>x→a</sub>g(x))%inner","the root law and the power law%root","limit<sub>x→0</sub> [sin(x)/x] = 1%limit_sin","limit<sub>x→0</sub> [(cos(x)-1)/x] = 0%limit_cos",
	]],
	["differential_calculus", [
		"differentiability_implies_continuity",
		"the power rule (when exponent is a postive integer)%power_rule",
		"the product rule%paq",
		"the quotient rule%quo",
		"the_chain_rule",
		"the_inverse_function_theorem",
		"mean_value_theorem"
	]],
	["using_Euler's_number", [
		"definition of e%define_e",
		"[d/dx] b<sup>x</sup> = b<sup>x</sup>ln(b)%bx",
		"[d/dx] log<sub>b</sub>x = 1/(x * ln(b))%log",
		"the power rule (when exponent is any real number)%power_rule2","only_functions_of_the_form_Ae^x_are_derivatives_of_themselves%functions_which_are_derivatives_of_themselves",
		"representing e<sup>x</sup> as a limit%e_limit","representing e<sup>x</sup> as an infinite series (proof 1)%e_series","representing e<sup>x</sup> as an infinite series (proof 2)%e_series2",
		"Euler's_formula"
	]],
	["trigonometric_derivatives", [
		"[d/dx] sin(x) = cos(x)%sin",
		"[d/dx] cos(x) = -sin(x)%cos",
		"[d/dx] sec(x) = sec(x)tan(x)%sec",
		"[d/dx] cosec(x) = -cosec(x)cotan(x)%cosec",
		"[d/dx] tan(x) = sec<sup>2</sup>(x)%tan",
		"[d/dx] cotan(x) = -cosec<sup>2</sup>(x)%cot",
		"derivative of arcsine(x)%arcsin",
		"derivative of arccosine(x)%arccos",
		"derivative of arcsecant(x)%arcsec",
		"derivative of arccosecant(x)%arccosec",
		"derivative of arctangent(x)%arctan",
		"derivative of arccotangent(x)%arccot"
	]],
	["l'Hopital's_rule", ["indeterminate form of type 0/0%zeroOverZero",]],
	["antiderivative", [
		"antiderivative_of_1/x%antiderivative_of_one_over_x",
		"antiderivative_of_secant(x)",
		"antiderivative_of_cosecant(x)",
		"antiderivative_of_tangent(x)_and_cotangent(x)",
		"antiderivative_of_a<sup>x</sup>%antiderivative_of_exponentials",
		"antiderivative_of_log<sub>a</sub>(x)%antiderivative_of_log",
		"antiderivative_of_arcsine(x)",
		"antiderivative_of_arccosine(x)",
		"antiderivative_of_arctan(x)",
		"antiderivative_of_arccotan(x)",
		"antiderivative_of_arcsec(x)",
		"antiderivative_of_arccosec(x)",
	]],
	["hyperbolic_functions", [
		"[d/dx] sinh(x) = cosh(x)%derivative_of_sinh(x)",
		"[d/dx] cosh(x) = sinh(x)%derivative_of_cosh(x)",
		"[d/dx] sech(x) = -sech(x)tanh(x)%derivative_of_sech(x)",
		"[d/dx] csch(x) = -csch(x)coth(x)%derivative_of_csch(x)",
		"[d/dx] tanh(x) = sech<sup>2</sup>(x)%derivative_of_tanh(x)",
		"[d/dx] coth(x) = -csch<sup>2</sup>(x)%derivative_of_coth(x)",
		"derivative_of_arsinh(x)",
		"derivative_of_arcosh(x)",
		"derivative_of_artanh(x)",
		"derivative_of_arcoth(x)",
		"derivative_of_arsech(x)",
		"derivative_of_arcsch(x)",
	]],
	["integral_calculus", [
		"fundamental theorem of calculus, part 1%part1",
		"fundamental theorem of calculus, part 2%part2",
		"trapezium_rule",
		"Simpson's_rule",
		"finding the volume (slicing method)%slicing_method",
		"finding the volume of a solid of revolution (disk method)%disk",
		"finding the volume using cylindrical shells%cylindrical_shells",
		"finding the arc length of a curve%arc_length",
		"finding area of a surface of revolution%revolution_area",
		"integration by parts%by_parts",
	]],
]

const probabilityAndStatisticsLinks: Array<[string,string[]]> = [
	["expected_value_and_variance_basics", [
		"E[X + Y] = E[X] + E[Y]%linearity_of_expectation",
		"E[cX] = c * E[X] where c is a constant%loe2",
		"E[XY] = E[X] * E[Y] where X and Y are independent variables%exMul",
		"measuring the spread of data: mean absolute deviation and mean squared deviation%spread",
		"Var[X] = E[X^2] - (E[X]^2)%varDef",
		"Var[kX] = k^2 * Var[X]%varCons",
		"Var[X + Y] = Var[X] + Var[Y] where X and Y are independent variables%varAdd",
		"deriving the E[X] and Var[X] for the iid variables%varMean",
		"an equation for the population variance using the sample mean and the sample size%varsamp",
		"Markov's inequality",
		"Chebyshev's inequality",
	]],
	["probability_distribution_stuff", [
		"expected_value_and_variance_of_a_binomial_distribution",
		"expected_value_and_variance_of_a_geometric_distribution",
		"probability_function_of_the_Poisson_distribution",
		"if X is a positive continuous random variable with a memoryless property, then X is exponentially distributed%memoryless",
		"expected_value_and_variance_of_an_exponential_distribution"
	]],
	["miscellaneous",["deriving the regression coefficient of y on x%line_of_best_fit"]]
]

const mechanicsLink: Array<[string,string[]]> = [
	["classical_mechanics", ["equations_of_linear_motion_with_constant_acceleration"]],
	["miscellaneous",["adding_relative_(or_percentage)_uncertainties_when_multiplying_or_dividing_measured_quantities"]]
]

const astronomyLink: Array<[string,string[]]> = [
	["history", [
		"the geocentric view",
		"the Egyptian calendar%e_calendar",
		"how Eratosthenes calculated Earth's circumference%c_of_earth",
		"the introduction to De Revolutionibus Orbium Coelestium%heliocentric",
	]],
]

const chemistryLink: Array<[string,string[]]> = [
	["history", ["history_of_atomic_theory","early_metallurgy","acid, alakli and litmus%litmus","phlogiston_theory","discovery of carbon dioxide%discovery_of_co2","discovery_of_hydrogen","discovery_of_oxygen",]]
]

const electricityAndMagnetismLinks: Array<[string,string[]]> = [
	["history", ["history_of_electricity"]]
]

const biologyLinks: Array<[string,string[]]> = [
	["history",["cell_theory","fermentation","immunity",]]
]