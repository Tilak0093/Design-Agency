import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";


function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          {/* Logo on the left */}
          <a href="#" className="navbar-brand d-flex align-items-end ">
            <img
              src={logo}
              alt="Brand logo"
            />
          </a>


          {/* Toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links (right aligned) */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav align-items-center gap-4">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="ms-1"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Branding
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Marketing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>

              {/* Buttons */}
              <li className="nav-item">
                <button className=" btn-login">Login</button>
              </li>
              <li className="nav-item">
                <button className=" btn-register">Register</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;