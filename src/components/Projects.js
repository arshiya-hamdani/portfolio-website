import './Projects.css';
import screenshottravel from '../Assets/travel-screenshot.png';
import screenshotcontact from '../Assets/contact-screenshot.png';
import screenshotgame from '../Assets/screenshotgame.png';
import screenshot from '../Assets/portfolioscreenshot.png';
import ToDo from '../Assets/todo.png';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  const projects = [
    {
      name: 'Travel Website',
      description: 'A React-based website for travel-related content.',
      image: screenshottravel,
      link: 'https://github.com/arshiya-hamdani/travel-website',
      demo: 'https://outrips-travel-website.netlify.app/', 
    },
    {
      name: 'Contact App',
      description: 'An Android application for managing contacts.',
      image: screenshotcontact,
      link: 'https://github.com/arshiya-hamdani/ContactApp',
      
    },
    {
      name: 'Tic Tac Toe',
      description: 'A simple Tic Tac Toe game implemented in JavaScript.',
      image: screenshotgame,
      link: 'https://github.com/arshiya-hamdani/tic-tac-toe',
      demo: 'https://tic-tac-toegameinreact.netlify.app/',
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website implemented using React framework.',
      image: screenshot,
       link: 'https://github.com/arshiya-hamdani/portfolio-website',
       demo: 'https://portfoliio-site.netlify.app/', 
    },
    {
      name: 'ToDo List App',
      description: 'A React To-Do List app for easy task management and organization.',
      image: ToDo,
      link: 'https://github.com/arshiya-hamdani/ToDo-App',
      demo: 'https://js-todo-listapp.netlify.app/', 
    },
  ];

  return (
    <section id="project">
      <div className="project">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={`${project.name} image`} />
              <div className="project-card-content">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
                    </a>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
