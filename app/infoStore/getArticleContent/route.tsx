
export async function POST(request: Request) {
    let res = await request.json();
    let fileImp = await import(`../${res.topic}/${res.subTopic}/${res.article}`);
    return Response.json(fileImp.default);
}