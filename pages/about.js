import Head from "next/head";
import { kaisei } from "@/font";
import React from "react";


const About = () => {
  return (
    <>
      <Head>
        <title>About - Amar Singh</title>
      </Head>
      <section className="mt-12">
        <header className="mb-8">
          <h2
            className={`text-3xl font-bold leading-relaxed ${kaisei.className}`}
          >
            Hello there, 👋
          </h2>
          <p className={`paragraph ${kaisei.className}`}>
          
          </p>
        </header>

        <div>
       <p>My name is Amar, and I'm a Frontend engineer based in Toronto, Canada.  I have been working as developer for 4 years and have experience building scalable and responsive web applications using React.</p>
       <p className="mt-6">
       🧑‍💻 Previously, I worked at Fintelics, allowed me to develop my skills in building complex user interfaces, creating reusable components, and collaborating with cross-functional teams. Through my responsibilities, I was able to contribute to the development of high-quality and scalable web applications that met the needs of businesses and users alike.
       </p>
       <p className="mt-6">
       🎓 With my MCA degree, I bring a strong foundation in computer science principles and a deep understanding of how they apply to web development. I have also had the opportunity to develop my programming, analytical and problem-solving skills, which have been invaluable in my work as a software engineer.


       </p>
       <p className="mt-6">
       🛠️ In addition to my education, I am proficient in React.js, Redux, JavaScript, HTML, CSS, and related web technologies. I am familiar with tools like Bundlers (Parcel), Babel, ESLint, and Git for development and version control, and I am skilled in creating reusable components, optimizing app performance, and debugging code issues.
       </p>
       <p className="mt-6">
       🏅 Throughout my career, I have completed challenging projects, contributed to open-source React libraries, Design system and received recognition for my work.
       </p>
       <p className="mt-6">
       💡 From my experience in React development to my current exploration of AI and Swift, I am always eager to expand my skills and knowledge in the technology field.
       </p>
       <p className="mt-6">
       When I’m not coding, I like spending time with ☕️ Tea, 📸 taking photos of aesthetic things and 🏋️‍♀️ sporting activities.
       </p>
       <p className="mt-6">
       ❤️ Thank you for taking the time to read about me.
       </p>
        </div>
      </section>
    </>
  );
};

export default About;
