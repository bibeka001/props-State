import React from "react";
import SetState from "../State/SetState";
const FunctionMessage = () => {
  let  state = {
    wish: "hello",
  };
   const wishHandler = () => {
    SetState({
        wish:wish
    });
  };
  return (
    <>
      <h1>FunctionMessage Component</h1>
      <h2>Hello{wish}</h2>
      <button onClick={whandler.bind("Good Morning")}>GM</button>
      <button onClick={whandler.bind("Good Afternoon")}>GA</button>
      <button onClick={whandler.bind("Good Night")}>GN</button>
      <hr />
    </>
  );
};

export default FunctionMessage;
