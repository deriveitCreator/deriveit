
export type ColorInfoType = {
	headerBgColor: string,
	bgColor: string,
	footerColor: string,
	borderColor: string
}

const colorInfo: {[key:string]: ColorInfoType} = {
	"algebra": {headerBgColor: "#B95C00", bgColor:"rgb(251, 227, 155)", footerColor:"#FBE39B", borderColor:"#663300"},
	"geometry": {headerBgColor: "#00CC00", bgColor:"#CCFF99", footerColor:"#99FF66", borderColor:"green"},
	"discrete_mathematics": {headerBgColor: "#FF9900", bgColor:"#FFEEAA", footerColor:"#FFDB91", borderColor:"#FF6600"},
	"linear_algebra":{ headerBgColor: "#777", bgColor:"#eee", footerColor:"#CCCCCC", borderColor:"#444"},
	"trigonometry":{ headerBgColor: "#3366CC", bgColor:"#99CCFF", footerColor:"#FFFFCC", borderColor:"#000099"},
	"calculus":{ headerBgColor: "teal", bgColor:"#88DFDF", footerColor:"#AACCCC", borderColor:"#005555"},
	"probability_&_statistics":{ headerBgColor: "#990099", bgColor:"#EEAADD", footerColor:"#EE77FF", borderColor:"#550055"},
	"calculus_(advanced)":{ headerBgColor: "teal", bgColor:"#88DFDF", footerColor:"#AACCCC", borderColor:"#005555"},
	"mechanics":{ headerBgColor: "#AA0000", bgColor:"#FFEEAA", footerColor:"#FEF1B5", borderColor:"#600000"},
	"astronomy":{ headerBgColor: "#88AABB", bgColor:"black", footerColor:"#333333", borderColor:"#DD0000"},
	"chemistry":{ headerBgColor: "#CC5599", bgColor:"#FFBBFF", footerColor:"#FFAAFF", borderColor:"#993366"},
	"electricity_&_magnetism":{ headerBgColor: "#777777", bgColor:"#F4F4F4", footerColor:"white", borderColor:"#535353"},
	"biology":{ headerBgColor: "#FF9966", bgColor:"#FFEAA9", footerColor:"#FFEAA9", borderColor:"#FF6655"},
	"computer_science":{ headerBgColor: "#36e", bgColor:"#1f1f1f", footerColor:"#111", borderColor:"#AAA"},
	"error":{ headerBgColor: "#d61", bgColor:"#fc6", footerColor:"#520", borderColor:"#520"}
}

export function getTopicColorInfo(value: string): ColorInfoType{
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
	"calculus_(advanced)",
	"mechanics",
	"astronomy",
	"chemistry",
	"electricity_&_magnetism",
	"biology",
	"computer_science"
]

export function getRecentlyAdded(): string[]{
	return [
		"components_of_the_acceleration_vector%mechanics/classical_mechanics/components_of_the_acceleration_vector",
		"anticommutative_property_of_the_cross_product%linear_algebra/cross_product/anticommutative_property_of_the_cross_product",
		"the fundamental theorem of arithmetic%discrete_mathematics/prime_numbers/fundamental_theorem_of_arithmetic",
		"deriving the polar form equation of an ellipse%geometry/ellipses/the_polar_equation",
	]
}

export function getRecentlyEdited(): string[]{
	return [
		"equations_of_linear_motion_with_constant_acceleration%mechanics/classical_mechanics/equations_of_linear_motion_with_constant_acceleration",
		"projection_of_a_vector_onto_another%linear_algebra/dot_product/projection_of_a_vector_onto_another",
		"the inverse function theorem%calculus/differential_calculus/the_inverse_function_theorem",
		"proof That [d/dx]sin(x) = cos(x)%calculus/trigonometric_derivatives/sin",
	]
}

