import React, { Component } from "react";
class ClassMessage extends Component {
  state = {
    msg: "hello",
  };
  wishHandler = (msg) => {
    this.setState({ msg: msg });
  };
  render() {
    return (
      <>
        <h1>Message Component {this.state.msg}</h1>
        <button onClick={this.wishHandler.bind(this, "Good Morning")}>
          GM
        </button>
        <button onClick={this.wishHandler.bind(this, "Good Afternoon")}>
          GA
        </button>
        <button
          onClick={() => {
            this.setState({ msg: "Good Night" });
          }}
        >
          GD
        </button>
      </>
    );
  }
}

export default ClassMessage;
