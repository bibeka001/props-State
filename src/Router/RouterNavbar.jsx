import { Link } from "react-router-dom";
const RouterNavbar = () => {
  return (
    <nav className="navbar  navbar-darg bg-dark navbar-expand-lg">
      <Link to="/home" className="navbar-brand ">
        React Form Handling Example
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <h1>Hello Navbar</h1>
    </nav>
  );
};

export default RouterNavbar;
