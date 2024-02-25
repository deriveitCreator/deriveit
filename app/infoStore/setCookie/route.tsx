import { cookies } from 'next/headers';

export async function GET(request: Request) {
    cookies().set("designSelected",request.url.substring(request.url.length-1));
    return Response.json("");
}