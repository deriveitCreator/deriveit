import { cookies } from 'next/headers';

export async function POST(request: Request) {
    let res = await request.json();
    let fileImp = await import(`./${res.topic}/${res.subTopic}/${res.article}`);
    return Response.json(fileImp.default);
}

export async function GET(request: Request) {
    cookies().set("designSelected",request.url.substring(request.url.length-1));
    return Response.json("");
    /*
    let res = await request.json();
    console.log(res);
    let cookieVal = parseInt(cookies().get("designSelected")?.value!);
    if(cookieVal){
        return Response.json([cookieVal]);
    }
    else{
        cookies().set("designSelected", DEFAULT_SELECTION.toString());
        return Response.json([DEFAULT_SELECTION]);
    }
    */
}