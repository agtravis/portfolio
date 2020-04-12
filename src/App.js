import React, { useContext } from 'react';
import PortfolioContext from './context/PortfolioContext';
import Projects from './components/Projects/index';

function App() {
  const { portfolio } = useContext(PortfolioContext);
  console.log(`app.js`);
  console.log(portfolio);

  return (
    <PortfolioContext.Provider value={portfolio}>
      <Projects />
    </PortfolioContext.Provider>
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
