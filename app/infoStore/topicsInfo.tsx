
export const allTopics = [
    {name:"Algebra", headerBgColor: "#B95C00", bgColor:"rgb(251, 227, 155)", footerColor:"#FBE39B", borderColor:"#663300",text:"Algebraic Equations"},
    {name:"Geometry", headerBgColor: "#00CC00", bgColor:"#CCFF99", footerColor:"#99FF66", borderColor:"green",text:"Geometry"},
    {name:"Discrete Mathematics",headerBgColor: "#FF9900", bgColor:"#FFEEAA", footerColor:"#FFDB91", borderColor:"#FF6600",text:"Discrete Mathematics"},
    {name:"Linear Algebra",headerBgColor: "#777", bgColor:"#eee", footerColor:"#CCCCCC", borderColor:"#444",text:"Linear Algebra"},
    {name:"Trigonometry",headerBgColor: "#3366CC", bgColor:"#99CCFF", footerColor:"#FFFFCC", borderColor:"#000099",text:"Trigonometry"},
    {name:"Calculus",headerBgColor: "teal", bgColor:"#88DFDF", footerColor:"#AACCCC", borderColor:"#005555",text:"Calculus"},
    {name:"Probability & Statistics",headerBgColor: "#990099", bgColor:"#EEAADD", footerColor:"#EE77FF", borderColor:"#550055",text:"Probability And Statistics"},
    {name:"Mechanics",headerBgColor: "#AA0000", bgColor:"#FFEEAA", footerColor:"#FEF1B5", borderColor:"#600000",text:"Mechanical Equations"},
    {name:"Astronomy",headerBgColor: "#88AABB", bgColor:"black", footerColor:"#333333", borderColor:"#DD0000",text:"Astronomy"},
    {name:"Chemistry",headerBgColor: "#CC5599", bgColor:"#FFBBFF", footerColor:"#FFAAFF", borderColor:"#993366",text:"Chemistry"},
    {name:"Electricity & Magnetism",headerBgColor: "#777777", bgColor:"#F4F4F4", footerColor:"white", borderColor:"#535353",text:"Electricity And Magnetism"},
    {name:"Biology",headerBgColor: "#FF9966", bgColor:"#FFEAA9", footerColor:"#FFEAA9", borderColor:"#FF6655",text:"Biology"},
    {name:"Computer Science",headerBgColor: "#36e", bgColor:"#1f1f1f", footerColor:"#111", borderColor:"#AAA",text:"Computer Science"},
    {name:"Uncategorized",headerBgColor: "#ffd966", bgColor:"#c51", footerColor:"black", borderColor:"#630",text:"404 (Invalid URL)"}
]

export function getTopicLinks(name: string): Array<[string,string[]]>{
    switch(name){
        case "algebra":
            return algebraLinks;
        case "geometry":
            return geometryLinks;
        case "discrete_mathematics":
            return discreteMathematicsLinks;
        case "linear_algebra":
            return linearAlgebraLinks;
        case "trigonometry":
            return trigonometryLinks;
        case "calculus":
            return calculusLinks;
        case "probability_&_statistics":
            return probabilityAndStatisticsLinks;
        case "mechanics":
            return mechanicsLink;
        case "astronomy":
            return astronomyLink;
        case "chemistry":
            return chemistryLink;
        case "electricity_&_magnetism":
            return electricityAndMagnetismLinks;
        case "biology":
            return biologyLinks;
        default:
            return [["error",[]]];
    }
}

export function getRecentlyAdded(): string[]{
    return [
        "ax ≡ b mod m has a solution if and only if (a, m)|b%discrete_mathematics/modular_arithmetic/congruence_solution",
        "there are infinite primes of the form 4k + 1%discrete_mathematics/divisibility_and_gcd/infinite_primes_4k_plus_1",
        "x^2 ≡ -1 mod p is solvable if and only if p = 2 or p ≡ 1 mod 4%discrete_mathematics/modular_arithmetic/x_square_solvable",
        "the solution of x^2 ≡ 1 mod p is x ≡ +1 or -1 mod p%discrete_mathematics/modular_arithmetic/x_square_solution",
    ]
}

