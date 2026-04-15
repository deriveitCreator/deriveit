//npx tsx siteMapGenerator.ts

import { topicsOrder } from "@/app/infoStore/topicsInfo";
import { getTopicLinks } from "@/app/infoStore/topicsInfo";

var builder = require('xmlbuilder');
function getXML(){
  let xml = builder.create('urlset', { encoding: 'utf-8', version: "1.0" })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
  xml.ele('url').ele('loc', `https://www.deriveit.net/`).up();
  for (let topic of topicsOrder){
    xml.ele('url').ele('loc', `https://www.deriveit.net/${topic}`).up();
    for (let subtopicsList of getTopicLinks(topic)){
      let actualSubtopicName = subtopicsList[0];
      for (let articleName of subtopicsList[1]){
        if (articleName.lastIndexOf("(incomplete)") > 0) continue;
        let actualArticleName = articleName.substring(articleName.lastIndexOf("%")+1);
        let link = `https://www.deriveit.net/${topic}/${actualSubtopicName}/${actualArticleName}`.replaceAll(" ","_").replaceAll("'","");
        xml.ele('url').ele('loc', link).up()
      }
    }
  }
  return xml.toString({pretty:true});
}

var fs = require('fs');
fs.writeFile('sitemap.xml', getXML(), function (err: any) {
  if (err) throw err;
  console.log('Done!');
});
