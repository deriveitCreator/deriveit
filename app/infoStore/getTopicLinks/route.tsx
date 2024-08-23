const ERROR_VALUE: Array<[string,string[]]> = [["error",[]]];

export async function POST(request: Request) {
	let req = await request.json();
  let result = getTopicLinks(req.topic);
	if(result === ERROR_VALUE)
		return Response.json(null, {status:404});
	else if (req.subTopic) {
		for(let topicLink of result)
			if (topicLink[0] === req.subTopic)
				return Response.json(result);
		return Response.json(null, {status:404});
	}
	else return Response.json(result);
}

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

const algebraLinks: Array<[string,string[]]> = [
	["fractions", ["[a/b] + [c/b] gives [(a+c)/b]%adding_fractions","multiplying [a/b] by [c/d] gives [ac/bd]%multiplying_fractions"]],
	["exponents", [
		"(a<sup>m</sup>)<sup>n</sup> is equal to a<sup>m*n</sup> (where n is an integer)%raising_exponents",
		"<sup>m</sup>√(ab) is equal to (<sup>m</sup>√a) * (<sup>m</sup>√b)%square_root_multiply",
		"<sup>n</sup>√(a<sup>q</sup>) is equal to (<sup>n</sup>√a)<sup>q</sup>%roots_with_exponents",
		"<sup>m</sup>√a is equal to a<sup>1/m</sup>%roots_as_exponents",
		"x<sup>-n</sup> is equal to 1/(x<sup>n</sup>)%raising_to_negative"
	]],
	["logarithms", ["change_of_base","power","product_and_quotient_rule"]],
	["quadratic_formula", ["quadratic_formula"]]
];

