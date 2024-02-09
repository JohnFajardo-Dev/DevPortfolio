import "./About.css";
function About() {
  return (
    <section className="about" id="about">
      <article className="about-txt">
        <h1>About me</h1>
        <h2>
          <span className="focustxt">Programmer</span> and{" "}
          <span className="focustxt">Web Developer</span> passionate about UI/UX
          design and <span className="focustxt">open source</span> development
          with more than <span className="focustxt">4 years of experience</span>{" "}
          in the world of development and technology.
        </h2>
      </article>
      <article className="img-profile">
        <img src="assets/profile.jpg" alt="" />
      </article>
    </section>
  );
}

export default About;
