import React from 'react';
import './style.css';

function ContainerHeader(props) {
  return (
    <div className="container-header">
      <h2 className="container-header-title">{props.title}</h2>
      <div>{props.contactDetails}</div>
    </div>
  );
}

export default ContainerHeader;
