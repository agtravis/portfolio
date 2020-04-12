import React from 'react';
import './style.css';

function Home() {
  return (
    <div id="code-wrapper">
      <p className="code">{`(George Travis) => {`}</p>
      <div id="function">
        <p className="function-block">About Me</p>
        <p className="function-block">My Portfolio</p>
        <p className="function-block">Contact Me</p>
      </div>
      <p className="code">{`}`}</p>
    </div>
  );
}

export default Home;
