import React from "react";
// import { Card, Col, CardTitle } from 'react-materialize';
import API from "../../utils/API";
 
export function StreamCard({children}) {
  return (
    <div className="row">
    {children}
  </div>
  )
}
 
export function StreamCardItem(props) {
  console.log("PROPS: ", props.title)
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

  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>