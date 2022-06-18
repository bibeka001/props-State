import React, { Component } from "react";
class Form extends Component {
  state = {
    email: "",
    password: "",
  };
  emailHandler = (e) => {
    // console.log("Test case Email");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    this.setState({ email: e.target.value });
  };
  passwordHandler = (e) => {
    console.log("Test case Password");
    this.setState({ password: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  //   loginHandler = () => {};

  render() {
    return (
      <>
        <h1>Login Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="">Email</label>
          <input type="text" onChange={this.emailHandler} />
          <br />
          <label htmlFor="">Password</label>
          <input type="password" onChange={this.passwordHandler} />
          <br />
          {/* here Login Button or input tag with SUBMIT type */}
          {/* <button onClick={loginHandler}>Login</button> */}
          <input type="submit" value="Login" />
        </form>
      </>
    );
  }
}

export default Form;
