import React from "react";
import "./contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>

        <div class="contact__container bd-grid">
          <div class="contact__info">
            <h3 class="contact__subtitle">EMAIL</h3>
            <span class="contact__text"> sumitsingh1093@gmail.com </span>

            <h3 class="contact__subtitle">PHONE</h3>
            <span class="contact__text">+91-00000000000</span>

            <h3 class="contact__subtitle">ADDRESS</h3>
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

            <input
              type="submit"
              value="Submit"
              class="contact__button"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
