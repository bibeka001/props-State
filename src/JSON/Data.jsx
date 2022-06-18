import React, { Component } from "react";
import employee from "./eData";
class Data extends Component {
  constructor(props) {
    super(props);
    console.log("First");
  }
  render() {
    console.log("Second");
    return (
      <>
        <h1>Hello Data</h1>

        <pre>{JSON.stringify(employee)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <table className="table table-hover">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((employee) => {
                    return (
                      <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.first_name}</td>
                        <td>{employee.last_name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.gender}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Data;
