import React from 'react';
import Navbar from './Navbar';
import Heroimg from './Heroimg';
import About from './About';
import Skills from './Skills';
import ContactForm from './ContactForm';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Heroimg />
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects-my">
                <Projects />
            </div>
            <div id="contact-form">
                <ContactForm />
            </div>

        </div>
    );
};

export default Home;
