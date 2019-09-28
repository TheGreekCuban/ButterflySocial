import React from "react";
import API from "../../utils/API";
 
export function StreamCard({children}) {
  return (
    <div className="row">
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
        <button className="btn btn-primary" data-streamid={props.id} data-userid={props.userID} onClick={props.saveFunction} href='#'>Subscribe</button>
      </div>
    </div>
  );
}
