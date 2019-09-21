import React from "react";
//import "./addBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function addBtnContainer({ children }) {
    return <div>{children}</div>;
  }


export function addBtn(props) {
  return (
    <span className="addBtn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

