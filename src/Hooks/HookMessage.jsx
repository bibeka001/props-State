import React, {useState} from "react";

const HookMessage = () => {
  let message = "Hello";
  let [variable, rajnikant] = useState("I'm Cool")
  // let gmhandler = () => {
  //   rajnikant("Hey, Good Morning")
  // }
  return (
    <div>
      {/* <h1>Wish Message {JSON.stringify(variable)}</h1> */}
      <h1>Message: {variable}</h1>
      <button onClick={(gmhandler => {
        rajnikant("Hey Good Morning")
      })}>GM</button>
      <button onClick={(gaHandler) => {
        rajnikant("Hey Good Afternoon")
      }}>GA</button>
    </div>
  );
};

export default HookMessage;
