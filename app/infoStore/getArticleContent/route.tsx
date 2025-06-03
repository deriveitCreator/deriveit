
export async function POST(request: Request) {
	try{
		let res = await request.json();
		//console.log("From route: ",res.topic, res.subTopic,res.article);
		let fileImp = await import(`../contents/${res.topic}/${res.subTopic}/${res.article}`);
		return Response.json([fileImp.title,fileImp.default]);
	}
	catch{
		return Response.error();
	}
}