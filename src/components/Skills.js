import React from 'react';
import './Skills.css';
import htmlImg from '../Assets/html.png';
import cssImg from '../Assets/css.png';
import reactImg from '../Assets/react.png';
import jsImg from '../Assets/js.png';
import bootstrapImg from '../Assets/bootstrap.png';
import nodejsImg from '../Assets/nodejs.png';
import pythonImg from '../Assets/python.png';
import javaImg from '../Assets/java.png';
import csharpImg from '../Assets/csharp.png';
import mysqlImg from '../Assets/mysql.png';
import sqlImg from '../Assets/sql.png';
import mongodbImg from '../Assets/mongodb.png';
import oracleImg from '../Assets/oracle.png';
import androidImg from '../Assets/android.png';;

const skills = [
  { name: 'HTML', imgSrc: htmlImg },
  { name: 'CSS', imgSrc: cssImg },
  { name: 'React', imgSrc: reactImg },
  { name: 'JavaScript', imgSrc: jsImg },
  { name: 'Bootstrap', imgSrc: bootstrapImg },
  { name: 'Node.js', imgSrc: nodejsImg },
  { name: 'Python', imgSrc: pythonImg },
  { name: 'Java', imgSrc: javaImg },
  { name: 'C#', imgSrc: csharpImg },
  { name: 'MySQL', imgSrc: mysqlImg },
  { name: 'SQL', imgSrc: sqlImg },
  { name: 'MongoDB', imgSrc: mongodbImg },
  { name: 'Oracle', imgSrc: oracleImg },
  { name: 'Android', imgSrc: androidImg },

];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.imgSrc} alt={skill.name} className="skill-img" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
