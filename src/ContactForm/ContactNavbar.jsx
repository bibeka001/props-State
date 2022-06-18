import React, { Component } from "react";
import {Link} from "react-router-dom"
class ContactNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-warning navbar-expand-lg">
        <h1>Hello Contact Navbar</h1>
        <Link to="/index" className="navbar-brand">React Contact Index App</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-item">
        <Link to="/contact" className="nav-link">React Contact App</Link>
                    
                </li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default ContactNavbar;
