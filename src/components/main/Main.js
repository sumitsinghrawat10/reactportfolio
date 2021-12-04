import React from "react";
import "./main.css";
import Skils from "../skills/Skils";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import About from "../about/About";

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
      <About />

      {/* <!--===== SKILLS =====--> */}
      <Skils />

      {/* <!--===== PORTFOLIO =====--> */}
      <Portfolio />

      {/* <!--===== CONTACT =====--> */}
      <Contact />
    </main>
  );
};

export default Main;
