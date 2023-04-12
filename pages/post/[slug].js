import * as matter from 'gray-matter';
import { getAllPostBySlug } from "@/lib/getPostBySlug";
import { useRouter } from "next/router";


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

const Post = ({ post, test }) => {
  
  const router = useRouter();
  const { slug } = router.query;

  const data = JSON.parse(post);
  
  console.log(data)

  return <p>Post: {data.content}</p>;
};

export async function getStaticProps({ params }) {
  // Return the fetched data as props
  const { slug } = params; // Access the slug value from params object
  let post = await getAllPostBySlug(slug);
 
  return {
    props: {
      post,
      test: slug
    },
  };
}

export default Post;
