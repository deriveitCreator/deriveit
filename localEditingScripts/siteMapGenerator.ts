//npx tsx siteMapGenerator.ts

import { topicsOrder } from "@/app/infoStore/topicsInfo";
import { getTopicLinks } from "@/app/infoStore/topicsInfo";

const builder = require('xmlbuilder');
function getXML(){
  const xml = builder.create('urlset', { encoding: 'utf-8', version: "1.0" }).att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
  xml.ele('url').ele('loc', `https://www.deriveit.net/`).up();
  for (const topic of topicsOrder){
    xml.ele('url').ele('loc', `https://www.deriveit.net/${topic}`).up();
    for (const subtopicsList of getTopicLinks(topic)){
      const actualSubtopicName = subtopicsList[0];
      for (const articleName of subtopicsList[1]){
        if (articleName.lastIndexOf("(incomplete)") > 0) continue;
        const actualArticleName = articleName.substring(articleName.lastIndexOf("%")+1);
        const link = `https://www.deriveit.net/${topic}/${actualSubtopicName}/${actualArticleName}`.replaceAll(" ","_").replaceAll("'","");
        xml.ele('url').ele('loc', link).up()
      }
    }
  }
  return xml.toString({pretty:true});
}

const fs = require('fs');
fs.writeFile('sitemap.xml', getXML(), function (err: any) {
  if (err) throw err;
  console.log('Done!');
});
