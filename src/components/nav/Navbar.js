import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

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
            <a href="#logo" class="nav__logo">
              Sumit Singh
            </a>
          </div>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <Link to="/">
                  <a href="#home" class="nav__link active">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav__item">
                <Link to="/about">
                  <a href="#about" class="nav__link">
                    About
                  </a>
                </Link>
              </li>
              <li class="nav__item">
                <Link to="/skills">
                  <a href="#skills" class="nav__link">
                    Skills
                  </a>
                </Link>
              </li>
              <li class="nav__item">
                <Link to="/portfolio">
                  <a href="#portfolio" class="nav__link">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li class="nav__item">
                <Link to="/contact">
                  <a href="#contact" class="nav__link">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
