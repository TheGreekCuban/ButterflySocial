import React from "react";
import './style.css'

function Wrapper(props) {
  return <div className={`wrapper animated ${props.animation} faster`} >{props.children}</div>;
}

export default Wrapper;