import React from "react";
import "./skills.css";
import Skill from "./../../assets/img/skill.jpg";

const Skils = () => {
  return (
    <div>
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

            <h3 class="skills__subtitle">Design</h3>
            <span class="skills__name">Figma</span>

            <span class="skills__name">Photoshop</span>
          </div>

          <div class="skills__img">
            <img src={Skill} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skils;
