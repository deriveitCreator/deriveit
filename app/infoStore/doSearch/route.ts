import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchRes = await fetch(`https://www.googleapis.com/customsearch/v1?cx=40f9a25a3e41e4b95&key=${process.env.SEARCH_ENGINE_API}&q=${searchParams.get("text")}`);
  const text = await searchRes.json();
  return NextResponse.json({items: text.items});
}