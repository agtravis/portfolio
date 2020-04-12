import React, { useContext } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import PortfolioContext from './context/PortfolioContext';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NavBar from './components/Navbar';

function App() {
  const { portfolio } = useContext(PortfolioContext);

  return (
    <PortfolioContext.Provider value={portfolio}>
      <Router>
        <Header />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projectlist" component={ProjectList} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </PortfolioContext.Provider>
  );
}

export default App;
