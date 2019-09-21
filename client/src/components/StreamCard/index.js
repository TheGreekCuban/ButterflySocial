import React from "react";
import { addBtnContainer, addBtn } from "../addBtn";

 
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
    <div className="col s12 m6" key={props.id}>
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{props.name}</span>
        <p>{props.date}</p>
      </div>
      <button className="btn-floating waves-effect halfway-fab waves-light red"><i data-value={props.id} className="material-icons"></i></button>
    </div>
    </div> 
  )
}