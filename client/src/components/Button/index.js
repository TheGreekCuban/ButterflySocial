import React from "react";

export function ButtonContainer({ children }) {
  return <div>{children}</div>;
}

export function Button(props) {
  return <button>{props.streamName}</button>;
}