export const TOPIC_LINKS_ERROR: Array<[string,string[]]> = [["error",[]]];

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
		case "calculus_(advanced)":
			result = calculusAdvancedLinks;
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
			result = TOPIC_LINKS_ERROR;
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
	["triangles", [
		"angles_in_a_triangle_add_to_180",
		"area_of_a_triangle",
		"constructing_an_equilateral_triangle",
		"pythagoras_theorem",
		"sides_of_30_90_60"
	]],
	["quadrilaterals", [
		"area_of_a_parallelogram",
		"area_of_a_trapezium",
		"constructing_a_parallelogram_with_a_given_angle_and_with_an_area_equal_to_a_given_triangle"
	]],
	["circles", [
		"the_perpendicular_bisector_of_a_chord_is_the_diametre",
		"Thales's_theorem",
		"inscribed_angle_theorem",
		"every_triangle_can_be_circumscribed_by_a_circle"
	]],
	["ellipses", [
		"getting_the_standard_form_equation_from_the_geometric_definition",
		"the_equivalence_of_the_geometric_definition_and_the_conic_section_definition_of_an_ellipse",
		"the_stretched_cicle_definition",
		"the_focus-directrix_definition",
		"the_polar_equation",
		"the_reflective_property_of_an_ellipse"
	]],
	["parabola", [
		"the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola",
		"getting_the_vertex_form_equation_from_the_focus-directrix_definition",
		"getting_the_standard_form_equation_from_the_vertex_form",
		"axis_of_symmetry_of_a_parabola",
		"getting_the_focus,_directrix_and_vertex%getting_the_focus_directrix_and_vertex",
		"the_reflective_property_of_a_parabola",
		"using x<sup>2</sup> as a product calculator%parabola_as_product_calculator"
	]],
	["hyperbola",[
		"getting_the_standard_form_equation_from_the_geometric_definition",
		"deriving_the_asymptote_of_a_hyperbola",
		"equation_of_the_directrix",
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
		"α<sub>1</sub>|b, α<sub>2</sub>|b and gcd(α<sub>1</sub>, α<sub>2</sub>) = 1 ⇒ α<sub>1</sub>α<sub>2</sub>|b%gcdLemma14",
		"ε|αβ and gcd(ε, α) = 1, ⇒ ε|β%gcdLemma13",
		"if α is odd, then gcd(α, α-2) = 1%gcdLemma10",
		"m|n ⇒ (a<sup>m</sup>-b<sup>m</sup>)|(a<sup>n</sup>-b<sup>n</sup>)%divisibility3",
		"[(m, n) = 1 ∧ d|mn] ⇒ ∃d<sub>1</sub>, d<sub>2</sub> ∈ Z<sup>+</sup> such that d<sub>1</sub>d<sub>2</sub> = d, d<sub>1</sub>|m, d<sub>2</sub>|n and (d<sub>1</sub>, d<sub>2</sub>) = 1%divisibility4",
	]],
	["prime_numbers", [
		"if p is prime and p|αβ, then p|α or p|β%primeLemma1",
		"if p is prime and p∤α, then gcd(p, α) = 1%primeLemma3",
		"if n is composite then there is a prime divisor ≤ √n%nCompositeSoPrimeDivisorLessThanRootN",
		"fundamental_theorem_of_arithmetic",
		"there are infinite number of primes%infinite_primes",
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
		"(α, ε) = 1 ∧ (β, ε) = 1 ⇒ (αβ, ε) = 1%gcdLemma18",
		"(α, β) = 1 ⇒ (αβ, ε) = (α, ε) * (β, ε)%multiplicative",
		"(α, β) = δ ⇒ (α/δ, β/δ) = 1%gcdLemma8",
		"gcd(α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub>, ..., α<sub>n</sub>) ⇒ gcd(gcd(α<sub>1</sub>, α<sub>2</sub>), α<sub>3</sub>, ..., α<sub>n</sub>)%gcdLemma7",
		"if (x, y) divides (x + y), then there are infinite values of x and y%gcdDividesPlus",
		"m * (α, β) = (mα, mβ)%gcdLemma15",
		"gcd(α, β) = δ ∧ gcd(α, ε) = δ ⇒ gcd(α, β, ε) = δ%gcdLemma17",
		"(α, β) = 1 ⇒ (α+β, α-β) is either 1 or 2%gcdLemma16",
		"(α, β) = 1 ⇒ (α<sup>m</sup>, β<sup>n</sup>) = 1%gcdLemma12",
		"(α, β) = 1 ⇒ (α + β, αβ) = 1%gcdLemma11",
		"(α, β) = 1 ⇒ (α, kα + β) = 1 where k is any integer%gcdLemma1"
	]],
	["lcm", [
		"gcd(α, β) * lcm(α, β) = αβ%gcdTimesLcmGivesProduct",
		"[ca, cb] = c[a, b]%lcmLemma2",
		"[a, b, c] = [[a, b], c]%lcmLemma3",
	]],
	["modular_arithmetic", [
		"(α ≡ β mod M) ∧ (ε ≡ δ mod M) ⇒ (α + ε ≡ β + δ mod M)%modLemma1",
		"(α ≡ β mod M) ∧ (ε ≡ δ mod M) ⇒ (αε ≡ βδ mod M)%modLemma2",
		"(α ≡ β mod M) ∧ (ε ≡ δ mod M) ∧ ε|α ∧ δ|β ⇒ (α/ε ≡ β/δ mod M)%modLemma8",
		"(α ≡ β mod M) ∧ (n|M) ⇒ (α ≡ β mod n)%modLemma3",
		"if c is an odd integer, then (c<sup>2</sup> ≡ 1 mod 4) and (c<sup>2</sup> ≡ 1 mod 8)%modLemma9",
		"(c ∈ Z) ∧ (α ≡ β mod M) ⇒ (cα ≡ cβ mod cM)%modLemma5",
		"d|α ∧ d|β ∧ d|M ∧ α ≡ β mod M ⇒ (α/d ≡ β/d mod M/d)%modLemma6",
		"(εα ≡ εβ mod M) ⟺ (α ≡ β mod M/(ε, M))%modLemma4",
		"(α ≡ β mod M) ⇒ (β, M) = (α, M)%modLemma7",
		"if n is a positve integer and (n ≡ 3 mod 4), then n cannot be written as a sum of two square integers%modLemma10",
		"if (α ≡ β mod M), (α ≡ β mod N) and gcd(M, N) = 1, then (α ≡ β mod MN)%modLemma11",
		"if n is odd and (3 ∤ n), then (n<sup>2</sup> ≡ 1 mod 24)%modLemma12",
		"if (α, m) = 1 and if {r<sub>1</sub>, ..., r<sub>φ(m)</sub>} is a reduced residue system (modulo m), then {αr<sub>1</sub>, ..., αr<sub>φ(m)</sub>} is also a reduced residue system%multiplying_reduced_residue_system",
		"Euler's theorem",
		"Fermat's little theorem",
		"Freshman's dream",
		"ax ≡ b mod m has a solution if and only if gcd(a, m)|b%congruence_solution_possible",
		"solution of ax ≡ b mod m (if gcd(a, m)|b)%congruence_solution",
		"existence and uniqueness of modular inverse if gcd(a, m) = 1%modular_inverse",
		"If p is prime ∧ (a<sup>2</sup> ≡ b<sup>2</sup> mod p) ⇒ a ≡ ±b mod p%x_square_solution",
		"If p is prime ∧ (a<sup>2</sup> ≡ a mod p) ⇒ (a ≡ 0) or (a ≡ 1)%a_square_congruent_a_mod_p",
		"If p is prime ∧ (a<sup>p</sup> ≡ b<sup>p</sup> mod p) ∧ (p ∤ a) ∧ (p ∤ b) ⇒ a<sup>p</sup> ≡ b<sup>p</sup> mod p<sup>2</sup>%square_mod_prime",
		"If (α, n) = 1 then {β, α+β, 2α+β, ..., (n-1)α+β} forms a complete system of residues modulo n%modLemma13",
	]],
	["divisibility_rules",[
		"an integer is divisble by 3 if the sum of its digits is divisible by 3%divisibility_rule_for_3",
		"an integer is divisble by 7 if the alternating sum of blocks of three from is divisible by 7%divisibility_rule_for_7",
		"an integer is divisible by 11 if the integer obtained by alternately adding and substracting the digits is divisible by 11%divisibility_rule_for_11"
	]],
	["factorials,_permutations_and_combinations", [
		"0! = 1%0fac",
		"the formula of permutations%factorials_and_permutations",
		"the formula of combinations%com",
		"using_combinations_to_find_a_number_in_the_Pascal's_triangle%pascals_triangle",
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
	]],
	["more_congruence",[
		"1 + 2 + 3 + ... + (n-1) ≡ 0 mod n if and only if n is odd%sum_congruence",
		"1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + (n-1)<sup>2</sup> ≡ 0 mod n ⇒ n ≡ ±1 mod 6%square_sum_congruence",
		"1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup> + ... + (n-1)<sup>3</sup> ≡ 0 mod n ⇒ n is not congruent to 2 mod 4%cube_sum_congruence",
		"Wilson's theorem",
		"converse of Wilson's theorem",
		"Let p be prime, then 2(p-3)! ≡ -1 mod p%two_times_p_minus_3_factorial",
		"solution to x<sup>2</sup> ≡ -1 mod p if p = 2 or p ≡ 1 mod 4%x_square_solvable",
		"if p ≡ 3 mod 4, then ((p-1)/2)! ≡ ±1 mod p%modLemma13",
		"Chinese remainder theorem"
	]],
	["arithmetic_functions",[
		"If f is a multiplicative function, then [F(n) = ∑<sub>d|n, d>0</sub> f(d)] is also a multiplicative function%multiplicative1",
		"The Euler phi function is multiplicative%multiplicative2",
		"The formula for φ(p<sup>a</sup>)%multiplicative3"
	]]
]

