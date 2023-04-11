import fs from "fs";
import { join } from "path";
import Writings from "@/components/Writings";
import Head from "next/head";
import React from "react";
import * as matter from "gray-matter";
import Link from "next/link";

const writings = ({ allWritingsNames, tempData }) => {
  

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
        const modifiedString = originalString.replace("pages/", "");
        const finalString = modifiedString.replace(".mdx", "");
        return (
          <>
            <Link href={finalString} key={index}>
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
  // Fetch data from an API or other data source

  const allWritingsNames = await fs.readdirSync("pages/writings");


  let tempData = [];

  allWritingsNames.map((eachWriting) => {
    const data = matter.read("pages/writings/" + eachWriting);
    tempData.push(JSON.stringify(data));
  });

  // Return the fetched data as props
  return {
    props: {
      allWritingsNames,

      tempData,
    },
  };
}

export default writings;
