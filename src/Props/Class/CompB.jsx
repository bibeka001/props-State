import React, { Component } from "react";
export class CompB extends Component {
  render() {
    return (
      <>
        <h1>Class Component B</h1>
        <hr />
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.qualification}</h1>
        <h1>{this.props.sname}</h1>


      </>
    );
  }
}

export default CompB;
