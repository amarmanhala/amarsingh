import Head from "next/head";
import { kaisei } from "@/font";
import React from "react";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Amar Singh</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        ></link>
      </Head>
      <section className="mt-12">
        <header className="mb-8">
          <h2
            className={`text-3xl font-bold leading-relaxed ${kaisei.className}`}
          >
            Say Hi!
          </h2>
          <p className={`paragraph ${kaisei.className}`}></p>
        </header>

        <div>
          <p>
            If you are interested to hire me or in collaborating reach me at
          </p>
          <p>
            <strong>amar.manhala@gmail.com</strong>
          </p>
          <p className="mt-10">or shoot me a message on</p>
          <p>
            <a href="https://twitter.com/amarsinghca" target="_blank">
              <strong>Twitter :)</strong>
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/hyumanamar/" target="_blank">
              <strong>LinkedIn :)</strong>
            </a>
          </p>
          <p className="mt-10">Currently, I'm available to freelance work.</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
