import React from "react";
import "./Home.css";
import HeroImage from "../../assets/heroImage.jpg";

const handleDownload = () => {
  const link = document.createElement("a");
  window.open(
    "https://drive.google.com/drive/folders/1emKanCUGARPusAdL5dQVqEJttQfm8O7R?usp=sharing"
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Home = () => {
  return (
    <div className="home-container">
      <div className="profile">
        <h2 className="title">I am a Web Developer</h2>
        <p className="text">
          Hi, I'm Pankaj Chadda, a passionate and aspiring web developer eager
          to create innovative and user-friendly web experiences. .
        </p>
        <div className="resume">
          <button onClick={handleDownload} className="resume-btn">
            Resume
          </button>
        </div>
      </div>
      <div className="hero-img">
        <img src={HeroImage} alt="profile-pic" />
      </div>
    </div>
  );
};

export default Home;
