import React, { Component } from "react";
class CompB extends Component {
  render() {
    return (
      <>
        <h1>Class Component B</h1>
        <hr />
        <h2>{this.props.name}</h2>
        <h2>{this.props.profession}</h2>
        <h2>{this.props.salary}</h2>
      </>
    );
  }
}

export default CompB;
