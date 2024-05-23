import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";
import python from "../../assets/python.png";
import django from "../../assets/django.jpg";
import styles from "./Skills.module.css";
const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },

    {
      id: 5,
      src: github,
      title: "GitHub",
    },
    {
      id: 6,
      src: python,
      title: "Python",
    },
    {
      id: 7,
      src: django,
      title: "Django",
    },
  ];
  return (
    <div className={styles.skills}>
      <h2 className={styles["main-head"]}>Skills</h2>
      <div className={styles["skills-cont"]}>
        {skills.map(({ id, src, title }) => (
          <div key={id} className={styles.skill}>
            <img src={src} alt="" className={styles["skill-img"]} />
            <p className={styles.title}>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
