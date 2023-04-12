import * as matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getAllPostBySlug } from "@/lib/getPostBySlug";
import { useRouter } from "next/router";
import writings from '../writings';
import { MDXProvider } from '@mdx-js/react'



export async function getStaticPaths() {
  // Fetch the dynamic paths from an API or a data source      

  const paths = [
    { params: { slug: 'my-secong-blog' } },
    { params: { slug: 'my-first-blog' } },
    // ...
  ];

  return {
    paths,
    fallback: false, // Set to true if you want to use fallback behavior
  };
}

const components = {
  h1: "#",
  
}

const Post = ({ source, post }) => {
  
  const router = useRouter();
  const { slug } = router.query;

  console.log(source);

  return (
    <MDXProvider components={components}>
    <main {...post} />
  </MDXProvider>
  )
};

export async function getStaticProps({ params }) {
  // Return the fetched data as props
  const { slug } = params; // Access the slug value from params object
  let post = await getAllPostBySlug(slug);
  //let temp = JSON.parse(post[0]);

  const mdxSource = await serialize(post)
  return { props: { source: mdxSource, post } }

}

export default Post;