export function getRecentlyEdited(): string[]{
    return [
        "Euler's Theorem%discrete_mathematics/modular_arithmetic/eulers_theorem",
        "ax ≡ b mod m has a solution if and only if (a, m)|b%discrete_mathematics/modular_arithmetic/congruence_solution",
        "there are infinite primes of the form 4k + 1%discrete_mathematics/divisibility_and_gcd/infinite_primes_4k_plus_1",
        "x^2 ≡ -1 mod p is solvable if and only if p = 2 or p ≡ 1 mod 4%discrete_mathematics/modular_arithmetic/x_square_solvable",
    ]
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
    ["logarithms", ["change_of_base","power","product and quotient rule"]],
    ["quadratic formula", ["quadratic formula"]]
];

const geometryLinks: Array<[string,string[]]> = [
    ["Quadrilateral Related Stuff", ["area_of_a_parallelogram","area_of_a_trapezium"]],
    ["Triangle Related Stuff", ["angles_in_a_triangle_add_to_180","area_of_a_triangle","constructing_an_equilateral_triangle","pythagoras_theorem","sides_of_30_90_60"]],
    ["Circle Related Stuff", ["thales_theorem"]],
    ["More Quadrilateral Related Stuff",["constructing_a_parallelogram_with_a_given_angle_and_with_an_area_equal_to_a_given_triangle"]],
    ["Conic Sections", [
        "axis_of_symmetry_of_a_parabola",
        "getting_the_focus_directrix_and_vertex",
        "getting_the_standard_form_equation_of_a_parabola_from_the_focus_and_directrix_definition",
        "the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola",
        "the_reflective_property_of_a_parabola",
        "vertex_equation_of_a_parabola"
    ]]
];

const discreteMathematicsLinks: Array<[string,string[]]> = [
    ["divisibility_and_gcd", [
        "if α|β and α|ε, then α|(mβ + nε)%divisibility1",
        "if α|β and ε|δ, then αε|βδ%divisibility2",
        "smallest positive linear combination of α and β = gcd(α, β)%linear_combination_smallest_gcd",
        "every linear combination of α and β is a multiple of gcd(α, β), and vice versa%every_linear_combination",
        "gcd(α, β) = gcd(β, α mod β); why the euclidean algorithm works%why_the_euclidean_algorithm_works",
        "if gcd(α, ε) = 1 and gcd(β, ε) = 1, then gcd(αβ, ε) = 1%multiplicative",
        "if α<sub>1</sub>|b, α<sub>2</sub>|b and gcd(α<sub>1</sub>, α<sub>2</sub>) = 1 ⇒ α<sub>1</sub>α<sub>2</sub>|b%gcdLemma14",
        "δ = gcd(α, β) ⇒ 1 = gcd(α/δ, β/δ)%gcdLemma8",
        "if ε|αβ and gcd(ε, α) = 1, then ε|β%other",
        "if ρ is prime and ρ|αβ, then ρ|α or ρ|β%gcdLemma7",
        "there are infinite number of primes%infinite_primes",
        "Legendre's formula%legendres_formula",
        "lower bound for Legendre's formula%legendres_formula_lower_bound",
        "there are infinite primes of the form 4k + 1%infinite_primes_4k_plus_1",
    ]],
    ["modular_arithmetic", [
        "(α ≡ β mod Μ and ε ≡ δ mod Μ) ⇒ α + ε ≡ β + δ mod Μ%modLemma1",
        "(α ≡ β mod Μ and ε ≡ δ mod Μ) ⇒ αε ≡ βδ mod Μ%modLemma2",
        "(αε ≡ βε mod Μ and gcd(ε, Μ) = 1) ⇒ α ≡ β mod Μ%modLemma3",
        "Euler's Theorem%eulers_theorem",
        "Fermat's Little Theorem%fermats_little_theorem",
        "Freshman's Dream%freshmans_dream",
        "existence and uniqueness of modular inverse if gcd(a, m) = 1%modular_inverse",
        "Wilson's Theorem%wilsons_theorem",
        "x<sup>2</sup> ≡ 1 mod p ⇒ x ≡ +1 or -1 mod p%x_square_solution",
        "x<sup>2</sup> ≡ -1 mod p is solvable if and only if p = 2 or p ≡ 1 mod 4%x_square_solvable",
        "ax ≡ b mod m has a solution if and only if gcd(a, m)|b%congruence_solution",
        "Chinese remainder theorem%chinese_remainder_theorem"
    ]],
    ["factorials,_permutations_and_combinations", [
        "0! = 1%0fac",
        "the formula of permutations%factorials_and_permutations",
        "the formula of combinations%com",
        "using_combinations_to_find_a_number_in_the_Pascal's_triangle",
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
    ]]
]

