import React, { useContext } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import PortfolioContext from './context/PortfolioContext';
import ProjectList from './components/ProjectList';
import About from './components/About';

function App() {
  const { portfolio } = useContext(PortfolioContext);
  console.log(`app.js`);
  console.log(portfolio);

  return (
    <Router>
      <h1>Welcome!</h1>
      <Link to="/projectlist">Portfolio</Link>
      <Link to="/about">About</Link>
      <PortfolioContext.Provider value={portfolio}>
        <Route exact path="/projectlist" component={ProjectList} />
        <Route exact path="/about" component={About} />
      </PortfolioContext.Provider>
    </Router>
  );
}

export default App;

// function List() {
//   const { employees } = useContext(EmployeeContext);
//   return (
//     <ul className="list-group">
//       {employees.map((employee) => (
//         <li key={employee.login.uuid} className="list-group-item">
//           <div className="pic">
//             <img
//               src={employee.picture.thumbnail}
//               alt={`${employee.name.first} ${employee.name.last}`}
//               title={`${employee.name.first} ${employee.name.last}`}
//             />
//           </div>
//           <div className="info">
//             <p>{`${employee.name.first} ${employee.name.last}`}</p>
//           </div>
//           <div className="info">
//             <p>{employee.cell}</p>
//           </div>
//           <div className="email">
//             <p>{employee.email}</p>
//           </div>
//           <div className="info">
//             <p>{new Date(employee.dob.date).toLocaleDateString()}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default List;
