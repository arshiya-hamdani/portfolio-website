import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Designed and Developed by Arshiya Hamdani</p>
                <ul className="socials">
                    <li><a href="https://github.com/arshiya-hamdani" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>

                    <li><a href="https://www.linkedin.com/in/arshiya-hamdani-239850311/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>

                    <li><a href="mailto:arshiyahamdani@gmail.com"><i className="fas fa-envelope"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p> Copyright &copy; 2024 |AH</p>
            </div>
        </footer>
    );
}

export default Footer;
