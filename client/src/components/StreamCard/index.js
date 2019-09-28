import React from "react";
import './style.css';
 
export function StreamCard({children}) {
  return (
    <div className="cardBody">
    {children}
  </div>
  )
}

export function StreamCardItem(props) {
  console.log("PROPS: ", props.name)
  console.log("ID: ", props.id)
  console.log(props.addUserToStream)
  return(
    <div className="card bg-secondary" style={{margin:'10px'}} key={props.id}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="streamDescription"><p>{props.description}</p></div>
        <button className="btn btn-primary cardButton" 
          data-streamid={props.id} 
          data-userid={props.userID} 
          onClick={props.saveFunction} 
          href='#'>Subscribe</button>
      </div>
    </div>
  );
}
