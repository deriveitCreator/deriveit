
export const allTopics = [
    {name:"Algebra", headerBgColor: "#B95C00", bgColor:"rgb(251, 227, 155)", textColor:"#FBE39B", borderColor:"#663300",text:"Algebraic Equations"},
    {name:"Geometry", headerBgColor: "#00CC00", bgColor:"#CCFF99", textColor:"#99FF66", borderColor:"green",text:"Geometry"},
    {name:"Discrete Mathematics",headerBgColor: "#FF9900", bgColor:"#FFEEAA", textColor:"#FFDB91", borderColor:"#FF6600",text:"Discrete Mathematics"},
    {name:"Linear Algebra",headerBgColor: "#777", bgColor:"#eee", textColor:"#CCCCCC", borderColor:"#444",text:"Linear Algebra"},
    {name:"Trigonometry",headerBgColor: "#3366CC", bgColor:"#99CCFF", textColor:"#FFFFCC", borderColor:"#000099",text:"Trigonometry"},
    {name:"Calculus",headerBgColor: "teal", bgColor:"#88DFDF", textColor:"#AACCCC", borderColor:"#005555",text:"Calculus"},
    {name:"Probability & Statistics",headerBgColor: "#990099", bgColor:"#EEAADD", textColor:"#EE77FF", borderColor:"#550055",text:"Probability And Statistics"},
    {name:"Mechanics",headerBgColor: "#AA0000", bgColor:"#FFEEAA", textColor:"#FEF1B5", borderColor:"#600000",text:"Mechanical Equations"},
    {name:"Astronomy",headerBgColor: "#88AABB", bgColor:"black", textColor:"#333333", borderColor:"#DD0000",text:"Astronomy"},
    {name:"Chemistry",headerBgColor: "#CC5599", bgColor:"#FFBBFF", textColor:"#FFAAFF", borderColor:"#993366",text:"Chemistry"},
    {name:"Electricity & Magnetism",headerBgColor: "#777777", bgColor:"#F4F4F4", textColor:"white", borderColor:"#535353",text:"Electricity And Magnetism"},
    {name:"Biology",headerBgColor: "#FF9966", bgColor:"#FFEAA9", textColor:"#FFEAA9", borderColor:"#FF6655",text:"Biology"},
    {name:"Computer Science",headerBgColor: "#111", bgColor:"#1f1f1f", textColor:"rgb(39, 94, 177)", borderColor:"#CCC",text:"Computer Science"},
    {name:"Uncategorized",headerBgColor: "#111", bgColor:"#FFEAA9", textColor:"#FFEAA9", borderColor:"#FF6655",text:"uc"}
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
        "The_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola%geometry/Conic_Sections/the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola",
        "Getting_the_standard_form_equation_of_a_parabola_from_the_focus_and_directrix_definition%geometry/Conic_Sections/getting_the_standard_form_equation_of_a_parabola_from_the_focus_and_directrix_definition",
        "Using_combinations_to_find_a_number_in_the_Pascal's_triangle%discrete_mathematics/factorials_permutations_and_combinations/using_combinations_to_find_a_number_in_the_Pascal's_triangle",
        "Constructing_a_parallelogram_with_a_given_angle_and_with_an_area_equal_to_a_given_triangle%geometry/More_Quadrilateral_Related_Stuff/constructing_a_parallelogram_with_a_given_angle_and_with_an_area_equal_to_a_given_triangle"
    ]
}

export function getRecentlyEdited(): string[]{
    return [
        "The_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola%geometry/Conic_Sections/the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola",
        "Deriving the regression coefficient of y on x%probability_&_statistics/miscellaneous/line_of_best_fit",
        "Thales_theorem%geometry/Circle_Related_Stuff/thales_theorem",
        "Getting_the_standard_form_equation_of_a_parabola_from_the_focus_and_directrix_definition%geometry/Conic_Sections/getting_the_standard_form_equation_of_a_parabola_from_the_focus_and_directrix_definition"
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
        "if gcd(α, ε) = 1 and gcd(β, ε) = 1, then gcd(αβ, ε) = 1%multiplicative",
        "if ε|αβ and gcd(ε, α) = 1, then ε|β%other",
        "gcd(α, β) = gcd(β, α mod β); why the euclidean algorithm works%why_the_euclidean_algorithm_works",
        "if ρ is prime and ρ|αβ, then ρ|α or ρ|β%gcdLemma7",
        "δ = gcd(α, β) ⇒ 1 = gcd(α/δ, β/δ)%gcdLemma8"
    ]],
    ["modular_arithmetic", [
        "(α ≡ β mod Μ and ε ≡ δ mod Μ) ⇒ α + ε ≡ β + δ mod Μ%modLemma1",
        "(α ≡ β mod Μ and ε ≡ δ mod Μ) ⇒ αε ≡ βδ mod Μ%modLemma2",
        "(αε ≡ βε mod Μ and gcd(ε, Μ) = 1) ⇒ α ≡ β mod Μ%modLemma3"
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