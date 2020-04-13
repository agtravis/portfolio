import React from 'react';
import ContainerHeader from '../../components/ContainerHeader';
import './style.css';

function Contact() {
  const submitContact = () => {
    const contactForm = document.getElementById('contact-form');
    const userName = document.getElementById('username');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isNamed;
    let isEmailed;
    let isMessaged;

    userName.style.border = '';
    email.style.border = '';
    message.style.border = '';
    if (userName.value !== '') {
      isNamed = true;
    } else {
      isNamed = false;
      // alert('Please enter your name');
      userName.focus();
      userName.style.border = '1px solid red';
    }
    if (email.value !== '') {
      if (email.value.indexOf('@') !== -1) {
        isEmailed = true;
      } else {
        isEmailed = false;
        // alert('Please make sure you enter a valid email address');
        email.focus();
        email.style.border = '1px solid red';
      }
    } else {
      isEmailed = false;
      // alert('Please enter your email');
      email.focus();
      email.style.border = '1px solid red';
    }
    if (message.value !== '') {
      isMessaged = true;
    } else {
      isMessaged = false;
      // alert('Please enter a message');
      message.focus();
      message.style.border = '1px solid red';
    }
    if (isNamed && isEmailed && isMessaged) {
      contactForm.submit();
    }
  };

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
      <div id="main-content-contents">
        <form
          id="contact-form"
          // onSubmit={(event) => {
          //   // event.preventDefault();
          //   submitContact();
          // }}
        >
          <p className="input">Name</p>
          <input
            type="text"
            id="username"
            name="username"
            required
            minLength="1"
            maxLength="50"
          />
          <p className="input">Email</p>
          <input
            type="email"
            id="email"
            name="email"
            required
            minLength="1"
            maxLength="50"
          />
          <p className="input">Message</p>
          <textarea id="message" name="message" required rows="10"></textarea>
          {/* <input id="submit" type="submit" value="Submit" /> */}
          <p id="submit" onClick={submitContact}>
            Submit
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
