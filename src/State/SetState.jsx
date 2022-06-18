import React, { Component } from "react";
class SetState extends Component {
  state = {
    message: "Hello",
  };
  msgHandler = () => {
    console.log("I am clicked");
    this.setState({ message: "It's a beautiful day." });
  };
  wishHandler = () => {
    console.log("I'm also clicked");
    this.setState({ message: "It's a sunny day" });
  };
  wish1Handler = () => {
    console.log("I'm again clicked");
    this.setState({ message: "It's dinner time" });
  };
  render() {
    return (
      <>
        <h1>Set State Component</h1>
        <hr />
        <h2>Message: {this.state.message}</h2>
        <button className="btn btn-success m-5" onClick={this.msgHandler}>GM</button>
        <button className="btn btn-danger m-5" onClick={this.wishHandler}>GA</button>
        <button className="btn btn-warning m-5" onClick={this.wish1Handler}>GN</button>
      </>
    );
  }
}

export default SetState;
