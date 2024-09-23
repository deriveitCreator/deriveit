
export async function POST(request: Request) {
	try{
		let res = await request.json();
		let fileImp = await import(`../contents/${res.topic}/${res.subTopic}/${res.article}`);
		return Response.json([fileImp.title,fileImp.default]);
	}
	catch{
		return Response.error();
	}
}