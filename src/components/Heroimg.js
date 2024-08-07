import "./Heroimg.css";
import React from 'react';
import image from "../Assets/background.jpg";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="back-img" src={image} alt="Background" />
      </div>
      <div className="content">
        <h1>
          Hi, I'm Arshiya
          <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
        </h1>
        <h2 className="typing-text">
          Frontend Developer & Android Enthusiast
        </h2>
        <div>
          <a href="#projects-my" className="btn">Projects</a>
          <a href="#contact-form" className="btn-light">Contact</a>
        </div>
      </div>
    </div>
  );
}
export default Heroimg;
