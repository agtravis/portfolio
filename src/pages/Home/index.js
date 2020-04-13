import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import ContainerHeader from '../../components/ContainerHeader';

function Home() {
  return (
    <div>
      <ContainerHeader title="Welcome to my portfolio!" />
      <h4 className="subtitle">Click the links below to learn about me</h4>
      <p
        className="code"
        style={{ marginRight: '2em', textAlign: 'right' }}
      >{`{`}</p>
      <div id="function">
        <Link to="/about">
          <p className="function-block" style={{ fontSize: '1.8em' }}>
            About Me
          </p>
        </Link>
        <Link to="projectlist">
          <p className="function-block" style={{ fontSize: '1.8em' }}>
            My Portfolio
          </p>
        </Link>
        <Link to="contact">
          <p className="function-block" style={{ fontSize: '1.8em' }}>
            Contact Me
          </p>
        </Link>
      </div>
      <p className="code" style={{ marginLeft: '2em' }}>{`}`}</p>
    </div>
  );
}

export default Home;