const linearAlgebraLinks: Array<[string,string[]]> = [
	["basics", ["two lines are perpendicular if the gradient of one line is the negative reciprocal of the other%product_of_perpendicular"]],
	["dot_product", [
		"commutative_property_of_the_dot_product",
		"distributive_property_of_the_dot_product",
		"associative_property_of_the_dot_product",
		"the_dot_product_of_a_vector_with_itself_gives_the_square_of_it's_magnitude%dot_product_with_itself",
		"equivalence of the component-wise definition and the geometric definition of the dot product%geometric_definition",
		"projection_of_a_vector_onto_another",
	]],
	["cross_product",[
		"cross_product_definition",
		"anticommutative_property_of_the_cross_product",
		"distributive_property_of_the_cross_product",
		"scalar_triple_product_is unchanged under a circular shift of its three operands",
		"||a x b|| = ||a|| ||b|| sin(θ)%sin_rule",
		"area_of_a_parallelogram",
		"volume_of_a_parallelepiped",
	]]
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
		"mean_value_theorem",
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
		"reduction formula for tan(x)%reduction_formula_for_tan",
		"reduction formula for sec(x)%reduction_formula_for_sec",
	]],
	["hyperbolic_functions", [
		"[d/dx] sinh(x) = cosh(x)%derivative_of_sinh(x)",
		"[d/dx] cosh(x) = sinh(x)%derivative_of_cosh(x)",
		"[d/dx] tanh(x) = sech<sup>2</sup>(x)%derivative_of_tanh(x)",
		"[d/dx] coth(x) = -csch<sup>2</sup>(x)%derivative_of_coth(x)",
		"[d/dx] sech(x) = -sech(x)tanh(x)%derivative_of_sech(x)",
		"[d/dx] csch(x) = -csch(x)coth(x)%derivative_of_csch(x)",
		"derivative_of_arsinh(x)",
		"derivative_of_arcosh(x)",
		"derivative_of_artanh(x)",
		"derivative_of_arcoth(x)",
		"derivative_of_arsech(x)",
		"derivative_of_arcsch(x)",
		"antiderivative_of_tanh(x)_and_coth(x)",
		"antiderivative_of_sech(x)_and_csch(x)",
		"antiderivative_of_arsinh(x)_and_arcosh(x)",
		"antiderivative_of_artanh(x)_and_arcoth(x)",
		"antiderivative_of_arsech(x)_and_arcsch(x)",
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
	["differential_equations", [
		"solution_to_the_logistic_differential_equation",
		"inflection_point_of_the_solution_to_the_logistic_differential_equation",
		"solution_to_a_first-order_linear_equation"
	]],
	["sequences_and_series", [
		"monotone_convergence_theorem",
		"divergence_test",
		"integral_test",
		"convergence_and_divergence_of_p-series",
		"remainder_estimate_for_the_integral_test",
		"the_comparison_test",
		"the_limit_comparison_test",
		"alternating_series_test",
		"alternating_series_estimation_theorem",
		"absolute_convergence_implies_convergence",
		"ratio_test",
		"root_test"
	]],
	["power_series",[
		"convergence_of_a_power_series",
		"uniqueness_of_a_power_series",
		"derivative_of_a_power_series_has_the_same_radius_of_convergence",
		"understanding_the_Taylor_series",
		"Lagrange's_form_of_the_remainder",
		"Taylor's_inequality",
		"the_binomial_series_is_equal_to_it's_Maclaurin_series", /* incomplete */
		"sin(x)_and_cos(x)_are_equal_to_their_Maclaurin_series",
	]],
	["parametric_curves",[
		"derivative_of_a_parametric_equations",
		"second_derivative_of_a_parametric_equations",
		"area_under_a_parametric_curve",
		"arc_length_of_a_parametric_curve",
		"surface_area_generated_by_a_parametric_curve",
		"areas_of_regions_bounded_by_polar_curves",
		"arc_length_of_a_curve_defined_by_a_polar_function"
	]]

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

const calculusAdvancedLinks: Array<[string,string[]]> = [
	["vector-valued_functions", [
		"differentiating_a_vector-valued_function_by_derivating_of_each_of_the_components",
		"(vector-valued_function_derivatives)_sum_and_difference_property",
		"(vector-valued_function_derivatives)_scalar_product_property",
		"(vector-valued_function_derivatives)_dot_product_property",
		"(vector-valued_function_derivatives)_cross_product_property",
		"(vector-valued_function_derivatives)_chain_product_property",
		"r(t) ⋅ r(t) = constant ⇒ r(t) ⋅ r'(t) = 0%self_dot_product_constant_means_dot_product_with_derivative_is_zero",
		"arc_length_function_and_it's_derivative",
		"curvature_formulas",
		"radius_of_curvature",
	]]
]

const mechanicsLink: Array<[string,string[]]> = [
	["classical_mechanics", [
		"equations_of_linear_motion_with_constant_acceleration",
		"components_of_the_acceleration_vector"
	]],
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
	["history", [
		"history_of_atomic_theory", /* incomplete */
		"early_metallurgy", /*incomplete */
		"acid, alakli and litmus%litmus", /* incomplete */
		"phlogiston_theory",
		"discovery of carbon dioxide%discovery_of_co2", /*incomplete */
		"discovery_of_hydrogen", /*incomplete */
		"discovery_of_oxygen",
	]]
]

const electricityAndMagnetismLinks: Array<[string,string[]]> = [
	["history", ["history_of_electricity"]]
]

const biologyLinks: Array<[string,string[]]> = [
	["history",["cell_theory","fermentation","immunity",]]
]