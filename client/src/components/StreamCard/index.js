import React from "react";
// import { Card, Col, CardTitle } from 'react-materialize';
import API from "../../utils/API";
//import { addBtnContainer, addBtn } from "../addBtn";

 
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
        <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
        <button className="btn btn-primary" data-streamID={props.id} data-userID={props.userID} onClick={props.saveFunction} href='#'>Subscribe</button>
      </div>
    </div>
  )
}
