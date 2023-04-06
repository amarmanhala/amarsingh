import { kaisei } from "@/font";
import React from "react";

const Projects = () => {
  return (
    <section className="mt-12">
      <h1 className={`text-4xl font-bold leading-relaxed ${kaisei.className}`}>
        Projects
      </h1>
      <p className={`paragraph ${ kaisei.className }`}>Below you’ll find a selection of my favourite projects and experiences.</p>
    </section>
  );
};

export default Projects;
