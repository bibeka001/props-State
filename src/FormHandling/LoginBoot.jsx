import React, { Component } from "react";

class LoginBoot extends Component {
  state = {
    email: "",
    password: "",
  };
  //   IN CASE OF MULTIPLE INPUT FIELD WE CAN DO THIS KIND OF HANDLER COMMON FOR ALL
  updateHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //   emailHandler = (e) => {
  //     this.setState({ email: e.target.value });
  //   };
  //   passwordHandler = (e) => {
  //     this.setState({ password: e.target.value });
  //   };
  submitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };
  render() {
    return (
      <div className="container mt-5">
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Emailid"
                      onChange={this.updateHandler}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                      onChange={this.updateHandler}
                      name="password"
                    />
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-success" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBoot;
