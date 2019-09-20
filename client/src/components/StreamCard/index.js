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
  console.log("PROPS: ", props)
  return(
    <Col m={7} s={12}>
      <Card horizontal header={<CardTitle key={props.id}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
        <h1>{props.id}</h1>
        <h2>{props.date}</h2>
      </Card>
    </Col>
  )
}

/*{ <div className="col s12 m6" key={props.id}>
<div className="card blue-grey darken-1">
  <div className="card-content white-text">
    <span className="card-title">{props.name}</span>
    <p>{props.date}</p>
  </div>
  <a className="btn-floating waves-effect halfway-fab waves-light red"><i data-value={props.id} onClick={props.saveFunction} className="material-icons"></i></a>
</div>
</div> }*/