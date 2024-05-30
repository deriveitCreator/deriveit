
export async function POST(request: Request) {
	let res = await request.json();
	try{
		const { MongoClient } = require("mongodb");
		const uri = process.env.MONGODB_URI;
		const client = new MongoClient(uri);
		const database = client.db(res.topic);
		const collection = database.collection(res.subTopic);
		let result = await collection.findOne({"referenceLink": res.article});
		await client.close();
		return Response.json([result.title, result.content]);
	}
	catch(e1){
		try{
			console.log(`\nFetching from database led to this error:\n${e1}`);
			let fileImp = await import(`../${res.topic}/${res.subTopic}/${res.article}`);
			return Response.json([fileImp.title,fileImp.default]);
		}
		catch(e2){
			console.log(`Rendering the content from /${res.topic}/${res.subTopic}/${res.article} led to this error:\n${e2}`);
			return Response.json(["404 error (article not found)",[
				["h1","404 error"],
				["pmain",`No "${res.article}" article found, please check the article title or topic title in the URL.`],["pmain","If you think this is a mistake, please report it."]
			]]);
		}
	}
}