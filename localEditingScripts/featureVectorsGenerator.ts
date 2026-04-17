//npx tsx featureVectorsGenerator.ts

import { pipeline } from '@xenova/transformers';
import { getTopicLinks, TOPIC_LINKS_ERROR, topicsOrder } from "@/app/infoStore/topicsInfo";
import { writeFile } from 'fs';

const CUR_TOPIC = ""; //set to "" if you want all topics
const RELATIVE_SAVE_LOC = "../app/infoStore/featureVectors/"

async function makefeatureVectors(topic: string){
  const topicLinks = getTopicLinks(topic);
  if (topicLinks == TOPIC_LINKS_ERROR) {
    console.error("Please check topic name.");
    return;
  }
  const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  const topicLinksCopy = JSON.parse(JSON.stringify(topicLinks));
  for (let i = 0; i < topicLinks.length; i++) {
    const subtopicFeatureVector = await extractor(topicLinks[i][1], { pooling: 'mean', normalize: true });
    topicLinksCopy[i][1] = subtopicFeatureVector.tolist();
  }

  writeFile(RELATIVE_SAVE_LOC+topic+'.json', JSON.stringify(topicLinksCopy), function (err: any) {
    if (err) throw err;
  });
}

async function main() {
  if (CUR_TOPIC.length) makefeatureVectors(CUR_TOPIC);
  else for (let topic of topicsOrder) {
    console.log(`CURRENT TOPIC: ${topic}`)
    await makefeatureVectors(topic);
    console.log(`${topic} done!\n`);
  }
}

main(); 