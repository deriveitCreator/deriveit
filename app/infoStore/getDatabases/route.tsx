
export async function POST(request: Request) {
	let res = await request.json();
  let searchText = res.searchText;
  let linksList = [];
  let titleList = [];
	try{
		const { MongoClient } = require("mongodb");
		const uri = process.env.MONGODB_URI;
		const client = new MongoClient(uri);
    const admin = client.db().admin();
		const dbInfo = await admin.listDatabases();
		for (let someDB of dbInfo.databases) {
			if(someDB.name != "admin" && someDB.name != "local"){
				let database = client.db(someDB.name);
				let collections = await database.listCollections().toArray();
				for(let collection of collections){
					let cursors = await client.db(someDB.name).collection(collection.name).find({ $or: [
						{"title": { $regex: searchText, $options: "i"}},
						{"content": {$elemMatch: {$elemMatch:{$regex: searchText, $options: "i"}}}},
					]}).toArray();
					for(let i = 0; i < cursors.length;i++) {
						linksList.push(someDB.name+"/"+collection.name+"/"+cursors[i].referenceLink);
            titleList.push(cursors[i].content[0][1]);
					}
				}
			}
		}
		return Response.json([linksList, titleList]);
	}
	catch(e1){
    console.log(e1);
	}
}