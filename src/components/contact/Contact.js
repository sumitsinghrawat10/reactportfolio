import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_3xrwp06",
        form.current,
        "user_HG3tG7eEKLbu3xYMicXXx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
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

          <form action="" class="contact__form" onSubmit={sendEmail}>
            <div class="contact__inputs">
              <input
                type="text"
                placeholder="Name"
                class="contact__input"
                name="name"
              />
              <input
                type="email"
                placeholder="Email"
                class="contact__input"
                name="email"
              />
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
    </div>
  );
};

export default Contact;
