import React, { useContext } from 'react';
import PortfolioContext from './context/PortfolioContext';

function App() {
  const { portfolio } = useContext(PortfolioContext);

  return (
    <ul>
      {portfolio.map((project, index) => (
        <li key={index}>
          {project.title}
          <img src={project.screenshot} />
        </li>
      ))}
    </ul>
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
