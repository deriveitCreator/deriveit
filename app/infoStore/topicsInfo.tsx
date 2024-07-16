
export const allTopics = [
	{name:"Algebra", headerBgColor: "#B95C00", bgColor:"rgb(251, 227, 155)", footerColor:"#FBE39B", borderColor:"#663300"},
	{name:"Geometry", headerBgColor: "#00CC00", bgColor:"#CCFF99", footerColor:"#99FF66", borderColor:"green"},
	{name:"Discrete Mathematics",headerBgColor: "#FF9900", bgColor:"#FFEEAA", footerColor:"#FFDB91", borderColor:"#FF6600",text:"Discrete Mathematics"},
	{name:"Linear Algebra",headerBgColor: "#777", bgColor:"#eee", footerColor:"#CCCCCC", borderColor:"#444"},
	{name:"Trigonometry",headerBgColor: "#3366CC", bgColor:"#99CCFF", footerColor:"#FFFFCC", borderColor:"#000099"},
	{name:"Calculus",headerBgColor: "teal", bgColor:"#88DFDF", footerColor:"#AACCCC", borderColor:"#005555"},
	{name:"Probability & Statistics",headerBgColor: "#990099", bgColor:"#EEAADD", footerColor:"#EE77FF", borderColor:"#550055"},
	{name:"Mechanics",headerBgColor: "#AA0000", bgColor:"#FFEEAA", footerColor:"#FEF1B5", borderColor:"#600000"},
	{name:"Astronomy",headerBgColor: "#88AABB", bgColor:"black", footerColor:"#333333", borderColor:"#DD0000"},
	{name:"Chemistry",headerBgColor: "#CC5599", bgColor:"#FFBBFF", footerColor:"#FFAAFF", borderColor:"#993366"},
	{name:"Electricity & Magnetism",headerBgColor: "#777777", bgColor:"#F4F4F4", footerColor:"white", borderColor:"#535353"},
	{name:"Biology",headerBgColor: "#FF9966", bgColor:"#FFEAA9", footerColor:"#FFEAA9", borderColor:"#FF6655"},
	{name:"Computer Science",headerBgColor: "#36e", bgColor:"#1f1f1f", footerColor:"#111", borderColor:"#AAA"},
	{name:"Error",headerBgColor: "#d61", bgColor:"#fc6", footerColor:"#520", borderColor:"#520"}
]

export const topicsAndLinks = [
	{name:"Algebra", link: "algebra"},
	{name:"Geometry", link:"geometry"},
	{name:"Discrete Mathematics", link:"discrete_mathematics"},
	{name:"Linear Algebra", link: "linear_algebra"},
	{name:"Trigonometry", link:"trigonometry"},
	{name:"Calculus", link: "calculus"},
	{name:"Probability & Statistics", link:"probability_&_statistics"},
	{name:"Mechanics", link:"mechanics"},
	{name:"Astronomy", link:"astronomy"},
	{name:"Chemistry", link:"chemistry"},
	{name:"Electricity & Magnetism", link:"electricity_&_magnetism"},
	{name:"Biology", link:"biology"},
	{name:"Computer Science", link:"computer_science"},
	{name:"Error",link:"error"}
]

const colorInfo = {
	"algebra": {headerBgColor: "#B95C00", bgColor:"rgb(251, 227, 155)", footerColor:"#FBE39B", borderColor:"#663300"},
	"geometry": {headerBgColor: "#00CC00", bgColor:"#CCFF99", footerColor:"#99FF66", borderColor:"green"},
	"discrete_mathematics": {headerBgColor: "#FF9900", bgColor:"#FFEEAA", footerColor:"#FFDB91", borderColor:"#FF6600",text:"Discrete Mathematics"},
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

export function getTopicColorInfo(value: string){
	//@ts-ignore
	return colorInfo[value];
}

export function getRecentlyAdded(): string[]{
	return [
		"if (n^2)+1 is prime, then n^2 = 4k%discrete_mathematics/prime_numbers/n_square_prime",
		"if (a^n) + 1 is an odd prime, then a is even and n is a power of 2%discrete_mathematics/prime_numbers/a_to_the_n_plus_one_prime",
		"if n > 1 and (a^n) - 1 is prime, then a=2%discrete_mathematics/prime_numbers/Mersenne_prime2",
		"if (2^p) - 1 is prime, then p is prime%discrete_mathematics/prime_numbers/Mersenne_prime1",
	]
}

export function getRecentlyEdited(): string[]{
	return [
		"proof That [d/dx]sin(x) = cos(x)%calculus/trigonometric_derivatives/sin",
		"proof That sin(x)/x approaches 1 as x approaches 0%calculus/limits/limit_sin",
		"if (n^2)+1 is prime, then n^2 = 4k%discrete_mathematics/prime_numbers/n_square_prime",
		"if n > 1 and (a^n) - 1 is prime, then a=2%discrete_mathematics/prime_numbers/Mersenne_prime2",
	]
}