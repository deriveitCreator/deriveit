
export const allTopics = [
    {name:"Algebra", bgColor:"#fbe39b", textColor:"#663300"},
    {name:"Geometry", bgColor:"#CCFF99", textColor:"green"},
    {name:"Discrete Mathematics", bgColor:"#FFEEAA", textColor:"#FF6600"},
    {name:"Linear Algebra", bgColor:"#777", textColor:"#CCCCCC"},
    {name:"Trigonometry", bgColor:"#99CCFF", textColor:"#000099"},
    {name:"Calculus", bgColor:"#88DFDF", textColor:"#005555"},
    {name:"Probability & Statistics", bgColor:"#EEAADD", textColor:"#550055"},
    {name:"Mechanics", bgColor:"#FFEEAA", textColor:"#600000"},
    {name:"Astronomy", bgColor:"#666666", textColor:"#88AABB"},
    {name:"Chemistry", bgColor:"#FFBBFF", textColor:"#993366"},
    {name:"Electricity & Magnetism", bgColor:"#F4F4F4", textColor:"#535353"},
    {name:"Biology", bgColor:"#FFDD99", textColor:"#FF6655"},
    {name:"Computer Science", bgColor:"#1f1f1f", textColor:"#CCC"},
    {name:"Coming Soon", bgColor:"#eee", textColor:"black"}
]

export function getTopicLinks(name: string): (string | string[])[][]{
    
    switch(name){
        case "Algebra":
            return algebraLinks;
        case "Geometry":
            return geometryLinks;
        default:
            return [["error",[""]]];
    }
}

const algebraLinks = [
    ["fractions", ["[a/b] + [c/b] gives [(a+c)/b]%adding_fractions%","multiplying [a/b] by [c/d] gives [ac/bd]%multiplying_fractions%"]],
    ["exponents", [
        "(a<sup>m</sup>)<sup>n</sup> is equal to a<sup>m*n</sup> (where n is an integer)%raising_exponents%",
        "<sup>m</sup>√(ab) is equal to (<sup>m</sup>√a) * (<sup>m</sup>√b)%multiplying_roots%",
        "<sup>n</sup>√(aq) is equal to (<sup>n</sup>√a)q","m√a is equal to a<sup>1/m</sup>%multiplying_roots%",
        "x<sup>-n</sup> is equal to 1/(x<sup>n</sup>)%raising_to_negative%"
    ]],
    ["logarithms", ["change_of_base","power","product and quotient rule"]],
    ["quadratic formula", ["quadratic formula"]]
];

const geometryLinks = [
    ["Circle Related Stuff", ["thales_theorem"]],
    ["Triangle Related Stuff", ["angles_in_a_triangle_add_to_180","area_of_a_triangle","constructing_an_equilateral_triangle","pythagoras_theorem","sides_of_30_90_60"]],
    ["Quadrilateral Related Stuff", ["area_of_a_parallelogram","area_of_a_trapezium"]],
    ["More Quadrilateral Related Stuff", ["constructing_a_parallelogram_with_a_given_angle_and_with_an_area_equal_to_a_given_triangle"]],
    ["Conic Sections", [
        "axis_of_symmetry_of_a_parabola",
        "getting_the_focus_directrix_and_vertex",
        "getting_the_standard_form_equation_of_a_parabola_from_the_focus_and_directrix_definition",
        "the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola",
        "the_reflective_property_of_a_parabola",
        "vertex_equation_of_a_parabola"
    ]]
];
