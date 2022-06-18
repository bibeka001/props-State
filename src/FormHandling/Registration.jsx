import React, { Component } from "react";

export class Registration extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    mobile: "",
    termsconditions: true,
  };

  updateHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="User Name"
                      onChange={this.updateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email ID"
                      onChange={this.updateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.updateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile No"
                      onChange={this.updateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input type="checkbox" /> Please Accept Terms & Conditions
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
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

export default Registration;
