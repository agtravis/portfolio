import React from 'react';
import ContainerHeader from '../../components/ContainerHeader';
import './style.css';

function Contact() {
  return (
    <div>
      <ContainerHeader
        title="Contact me"
        contactDetails={
          <div className="large-screen">
            <ul id="contact-links-contact">
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
        }
      />
    </div>
  );
}

export default Contact;
