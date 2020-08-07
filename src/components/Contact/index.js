import React from "react";
import "./styles.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 className="title">Contact</h1>
      <h2>Let's get in touch</h2>
      <h3>
        You can send me an email or a direct message to my linkedin profile.
      </h3>

      <div className="contact-socials">
        <a href="mailto:wyllmh5@gmail.com">
          <i className="fa fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/willian-mendoza-75387a16b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
