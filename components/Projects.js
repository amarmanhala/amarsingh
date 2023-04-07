import { PROJECTS } from "@/data/projects";
import { kaisei } from "@/font";
import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <section className="mt-12">
      <h1 className={`text-4xl font-bold leading-relaxed ${kaisei.className}`}>
        Projects
      </h1>
      <p className={`paragraph ${ kaisei.className }`}>Below you’ll find a selection of my favourite projects and experiences.</p>

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
