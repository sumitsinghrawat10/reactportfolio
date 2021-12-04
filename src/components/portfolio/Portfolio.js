import React from "react";
import "./portfolio.css";
import work1 from "./../../assets/img/work1.jpg";
import work2 from "./../../assets/img/work2.jpg";
import work3 from "./../../assets/img/work3.jpg";
import work4 from "./../../assets/img/work4.jpg";
import work5 from "./../../assets/img/work5.jpg";
import work6 from "./../../assets/img/work6.jpg";

const Portfolio = () => {
  return (
    <div>
      <section class="portfolio section" id="portfolio">
        <h2 class="section-title">Portfolio</h2>

        <div class="portfolio__container bd-grid">
          <div class="portfolio__img">
            <img src={work1} alt="work1" />

            <div class="portfolio__link">
              <a href="#icons" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work2} alt="work2" />

            <div class="portfolio__link">
              <a href="#icons" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work3} alt="work3" />

            <div class="portfolio__link">
              <a href="#icons" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work4} alt="work4" />

            <div class="portfolio__link">
              <a href="#icons" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work5} alt="work5" />

            <div class="portfolio__link">
              <a href="#icons" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div class="portfolio__img">
            <img src={work6} alt="work6" />

            <div class="portfolio__link">
              <a href="#icons" class="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
