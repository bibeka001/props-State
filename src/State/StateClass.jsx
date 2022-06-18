import React, { Component } from "react";
class StateClass extends Component {
    message = "Hello";
     msgHandler = () => {
        console.log("I am clicked");
        this.message = "Hello, Good Morning"
        // console.log(this.message);
        this.forceUpdate();
    }
  render() {

    return (
      <>
        <h1>State Class Component</h1>
        <h2>Message: {this.message}</h2>
        <button onClick={this.msgHandler}>Click Me</button>
      </>
    );
  }
}

export default StateClass;
