import React from "react";
import "./button.css"

export function ButtonContainer({ children }) {
  return (
    <div className="inline-div">{children}</div>
  );
}


export function Button(props) {
  return (
    <div className="inline-div">
      <button className="button" buttonid={props.id}>{props.name}</button>
      <a className="delete-link" href="#">Remove</a>
    </div>
  

  )
}
