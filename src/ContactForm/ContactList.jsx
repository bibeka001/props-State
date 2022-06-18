import React, { Component } from "react";

class ContactList extends Component {
  selectContact = (contact) => {
    // console.log("Test Case for Onclick");
    console.log(contact);
    this.props.selContact(contact);
  };
  render() {
    return (
      <div>
        <h1>Contact List Component</h1>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead className=" bg-primary text-white">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contacts.map((contact) => {
                    return (
                      <tr
                        key={contact.login.uuid}
                        onClick={this.selectContact.bind(this, contact)}
                      >
                        {/* <td>{contact.login.uuid}</td> */}
                        <td>{contact.login.uuid.substring(34, 36)}</td>
                        <td>{contact.name.first}</td>
                        <td>{contact.location.city}</td>
                        <td>{contact.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
