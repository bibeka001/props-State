import React, { Component } from "react";
class Counter extends Component {
  state = {
    qty: 1,
  };
  incHandler = () => {
    this.setState({ qty: this.state.qty + 2 });
  };
  decHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };
  render() {
    return (
      <>
        <h1>Counter Component</h1>
        <h2>{this.state.qty}</h2>
        <button onClick={this.incHandler}>Inc</button>
        <button onClick={this.decHandler}>Dec</button>
      </>
    );
  }
}

export default Counter;
