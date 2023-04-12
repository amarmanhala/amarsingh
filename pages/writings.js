
import Writings from "@/components/Writings";
import Head from "next/head";
import React from "react";
import * as matter from "gray-matter";
import Link from "next/link";
import { getAllPostData } from "@/lib/getPostData";

const writings = ({ tempData }) => {
  console.log(tempData);
  return (
    <>
      <Head>
        <title>Writings - Amar Singh</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>"
        ></link>
      </Head>

      <Writings />
      {tempData.map((temp, index) => {
        const justDoIt = JSON.parse(temp);
       
        const originalString = String(justDoIt.path);
        const modifiedString = originalString.replace("pages/writings/", "");
        const finalString = modifiedString.replace(".mdx", "");
        return (
          <>
            <Link href={"/post/" + finalString} key={index}>
              <h1 key={index}>{justDoIt.data.title}</h1>
            </Link>
            <p>{justDoIt.data.date}</p>
            <p>{justDoIt.data.description}</p>
          </>
        );
      })}
    </>
  );
};

export async function getStaticProps() {

 
  

  // Return the fetched data as props
  return {
    props: {
      tempData: await getAllPostData()
    },
  };
}

export default writings;
