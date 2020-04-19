import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import ContainerHeader from '../../components/ContainerHeader';

function Home() {
  return (
    <div>
      <ContainerHeader
        title="Welcome to my portfolio!"
        subtitle={`My comfort zones: React & JSX, Tacos, JavaScript, Cats, MSSQL/MySQL & Sequelize, Sci-Fi, Node.JS, Cartoons, Express, History, Handlebars, Retro Video Games, MongoDB & Mongoose...`}
      />
      <p
        className="code"
        style={{
          marginRight: '2em',
          textAlign: 'right',
          marginBottom: '0',
        }}
      >{`{`}</p>
      <div id="function">
        <Link to="/about">
          <p className="function-block main-link" style={{ fontSize: '1.8em' }}>
            About Me
          </p>
        </Link>
        <Link to="projectlist">
          <p className="function-block main-link" style={{ fontSize: '1.8em' }}>
            My Portfolio
          </p>
        </Link>
        <Link to="contact">
          <p className="function-block main-link" style={{ fontSize: '1.8em' }}>
            Contact Me
          </p>
        </Link>
      </div>
      <p
        className="code"
        style={{ marginLeft: '2em', marginTop: '0' }}
      >{`}`}</p>
    </div>
  );
}

export default Home;
