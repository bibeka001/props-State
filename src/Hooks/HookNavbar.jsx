import React, { Component } from "react";
import { Link } from "react-router-dom";
class HookNavbar extends Component {
  render() {
    return (
      <>
        <h1>React Navbar Component</h1>
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/index" className="navbar-brand">
            React Hooks Example
          </Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/useState" className="nav-link">
                  useState Example
                </Link>
                <Link to="/counter" className="nav-link">
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>HookNavbar
      </>
    );
  }
}

export default HookNavbar;
