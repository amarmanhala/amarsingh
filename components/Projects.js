import { PROJECTS } from "@/data/projects";
import { kaisei } from "@/font";
import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <section className="mt-12">
      <header className="mb-8">
      <h2 className={`text-3xl font-bold leading-relaxed ${kaisei.className}`}>
        Projects
      </h2>
      <p className={`paragraph ${ kaisei.className }`}>Below you’ll find a selection of my favourite projects and experiences.</p>
      </header>

      <div>

        {PROJECTS.map(eachProject => {
          console.log(eachProject);
          return (<Card key={eachProject.id} projectData={eachProject} />)
        })}

      </div>
    </section>
  );
};

export default Projects;
