import React, { Component } from "react";
import { Link } from "react-router-dom";
class AxiosNavbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-success navbar-expand-lg">
          <Link to="/home" className="navbar-brand">
            React Router Dom For AXIOS
          </Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default AxiosNavbar;
