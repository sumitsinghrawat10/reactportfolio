import React from "react";
import "./about.css";
import Swal from "sweetalert2";
import perfil from "./../../assets/img/perfil.png";
import Deep from "../../assets/img/Deep.pdf";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const About = () => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  function download() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(<a href={Deep} download></a>);
      }
    });
  }

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
              {/* Creative Front-End Developer offering high-impact web solutions
              for diverse industry organizations.Skilled in designing,
              developing and testing multiple web-based applications
              incorporating a range of technologies. */}
              {t("Thanks.1")}
            </p>

            <div class="about__social">
              <a
                href="https://www.linkedin.com/in/sumit-singh-74a028a0/"
                class="about__social-icon"
                rel="noreferrer"
                target="_blank"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/sumitsinghrawat10"
                class="about__social-icon"
                rel="noreferrer"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a
                href="icons"
                class="about__social-icon"
                rel="noreferrer"
                target="_blank"
              >
                <i class="bx bxl-dribbble"></i>
              </a>
              <button onClick={download}>Download</button>
              <button onClick={() => handleClick("en")}>English</button>
              <button onClick={() => handleClick("ko")}>Korean</button>
              <button onClick={() => handleClick("chi")}>Chinese</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
