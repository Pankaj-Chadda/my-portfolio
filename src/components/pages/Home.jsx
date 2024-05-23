import React from "react";
import "./Home.css";
import HeroImage from "../../assets/heroImage.jpg";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Replace with the path to your resume file
  link.download = "resume.pdf"; // Replace with your desired file name
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
          I have 1.5 years of experience working in web development projects. I
          love to work on web application using technologies like React and
          Django .
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
