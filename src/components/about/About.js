import React from "react";
import "./about.css";
import perfil from "./../../assets/img/perfil.png";

const About = () => {
  return (
    <div>
      <section class="about section" id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
          <div class="about__img">
            <img src={perfil} alt="profile" />
          </div>

          <div>
            <h2 class="about__subtitle">I'am Sumit </h2>
            <span class="about__profession">Front End Developer </span>
            <p class="about__text">
              Creative Front-End Developer offering high-impact web solutions
              for diverse industry organizations.Skilled in designing,
              developing and testing multiple web-based applications
              incorporating a range of technologies.
            </p>

            <div class="about__social">
              <a
                href="https://www.linkedin.com/in/sumit-singh-74a028a0/"
                class="about__social-icon"
                target="_blank"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/sumitsinghrawat10"
                class="about__social-icon"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a href="icons" class="about__social-icon" target="_blank">
                <i class="bx bxl-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
