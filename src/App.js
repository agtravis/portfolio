import React, { useContext } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import PortfolioContext from './context/PortfolioContext';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import NavBar from './components/Navbar';
import Wrapper from './components/Wrapper';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { portfolio } = useContext(PortfolioContext);

  return (
    <PortfolioContext.Provider value={portfolio}>
      <Router>
        <div className="react-body">
          <Header />
          <NavBar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} title="About Me" />
            <Route
              exact
              path="/projectlist"
              component={ProjectList}
              title="Portfolio"
            />
            <Route
              exact
              path="/contact"
              component={Contact}
              title="Contact Me"
            />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </PortfolioContext.Provider>
  );
}

export default App;
