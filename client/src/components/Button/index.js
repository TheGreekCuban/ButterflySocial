import React from "react";
import "./button.css";

export function ButtonContainer({ children }) {
  return <div className="inline-div">{children}</div>;
}

export function Button(props) {
  return (
    <div className="inline-div">
      <button className="button" buttonid={props.id}>
        {props.name}
      </button>
      <button onClick={props.onClick} className="delete-link" href="#">
        {props.linkName}
      </button>
    </div>
  );
}
