
export async function POST(request: Request) {
	let res = await request.json();
	try{
		let fileImp = await import(`../${res.topic}/${res.subTopic}/${res.article}`);
		return Response.json([fileImp.title,fileImp.default]);
	}
	catch(e1){
		return Response.json(["404 error (article not found)"]);
	}
}