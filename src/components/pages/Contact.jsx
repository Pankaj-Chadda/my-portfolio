import React from "react";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <h2 className="main-head">Contact</h2>
      <div name="contact" className={styles["contact-cont"]}>
        <div>
          <p>Submit the form below to get in touch with me</p>
        </div>
        <form
          action="https://getform.io/f/wbrkelya"
          method="POST"
          className={styles.forms}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className=""
          />
          <input type="text" name="email" placeholder="Enter your email" />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
          ></textarea>

          <button>Let's talk</button>
        </form>
        <div>
          <ul className={styles.social}>
            <li>
              <a
                href="https://www.linkedin.com/in/pankaj-chadda-62a026217/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className={styles.linkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Pankaj-Chadda"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className={styles.github} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
