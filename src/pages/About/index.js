import React from 'react';
import ContainerHeader from '../../components/ContainerHeader';
import './style.css';

function About() {
  return (
    <div>
      <ContainerHeader title="A little about myself..." />
      <div id="main-content-contents">
        <img id="profile-pic" src="assets/images/me1.jpg" alt="myself" />

        <article id="about-me">
          <p>
            Originally born and raised in Brighton on the south coast of the
            United Kingdom, I spent my teenage and early vicenarian years
            involved in the local music scene. Success came in the form of a
            record deal with Epitaph Records, and after travelling to the United
            States my life took an unexpected turn when I met my future wife and
            decided to stick around.
          </p>
          <p>
            As a professional musician I naturally turned back to the industry
            that had paid my rent for the last half-decade and became a
            restaurant general manager in my adopted country. Another few years
            flew by and it was time to start investing in a real future for my
            family – in the field of computers. Having always had a flair for
            utilizing them in music production, office management, and
            organizing everything I own, programming them presented itself as an
            exciting way to turn a skillset and hobby into a career: I enrolled
            in the University of Washington Professional and Continuing
            Education program for full-stack web development and computer
            coding.
          </p>
          <p>
            Unable to live in the present I am fascinated with both history and
            science-fiction, and spend most of my time reading or consuming as
            much pop-culture as I can, across any platform or media type. My
            wife and I enjoy spending time together at home and over-seas,
            exploring new restaurants and recipes, and playing with our cats:
            Bruce Springsteen and Coco.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
