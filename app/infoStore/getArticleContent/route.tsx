
export async function POST(request: Request) {
    let res = await request.json();
    try{
        let fileImp = await import(`../${res.topic}/${res.subTopic}/${res.article}`);
        return Response.json(fileImp.default);
    }
    catch{
        return Response.json([["h1","404 error"],["pmain",`No "${res.article}" article found, please check the article title or topic title. If you think this is a mistake, please report it.`]]);
    }
}