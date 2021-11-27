import React from "react";
import "./nav.css";
import Main from "../main/Main";
import Footer from "../footer/Footer";

const Navbar = () => {
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");

  return (
    <div>
      <header class="l-header">
        <nav class="nav bd-grid">
          <div>
            <a href="#" class="nav__logo">
              Sumit Singh
            </a>
          </div>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#home" class="nav__link active">
                  Home
                </a>
              </li>
              <li class="nav__item">
                <a href="#about" class="nav__link">
                  About
                </a>
              </li>
              <li class="nav__item">
                <a href="#skills" class="nav__link">
                  Skills
                </a>
              </li>
              <li class="nav__item">
                <a href="#portfolio" class="nav__link">
                  Portfolio
                </a>
              </li>
              <li class="nav__item">
                <a href="#contact" class="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class="bx bx-menu"></i>
          </div>
        </nav>
      </header>
      <Main />
      <Footer />
    </div>
  );
};

export default Navbar;
