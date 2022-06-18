import React, { Component } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContact: {},
    };
  }
  getSelectedContact = (contact) => {
    console.log("Test Case for Contact App");
    // console.log(contact);
    this.setState({ selectedContact: contact });
  };

  componentDidMount() {
    let url =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(url)
      .then((response) => {
        this.setState({
          contacts: response.data,
        });
      })
      .catch(() => {});
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="col-md-8">
            {this.state.contacts.length > 0 ? (
              <>
                <ContactList
                  contacts={this.state.contacts}
                  selContact={this.getSelectedContact}
                />
              </>
            ) : null}
          </div>
          <div className="col-md-4">
            {Object.keys(this.state.selectedContact).length > 0 ? (
              <>
                <ContactDetails selectedData={this.state.selectedContact} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
