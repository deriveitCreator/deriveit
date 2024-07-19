
export async function POST(request: Request) {
	let res = await request.json();
	try{
		let fileImp = await import(`../${res.topic}/${res.subTopic}/${res.article}`);
		return Response.json([fileImp.title,fileImp.default]);
	}
	catch(e1){
		return Response.json(["404 error (article not found)",[
			["h1","404 error"],
			["pmain",`No "${res.article}" article found, please check the article title or topic title in the URL.`],["pmain","If you think this is a mistake, please report it."]
		]]);
	}
}