const geometryLinks: Array<[string,string[]]> = [
	["triangle_related_stuff", ["angles_in_a_triangle_add_to_180","area_of_a_triangle","constructing_an_equilateral_triangle","pythagoras_theorem","sides_of_30_90_60"]],
	["quadrilateral_related_stuff", ["area_of_a_parallelogram","area_of_a_trapezium","constructing_a_parallelogram_with_a_given_angle_and_with_an_area_equal_to_a_given_triangle"]],
	["circle_related_stuff", ["thales_theorem"]],
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
		"any integer greater than 6 can be represented as a sum of two relatively prime integers%gcdLemma9",
		"if m|n, then (a<sup>m</sup>-b<sup>m</sup>)|(a<sup>n</sup>-b<sup>n</sup>)%divisibilityLemma1"
	]],
	["prime_numbers", [
		"if ρ is prime and ρ|αβ, then ρ|α or ρ|β%primeLemma1",
		"if n is composite then there is a prime divisor ≤ √n%nCompositeSoPrimeDivisorLessThanRootN",
		"there are infinite number of primes%infinite_primes",
		"all primes are of the form 4k+1 or 4k+3%all_primes_are_of_the_form",
		"there are infinite primes of the form 4k+3%infinite_primes_4k_plus_3",
		"no prime can be expressed as a<sup>4</sup> - b<sup>4</sup>%differenceOfFourthPowers",
		"for any positive integer n, there are at least n consecutive composite integers%nConsecutiveCompositeInteger",
		"if 2<sup>p</sup> - 1 is prime, then p is prime%Mersenne_prime1",
		"if n > 1 and a<sup>n</sup> - 1 is prime, then a=2%Mersenne_prime2",
		"if a<sup>n</sup> + 1 is an odd prime, then a is even and n is a power of 2%a_to_the_n_plus_one_prime",
		"if n<sup>2</sup>+1 is prime, then n<sup>2</sup> = 4k%n_square_prime",
		"Legendre's formula%legendres_formula",
		"lower bound for Legendre's formula%legendres_formula_lower_bound",
	]],
	["more_gcd", [
		"if gcd(α, ε) = 1 and gcd(β, ε) = 1, then gcd(αβ, ε) = 1%gcdLemma18",
		"δ = gcd(α, β) ⇒ gcd(α/δ, β/δ) = 1%gcdLemma8",
		"gcd(α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub>, ..., α<sub>n</sub>) ⇒ gcd(gcd(α<sub>1</sub>, α<sub>2</sub>), α<sub>3</sub>, ..., α<sub>n</sub>)%gcdLemma7",
		"if gcd(x, y) divides (x + y), then there are infinite values of x and y%gcdDividesPlus",
		"m * gcd(α, β) = gcd(mα, mβ)%gcdLemma15",
		"if gcd(α, β) = 1, then gcd(α+β, α-β) is either 1 or 2%gcdLemma16",
		"gcd(α, β) * lcm(α, β) = αβ%gcdTimesLcmGivesProduct",
		"if gcd(α, β) = δ and  gcd(α, ε) = δ, then  gcd(α, β, ε) = δ%gcdLemma17",
		"if gcd(α, β) = 1 then gcd(α<sup>m</sup>, β<sup>n</sup>) = 1%gcdLemma12",
		"if gcd(α, β) = 1 then gcd(α + β, αβ) = 1%gcdLemma11"
	]],
	["modular_arithmetic", [
		"(α ≡ β mod Μ and ε ≡ δ mod Μ) ⇒ α + ε ≡ β + δ mod Μ%modLemma1",
		"(α ≡ β mod Μ and ε ≡ δ mod Μ) ⇒ αε ≡ βδ mod Μ%modLemma2",
		"(αε ≡ βε mod Μ and gcd(ε, Μ) = 1) ⇒ α ≡ β mod Μ%modLemma3",
		"ax ≡ b mod m has a solution if and only if gcd(a, m)|b%congruence_solution_possible",
		"Euler's Theorem%eulers_theorem",
		"Fermat's Little Theorem%fermats_little_theorem",
		"Freshman's Dream%freshmans_dream",
		"existence and uniqueness of modular inverse if gcd(a, m) = 1%modular_inverse",
		"Wilson's Theorem%wilsons_theorem",
		"x<sup>2</sup> ≡ 1 mod p ⇒ x ≡ +1 or -1 mod p%x_square_solution",
		"x<sup>2</sup> ≡ -1 mod p is solvable if and only if p = 2 or p ≡ 1 mod 4%x_square_solvable",
		"solution of ax ≡ b mod m (if gcd(a, m)|b)%congruence_solution",
		"Chinese remainder theorem%chinese_remainder_theorem"
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
	["basic_identity", ["sine_rule","cosine_rule","tan(x) = sin(x)/cos(x)%tan","sin<sup>2</sup>(x) + cos<sup>2</sup>(x) = 1%pt","sin(x + 90) = cos(x)%90_2","sin(x) = -sin(-x) and cos(x) = cos(-x)%basic_identity","sin(90 - x) = cos(x) and cos(90 - x) = sin(x)%90"]],
	["advanced",[
		"addition and subtraction formulas for cos(x)%addsubcos",
		"addition and subtraction formulas for sin(x)%addsubsin",
		"addition and subtraction formulas for tan(x)%addsubtan",
		"double angle and half angle formulas for sin(x) and cos(x)%double",
		"the product formula for sin(x) and cos(x)%product"
	]],
	["hyperbolic_functions",[
		"how_cosh_and_sinh_form_the_right_half_of_a_hyperbola"
	]]
]

const calculusLinks: Array<[string,string[]]> = [
	["limits", ["the sum law%sum","the product law%product","limit<sub>x→a</sub>f(g(x)) = f(limit<sub>x→a</sub>g(x))%inner","the root law and the power law%root","limi<sub>tx→0</sub> [sin(x)/x] = 1%limit_sin","limit<sub>x→0</sub> [(cos(x)-1)/x] = 0%limit_cos",
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
	["using_eulers_number", ["definition of e%define_e","[d/dx]b<sup>x</sup> = b<sup>x</sup>ln(b)%bx","[d/dx]log<sub>b</sub>x = 1/(x * ln(b))%log","the power rule (when exponent is any real number)%power_rule_when_exponent_is_real","only_functions_of_the_form_Ae^x_are_derivatives_of_themselves%functions_which_are_derivatives_of_themselves","representing e<sup>x</sup> as a limit%e_limit","representing e<sup>x</sup> as an infinite series (proof 1)%e_series","representing e<sup>x</sup> as an infinite series (proof 2)%e_series2","eulers_formula"
	]],
	["trigonometric_derivatives", ["[d/dx]sin(x) = cos(x)%sin","[d/dx]cos(x) = -sin(x)%cos","derivative of sec(x) and cosec(x)%sec","derivative of tan(x) and cotan(x)%tan","derivative of arcsine(x)%arcsin","derivative of arccosine(x)%arccos","derivative of arcsecant(x)%arcsec","derivative of arccosecant(x)%arccosec","derivative of arctangent(x)%arctan","derivative of arccotangent(x)%arccot"
	]],
	["lhospitals_rule", ["indeterminate form of type 0/0%zeroOverZero",]],
	["antiderivative", [
		"antiderivative_of_secant(x)_and_cosecant(x)",
		"antiderivative_of_tangent(x)_and_cotangent(x)",
	]],
	["integral_calculus", ["fundamental theorem of calculus, part 1%part1","fundamental theorem of calculus, part 2%part2","trapezium_rule","integration by parts (incomplete)","using integration to find volume (incomplete)","using integration to find arc length (incomplete)","using integration to find surface area (incomplete)"
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
		"Markov's Inequality%markov",
		"Chebyshev's_inequality%chebyshevs_inequality",
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