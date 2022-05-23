import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        PokéPrices
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-buttons"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav-buttons">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Search <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/profile">My Profile</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/packsim">Open a Pack</a>
            </li>
          </ul>
      </div>

      <a id="nav-login-button" className="btn btn-primary" href="/login">Login</a>
    </nav>
  );
};

export default Navbar;
