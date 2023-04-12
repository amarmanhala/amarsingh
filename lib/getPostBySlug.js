import fs from "fs";
import matter from "gray-matter";
import { getAllPostData } from "./getPostData";

export async function getAllPostBySlug(slug) {
  // Fetch data from MDX
  let blogData = getAllPostData()

  let blog = blogData.filter(function(eachBlog) {

   console.log(eachBlog);
  });
 
  return blogData;
}
