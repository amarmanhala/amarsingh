import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getPostData() {
  // Fetch data from an API or other data source

  const allWritingsNames = await fs.readdirSync("pages/writings");

  let tempData = [];

  allWritingsNames.map((eachWriting) => {
    const data = matter.read("pages/writings/" + eachWriting);
    tempData.push(JSON.stringify(data));
  });
  return tempData;
}
