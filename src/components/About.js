import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <h2>let me introduce myself</h2>
      <div className="about-content">
       <p>
          Hello, I'm <span className="highlight">Arshiya</span>. I hold a **Master’s degree from Parul University**, building upon my foundation as a Bachelor of Computer Applications (BCA) graduate from BKMNU University (2021-2024). 
        </p>
        <p>
          During my academic journey, I completed various projects that strengthened my technical expertise and problem-solving abilities. My experience with technologies like React.js, Bootstrap, and MySQL has allowed me to build dynamic and responsive web applications.
        </p>
        <p>
          I am eager to bring my enthusiasm and skills to a professional environment where I can contribute to innovative projects and grow as a developer. In my free time, I enjoy exploring new technologies, working on personal projects, and enhancing my coding skills.
        </p>
        <p>
          I am excited to embark on my career in frontend development and am looking forward to the opportunities and challenges that lie ahead.
        </p>
      </div>
    </section>
  );
};

export default About;
