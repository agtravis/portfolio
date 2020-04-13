import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer>
      <div id="contact-links-container-footer">
        <ul id="contact-links-footer">
          <li>
            <a
              href="https://github.com/agtravis/alexander-george-travis-resume/blob/master/alexander-george-travis-resume.pdf"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </li>
          <li>|</li>
          <li>
            <a
              href="https://github.com/agtravis"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>|</li>
          <li>
            <a
              href="https://www.linkedin.com/in/alexander-george-travis/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div id="email-phone">
        <ul>
          <li>agtravis85@gmail.com</li>
          <li>|</li>
          <li>(206) 465-5911</li>
        </ul>
      </div>
      <p>Copyright Alexander George Travis 2019 ©</p>
    </footer>
  );
}

export default Footer;
