import Head from "next/head";
import Image from "next/image";
import { Inter, Kaisei_Decol } from "next/font/google";
import Header from "@/components/Header";
import Projects from "./Projects";


const kaisei = Kaisei_Decol({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Amar Singh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧐</text></svg>"
        ></link>
      </Head>
      <main className="w-full">
        <section className="container">
          <h1
            className={`text-4xl font-bold leading-relaxed ${kaisei.className}`}
          >
            Amar Singh
          </h1>
          <p className="paragraph">
            Hi, I&apos;m Amar. I&apos;m a Front-end engineer based in Toronto, building web apps
            and other cool things.
          </p>
          <p className="paragraph mt-4">I&apos;m passionate about frontend development and building things with Javascript, React, Python.</p>
          <p className="paragraph mt-4">Find me on linkedin and twitter.</p>
        </section>
        <Projects />
      </main>
    </>
  );
}
