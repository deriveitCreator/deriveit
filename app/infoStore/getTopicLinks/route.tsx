import {getTopicLinks, TOPIC_LINKS_ERROR} from "../topicsInfo";

export async function POST(request: Request) {
	let req = await request.json();
  let result = getTopicLinks(req.topic);
	if(result === TOPIC_LINKS_ERROR) return Response.error();
	else if (req.subTopic) {
		for(let topicLink of result)
			if (topicLink[0].replaceAll("'","") === req.subTopic)
				return Response.json(result);
		return Response.error();
	}
	else return Response.json(result);
}
