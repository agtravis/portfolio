import React, { useState } from 'react';
import ContainerHeader from '../../components/ContainerHeader';
import './style.css';

function Contact() {
  const [contactFormContents, setContactFormContents] = useState({
    nameContents: `name goes here`,
    emailContents: `email goes here`,
    messageContents: `message goes here`,
    mailSent: false,
    error: null,
  });
  const submitContact = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isNamed;
    let isEmailed;
    let isMessaged;

    name.style.border = '';
    email.style.border = '';
    message.style.border = '';
    if (name.value !== '') {
      isNamed = true;
    } else {
      isNamed = false;
      name.focus();
      name.style.border = '1px solid red';
    }
    if (email.value !== '') {
      if (email.value.indexOf('@') !== -1) {
        isEmailed = true;
      } else {
        isEmailed = false;
        email.focus();
        email.style.border = '1px solid red';
      }
    } else {
      isEmailed = false;
      email.focus();
      email.style.border = '1px solid red';
    }
    if (message.value !== '') {
      isMessaged = true;
    } else {
      isMessaged = false;
      message.focus();
      message.style.border = '1px solid red';
    }
    if (isNamed && isEmailed && isMessaged) {
      const templateId = 'test';
      sendFeedback(templateId, contactFormContents);
    }
  };

  const sendFeedback = (templateId, contactFormContents) => {
    window.emailjs
      .send('gmail', templateId, contactFormContents)
      .then((res) => {
        setContactFormContents({ ...contactFormContents, mailSent: true });
      })
      .catch((error) => {
        setContactFormContents({ ...contactFormContents, error: error });
        console.error(error);
      });
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
        <form name="contact_form" action="#" id="contact-form">
          <p className="input">Name</p>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="1"
            maxLength="50"
            value={contactFormContents.name}
            onChange={(event) =>
              setContactFormContents({
                ...contactFormContents,
                nameContents: event.target.value,
              })
            }
          />
          <p className="input">Email</p>
          <input
            type="email"
            id="email"
            name="email"
            required
            minLength="1"
            maxLength="50"
            value={contactFormContents.email}
            onChange={(event) =>
              setContactFormContents({
                ...contactFormContents,
                emailContents: event.target.value,
              })
            }
          />
          <p className="input">Message</p>
          <textarea
            id="message"
            name="message"
            required
            rows="10"
            value={contactFormContents.message}
            onChange={(event) =>
              setContactFormContents({
                ...contactFormContents,
                messageContents: event.target.value,
              })
            }
          ></textarea>
          <p id="submit" onClick={submitContact}>
            Submit
          </p>
          {contactFormContents.mailSent && (
            <div>{`Thank you for contacting me!`}</div>
          )}
          {!contactFormContents.mailSent && (
            <div>{contactFormContents.error}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
