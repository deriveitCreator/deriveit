
export async function POST(request: Request) {
    let res = await request.json();
    try{
        let fileImp = await import(`../${res.topic}/${res.subTopic}/${res.article}`);
        return Response.json(fileImp.default);
    }
    catch(e){
        console.log(`rendering the content from /${res.topic}/${res.subTopic}/${res.article} led to this error:\n${e}`);
        return Response.json([["h1","404 error"],["pmain",`No "${res.article}" article found, please check the article title or topic title in the URL. If you think this is a mistake, please report it.`]]);
    }
}