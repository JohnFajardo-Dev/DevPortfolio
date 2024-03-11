import "./About.css";
import Skill from "../../components/Skill/Skill";
function About() {
  return (
    <>
      <section className="about" id="about">
        <article className="about-txt">
          <h1>About me</h1>
          <h2>
            <span className="focustxt">Programmer</span> and{" "}
            <span className="focustxt">Web Developer</span> passionate about
            UI/UX design and <span className="focustxt">open source</span>{" "}
            development with more than{" "}
            <span className="focustxt">4 years of experience</span> in the world
            of development and technology.
          </h2>
        </article>
        <article className="img-profile">
          <img src="assets/profile.jpg" alt="" />
        </article>
      </section>
      <section className="skills">
        <h1></h1>
        {/* Programming Languages */}
        <Skill name="HTML 5" />
        <Skill name="CSS 3" />
        <Skill name="JAVASCRIPT" />
        <Skill name="PYTHON" />
        {/* Frameworks and Libraries */}
        <Skill name="REACT" />
        <Skill name="NPM" />
        <Skill name="NODE.JS" />
        {/* Databases */}
        <Skill name="MONGODB" />
        <Skill name="MYSQL" />
        <Skill name="POSTGRES" />
        {/* Software */}
        <Skill name="VSCODE" />
        <Skill name="VIM" />
        <Skill name="GIT" />
        <Skill name="GITHUB" />
        <Skill name="LINUX" />
        {/* Design */}
        <Skill name="ADOBE PHOTOSHOP" />
        <Skill name="ADOBE ILLUSTRATOR" />
        <Skill name="ASEPRITE" />
        <Skill name="FIGMA" />
      </section>
    </>
  );
}

export default About;
