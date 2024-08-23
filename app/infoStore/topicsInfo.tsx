
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

export const allTopics = [
	{name:"Algebra", ...colorInfo["algebra"]},
	{name:"Geometry", ...colorInfo["geometry"]},
	{name:"Discrete Mathematics", ...colorInfo["discrete_mathematics"]},
	{name:"Linear Algebra", ...colorInfo["linear_algebra"]},
	{name:"Trigonometry", ...colorInfo["trigonometry"]},
	{name:"Calculus", ...colorInfo["calculus"]},
	{name:"Probability & Statistics", ...colorInfo["probability_&_statistics"]},
	{name:"Mechanics", ...colorInfo["mechanics"]},
	{name:"Astronomy", ...colorInfo["astronomy"]},
	{name:"Chemistry", ...colorInfo["chemistry"]},
	{name:"Electricity & Magnetism", ...colorInfo["electricity_&_magnetism"]},
	{name:"Biology", ...colorInfo["biology"]},
	{name:"Computer Science", ...colorInfo["computer_science"]},
	{name:"Error", ...colorInfo["error"]}
]

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

export const LinksWithTopicName: {[key:string]: string} = {
	"algebra": "Algebra",
	"geometry": "Geometry",
	"discrete_mathematics": "Discrete Mathematics",
	"linear_algebra": "Linear Algebra",
	"trigonometry": "Trigonometry",
	"calculus": "Calculus",
	"probability_&_statistics": "Probability & Statistics",
	"mechanics":"Mechanics",
	"astronomy":"Astronomy",
	"chemistry":"Chemistry",
	"electricity_&_magnetism":"Electricity & Magnetism",
	"biology":"Biology",
	"computer_science":"Computer Science",
	"error":"Error"
}

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