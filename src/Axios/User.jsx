import React, { Component } from "react";
import Axios from "axios";
class User extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    console.log("DidMount");

    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data);
      })
      .catch(() => {});
  }
  render() {
    console.log("Render");

    return (
      <div>
        <div className="container">
          <div className="row">
            <h1>Hello Axios component of User</h1>
            <pre>{JSON.stringify(this.state.users)}</pre>
            {this.state.users.length > 0 ? (
              <>
                <div className="col-md-8">
                  <table   className="table table-hover">
                    <thead className="bg-dark text-white">
                      <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>City</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users.map((user) => {
                        return (
                          <>
                            <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.address.city}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default User;
