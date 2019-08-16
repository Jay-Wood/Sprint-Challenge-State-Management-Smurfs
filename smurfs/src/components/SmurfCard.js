import React from "react";

const Smurf = props => {
    return (
      <div className="smurf-card">      
        <p>Name: {props.name}</p>
        <p>Height: {props.height}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  };
  
  
  export default Smurf;