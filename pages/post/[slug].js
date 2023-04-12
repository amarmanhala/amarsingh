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

const Post = ({ blogContent }) => {
  console.log(blogContent);
  const router = useRouter();
  const { slug } = router.query;

  return <p>Post: {slug}</p>;
};

export async function getStaticProps() {
  // Return the fetched data as props
  return {
    props: {
      blogContent: await getAllPostBySlug(),
    },
  };
}

export default Post;
