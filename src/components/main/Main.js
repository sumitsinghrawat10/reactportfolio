import React from "react";
import "./main.css";
import Skill from "./../../assets/img/skill.jpg";
import perfil from "./../../assets/img/perfil.png";
import work1 from "./../../assets/img/work1.jpg";
import work2 from "./../../assets/img/work2.jpg";
import work3 from "./../../assets/img/work3.jpg";
import work4 from "./../../assets/img/work4.jpg";
import work5 from "./../../assets/img/work5.jpg";
import work6 from "./../../assets/img/work6.jpg";

const Main = () => {
  return (
    <main class="l-main">
      {/* <!--===== HOME =====--> */}
      <section class="home" id="home">
        {/* <!-- <div class="home__container bd-grid">
          <h1 class="home__title"><span>HE</span><br />LLO.</h1>

          <div class="home__scroll">
            <a href="#about" class="home__scroll-link"
              ><i class="bx bx-up-arrow-alt"></i>Scroll down</a
            >
          </div>

          <img src="assets/img/perfil.png" alt="" class="home__img" />
        </div> --> */}
      </section>

      {/* <!--===== ABOUT =====--> */}
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
              <a href="#" class="about__social-icon">
                <i class="bx bxl-linkedin"></i>
              </a>
              <a href="#" class="about__social-icon">
                <i class="bx bxl-github"></i>
              </a>
              <a href="#" class="about__social-icon">
                <i class="bx bxl-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--===== SKILLS =====--> */}
      <section class="skills section" id="skills">
        <h2 class="section-title">Skills</h2>

        <div class="skills__container bd-grid">
          <div class="skills__box">
            <h3 class="skills__subtitle">Development</h3>
            <span class="skills__name">HTML</span>
            <span class="skills__name">CSS</span>
            <span class="skills__name">Javascript</span>
            <span class="skills__name">Bootstrap</span>
            <span class="skills__name">React Js </span>
            {/* <span class="skills__name">Vue</span> */}

            <h3 class="skills__subtitle">Design</h3>
            <span class="skills__name">Figma</span>
            {/* <span class="skills__name">Adobe XD</span> */}
            <span class="skills__name">Photoshop</span>
          </div>

          <div class="skills__img">
            <img src={Skill} alt="" />
          </div>
        </div>
      </section>

      {/* <!--===== PORTFOLIO =====--> */}
      <section class="portfolio section" id="portfolio">
        <h2 class="section-title">Portfolio</h2>

        <div class="portfolio__container bd-grid">
          <div class="portfolio__img">
            <img src={work1} alt="work1" />

            <div class="portfolio__link">
              <a href="#" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work2} alt="work2" />

            <div class="portfolio__link">
              <a href="#" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work3} alt="work3" />

            <div class="portfolio__link">
              <a href="#" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work4} alt="work4" />

            <div class="portfolio__link">
              <a href="#" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work5} alt="work5" />

            <div class="portfolio__link">
              <a href="#" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work6} alt="work6" />

            <div class="portfolio__link">
              <a href="#" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--===== CONTACT =====--> */}
      <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>

        <div class="contact__container bd-grid">
          <div class="contact__info">
            <h3 class="contact__subtitle">EMAIL</h3>
            <span class="contact__text"> sumitsingh1093@gmail.com </span>

            <h3 class="contact__subtitle">PHONE</h3>
            <span class="contact__text">+91-00000000000</span>

            <h3 class="contact__subtitle">ADRESS</h3>
            <span class="contact__text"> India</span>
          </div>

          <form action="" class="contact__form">
            <div class="contact__inputs">
              <input type="text" placeholder="Name" class="contact__input" />
              <input type="mail" placeholder="Email" class="contact__input" />
            </div>

            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              class="contact__input"
            ></textarea>

            <input type="submit" value="Submit" class="contact__button" />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;
