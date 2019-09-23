import React from "react";
// import { Card, Col, CardTitle } from 'react-materialize';
import API from "../../utils/API";

export function StreamCard({ children }) {
  return <div className="row">{children}</div>;
}

export function StreamCardItem(props) {
  console.log("PROPS: ", props);
  return (
    <div
      className="card bg-secondary"
      style={{ margin: "10px" }}
      key={props.id}
    >
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
        <button
          className="btn btn-primary"
          data-streamID={props.id}
          data-userID={props.userID}
          onClick={props.saveFunction}
          href="#"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
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
