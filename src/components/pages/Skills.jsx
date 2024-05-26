import React from "react";

import DjangoIcon from "../../assets/Icons/DjangoIcon";
import Htmlcon from "../../assets/Icons/Htmlcon";
import CssIcon from "../../assets/Icons/CssIcon";
import GitIcon from "../../assets/Icons/GitIcon";
import GithubIcon from "../../assets/Icons/GithubIcon";
import JavascriptIcon from "../../assets/Icons/JavascriptIcon";
import PythonIcon from "../../assets/Icons/PythonIcon";
import styles from "./Skills.module.css";
import ReactIcon from "../../assets/Icons/ReactIcon";
const Skills = () => {
  const skills = [
    {
      id: 1,
      src: Htmlcon,
      title: "HTML",
    },
    {
      id: 2,
      src: CssIcon,
      title: "CSS",
    },
    {
      id: 3,
      src: JavascriptIcon,
      title: "JavaScript",
    },
    {
      id: 4,
      src: ReactIcon,
      title: "React",
    },
    {
      id: 5,
      src: GithubIcon,
      title: "GitHub",
    },
    {
      id: 6,
      src: PythonIcon,
      title: "Python",
    },
    {
      id: 7,
      src: DjangoIcon,
      title: "Django",
    },
    {
      id: 8,
      src: GitIcon,
      title: "Git",
    },
  ];
  return (
    <div className={styles.skills}>
      <h2 className={styles["main-head"]}>Skills</h2>
      <div className={styles["skills-cont"]}>
        {skills.map(({ id, src: Icon, title }) => (
          <div key={id} className={styles.skill}>
            <Icon className={styles["skill-icon"]} />
            <p className={styles.title}>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
