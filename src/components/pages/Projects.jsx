import React from "react";
import "./Projects.css";
import boxOffice from "../../assets/portfolio/Box-Office-App.png";
import eccomerce from "../../assets/portfolio/Eccomerce-App.png";
import ticTacToe from "../../assets/portfolio/Tic-Tac-Toe.png";
import imageSearch from "../../assets/portfolio/Image-Search-App.png";
import toDo from "../../assets/portfolio/To-Do-App.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Box Office App",
      src: boxOffice,
      code: "https://github.com/Pankaj-Chadda/Box-Office-App",
      demo: "https://box-office-movies-app.surge.sh/",
    },
    {
      id: 2,
      title: "Image Search App",
      src: imageSearch,
      code: "https://github.com/Pankaj-Chadda/ImageSearchEngine_WebApp",
      demo: "https://pankaj-chadda.github.io/ImageSearchEngine_WebApp/",
    },
    {
      id: 3,
      title: "Tic Tac Toe",
      src: ticTacToe,
      code: "https://github.com/Pankaj-Chadda/Tic-Tac-Toe",
      demo: "https://tictacwinplay.surge.sh/",
    },
    {
      id: 4,
      title: "To Do App",
      src: toDo,
      code: "https://github.com/Pankaj-Chadda/To_do_list_app",
      demo: "https://bustling-yak.surge.sh/",
    },
    {
      id: 5,
      title: "Eccomerce App",
      src: eccomerce,
      code: "https://github.com/Pankaj-Chadda/E-Commerce-app",
      demo: "https://ecommgobuy.surge.sh/",
    },
  ];

  return (
    <div className="projects">
      <h2 className="main-head">Projects</h2>
      <div className="projects-cont">
        {projects.map(({ id, title, src, code, demo }) => (
          <div key={id} className="project">
            <img src={src} alt="" className="" />
            <div className="proj-title">{title}</div>
            <div className="btns">
              <button
                className=""
                onClick={() => {
                  window.location.href = demo;
                }}
              >
                Demo
              </button>
              <button
                className=""
                onClick={() => {
                  window.location.href = code;
                }}
              >
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
