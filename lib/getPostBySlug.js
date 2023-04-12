import fs from "fs";
import matter from "gray-matter";
import { getAllPostData } from "./getPostData";

export async function getAllPostBySlug(slug) {
  
  // Fetch data from MDX
  let blogData = await getAllPostData()
  
  const post = blogData.filter(function(eachBlog) {
       let formattedPostData = JSON.parse(eachBlog);
       return formattedPostData.data.slug === slug
   console.log("wowwwwww", JSON.parse(eachBlog));
  });
 
  return post;
}
