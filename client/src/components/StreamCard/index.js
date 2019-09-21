import React from "react";
import { Card, Col, CardTitle } from 'react-materialize';
 
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
    <div className="col s12 m6" key={props.id}>
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{props.name}</span>
        <p>{props.date}</p>
      </div>
      <a className="btn-floating waves-effect halfway-fab waves-light red"><i data-value={props.id} onClick={props.saveFunction} className="material-icons"></i></a>
    </div>
    </div> 
  )
}

/*{    <Col m={7} s={12}>
      <Card horizontal header={<CardTitle key={props.id}></CardTitle>} actions={[<a href='#'>Add To Your Streams</a>]}>
        <h1>{props.id}</h1>
        <h2>{props.date}</h2>
      </Card>
    </Col>
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
*/