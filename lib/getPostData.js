import fs from "fs";
import matter from "gray-matter";

export async function getAllPostData() {
  // Fetch data from MDX
  const allBlogFilesNames = await fs.readdirSync("pages/writings");
  let blogData = [];
  allBlogFilesNames.map((eachBlog) => {
    const data = matter.read("pages/writings/" + eachBlog);
    blogData.push(JSON.stringify(data));
  });
  return blogData;
}
