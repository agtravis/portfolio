import React from 'react';
import './style.css';

function ContainerHeader(props) {
  return (
    <div>
      <div className="container-header">
        <h3 className="container-header-title">({props.title}) =></h3>
        <div>{props.contactDetails}</div>
      </div>
      <p>{props.subtitle}</p>
      {props.instructions ? <p>{props.instructions}</p> : null}
    </div>
  );
}

export default ContainerHeader;
