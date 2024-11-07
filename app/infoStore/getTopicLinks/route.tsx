import {getTopicLinks, ERROR_VALUE} from "../topicsInfo";


export async function POST(request: Request) {
	let req = await request.json();
  let result = getTopicLinks(req.topic);
	if(result === ERROR_VALUE) return Response.error();
	else if (req.subTopic) {
		for(let topicLink of result)
			if (topicLink[0] === req.subTopic)
				return Response.json(result);
		return Response.error();
	}
	else return Response.json(result);
}