const calculusLinks: Array<[string,string[]]> = [
    ["limits", ["the sum law%sum","the product law%product","limit<sub>x→a</sub>f(g(x)) = f(limit<sub>x→a</sub>g(x))%inner","the root law and the power law%root","limi<sub>tx→0</sub> [sin(x)/x] = 1%limit_sin","limit<sub>x→0</sub> [(cos(x)-1)/x] = 0%limit_cos",
    ]],
    ["differential_calculus", ["the power rule (when exponent is a postive integer)%power_rule","the product rule%paq","the quotient rule%quo","the_chain_rule"
    ]],
    ["using_euler's_number", ["definition of e%define_e","[d/dx]b<sup>x</sup> = b<sup>x</sup>ln(b)%bx","[d/dx]log<sub>b</sub>x = 1/(x * ln(b))%log","the power rule (when exponent is any real number)%power_rule2","only_functions_of_the_form_Ae^x_are_derivatives_of_themselves%functions_which_are_derivatives_of_themselves","representing e<sup>x</sup> as a limit%e_limit","representing e<sup>x</sup> as an infinite series (proof 1)%e_series","representing e<sup>x</sup> as an infinite series (proof 2)%e_series2","Euler's_formula"
    ]],
    ["trigonometric_derivatives", ["[d/dx]sin(x) = cos(x)%sin","[d/dx]cos(x) = -sin(x)%cos","derivative of sec(x) and cosec(x)%sec","derivative of tan(x) and cotan(x)%tan","derivative of arcsine(x)%arcsin","derivative of arccosine(x)%arccos","derivative of arcsecant(x)%arcsec","derivative of arccosecant(x)%arccosec","derivative of arctangent(x)%arctan","derivative of arccotangent(x)%arccot"
    ]],
    ["l'hospital's_rule", ["indeterminate form of type 0/0%zeroOverZero",]],
    ["antiderivative", [
        "antiderivative of 1/x (incomplete)%ln",
        "antiderivative_of_secant(x)_and_cosecant(x)",
        "antiderivative_of_tangent(x)_and_cotangent(x)",
    ]],
    ["integral_calculus", ["fundamental theorem of calculus, part 1%part1","fundamental theorem of calculus, part 2%part2","trapezium_rule","integration by parts (incomplete)","using integration to find volume (incomplete)","using integration to find arc length (incomplete)","using integration to find surface area (incomplete)"
    ]],
]

const probabilityAndStatisticsLinks: Array<[string,string[]]> = [
    ["expected_value_and_variance", [
        "E[X + Y] = E[X] + E[Y]%linearity_of_expectation",
        "E[cX] = c * E[X] where c is a constant%loe2",
        "E[XY] = E[X] * E[Y] where X and Y are independent variables%exMul",
        "measuring the spread of data: mean absolute deviation and mean squared deviation%spread",
        "Var[X] = E[X^2] - (E[X]^2)%varDef",
        "Var[kX] = k^2 * Var[X]%varCons",
        "Var[X + Y] = Var[X] + Var[Y] where X and Y are independent variables%varAdd",
        "deriving the E[X] and Var[X] for the iid variables%varMean",
        "Markov's Inequality%markov",
        "an equation for the population variance using the sample mean, and the sample size%varsamp"
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
        "the Eqyption calendar%e_calendar",
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
    ["History",["cell_theory","fermentation","immunity",]]
]